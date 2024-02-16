//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

function ObjektumFeltolto(feltoltendoElem) {
    let beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let objektum = {};
        let daraboltAdatSor = feltoltendoElem[i].split(";");
        objektum.nev = daraboltAdatSor[0];
        objektum.helyezes = Number(daraboltAdatSor[1]);
        objektum.valtozas = Number(daraboltAdatSor[2]);
        objektum.pont = Number(daraboltAdatSor[3]);
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
const fifaAdatok = ObjektumFeltolto(csapatAdat);

//1. feladat

function csapatokSzama(array) {
    return array.length;
}

function csapatokSzamaKiir() {
    document.querySelector("#f1p").innerHTML = "A csapatok száma: " + csapatokSzama(fifaAdatok);
}

const btn1 = document.querySelector("#f1Btn");
btn1.addEventListener("click", csapatokSzamaKiir);

//2. feladat

function atlagPontszam(array) {
    let Osszpontszam = 0;
    for (let i = 0; i < array.length; i++) {
        Osszpontszam += array[i].pont;
    }
    return Math.floor(Osszpontszam / array.length);
}

function atlagPontszamKiir() {
    document.querySelector("#f2p").textContent = "A csapatok átlagpontszáma: " + atlagPontszam(fifaAdatok) + " pont";
}

const btn2 = document.querySelector("#f2Btn");
btn2.addEventListener("click", atlagPontszamKiir);

//3. feladat

function atlagFelettiCsapatok(array) {
    let altagPontszam = atlagPontszam(fifaAdatok);
    let atlagFelettiek = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].pont > altagPontszam) {
            let object = {};
            object.nev = array[i].nev;
            object.pont = array[i].pont;
            atlagFelettiek.push(object);
        }
    }
    return atlagFelettiek;
}

function atlagFelettiCsapatokKiir() {
    let object = atlagFelettiCsapatok(fifaAdatok);
    let table = document.querySelector("#f3table");
    for (let i = 0; i < object.length; i++) {
        let adatSor = table.insertRow(1);
        let nev = adatSor.insertCell(0);
        let pont = adatSor.insertCell(1);
        nev.innerHTML = object[i].nev;
        pont.innerHTML = object[i].pont;

    }
}

const btn3 = document.querySelector("#f3Btn");
btn3.addEventListener("click", atlagFelettiCsapatokKiir);

//4. feladat

function legtobbetJavitoCsapat(array) {
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i].helyezes > array[index].helyezes) {
            index = i;
        }
    }
    console.log(array[index]);
    return array[index];
}

function legtobbetJavitoCsapatKiir() {
    let csapat = legtobbetJavitoCsapat(fifaAdatok);
    let table = document.querySelector("#f4table");
    let adatSor = table.insertRow(1);
    let helyezes = adatSor.insertCell(0);
    let nev = adatSor.insertCell(1);
    let pont = adatSor.insertCell(2);
    helyezes.innerHTML = csapat.helyezes;
    nev.innerHTML = csapat.nev;
    pont.innerHTML = csapat.pont;
}

const btn4 = document.querySelector("#f4Btn");
btn4.addEventListener("click", legtobbetJavitoCsapatKiir);

//5. feladat

function szerepelE(array) {
    let keresendoNev = document.querySelector("#f5-input").value;
    let output= false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].nev.toLowerCase() === keresendoNev.toLowerCase()) {
            output = true;
        }
    }
    return output;
}

function szerepelEKiir() {
    let eredmenyMezo = document.querySelector("#f5p");
    if (document.querySelector("#f5-input").value == "") {
        eredmenyMezo.innerHTML = "Adjon meg országot!";
    } else {
        if (szerepelE(fifaAdatok)) {
            eredmenyMezo.innerHTML = "Szerepel";
        } else {
            eredmenyMezo.innerHTML = "Nem szerepel";
        }
    }
}

const btn5 = document.querySelector("#f5Btn");
btn5.addEventListener("click", szerepelEKiir);

//6. feladat

function valtozasStatisztika(array) {
    let valtozasok = [];
    for (let i = 0; i < array.length; i++) {
        let szerepelE = false;
        for (let k = 0; k < valtozasok.length; k++) {
            if (array[i].valtozas == valtozasok[k]) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            valtozasok.push(array[i].valtozas);
        }
    }
    return valtozasok;
}

function orszagSzamlalo(array, valtozasok) {
    let evMennyiseg = [];
    for (let i = 0; i < valtozasok.length; i++) {
        evMennyiseg.push(0);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < valtozasok.length; j++) {
            if (valtozasok[j] == array[i].valtozas) {
                evMennyiseg[j]++;
            }
        }
    }
    return evMennyiseg;
}

function valtozasStatisztikaKiir() {

    let valtozasok= valtozasStatisztika(fifaAdatok);
    let szamlalo = orszagSzamlalo(fifaAdatok, valtozasok);
    let array = [];
    for (let i=0; i<valtozasok.length; i++){
        let object = {};
        object.valt = valtozasok[i];
        object.orszagSzam = szamlalo[i];
        array.push(object);
    }

    let table = document.querySelector("#f6table");
    for (let i = 0; i < array.length; i++) {
        let adatSor = table.insertRow(1);
        let pont = adatSor.insertCell(0);
        let orszagSz = adatSor.insertCell(1);
        pont.innerHTML = array[i].valt;
        orszagSz.innerHTML = array[i].orszagSzam;
    }
}

const btn6 = document.querySelector("#f6Btn");
btn6.addEventListener("click", valtozasStatisztikaKiir);