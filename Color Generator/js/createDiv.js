//div element create
buttonSave.addEventListener("click", function () {
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
        div.style.userSelect = "none";
        document.getElementById("saved-color-wrapper").appendChild(div);
        div.id = colorSing.innerHTML;
        buttonExport.style.display = "block";
        

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
            div.innerHTML = "COPIED!";
            navigator.clipboard.writeText(div.id);
            div.style.filter = "opacity(0.5)";
            div.style.fontSize = "16px";
        };
        //export button display
        if (exported === false && (document.getElementById("saved-color-wrapper").childElementCount > 0)) {
            buttonExport.style.display = "block";
        } else {
            buttonExport.style.display = "none";
        };
        });
    };
});

function checkColors() {
    if (document.getElementById("saved-color-wrapper").children.length > 0) {
        for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 0; i--) {
            if (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").innerHTML === colorSing.innerHTML) {
                duplicates = true;
            };
        };
    };
};