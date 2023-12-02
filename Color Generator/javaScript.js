
let colorSing = document.getElementById("colorSing");
let button = document.getElementById("btn-generate");
let buttonSave = document.getElementById("btn-save");
let buttonExport = document.getElementById("btn-export");
let buttonReset = document.getElementById("reset");
let previous = document.getElementById("back");
let next = document.getElementById("forward");
var hexa;
var j = -1;
let memory = [];
var exported = false;
var duplicates = false;


//generate random color
button.addEventListener("click", function () {
    hexa = randomColors();
    colorSing.style.color = hexa;
    colorSing.textContent = hexa;
    document.body.style.backgroundColor = hexa;

    buttonSave.style.opacity = "1"
    buttonReset.style.display = "none";
    colorSing.style.filter = "opacity(1)";
    //export button dislpay
    if ((document.getElementById("saved-color-wrapper").children.length) > 0) {
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


//div element create
buttonSave.addEventListener("click", function () {
    if (document.getElementById("saved-color-wrapper").children.length == 0) {
        let div = document.createElement("div");
        div.style.width = "150px";
        div.style.height = "150px";
        div.style.backgroundColor = colorSing.style.color;
        div.style.color = "white";
        div.style.textTransform = "uppercase";
        div.innerHTML = colorSing.innerHTML;
        div.style.border = "1px solid white";
        div.style.paddingTop = "5px";
        div.style.margin = "10px";
        div.style.borderRadius = "15%";
        div.style.textAlign = "center";
        div.style.fontSize = "12px";
        div.style.transition = "0.3s";
        document.getElementById("saved-color-wrapper").appendChild(div);
        div.id = colorSing.innerHTML;

        //div hover actions
        div.addEventListener("mouseover", function () {
            if (exported === false) {
                div.style.cursor = "pointer";
                div.innerHTML = "delete";
                div.style.filter = "opacity(0.6)";
            } else {
                div.style.cursor = "pointer";
                div.innerHTML = "copy color code";
            };
        });

        div.addEventListener("mouseout", function () {
            div.innerHTML = div.id;
            div.style.filter = "opacity(1)";
            div.style.paddingTop = "5px";
            div.style.fontSize = "12px";
        });

        //remove or copy color div
        div.addEventListener("click", function () {
            if (exported === false) {
                div.parentNode.removeChild(div);
            } else {
                div.color = "green";
                div.innerHTML = "COPIED!";
                navigator.clipboard.writeText(div.id);
                div.style.filter = "opacity(0.5)";
                div.style.fontSize = "16px";
            };
            //export button display
            if ((document.getElementById("saved-color-wrapper").children.length) > 0 && exported === false) {
                buttonExport.style.display = "block";
            } else {
                buttonExport.style.display = "none";
            };
        });
        //export button display
        if ((document.getElementById("saved-color-wrapper").children.length) > 0) {
            buttonExport.style.display = "block";
        } else {
            buttonExport.style.display = "none";
        };
    } else {
        checkColors();
        if (duplicates === true) {
            duplicates = false;
            //console.log("már volt ez e szin!");
            document.getElementById(colorSing.innerHTML).style.filter = "opacity(0)";
            sleep(100).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(1)"; });
            sleep(200).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(0.2)"; });
            sleep(300).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(1)"; });
        } else {
            let div = document.createElement("div");
            div.style.width = "150px";
            div.style.height = "150px";
            div.style.backgroundColor = colorSing.style.color;
            div.style.color = "white";
            div.style.textTransform = "uppercase";
            div.innerHTML = colorSing.innerHTML;
            div.style.border = "1px solid white";
            div.style.paddingTop = "5px";
            div.style.margin = "10px";
            div.style.borderRadius = "15%";
            div.style.textAlign = "center";
            div.style.fontSize = "12px";
            div.style.transition = "0.3s";
            document.getElementById("saved-color-wrapper").appendChild(div);
            div.id = colorSing.innerHTML;

            //div hover actions
            div.addEventListener("mouseover", function () {
                if (exported === false) {
                    div.style.cursor = "pointer";
                    div.innerHTML = "delete";
                    div.style.filter = "opacity(0.6)";
                } else {
                    div.style.cursor = "pointer";
                    div.innerHTML = "copy color code";
                };
            });

            div.addEventListener("mouseout", function () {
                div.innerHTML = div.id;
                div.style.filter = "opacity(1)";
                div.style.paddingTop = "5px";
                div.style.fontSize = "12px";
            });

            //remove or copy color div
        div.addEventListener("click", function () {
            if (exported === false) {
                div.parentNode.removeChild(div);
            } else {
                div.color = "green";
                div.innerHTML = "COPIED!";
                navigator.clipboard.writeText(div.id);
                div.style.filter = "opacity(0.5)";
                div.style.fontSize = "16px";
            };
            //export button display
            if ((document.getElementById("saved-color-wrapper").children.length) > 0 && exported === false) {
                buttonExport.style.display = "block";
            } else {
                buttonExport.style.display = "none";
            };
            });
        };
    };
});

//Export colors
buttonExport.addEventListener("click", function () {
    //put saved color codes in array
    let colors = [];
    for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 0; i--) {
        colors[i - 1] = (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").innerHTML);
    };
    //copy array element to the clipboard
    navigator.clipboard.writeText(colors);

    // modify & remove html elements
    sleep(3000).then(() => { colorSing.style.filter = "opacity(0)"; });
    buttonExport.style.display = "none";
    buttonReset.style.display = "block";
    document.body.style.backgroundColor = "#2e2d2e";
    colorSing.innerHTML = "Color codes are copied to your clipboard!";
    colorSing.style.color = "#65d23b";
    previous.style.display = "none";
    next.style.display = "none";
    button.style.display = "none";
    buttonSave.style.display = "none";

    exported = true;
});



function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function checkColors() {
    for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 0; i--) {
        if (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").innerHTML === colorSing.innerHTML) {
            duplicates = true;
        };
    };
};