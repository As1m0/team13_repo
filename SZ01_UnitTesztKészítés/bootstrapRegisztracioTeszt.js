function kulsoDivClassCheck() {
    let tesztElem = document.querySelector("div");
    if (tesztElem.classList.contains("container")) {
        console.log("Teszt 01 sikeres!");
    } else {
        console.log("Teszt 01 sikertelen!");
    }
}

kulsoDivClassCheck();

function h1Check() {
    let tesztElem = document.querySelector("h1");
    if (tesztElem.innerHTML === "Tanfolyam regisztráció") {
        console.log("Teszt 02 sikeres!");
    } else {
        console.log("Teszt 02 sikertelen!");
    }
}

h1Check();

function firstInputTypeCheck() {
    let tesztElem = document.querySelector("input");
    if (tesztElem.type === "text") {
        console.log("Teszt 03 sikeres!");
    } else {
        console.log("Teszt 03 sikertelen!");
    }
}

firstInputTypeCheck();

function firstInputIdCheck() {
    let tesztElem = document.querySelector("input");
    if (tesztElem.id === "veznev") {
        console.log("Teszt 04 sikeres!");
    } else {
        console.log("Teszt 04 sikertelen!");
    }
}

firstInputIdCheck();

function firstInputClassCheck() {
    let tesztElem = document.querySelector("input");
    if (tesztElem.classList.contains("form-control")) {
        console.log("Teszt 05 sikeres!");
    } else {
        console.log("Teszt 05 sikertelen!");
    }
}

firstInputClassCheck();

function secondInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[1].type === "text") {
        console.log("Teszt 06 sikeres!");
    } else {
        console.log("Teszt 06 sikertelen!");
    }
}

secondInputTypeCheck();

function secondInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[1].id === "kernev") {
        console.log("Teszt 07 sikeres!");
    } else {
        console.log("Teszt 07 sikertelen!");
    }
}

secondInputIdCheck();

function secondInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[1].classList.contains("form-control")) {
        console.log("Teszt 08 sikeres!");
    } else {
        console.log("Teszt 08 sikertelen!");
    }
}

secondInputClassCheck();

function thirdInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[2].type === "text") {
        console.log("Teszt 07 sikeres!");
    } else {
        console.log("Teszt 07 sikertelen!");
    }
}

thirdInputTypeCheck();

function thirdInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[2].id === "fnev") {
        console.log("Teszt 08 sikeres!");
    } else {
        console.log("Teszt 08 sikertelen!");
    }
}

thirdInputIdCheck();


function thirdInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[2].classList.contains("form-control")) {
        console.log("Teszt 09 sikeres!");
    } else {
        console.log("Teszt 09 sikertelen!");
    }
}

thirdInputClassCheck();


function fourthInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[3].type === "password") {
        console.log("Teszt 10 sikeres!");
    } else {
        console.log("Teszt 10 sikertelen!");
    }
}

fourthInputTypeCheck();

function fourthInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[3].id === "pass1") {
        console.log("Teszt 11 sikeres!");
    } else {
        console.log("Teszt 11 sikertelen!");
    }
}

fourthInputIdCheck();

function fourthInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[3].classList.contains("form-control")) {
        console.log("Teszt 12 sikeres!");
    } else {
        console.log("Teszt 12 sikertelen!");
    }
}

fourthInputClassCheck();


function fifthInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[4].type === "password") {
        console.log("Teszt 13 sikeres!");
    } else {
        console.log("Teszt 13 sikertelen!");
    }
}

fifthInputTypeCheck();

function fifthInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[4].id === "pass2") {
        console.log("Teszt 14 sikeres!");
    } else {
        console.log("Teszt 14 sikertelen!");
    }
}

fifthInputIdCheck();

function fifthInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[4].classList.contains("form-control")) {
        console.log("Teszt 15 sikeres!");
    } else {
        console.log("Teszt 15 sikertelen!");
    }
}

fifthInputClassCheck();

function sixthInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[5].type === "email") {
        console.log("Teszt 16 sikeres!");
    } else {
        console.log("Teszt 16 sikertelen!");
    }
}

sixthInputTypeCheck();

function sixthInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[5].id === "email") {
        console.log("Teszt 17 sikeres!");
    } else {
        console.log("Teszt 17 sikertelen!");
    }
}

sixthInputIdCheck();

function sixthInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[5].classList.contains("form-control")) {
        console.log("Teszt 18 sikeres!");
    } else {
        console.log("Teszt 18 sikertelen!");
    }
}

sixthInputClassCheck();

function seventhInputTypeCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[6].type === "text") {
        console.log("Teszt 19 sikeres!");
    } else {
        console.log("Teszt 19 sikertelen!");
    }
}

seventhInputTypeCheck();

function seventhInputIdCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[6].id === "tel") {
        console.log("Teszt 20 sikeres!");
    } else {
        console.log("Teszt 20 sikertelen!");
    }
}

seventhInputIdCheck();

function seventhInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    if (inputs[6].classList.contains("form-control")) {
        console.log("Teszt 21 sikeres!");
    } else {
        console.log("Teszt 21 sikertelen!");
    }
}

seventhInputClassCheck();

function allInputClassCheck() {
    let inputs = document.querySelectorAll("input");
    allOk = true;
    inputs.forEach(input => {
        if (!input.classList.contains("form-control") && !input.classList.contains("form-check-input")) {
            allOk = false;
        }
    })
    if (allOk) {
        console.log("Teszt 22 sikeres!");
    } else {
        console.log("Teszt 22 sikertelen!");
    }
}

allInputClassCheck();

function allLabelCheck() {
    let labels = document.querySelectorAll("label");
    if (labels[0].textContent === "Vezeték név:" &&
        labels[1].textContent === "Kereszt név:" &&
        labels[2].textContent === "Felhasználói név:" &&
        labels[3].textContent === "Jelszó:" &&
        labels[4].textContent === "Jelszó ismét:" &&
        labels[5].textContent === "E-mail cím:" &&
        labels[6].textContent === "Telefonszám:") {
        console.log("Teszt 23 sikeres!");
    } else {
        console.log("Teszt 23 sikertelen!");
    }
}

allLabelCheck();

function smallTextCheck() {
    let small = document.querySelector("small");
    if (small.textContent === "Beceneve, mely mások számára is látható.") {
        console.log("Teszt 24 sikeres!");
    } else {
        console.log("Teszt 24 sikertelen!");
    }
}

smallTextCheck();

function small2TextCheck() {
    let small = document.querySelectorAll("small");
    if (small[1].textContent === "Ide továbbítjuk a legfontosabb tanfolyam információkat önnek.") {
        console.log("Teszt 26 sikeres!");
    } else {
        console.log("Teszt 26 sikertelen!");
    }
}

small2TextCheck();

function small3TextCheck() {
    let small = document.querySelectorAll("small");
    if (small[2].textContent === "Ha szeretne akár azonnal értesülni a fontosabb hírekről") {
        console.log("Teszt 27 sikeres!");
    } else {
        console.log("Teszt 27 sikertelen!");
    }
}

small3TextCheck();

function allSmallClassCheck() {
    let smalls = document.querySelectorAll("small");
    allOk = true;
    smalls.forEach(small => {
        if (!small.classList.contains("form-text") || !small.classList.contains("text-muted")) {
            allOk = false;
        }
    })
    if (allOk) {
        console.log("Teszt 28 sikeres!");
    } else {
        console.log("Teszt 28 sikertelen!");
    }
}

allSmallClassCheck();

function buttonClassCheck() {
    let button = document.querySelector("button");
    if (button.classList.contains("btn") && button.classList.contains("btn-primary") && button.classList.contains("w-100")) {
        console.log("Teszt 29 sikeres!");
    } else {
        console.log("Teszt 29 sikertelen!");
    }
}

buttonClassCheck();

function buttonColorCheck() {
    let button = document.querySelector("button");
    let computedStyle = window.getComputedStyle(button);
    let backgroundColor = computedStyle.backgroundColor;
    if (backgroundColor === "rgb(13, 110, 253)") {
        console.log("Teszt 30 sikeres!");
    } else {
        console.log("Teszt 30 sikertelen!");
    }
}

buttonColorCheck();

function buttonTextCheck() {
    let button = document.querySelector("button");
    if (button.textContent === "Regisztrálok") {
        console.log("Teszt 31 sikeres!");
    } else {
        console.log("Teszt 31 sikertelen!");
    }
}

buttonTextCheck();

function selectOptionsNumCheck() {
    let select = document.querySelector("select");
    let optionsNum = select.childElementCount;
    if (optionsNum === 4){
        console.log("Teszt 32 sikeres!");
    } else {
        console.log("Teszt 32 sikertelen!");
    }
}

selectOptionsNumCheck();

function selectedOptionValueCheck (){
    let options = document.querySelectorAll("option");
    options.forEach( option => {
        if (option.selected){
            if (option.textContent === "Webfejlesztő"){
                console.log("Teszt 33 sikeres!");
            } else {
                console.log("Teszt 33 sikertelen!");
            }
        }
    })
}

selectedOptionValueCheck();