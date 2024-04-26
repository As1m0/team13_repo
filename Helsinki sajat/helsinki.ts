let helsinki: string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
]


//2. feladat

interface Helsinki {
    helyezes: number,
    sprotolokSzama: number,
    sportag: string,
    versenyszam: string
}

function adatokBeolvasasa(vizsgaltTomb: string[]): Helsinki[] {
    let beolvasottAdatok: Helsinki[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let daraboltAdatok: string[] = vizsgaltTomb[i].split(" ");
        let aktualisAdat: Helsinki = {
            helyezes: Number(daraboltAdatok[0]),
            sprotolokSzama: Number(daraboltAdatok[1]),
            sportag: daraboltAdatok[2],
            versenyszam: daraboltAdatok[3]
        }
        beolvasottAdatok.push(aktualisAdat);
    }
    return beolvasottAdatok;
}

let HelsinkiAdatok: Helsinki[] = adatokBeolvasasa(helsinki);
console.log(HelsinkiAdatok);


//3. feladat

function pontszerzoHelyezesekSzama(HelsinkiAdatok: Helsinki[]): number {
    return HelsinkiAdatok.length;
}

function pontszerzoHelyezesekSzamaKiir(eredmeny: number): void {
    document.write("3. Feladat<br>");
    document.write("Pontszerző helyezések száma: " + eredmeny);
    document.write("<br>");
}

pontszerzoHelyezesekSzamaKiir(pontszerzoHelyezesekSzama(HelsinkiAdatok));



//4. feladat

interface Helyezesek {
    arany: number,
    ezust: number,
    bronz: number,
    osszErmek: number
}

function helyezesek(HelsinkiAdatok: Helsinki[]): Helyezesek {
    let szerzettErmek: Helyezesek = {
        arany: 0,
        ezust: 0,
        bronz: 0,
        osszErmek: 0
    }
    for (let i: number = 0; i < HelsinkiAdatok.length; i++) {
        if (HelsinkiAdatok[i].helyezes === 1) {
            szerzettErmek.arany++;
        } else if (HelsinkiAdatok[i].helyezes === 2) {
            szerzettErmek.ezust++;
        } else if (HelsinkiAdatok[i].helyezes === 3) {
            szerzettErmek.bronz++;
        }
    }
    szerzettErmek.osszErmek = szerzettErmek.arany + szerzettErmek.ezust + szerzettErmek.bronz;
    return szerzettErmek;
}

function helyezesekKiir(kiirandoErtek: Helyezesek): void {
    document.write("4. Feladat<br>");
    document.write("Arany: " + kiirandoErtek.arany + "<br>");
    document.write("Ezüst: " + kiirandoErtek.ezust + "<br>");
    document.write("Bronz: " + kiirandoErtek.bronz + "<br>");
    document.write("Összesen: " + kiirandoErtek.osszErmek);
    document.write("<br>");

}

helyezesekKiir(helyezesek(HelsinkiAdatok));



//5. feladat

function OlimpiaiPontokSzama(HelsinkiAdatok: Helsinki[]): number {
    let OsszpontSzam: number = 0;
    for (let i: number = 0; i < HelsinkiAdatok.length; i++) {
        if (HelsinkiAdatok[i].helyezes === 1) {
            OsszpontSzam += 7;
        } else if (HelsinkiAdatok[i].helyezes === 2) {
            OsszpontSzam += 5;
        } else if (HelsinkiAdatok[i].helyezes === 3) {
            OsszpontSzam += 4;
        } else if (HelsinkiAdatok[i].helyezes === 4) {
            OsszpontSzam += 3;
        } else if (HelsinkiAdatok[i].helyezes === 5) {
            OsszpontSzam += 2;
        } else if (HelsinkiAdatok[i].helyezes === 6) {
            OsszpontSzam += 1;
        }
    }
    return OsszpontSzam;
}

function OlimpiaiPontokSzamaKiir(osszpontszam: number): void {
    document.write("5. Feladat<br>");
    document.write("Olimpiai pontok száma: " + osszpontszam);
    document.write("<br>");
}

