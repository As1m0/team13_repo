//div element create
buttonSave.addEventListener("click", function () {
    checkColors();
    plus.style.marginLeft = "-60px";
    if (duplicates === true) {
        duplicates = false;
        document.getElementById(colorSing.innerHTML).style.filter = "opacity(0)";
        sleep(100).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(1)"; });
        sleep(200).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(0.2)"; });
        sleep(300).then(() => { document.getElementById(colorSing.innerHTML).style.filter = "opacity(1)"; });
    } else {
        hexa = colorSing.innerHTML;
        createDiv();
    }
})

//check if the color is already added
function checkColors() {
    if (document.getElementById("saved-color-wrapper").children.length > 1) {
        for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 1; i--) {
            if (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").style.backgroundColor === colorSing.style.color) {
                duplicates = true;
            }
        }
    }
}

function createDiv() {
    let div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "150px";
    div.style.backgroundColor = hexa;
    div.style.color = "white";
    div.style.textTransform = "uppercase";
    div.innerHTML = hexa;
    div.style.border = "1px solid white";
    div.style.outlineOffset = "-5px";
    div.style.paddingTop = "5px";
    div.style.margin = "10px";
    div.style.borderRadius = "15%";
    div.style.textAlign = "center";
    div.style.fontSize = "12px";
    div.style.transition = "0.5s";
    div.style.userSelect = "none";
    document.getElementById("saved-color-wrapper").appendChild(div);
    div.id = hexa;
    div.style.order = "2";

    buttonExport.style.display = "block";
    div.style.filter = "opacity(0)";
    div.style.display = "none";
    sleep(50).then(() => { div.style.filter = "opacity(1)"; });
    sleep(100).then(() => { div.style.display = "block"; });
    inputBox.style.filter = "opacity(0)";
    sleep(101).then(() => { inputBox.style.display = "none"; });
    sleep(200).then(() => { plus.style.display = "block"; plus.style.filter = "opacity(0)" });
    sleep(500).then(() => { plus.style.display = "block"; plus.style.filter = "opacity(1)" });

    document.body.style.backgroundColor = colorSing.style.color;

    //div hover actions
    div.addEventListener("mouseover", function () {
        if (exported === false) {
            div.style.cursor = "pointer";
            div.style.paddingTop = "20px";
            div.innerHTML = "remove";
            document.body.style.backgroundColor = div.style.backgroundColor;
        } else {
            div.style.cursor = "pointer";
            div.innerHTML = "copy color code";
        }
    })
    div.addEventListener("mouseout", function () {
        if (exported === false) {
            div.innerHTML = div.id;
            div.style.paddingTop = "5px";
            div.style.fontSize = "12px";
            document.body.style.backgroundColor = colorSing.style.color;
        } else {
            div.innerHTML = div.id;
            div.style.paddingTop = "5px";
            div.style.fontSize = "12px";
            document.body.style.backgroundColor = "#2e2d2e";
        }
    })

    //remove or copy color div
    div.addEventListener("click", function () {
        if (exported === false) {
            div.parentNode.removeChild(div);
        } else {
            div.innerHTML = "COPIED!";
            navigator.clipboard.writeText(div.id);
            div.style.fontSize = "16px";
        }
        //export button display
        if (exported === false && (document.getElementById("saved-color-wrapper").childElementCount > 0)) {
            buttonExport.style.display = "block";
        } else {
            buttonExport.style.display = "none";
        }
        //plus margin for Plus
        if (exported === false && (document.getElementById("saved-color-wrapper").childElementCount == 1)) {
            plus.style.marginLeft = "10px";
        }
    })
}