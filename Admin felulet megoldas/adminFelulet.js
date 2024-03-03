
//aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

//deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

//Szorgalmi: Próbáld meg egy gomra rakni a két funkciót, 
//illetve megoldani, hogy a kijelöléseket megfordítsa

KiBeJeloles.addEventListener("click", onOffMarker);

function onOffMarker() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        if (elemLista[i].checked) {
            elemLista[i].checked = false;
        } else {
            elemLista[i].checked = true;
        }
    }
}


//csikozasBe.addEventListener("click", SavozasBe);

function SavozasBe() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.add("table-striped");
}

//csikozasKi.addEventListener("click", SavozasKi);

function SavozasKi() {
    document.querySelector("table").classList.remove("table-striped");
}


//Szorgalmi: Megoldani, hogy egy gombon legyen a sávozás ki-be kapcsolása

csikozasKiBe.addEventListener("click", strippedOnOff);

function strippedOnOff() {
    let kivalasztottTabla = document.querySelector("table");
    if (kivalasztottTabla.classList.contains("table-striped")) {
        kivalasztottTabla.classList.remove("table-striped");
        csikozasKiBe.textContent = "Sávozás BE";
    } else {
        kivalasztottTabla.classList.add("table-striped");
        csikozasKiBe.textContent = "Sávozás KI";
    }
}

//darkMode.addEventListener("click", DarkMode);
function DarkMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-light");
    kivalasztottTabla.classList.add("table-dark");
}

//lightMode.addEventListener("click", LightMode);
function LightMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-dark");
    kivalasztottTabla.classList.add("table-light");
}

//Szorgalmi: Megoldani, hogy egy gombon legyen a light és dark mód közötti váltás.

ColorMode.addEventListener("click", colorModeSwitcher);

function colorModeSwitcher() {
    let kivalasztottTabla = document.querySelector("table");
    if (kivalasztottTabla.classList.contains("table-dark")) {
        kivalasztottTabla.classList.remove("table-dark");
        kivalasztottTabla.classList.add("table-light");
        ColorMode.textContent = "DarkMode";
        ColorMode.classList.remove("btn-light");
        ColorMode.classList.add("btn-dark");
        document.body.style.background = "linear-gradient(to bottom, #79b5f8, #e8f0ff)"
    } else {
        kivalasztottTabla.classList.remove("table-light");
        kivalasztottTabla.classList.add("table-dark");
        ColorMode.textContent = "LightMode";
        ColorMode.classList.remove("btn-dark");
        ColorMode.classList.add("btn-light");
        document.body.style.background = "linear-gradient(to bottom, #243B55, #141E30)"
    }
}

tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
    let sor = kivalasztottTabla.insertRow(-1);//beleillesztek egy sort a táblába
    let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

function UjSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
    let sor = kivalasztottTabla.insertRow();//beleillesztek egy sort a táblába
    let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

    vezNevCella.innerHTML = document.querySelector("#vezNev").value;
    kerNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}

ujElemFeltolto.addEventListener("click", UjSorBeszuras);

//HÁZ FEALADAT
//VALIDATIONS

document.querySelector("#vezNev").addEventListener("keyup", validateVezNev);
document.querySelector("#kerNev").addEventListener("keyup", validateKerNev);
document.querySelector("#email").addEventListener("keyup", validateEmail);
document.querySelector("#tel").addEventListener("keyup", validatePhone);

function validateVezNev() {
    if (validateVezNevREGEX()) {
        document.querySelector("#vezNevSmall").textContent = "OK";
        document.querySelector("#vezNev").style.backgroundColor = "rgb(211, 250, 176)";
        allValidate();
    } else {
        document.querySelector("#vezNevSmall").textContent = "Érévnytelen név!";
        document.querySelector("#vezNev").style.backgroundColor = "rgb(248, 160, 160)";
         ujElemFeltolto.disabled = true;
    }
}

function validateKerNev() {
    if (validateKerNevREGEX()) {
        document.querySelector("#kerNev-small").textContent = "OK";
        document.querySelector("#kerNev").style.backgroundColor = "rgb(211, 250, 176)";
        allValidate();
    } else {
        document.querySelector("#kerNev-small").textContent = "Érévnytelen név!";
        document.querySelector("#kerNev").style.backgroundColor = "rgb(248, 160, 160)";
         ujElemFeltolto.disabled = true;
    }
}

function validateEmail() {
    if (validateEmailREGEX()) {
        document.querySelector("#email-small").textContent = "OK";
        document.querySelector("#email").style.backgroundColor = "rgb(211, 250, 176)";
        allValidate();
    } else {
        document.querySelector("#email-small").textContent = "Érévnytelen email cím!";
        document.querySelector("#email").style.backgroundColor = "rgb(248, 160, 160)";
         ujElemFeltolto.disabled = true;
    }
}

function validatePhone() {
    if (validatePhoneREGEX()) {
        document.querySelector("#phone-small").textContent = "OK";
        document.querySelector("#tel").style.backgroundColor = "rgb(211, 250, 176)";
        allValidate();
    } else {
        document.querySelector("#phone-small").textContent = "Érévnytelen telefon formátum!";
        document.querySelector("#tel").style.backgroundColor = "rgb(248, 160, 160)";
         ujElemFeltolto.disabled = true;
    }
}


//check validations, enable button
function allValidate() {
    let smallTexts = document.getElementsByTagName("small");
    let allOk = true;
    for (let i = 0; i < smallTexts.length; i++) {
        if (smallTexts[i].textContent !== "OK") {
            allOk = false;
        }
    }
    if(allOk){
        ujElemFeltolto.disabled = false;
    } else {
        ujElemFeltolto.disabled = true;
    }
}


//REGEX codes

function validateVezNevREGEX() {
    let vezNev = document.getElementById('vezNev').value;
    let vezNevRGEX = /^[a-zA-Z]{3,}$/;
    let vezNevResult = vezNevRGEX.test(vezNev);
    return vezNevResult;
}

function validateKerNevREGEX() {
    let kerNev = document.getElementById('kerNev').value;
    let kerNevRGEX = /^[a-zA-Z]{3,}$/;
    let kerNevResult = kerNevRGEX.test(kerNev);
    return kerNevResult;
}

function validatePhoneREGEX() {
    let phoneNumber = document.getElementById('tel').value;
    let phoneRGEX = /^[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let phoneResult = phoneRGEX.test(phoneNumber);
    return phoneResult;
}

function validateEmailREGEX(){
    let emailAdress = document.getElementById('email').value;
    let emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailResult = emailRGEX.test(emailAdress);
    return emailResult;

}