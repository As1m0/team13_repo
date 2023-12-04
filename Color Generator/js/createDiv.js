//div element create
buttonSave.addEventListener("click", function () {
    checkColors();
    plus.style.marginLeft = "-60px";
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
        div.style.transition = "0.4s";
        div.style.userSelect = "none";
        div.style.order = "2";
        document.getElementById("saved-color-wrapper").appendChild(div);
        div.id = colorSing.innerHTML;
        buttonExport.style.display = "block";
        div.style.filter = "opacity(0)";
        sleep(50).then(() => { div.style.filter = "opacity(1)"; });


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
                document.body.style.backgroundColor = div.style.backgroundColor;
            };
        });

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
        });

        //remove or copy color div
        div.addEventListener("click", function () {
            if (exported === false) {
                div.parentNode.removeChild(div);
                document.body.style.backgroundColor = colorSing.style.color;
            } else {
                div.innerHTML = "COPIED!";
                navigator.clipboard.writeText(div.id);
                div.style.fontSize = "16px";
            };
            //export button display
            if (exported === false && (document.getElementById("saved-color-wrapper").childElementCount > 1)) {
                buttonExport.style.display = "block";
            } else {
                buttonExport.style.display = "none";
            };
            //plus margin
            if (exported === false && (document.getElementById("saved-color-wrapper").childElementCount == 1)) {
                plus.style.marginLeft = "10px";
            };
        });
    };
});

function checkColors() {
    if (document.getElementById("saved-color-wrapper").children.length > 1) {
        for (let i = (document.getElementById("saved-color-wrapper").children.length); i !== 1; i--) {
            console.log(i);
            console.log(document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").style.backgroundColor);
            if (document.querySelector("#saved-color-wrapper :nth-child(" + i + ")").style.backgroundColor === colorSing.style.color) {
                duplicates = true;
            };
        };
    };
};