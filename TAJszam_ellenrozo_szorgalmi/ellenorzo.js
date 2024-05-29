var TAJ1 = "673457015";
console.log("Kérem a TAJ számot: " + TAJ1);
//Utolsó számjegy megállapítása
function lastTAJNum(TAJszam) {
    return Number(TAJszam.slice(8));
}
var EllNum = lastTAJNum(TAJ1);
console.log("Az ellenörző számjegy: " + EllNum);
//TAJ számjegyeinek összegének számítása
function TAJSzorzatOsszeg(TAJszam) {
    var eredmeny = 0;
    for (var i = 0; i < 8; i++) {
        if ((i + 1) % 2 === 0) {
            eredmeny += Number(TAJszam[i]) * 7;
        }
        else {
            eredmeny += Number(TAJszam[i]) * 3;
        }
    }
    return eredmeny;
}
console.log("Szorzatok összege: " + TAJSzorzatOsszeg(TAJ1));
//TAJ szám ellenőrzése
function TAJEll(TAJszam) {
    var szamjegyekOsszege = Number(TAJSzorzatOsszeg(TAJszam));
    var ellSzam = lastTAJNum(TAJszam);
    if (szamjegyekOsszege % 10 === ellSzam) {
        return true;
    }
    else {
        return false;
    }
}
//Eredmény kiírató
function TAJEllKiir(TAJszam) {
    if (TAJEll(TAJszam)) {
        console.log("Helyes szám!");
    }
    else {
        console.log("Hibás szám!");
    }
}
TAJEllKiir(TAJ1);
/// TAJ szám generátor
function TAJGenerator() {
    var TAJszam = "";
    for (var i = 0; i < 8; i++) {
        TAJszam += Math.floor(Math.random() * 10).toString();
    }
    var reszOsszeg = TAJSzorzatOsszeg(TAJszam);
    TAJszam += reszOsszeg % 10;
    console.log("Generált TAJ: " + TAJszam);
    return TAJszam;
}
TAJEllKiir(TAJGenerator());
TAJEllKiir(TAJGenerator());
TAJEllKiir(TAJGenerator());
