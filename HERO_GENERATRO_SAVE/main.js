const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');
const isDew = process.env.NODE_ENV == "production";
const isMac = process.platform === "darwin";
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');
const fsPromises = fs.promises;
let mainWindow;
let filesNumber;
let progressStatus = 0;

//Create the main window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Hero image generator',
    width: isDew ? 1500 : 1000,
    height: 660,
    icon: 'icon.ico',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  //Open Devtools if in dev env
  if (isDew) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
};

//App is ready
app.whenReady().then(() => {
  createMainWindow();

  //impelment menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  })

});

//Menu template
const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
        accellerator: 'Cmd+W',
      }
    ]
  }
]

// Remove mainWindow from memory close
//mainWindow.on('closed', () => (mainWindow = null));

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});


//GENERATING IMAGES
ipcMain.on('startGenerating', (e, options) => {
  console.log(options);
  generateImages(options);
})


async function generateImages({ masterImagePath, directoryPath, outPutParameters, safeZoneData }) {
  await resizeAndConvertToPng(directoryPath, outPutParameters);

  // Trim all PNG files in the input directory
  const pngFiles = await fsPromises.readdir(directoryPath);
  const pngFilesToTrim = pngFiles.filter(file => path.extname(file).toLowerCase() === '.png'  && file.includes('_temp'));

  await Promise.all(pngFilesToTrim.map(async (file) => {
    const inputImagePath = path.join(directoryPath, file);
    await trimAndOverwriteImage(inputImagePath);
  }));

  // Continue with image merging
  const image1 = sharp(masterImagePath);
  await image1.resize(outPutParameters[0], outPutParameters[1]).toBuffer();



  const pngFilesAfterTrim = await fsPromises.readdir(directoryPath);

  await Promise.all(pngFilesAfterTrim.map(async (file) => {
    if (path.extname(file).toLowerCase() === '.png'  && file.includes('_temp')) {
      const inputImagePath = path.join(directoryPath, file);
      const image2 = sharp(inputImagePath);

      const canvasWidth = outPutParameters[0];
      const canvasHeight = outPutParameters[1];
      const canvas = sharp({ create: { width: canvasWidth, height: canvasHeight, channels: 4, background: 'white' } });

      const imageRatio = image2.options.width / image2.options.height;
      const centerX = safeZoneData[0] * canvasWidth;
      const centerY = safeZoneData[1] * canvasHeight;
      const currentWidth = safeZoneData[2] * outPutParameters[0];
      const currentHeight = safeZoneData[3] * outPutParameters[1];
      let newWidth;
      let newHeight;

      // Calculate resized dimensions based on available area
      if (image2.options.width > image2.options.height) {
        if (currentWidth / imageRatio < currentHeight) {
          newWidth = currentWidth;
          newHeight = currentWidth / imageRatio;
        } else {
          newHeight = currentHeight;
          newWidth = currentHeight * imageRatio;
        }
      } else if (image2.options.width < image2.options.height) {
        if (currentHeight * imageRatio < currentHeight) {
          newHeight = currentHeight;
          newWidth = currentHeight * imageRatio;
        } else {
          newWidth = currentWidth;
          newHeight = currentWidth / imageRatio;
        }
      }

      //ha a kivágott kép oldalaránya közel 1
      if (Math.abs(image2.options.width - image2.options.height) < 200) {
        if (currentHeight < currentWidth) {
          newHeight = currentHeight;
          newWidth = currentHeight * imageRatio;
        } else if (currentHeight > currentWidth) {
          newWidth = currentWidth;
          newHeight = currentWidth / imageRatio;
        }
      }



      //Make output folder
      const outputFolderPath = directoryPath+ '/hero images';
      try {
        if (!fs.existsSync(outputFolderPath)) {
          fs.mkdirSync(outputFolderPath);
        }
      } catch (err) {
        console.error(err);
      }

      // Merge images
      await canvas.composite([
        { input: await image2.resize(Math.floor(newWidth), Math.floor(newHeight)).toBuffer(), left: Math.floor(centerX-newWidth/2), top: Math.floor(centerY-newHeight/2) },
        { input: await image1.toBuffer(), left: 0, top: 0 }
      ]);

      const originalFileName = path.parse(file).name;
      const zeroNumber = countZeros(originalFileName);
      const outputFileName = file.substring(0, 16).slice(zeroNumber).replace(/-T.*/, '').split('_')[0].split('.')[0] + '.'+outPutParameters[2];
      const outputPath = path.join(outputFolderPath, outputFileName);
      
      // output images to files
      await canvas.toFile(outputPath,{ format: outPutParameters[2] },{ quality: outPutParameters[3]*10 });
      console.log(`Merged image saved as ${outputFileName}`);

      //open image folder
      shell.openPath(outputFolderPath);

      //Feedback message
      progressStatus = filesNumber;
      mainWindow.webContents.send('progressbar', progressStatus / filesNumber *100);
      progressStatus = 0;
      //stop button set back
      mainWindow.webContents.send('button');
    }
  }));

  function countZeros(file) {
    return file.match(/^0*/)[0].length;
  }

  // Cleanup: Delete all PNG files after merging
  
  await Promise.all(pngFilesAfterTrim.map(async (file) => {
    const filePath = path.join(directoryPath, file);
    if (path.extname(file).toLowerCase() === '.png' && file.includes('_temp')) {
      await fsPromises.unlink(filePath);
    }
  }));
  
}

