let rainbow = document.getElementById("rainbow");
let colorWrapper = document.getElementById("colorwheel-wrapper");
let wrapper = document.getElementById("wrapper");
let randomRed = document.getElementById("random-red");
let randomGreen = document.getElementById("random-green");
let randomBlue = document.getElementById("random-blue");

//animations
rainbow.addEventListener("mouseover", function () {
    sleep(200).then(() => { rainbow.style.display = "none"; });
    wrapper.style.display = "flex";
    sleep(100).then(() => { randomRed.style.filter = "opacity(1)"; });
    sleep(300).then(() => { randomGreen.style.filter = "opacity(1)"; });
    sleep(400).then(() => { randomBlue.style.filter = "opacity(1)"; });
    sleep(600).then(() => { wrapper.style.borderColor = "white"; });
});

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
    };

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    };
});

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
    };

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    };
});

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
    };

    //write color code to memory
    j++;
    memory[j] = hexa;
    if (j > 0) {
        previous.style.filter = "opacity(1)";
    };
});




function RandomRed() {
    let r = 255;
    let g = Math.round(Math.random() * 225);
    let b = Math.round(Math.random() * 225);
    return rgbToHex(r, g, b);
    //return ("rgb(" + r + "," + g + "," + b +")");

}

function RandomGreen() {
    let r = Math.round(Math.random() * 225);
    let g = 255;
    let b = Math.round(Math.random() * 225);
    return rgbToHex(r, g, b);
}

function RandomBlue() {
    let r = Math.round(Math.random() * 225);
    let g = Math.round(Math.random() * 125);
    let b = 255;
    return rgbToHex(r, g, b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}