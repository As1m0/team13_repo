const szavazatok = [
    { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
    { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
    { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
    { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
    { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
    { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
    { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
    { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
    { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
    { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
    { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
    { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
    { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
    { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
    { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
    { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
    { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
    { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
    { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
    { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
    { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
    { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
    { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
    { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
    { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
    { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
    { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
    { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
    { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
    { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
    { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
    { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
    { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
    { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
    { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
    { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
    { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
    { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
    { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
    { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];

//NAVIGATION
FeladatMutat(1);

function FeladatMutat(feladatAzonosito) {
    for (let i = 1; i <= 7; i++) {
        if (i != feladatAzonosito) {
            document.querySelector(`#feladat0${i}blokk`).style.display = "none";
            document.querySelector(`#feladat0${i}`).classList.remove("active");
        }
        else {
            document.querySelector(`#feladat0${i}blokk`).style.display = "block";
            document.querySelector(`#feladat0${i}`).classList.add("active");
        }
    }
}

function F1mutat() {
    FeladatMutat(1);
}
const navButton1 = document.querySelector("#feladat01");
navButton1.addEventListener("click", F1mutat);

function F2mutat() {
    FeladatMutat(2);
}
const navButton2 = document.querySelector("#feladat02");
navButton2.addEventListener("click", F2mutat);

function F3mutat() {
    FeladatMutat(3);
}
const navButton3 = document.querySelector("#feladat03");
navButton3.addEventListener("click", F3mutat);

function F4mutat() {
    FeladatMutat(4);
}
const navButton4 = document.querySelector("#feladat04");
navButton4.addEventListener("click", F4mutat);

function F5mutat() {
    FeladatMutat(5);
}
const navButton5 = document.querySelector("#feladat05");
navButton5.addEventListener("click", F5mutat);

function F6mutat() {
    FeladatMutat(6);
}
const navButton6 = document.querySelector("#feladat06");
navButton6.addEventListener("click", F6mutat);

function F7mutat() {
    FeladatMutat(7);
}
const navButton7 = document.querySelector("#feladat07");
navButton7.addEventListener("click", F7mutat);


//1. feladat
function kepviselokSzama(array) {
    document.querySelector('#megoldas1-szoveg').textContent = "A helyhatósági választáson " + array.length + " képviselő indult.";
}

//2. feladat

function listaGeneralas(array) {
    //pártok kiválogatása
    let partok = [];
    for (let i = 0; i < array.length; i++) {
        szerepelE = false;
        for (let j = 0; j < partok.length; j++) {
            if (array[i].part === partok[j]) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            partok.push(array[i].part);
        }
    }
    //párt-lista generálása
    const lenyiloLista = document.querySelector('#partokListaja');
    for (let k = 0; k < partok.length; k++) {
        let opt = partok[k];
        let element = document.createElement("option");
        element.textContent = opt;
        element.value = opt;
        lenyiloLista.appendChild(element);

    }
}

listaGeneralas(szavazatok);

//képviselők számlálása és kiiratása
function adottPartKepviselokSzama(array) {
    const valasztottPart = document.querySelector('#partokListaja').value;
    let kepviselokSzama = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].part === valasztottPart) {
            kepviselokSzama++;
        }
    }
    if (valasztottPart === "-") {
        document.querySelector('#megoldas2-szoveg').textContent = "Független pártként " + kepviselokSzama + " képviselő indult a választáson";
    } else {
        document.querySelector('#megoldas2-szoveg').textContent = "A " + valasztottPart + " párt " + kepviselokSzama + " képviselőt indított a választáson";
    }
}

//3. feladat

//gomb letiltása üres beviteli mezőre
const keresettKepviselo = document.querySelector("#keresettKepviselo");
const button3Megoldas = document.querySelector("#button3Megoldas");
document.onkeyup = function () {
    if (keresettKepviselo.value.length <= 4) {
        button3Megoldas.disabled = true;
        document.querySelector("#megoldas3-szoveg").textContent = "";
    } else {
        button3Megoldas.disabled = false;
    }
}
//képviselő keresése, szavazat kiiratása
function AdottKepviseloSzavazatszama(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nev.trim() == keresettKepviselo.value) {
            document.querySelector("#megoldas3-szoveg").textContent = keresettKepviselo.value + " " + array[i].szavazat + " szavazatot kapott.";
            return
        } else {
            document.querySelector("#megoldas3-szoveg").textContent = "Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!";
        }
    }
}

//4. feladat

function szavazatokAdatai(array) {
    let szavazatokSzama = 0;
    for (let i = 0; i < array.length; i++) {
        szavazatokSzama += array[i].szavazat;
    }
    let raszvateliArany = (szavazatokSzama / 12345 * 100).toFixed(2);
    document.querySelector("#megoldas4-szoveg").innerHTML = "A választáson <b>" + szavazatokSzama + "</b> állampolgár, a jogosultak <b>" + raszvateliArany + "</b>%-a vett részt.";
}


//5. feladat

//partok kiválogatása
function partokKivalogatasa(array) {
    let partok = [];
    for (let i = 0; i < array.length; i++) {
        szerepelE = false;
        for (let j = 0; j < partok.length; j++) {
            if (array[i].part === partok[j]) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            partok.push(array[i].part);
        }
    }
    return partok.sort();
}

//szavazatok összeszámlálása
function SzavazatokMennyisege(partok, array) {
    let szavazatokSzama = [];
    for (let i = 0; i < partok.length; i++) {
        let osszeg = 0;
        for (let j = 0; j < array.length; j++) {
            if (partok[i] == array[j].part) {
                osszeg += array[j].szavazat;
            }
        }
        szavazatokSzama.push(osszeg);
    }
    return szavazatokSzama;
}

function partSzavazatokSzamaKiir() {
    //két tömb összevonása objectes tömbbé
    let partokNevei = partokKivalogatasa(szavazatok);
    let szavazatokSzamlalo = SzavazatokMennyisege(partokKivalogatasa(szavazatok), szavazatok);
    let osszevontTomb = [];
    for (let i = 0; i < partokNevei.length; i++) {
        let object = {};
        object.part = partokNevei[i];
        object.szavazatok = szavazatokSzamlalo[i];
        osszevontTomb.push(object);
    }
    //egyszeri generálás védelem    
    const table = document.querySelector("#feladat5tabla");
    table.style.display = "table";
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    //táblázat generálása
    for (let i = 0; i < osszevontTomb.length; i++) {
        let adatSor = table.insertRow(1);
        let part = adatSor.insertCell(0);
        let szavazat = adatSor.insertCell(1);
        if (osszevontTomb[i].part == "-") {
            part.innerHTML = "Független";
        } else {
            part.innerHTML = osszevontTomb[i].part;
        }
        szavazat.innerHTML = osszevontTomb[i].szavazatok;
    }
}

//3 óra munka eddig

//6. feladat

//legjobbak kiválogatása
function LegtobbSzavazat(array) {
    let keresettIndex = 0;
    let maxSzavazat = 0;
    let legjobbak = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i].szavazat > array[keresettIndex].szavazat) {
            keresettIndex = i;
            maxSzavazat = array[i].szavazat;
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j].szavazat == maxSzavazat)
            legjobbak.push(array[j]);
    }
    return legjobbak;
}
//legjobbak kiiratása
function LegtobbSzavazatKiir() {
    const kiirtSzoveg = document.querySelector('#megoldas6-szoveg');
    let legjobbak = LegtobbSzavazat(szavazatok);
    if (kiirtSzoveg.children.length == 0) {
        for (let i = 0; i < legjobbak.length; i++) {
            if (legjobbak[i].part == "-") {
                kiirtSzoveg.innerHTML += "<li>" + legjobbak[i].nev + " - Független</li>";
            } else {
                kiirtSzoveg.innerHTML += "<li>" + legjobbak[i].nev + " - " + legjobbak[i].part + "</li>";
            }
        }
    }
}

//7. feladat

function korzetekSzama(array) {
    let korzetekSzama = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].korzet > korzetekSzama) {
            korzetekSzama = array[i].korzet;
        }
    }
    return korzetekSzama;
}

function nyertesek(korzetekSzama, array) {
    let nyertesek = [];
    for (let i = 1; i <= korzetekSzama; i++) {
        let keresettIndex = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[keresettIndex].szavazat < array[j].szavazat && array[j].korzet == i) {
                keresettIndex = j;
            }
        }
        nyertesek.push(array[keresettIndex]);
    }
    return nyertesek;
}

function nyertesekKiir() {
    let nyertesekTomb = nyertesek(korzetekSzama(szavazatok), szavazatok);
    const table = document.querySelector("#feladat7tabla");
    table.style.display = "table";
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    nyertesekTomb.reverse();

    for (let i = 0; i < nyertesekTomb.length; i++) {
        let adatSor = table.insertRow(1);
        let kerulet = adatSor.insertCell(0);
        let nev = adatSor.insertCell(1);
        let part = adatSor.insertCell(2);
        let szavazat = adatSor.insertCell(3);
        kerulet.innerHTML = nyertesekTomb[i].korzet;
        nev.innerHTML = nyertesekTomb[i].nev;
        part.innerHTML = nyertesekTomb[i].part;
        szavazat.innerHTML = nyertesekTomb[i].szavazat;
    }
}

