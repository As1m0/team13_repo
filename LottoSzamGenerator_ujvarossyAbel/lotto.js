
//Kisorsolt számok tárolása
const osszesKihuzottSzamOtosLotto = [];
const osszesKihuzottSzamHatosLotto = [];


//-------------------------DOM------------------------------

const otosLottoInput = document.querySelector("#otosLotto");

const ball1Text = document.querySelector("#ball1");
const ball2Text = document.querySelector("#ball2");
const ball3Text = document.querySelector("#ball3");
const ball4Text = document.querySelector("#ball4");
const ball5Text = document.querySelector("#ball5");
const ball6Text = document.querySelector("#ball6");

//DOM elemek megjelenítése/elrejtése Lottó típus szerint
lottoSelect.addEventListener("input", lottoType);
function lottoType() {
    resetBallNumbers();
    let ball6 = document.querySelector("#ball6-wrapper");
    let hatosLottoContainer = document.querySelector("#hatosLotto-container");
    let otosLottoContainer = document.querySelector("#otosLotto-container");

    if (otosLottoInput.checked) {
        ball6.style.display = "none";
        hatosLottoContainer.style.display = "none";
        otosLottoContainer.style.display = "block";
        document.querySelector("#osszesKihuzottSzam-otosLotto-container").style.display = "block";
        document.querySelector("#osszesKihuzottSzam-hatosLotto-container").style.display = "none";
    } else {
        ball6.style.display = "block";
        hatosLottoContainer.style.display = "block";
        otosLottoContainer.style.display = "none";
        document.querySelector("#osszesKihuzottSzam-otosLotto-container").style.display = "none";
        document.querySelector("#osszesKihuzottSzam-hatosLotto-container").style.display = "block";
    }
}

//számok kiírása golyókra
function displayNumbers(array) {
    //space beszúrása egyjegyú szám esetén (középen maradjon a szám)
    let szamok = [...array];
    for (let i = 0; i < szamok.length; i++) {
        szamok[i] = szamok[i].toString();
        if (szamok[i].length < 2) {
            szamok[i] = "&nbsp" + szamok[i];
        }
    }
    //számok kiírása
    ball1Text.innerHTML = szamok[0];
    ball2Text.innerHTML = szamok[1];
    ball3Text.innerHTML = szamok[2];
    ball4Text.innerHTML = szamok[3];
    ball5Text.innerHTML = szamok[4];
    if (szamok.length === 6) {
        ball6Text.innerHTML = szamok[5];
    }
}

//számok nullázása golyókon
function resetBallNumbers() {
    ball1Text.innerHTML = "&nbsp0";
    ball2Text.innerHTML = "&nbsp0";
    ball3Text.innerHTML = "&nbsp0";
    ball4Text.innerHTML = "&nbsp0";
    ball5Text.innerHTML = "&nbsp0";
    ball6Text.innerHTML = "&nbsp0";
}







//RESET ALL
function resetAll() {
    osszesKihuzottSzamOtosLotto.splice(0, osszesKihuzottSzamOtosLotto.length);
    osszesKihuzottSzamOtosLotto.splice(0, osszesKihuzottSzamHatosLotto.length);
    resetBallNumbers();
    MatrixReset();
    resetStatisticTables();
}