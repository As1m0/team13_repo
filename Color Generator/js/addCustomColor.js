let plus = document.getElementById("plus");
let inputBox = document.getElementById("input-box");
let inputField = document.getElementById("input-field");
let submit = document.getElementById("submit");

//plus button hover effects
plus.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "#2e2d2e";
})
plus.addEventListener("mouseout", function () {
    if (inputBox.style.display !== "block") {
        document.body.style.backgroundColor = colorSing.style.color;
    }
})

//color box appear
plus.addEventListener("click", function () {
    plus.style.display = "none";
    inputBox.style.display = "block";
    inputField.focus();
    inputField.value = "#";
    sleep(50).then(() => { inputBox.style.filter = "opacity(1)"; });
    document.body.style.backgroundColor = "#2e2d2e";
})

//color box close
if (inputBox.style.filter = "opacity(1)") {
    document.addEventListener("click", (evt) => {
        let targetEl = evt.target; // clicked element      
        do {
            if (targetEl == plus) {
                // This is a click inside, does nothing, just return.
                return;
            }
            // Go up the DOM
            targetEl = targetEl.parentNode;
        } while (targetEl);
        plus.style.display = "block";
        inputBox.style.display = "none";
    })
}

//create custom div
inputBox.addEventListener("keypress", function () {
    if (inputField.value.length == 7) {
        hexa = inputField.value;
        createCustomDiv();
        console.log(div.innerHTML)
    }
})

function createCustomDiv() {
    let div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "150px";
    div.style.backgroundColor = hexa;
    div.style.color = "white";
    div.style.textTransform = "uppercase";
    div.innerHTML = hexa;
    div.style.border = "1px solid white";
    div.style.outline = "1px solid rgba(255,255,255,0.5)";
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
    div.style.order = "1";

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