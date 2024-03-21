//otos, vagy hatos sorsolás legyen
button.addEventListener("click", function () {
    if (otosLottoInput.checked) {
        OtosLottoGenerator();
        OtosLottoSzamokMatrix(osszesKihuzottSzamOtosLotto);
        OtosLottoStatisztikaFrissitese();
    } else {
        HatosLottoGenerator();
        HatosLottoSzamokMatrix(osszesKihuzottSzamHatosLotto);
        HatosLottoStatisztikaFrissitese();
    }
})

//otos sorsolás
function OtosLottoGenerator() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 5) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        if (!lottoSzamok.includes(generaltSzam)) {
            lottoSzamok.push(generaltSzam);
        }
    }
    displayNumbers(lottoSzamok);
    osszesKihuzottSzamOtosLotto.push(lottoSzamok);
}

//hatos sorsolás
function HatosLottoGenerator() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 6) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        if (!lottoSzamok.includes(generaltSzam)) {
            lottoSzamok.push(generaltSzam);
        }
    }
    displayNumbers(lottoSzamok);
    osszesKihuzottSzamHatosLotto.push(lottoSzamok);
}