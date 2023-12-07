let rainbow = document.getElementById("rainbow");
let colorWrapper = document.getElementById("colorwheel-wrapper");
let wrapper = document.getElementById("wrapper");
let randomRed = document.getElementById("random-red");
let randomGreen = document.getElementById("random-green");
let randomBlue = document.getElementById("random-blue");
let randomPurple = document.getElementById("random-purple");
let randomYellow = document.getElementById("random-yellow");
let randomOrange = document.getElementById("random-orange");

//animations
rainbow.addEventListener("mouseover", function () {
    wrapper.style.gap = "40px";
    sleep(200).then(() => { rainbow.style.display = "none"; });
    wrapper.style.display = "flex";
    sleep(100).then(() => { randomRed.style.filter = "opacity(1)"; });
    sleep(150).then(() => { randomPurple.style.filter = "opacity(1)"; });
    sleep(200).then(() => { randomBlue.style.filter = "opacity(1)"; });
    sleep(250).then(() => { randomGreen.style.filter = "opacity(1)"; });
    sleep(300).then(() => { randomYellow.style.filter = "opacity(1)"; });
    sleep(350).then(() => { randomOrange.style.filter = "opacity(1)"; });
    sleep(550).then(() => { wrapper.style.borderColor = "white"; });
    sleep(550).then(() => {
        var elements = document.getElementsByClassName('color');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.borderColor = 'white';
        }
    })
})
colorWrapper.addEventListener("mouseleave", function () {
    wrapper.style.gap = "-0px";
    randomBlue.style.filter = "opacity(0)";
    randomGreen.style.filter = "opacity(0)";
    randomRed.style.filter = "opacity(0)";
    randomPurple.style.filter = "opacity(0)";
    randomYellow.style.filter = "opacity(0)";
    randomOrange.style.filter = "opacity(0)";
    wrapper.style.borderColor = "transparent";
    sleep(300).then(() => { wrapper.style.display = "none"; });
    sleep(300).then(() => { rainbow.style.display = "block"; });
    var elements = document.getElementsByClassName('color');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = 'transparent';
    }
})


//generate colors
randomRed.addEventListener("click", function () {
    hexa = RandomRed();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})

randomGreen.addEventListener("click", function () {
    hexa = RandomGreen();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})

randomBlue.addEventListener("click", function () {
    hexa = RandomBlue();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})
randomPurple.addEventListener("click", function () {
    hexa = RandomPurple();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})

randomYellow.addEventListener("click", function () {
    hexa = RandomYellow();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})

randomOrange.addEventListener("click", function () {
    hexa = RandomOrange();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    next.style.filter = "opacity(0)";

    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 1) {
        buttonExport.style.display = "block";
    } else {
        buttonExport.style.display = "none";
    }

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    }
})




function RandomRed() {
    let r = 255;
    let g = 0;
    let b = Math.round(Math.random() * (130))+0;
    return rgbToHex(r, g, b);
    //return ("rgb(" + r + "," + g + "," + b +")");
}

function RandomGreen() {
    let r = Math.round(Math.random() * (130))+0;
    let g = Math.round(Math.random() * (125))+130;
    let b = 0;
    return rgbToHex(r, g, b);
}

function RandomBlue() {
    let r = Math.round(Math.random() * (130))+0;
    let g = Math.round(Math.random() * (130))+0;
    let b = 255;
    return rgbToHex(r, g, b);
}

function RandomPurple() {
    let r = Math.round(Math.random() * (125))+130;
    let g = 0;
    let b = Math.round(Math.random() * (125))+130;
    return rgbToHex(r, g, b);
}

function RandomYellow() {
    let r = Math.round(Math.random() * (125))+130;
    let g = Math.round(Math.random() * (125))+130;
    let b = 0;
    return rgbToHex(r, g, b);
}

function RandomOrange() {
    let r = 255;
    let g = Math.round(Math.random() * (130))+0;
    let b = 0;
    return rgbToHex(r, g, b);
}



function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}