interface FifaAdat {
    nev: string,
    helyezes: number,
    valtozas: number,
    pont: number
}

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

function ObjektumFeltolto(Elem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i = 0; i < Elem.length; i++) {
        let daraboltAdatok = Elem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}

let fifaAdatok: FifaAdat[] = ObjektumFeltolto(csapatAdat);


//1 feladat
function csapatokSzama(fifaAdatok: FifaAdat[]): number {
    return fifaAdatok.length;
}

console.log("Csapatok száma: " + csapatokSzama(fifaAdatok));


//2 feladat
function atlagPontszam(fifaAdatok: FifaAdat[]): number {
    let osszpontszam: number = 0;
    for (let i = 0; i < fifaAdatok.length; i++) {
        osszpontszam += fifaAdatok[i].pont;
    }
    return osszpontszam / csapatokSzama(fifaAdatok);
}

console.log("Csaptok átlagpontszáma: " + atlagPontszam(fifaAdatok));

//3 feladat

function atlagonFeluliek(fifaAdatok: FifaAdat[]): string[] {
    let AtlagPontszam: number = atlagPontszam(fifaAdatok);
    let atlagonFeluliCsapatok: string[] = [];
    for (let i = 0; i < fifaAdatok.length; i++) {
        if (fifaAdatok[i].pont > AtlagPontszam) {
            atlagonFeluliCsapatok.push(fifaAdatok[i].nev);
        }
    }
    return atlagonFeluliCsapatok;
}

console.log("Átlagon felüli csapatok listája: " + atlagonFeluliek(fifaAdatok));


//4. feladat
function legtobbetJavitoCsapat(fifaAdatok: FifaAdat[]): number {
    let legtobbetJavitoCsapatAdatai: FifaAdat[];
    let keresettIndex: number = 0;
    for (let i = 0; i < fifaAdatok.length; i++) {
        if (fifaAdatok[i].valtozas > fifaAdatok[keresettIndex].valtozas) {
            keresettIndex = i;
        }
    }
    return keresettIndex;
}

console.log("A legtöbbet javító csapat adatai: "
    + fifaAdatok[legtobbetJavitoCsapat(fifaAdatok)].nev + ", "
    + fifaAdatok[legtobbetJavitoCsapat(fifaAdatok)].helyezes + ", "
    + fifaAdatok[legtobbetJavitoCsapat(fifaAdatok)].pont);

//5.feladat

function adottOrszagSzerepelE(fifaAdatok: FifaAdat[], keresettOrszag: string) {
    for (let i = 0; i < fifaAdatok.length; i++) {
        if (fifaAdatok[i].nev == keresettOrszag) {
            return true;
        }
    }
    return false;
}

console.log("Adott ország szerepelE? " + adottOrszagSzerepelE(fifaAdatok,"Magyarország"));


//6. feladat


function ValtozasTipusok(fifaAdatok: FifaAdat[]):number[] {
    let valtozasTipusok:number[] = [];
    for (let i = 0; i < fifaAdatok.length; i++) {
        let szerepelE:boolean = false;
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (fifaAdatok[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            valtozasTipusok.push(fifaAdatok[i].valtozas);
        }
    }
    return valtozasTipusok;
}

function ValtozasokMennyisege(fifaAdatok: FifaAdat[], valtozasTipusok:number[]):number[] {
    let valtozasokMennyisege:number[] = [];
    for (let i = 0; i < valtozasTipusok.length; i++) {
        valtozasokMennyisege.push(0);
    }
    for (let i = 0; i < fifaAdatok.length; i++) {
        for (let j = 0; j < valtozasTipusok.length; j++) {
            if (fifaAdatok[i].valtozas == valtozasTipusok[j]) {
                valtozasokMennyisege[j]++;
            }
        }
    }
    return valtozasokMennyisege;
}


let valtozasok:number[] = ValtozasTipusok(fifaAdatok);
let mennyisegek:number[] = ValtozasokMennyisege(fifaAdatok, valtozasok);
let statisztika:number[] = [valtozasok, mennyisegek];

console.log(statisztika);