async function resizeAndConvertToPng(directoryPath, outputParameters) {
  const files = await fsPromises.readdir(directoryPath);
  filesNumber = files.length;
  const imageFiles = files.filter(file =>
    ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif'].includes(path.extname(file).toLowerCase())
  );

  await Promise.all(imageFiles.map(async (file) => {
    const inputImagePath = path.join(directoryPath, file);
    const outputPngPath = path.join(directoryPath, path.parse(file).name + '_temp.png');

    await sharp(inputImagePath)
      .resize(...outputParameters)
      .png({ compressionLevel: 5, force: true, quality: 100 })
      .toFile(outputPngPath);

    console.log(`Resized and converted ${path.parse(file).name} to ${path.parse(file).name}.png`);
    progressStatus++;
      mainWindow.webContents.send('progressbar', progressStatus / filesNumber *100);
  }));
}



async function trimAndOverwriteImage(imagePath) {
  try {
    const image = sharp(imagePath);

    // Get image metadata and raw pixel data
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;

    // Find top, bottom, left, and right trims
    const { topTrim, bottomTrim, leftTrim, rightTrim } = findTrimBounds(data, width, height);

    // Calculate new dimensions after trimming
    const newWidth = width - leftTrim - rightTrim;
    const newHeight = height - topTrim - bottomTrim;

    // Check if there is anything to trim
    if (newWidth > 0 && newHeight > 0) {
      const tempFilePath = path.join(os.tmpdir(), `trimmed_${path.basename(imagePath)}`);

      // Extract the bounding box and save to a temporary file
      await sharp(imagePath)
        .extract({ left: leftTrim, top: topTrim, width: newWidth, height: newHeight })
        .toFile(tempFilePath);

      // Replace the original image with the trimmed image
      fs.copyFileSync(tempFilePath, imagePath);

      // Delete the temporary file
      fs.unlinkSync(tempFilePath);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}





function findTrimBounds(pixels, width, height) {
  let topTrim = 0;
  let bottomTrim = 0;
  let leftTrim = 0;
  let rightTrim = 0;

  // Find top trim (count consecutive white rows from top)
  while (topTrim < height && isRowWhite(pixels, width, topTrim)) {
    topTrim++;
  }

  // Find bottom trim (count consecutive white rows from bottom)
  while (bottomTrim < height && isRowWhite(pixels, width, height - 1 - bottomTrim)) {
    bottomTrim++;
  }

  // Find left trim (count consecutive white columns from left)
  while (leftTrim < width && isColumnWhite(pixels, width, height, leftTrim)) {
    leftTrim++;
  }

  // Find right trim (count consecutive white columns from right)
  while (rightTrim < width && isColumnWhite(pixels, width, height, width - 1 - rightTrim)) {
    rightTrim++;
  }

  //console.log(topTrim, bottomTrim, leftTrim, rightTrim);
  return { topTrim, bottomTrim, leftTrim, rightTrim };
}

function isRowWhite(pixels, width, rowIndex) {
  const startIndex = rowIndex * width * 4;
  const endIndex = startIndex + width * 4;
  for (let i = startIndex; i < endIndex; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (r !== 255 || g !== 255 || b !== 255 || a !== 255) {
      return false; // Found a non-white pixel
    }
  }
  return true; // All pixels in the row are white
}

function isColumnWhite(pixels, width, height, colIndex) {
  const startIndex = colIndex * 4;
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const pixelIndex = startIndex + rowIndex * width * 4;
    const r = pixels[pixelIndex];
    const g = pixels[pixelIndex + 1];
    const b = pixels[pixelIndex + 2];
    const a = pixels[pixelIndex + 3];
    if (r !== 255 || g !== 255 || b !== 255 || a !== 255) {
      return false; // Found a non-white pixel
    }
  }
  return true; // All pixels in the column are white
}






//Make .app extension from the project:
//npx electron-packager . --platform=darwin --arch=x64 --out=dist --overwrite