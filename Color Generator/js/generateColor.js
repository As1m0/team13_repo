//generate random color
button.addEventListener("click", function () {
    hexa = randomColors();
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

    //rainbow color-wrapper set back
    sleep(100).then(() => { randomBlue.style.filter = "opacity(0)"; });
    sleep(150).then(() => { randomGreen.style.filter = "opacity(0)"; });
    sleep(300).then(() => { randomRed.style.filter = "opacity(0)"; });
    sleep(250).then(() => { wrapper.style.borderColor = "transparent"; });
    sleep(300).then(() => { wrapper.style.display = "none"; });
    sleep(300).then(() => { rainbow.style.display = "block"; });
});

//Go back on colors
previous.addEventListener("click", function () {
    if (j == 1) {
        j--;
        colorSing.style.color = memory[j];
        colorSing.textContent = memory[j];
        document.body.style.backgroundColor = memory[j];
        next.style.filter = "opacity(1)";
        previous.style.filter = "opacity(0)";
    }
    if (j > 1) {
        j--;
        colorSing.style.color = memory[j];
        colorSing.textContent = memory[j];
        document.body.style.backgroundColor = memory[j];
        next.style.filter = "opacity(1)";
        console.log(memory);
        console.log(j);
    }
});

//Go fowrad on colors
next.addEventListener("click", function () {
    previous.style.filter = "opacity(1)";
    if (j == (memory.length - 2)) {
        j++;
        colorSing.style.color = memory[j];
        colorSing.textContent = memory[j];
        document.body.style.backgroundColor = memory[j];
        next.style.filter = "opacity(0)";
    }
    if (j < (memory.length - 1)) {
        j++;
        colorSing.style.color = memory[j];
        colorSing.textContent = memory[j];
        document.body.style.backgroundColor = memory[j];
        console.log(memory);
        console.log(j);
    }
});

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
