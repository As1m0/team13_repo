//Első feladat
const input1 = document.querySelector("#f1-input");
const output1 = document.querySelector("#karakterszam");

input1.addEventListener("keyup", charCounter);

function charCounter() {
    output1.textContent = "Karakterek száma: " + input1.value.length;
}

//Második feladat

function kirajzol() {
    const inputX = document.querySelector("#f2-inputX");
    const inputY = document.querySelector("#f2-inputY");
    const negyzet = document.querySelector("#negyzet");
    negyzet.style.display = "block";
    negyzet.style.left = inputX.value + "px";
    negyzet.style.top = inputY.value + "px";
}

//Harmadik feladat
const cat = document.querySelector("#cat-img");
const button3 = document.querySelector("#button3");


function bujocska() {
    if (cat.style.opacity == "1") {
        cat.style.opacity = "0";
        button3.textContent = "Bújj elő kiscica!";
    } else {
        cat.style.opacity = "1";
        button3.textContent = "Bújj el kiscica!";
    }
}

//Negyedik feladat

function ellenorzes() {
    let email1 = document.querySelector("#email1").value;
    let email2 = document.querySelector("#email2").value;
    const outputText = document.querySelector("#figyelmeztetes");

    if (ellenorzesREGEX()) {
        outputText.textContent = "Adatok rögzítése sikeres!";
        outputText.style.color = "green";
    } else {
        outputText.textContent = "Nem megfelelő az e-mail cím formátuma!";
        outputText.style.color = "red";
    }
    if (email1 != email2) {
        outputText.textContent = "A két mező tartalma nem egyezik!";
        outputText.style.color = "red";
    }
    if (email1.length == 0) {
        outputText.textContent = "Nincs kitöltve az e-mail mező!";
        outputText.style.color = "red";
    }
    if (email2.length == 0) {
        outputText.textContent = "Nincs kitöltve az e-mail megerősítése mező!";
        outputText.style.color = "red";
    }
    if (email1.length == 0 && email2.length == 0) {
        outputText.textContent = "Nincs kitöltve egyik mező sem!";
        outputText.style.color = "red";
    }

}

function ellenorzesREGEX() {
    let emailRGEX = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    return emailRGEX.test(email1);
}