OlimpiaiPontokSzamaKiir(OlimpiaiPontokSzama(HelsinkiAdatok));



//6. feladat

function MelySportagbanVoltTobbErem(HelsinkiAdatok: Helsinki[]): [number, number] {
    let ermekSzama: [number, number] = [0, 0]; //uszas, torna
    for (let i: number = 0; i < HelsinkiAdatok.length; i++) {
        if (HelsinkiAdatok[i].sportag === "uszas" && HelsinkiAdatok[i].helyezes < 4) {
            ermekSzama[0]++;
        } else if (HelsinkiAdatok[i].sportag === "torna" && HelsinkiAdatok[i].helyezes < 4) {
            ermekSzama[1]++;
        }
    }
    return ermekSzama;
}

function MelySportagbanVoltTobbEremKiir(eredmenyek: [number, number]): void {
    document.write("6. Feladat<br>");
    if (eredmenyek[0] > eredmenyek[1]) {
        document.write("Úszás sportágban szereztek több érmet.");
    } else if (eredmenyek[0] < eredmenyek[1]) {
        document.write("Torna sportágban szereztek több érmet.");
    } else {
        document.write("Egyenlő volt az érmek száma");
    }
    document.write("<br>");
}

MelySportagbanVoltTobbEremKiir(MelySportagbanVoltTobbErem(HelsinkiAdatok));



//7. feladat

function helsinkiAdatok2(helsinki: string[]): string[] {
    let HelsinkiAdatok2: string[] = [];

    for (let i: number = 0; i < helsinki.length; i++) {
        let daraboltAdatSor: string[] = helsinki[i].split(" ");
        //Elírás kijavítása
        daraboltAdatSor[2].replace("kajakkenu", "kajak-kenu");
        //Olimpiai pont kiszámítása
        let OsszpontSzam: number = 0;
        if (daraboltAdatSor[0] == "1") {
            OsszpontSzam = 7;
        } else if (daraboltAdatSor[0] == "2") {
            OsszpontSzam = 5;
        } else if (daraboltAdatSor[0] == "3") {
            OsszpontSzam = 4;
        } else if (daraboltAdatSor[0] == "4") {
            OsszpontSzam = 3;
        } else if (daraboltAdatSor[0] == "5") {
            OsszpontSzam = 2;
        } else if (daraboltAdatSor[0] == "6") {
            OsszpontSzam = 1;
        }
        //pontszám beszúrása
        daraboltAdatSor.splice(2, 0, OsszpontSzam.toString());

        let egybefuzottAdat: string = daraboltAdatSor.join(" ");
        HelsinkiAdatok2.push(egybefuzottAdat);
    }
    return HelsinkiAdatok2;
}

let helsinki2: string[] = helsinkiAdatok2(helsinki);
console.log(helsinki2);

//8. feladat - index keresés

function legtobbSportolo(HelsinkiAdatok: Helsinki[]): number {
    let keresettIndex: number = 0;
    for (let i: number = 1; i < HelsinkiAdatok.length; i++) {
        if (HelsinkiAdatok[i].sprotolokSzama > HelsinkiAdatok[keresettIndex].sprotolokSzama) {
            keresettIndex = i;
        }
    }
    return keresettIndex;
}

function legtobbSportoloKiir(HelsinkiAdatok:Helsinki[], kapottIndex:number):void{
    document.write("8. Feladat<br>");
    document.write("Helyezés: "+HelsinkiAdatok[kapottIndex].helyezes+"<br>");
    document.write("Sportág: "+HelsinkiAdatok[kapottIndex].sportag+"<br>");
    document.write("Versenyszám: "+HelsinkiAdatok[kapottIndex].versenyszam+"<br>");
    document.write("Sportolók száma: "+HelsinkiAdatok[kapottIndex].sprotolokSzama+"<br>");
    document.write("<br>");
}

legtobbSportoloKiir(HelsinkiAdatok,legtobbSportolo(HelsinkiAdatok));