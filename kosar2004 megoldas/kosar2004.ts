//2. feladat
interface kosarEredmenyek {
    hazai: string,
    idegen: string,
    hazaiPont: number,
    idegenPont: number,
    helyszin: string,
    idopont: string
}

function EredmenyekKonvertalasa(eredmenyek: string[]): kosarEredmenyek[] {
    let konvertaltEredmenyek: kosarEredmenyek[] = [];
    for (let i: number = 0; i < eredmenyek.length; i++) {
        let daraboltAdatSor: string[] = eredmenyek[i].split(";");
        let ujAdat: kosarEredmenyek = {
            hazai: daraboltAdatSor[0],
            idegen: daraboltAdatSor[1],
            hazaiPont: Number(daraboltAdatSor[2]),
            idegenPont: Number(daraboltAdatSor[3]),
            helyszin: daraboltAdatSor[4],
            idopont: daraboltAdatSor[5]
        }
        konvertaltEredmenyek.push(ujAdat);
    }
    return konvertaltEredmenyek;
}

const KosarEredmenyek: kosarEredmenyek[] = EredmenyekKonvertalasa(eredmenyek);



//3. feladat
function adottCsapatMerkozesSzama(KosarEredmenyek: kosarEredmenyek[], keresettCsapat: string): [string, number, number] {
    let hazaiMerkozesekSzama: number = 0;
    let idegenMerkozesekSzama: number = 0;
    for (let i: number = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazai === keresettCsapat) {
            hazaiMerkozesekSzama++;
        } else if (KosarEredmenyek[i].idegen === keresettCsapat) {
            idegenMerkozesekSzama++;
        }
    }
    return [keresettCsapat, hazaiMerkozesekSzama, idegenMerkozesekSzama];
}

function adottCsapatMerkozesSzamaKiir(merkozesek: [string, number, number]): void {
    document.write("3. feladat: " + merkozesek[0] + ": " + "Hazai: " + merkozesek[1] + ", Idegen: " + merkozesek[2]);
}

adottCsapatMerkozesSzamaKiir(adottCsapatMerkozesSzama(KosarEredmenyek, "Real Madrid"));
document.write("<br>");

//4. feladat
function VoltEDontetlen(KosarEredmenyek: kosarEredmenyek[]): boolean {
    let dontetlen: boolean = false;
    for (let i: number = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazaiPont === KosarEredmenyek[i].idegenPont) {
            dontetlen = true;
        }
    }
    return dontetlen;
}

function VoltEDontetlenKiir(voltE: boolean): void {
    if (voltE) {
        document.write("4. feladat: Volt döntetlen? igen");
    } else {
        document.write("4. feladat: Volt döntetlen? nem");
    }
}

VoltEDontetlenKiir(VoltEDontetlen(KosarEredmenyek));
document.write("<br>");

//5. feladat
function BarcelonaTeljesNeve(KosarEredmenyek: kosarEredmenyek[]): string {
    let teljesNev: string = "";
    for (let i: number = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazai.includes("Barcelona") ||
            KosarEredmenyek[i].idegen.includes("Barcelona") ||
            KosarEredmenyek[i].helyszin.includes("Barcelona")) {
            teljesNev = KosarEredmenyek[i].hazai;
        }
    }
    return teljesNev;
}

function BarcelonaTeljesNeveKiir(teljesNev: string): void {
    document.write("5. feladat: barceloniai csapat teljes neve: " + teljesNev);
}

BarcelonaTeljesNeveKiir(BarcelonaTeljesNeve(KosarEredmenyek));
document.write("<br>");


//6. feladat
interface jatszottCsapatok {
    hazaiCsapat: string,
    idegenCsapat: string,
    hazaiEredmeny: number,
    idegenEredmeny: number
}

function MelyCsapatokJatszottakAdottIdopontban(KosarEredmenyek: kosarEredmenyek[], adottIdopont: string): jatszottCsapatok[] {
    let adottCsapatok: jatszottCsapatok[] = [];
    for (let i: number = 0; i < KosarEredmenyek.length; i++) {
        let aktIdopont: string = KosarEredmenyek[i].idopont.replaceAll("-", ".");
        if (aktIdopont === adottIdopont) {
            let aktcsapat: jatszottCsapatok = {
                hazaiCsapat: KosarEredmenyek[i].hazai,
                idegenCsapat: KosarEredmenyek[i].idegen,
                hazaiEredmeny: Number(KosarEredmenyek[i].hazaiPont),
                idegenEredmeny: Number(KosarEredmenyek[i].idegenPont)
            }
            adottCsapatok.push(aktcsapat);
        }
    }
    return adottCsapatok;
}

function hatodikFeladatKiir(csapatok: jatszottCsapatok[]): void {
    document.write("6. feladat:");
    document.write('<ul style="list-style-type: none">');
    for (let i: number = 0; i < csapatok.length; i++) {
        document.write("<li>" + csapatok[i].hazaiCsapat + " " + csapatok[i].idegenCsapat + " (" + csapatok[i].hazaiEredmeny + ":" + csapatok[i].idegenEredmeny + ")" + "</li>");
    }
    document.write("</ul>");
}

hatodikFeladatKiir(MelyCsapatokJatszottakAdottIdopontban(KosarEredmenyek, "2004.11.21"));
document.write("<br>");


//7. feladat
interface stadionok {
    nev: string,
    merkozesek: number
}

function StadionokKeresese(KosarEredmenyek: kosarEredmenyek[]): stadionok[] {
    let talaltStadionok: stadionok[] = [];
    //Összes stadion összegyűjtése
    for (let i: number = 0; i < KosarEredmenyek.length; i++) {
        let szerepelE: boolean = false;
        for (let j: number = 0; j < talaltStadionok.length; j++) {
            if (talaltStadionok[j].nev === (KosarEredmenyek[i].helyszin)) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            let aktStadion: stadionok = {
                nev: KosarEredmenyek[i].helyszin,
                merkozesek: 0
            }
            talaltStadionok.push(aktStadion);
        }
    }
    //mérkőzések megszámlálása
    for (let k: number = 0; k < KosarEredmenyek.length; k++) {
        for (let l: number = 0; l < talaltStadionok.length; l++) {
            if (KosarEredmenyek[k].helyszin === talaltStadionok[l].nev){
                talaltStadionok[l].merkozesek++;
            }
        }
    }
 
    //20-nál kevesebb mérkőzéses stadion törlése
    for (let m: number = talaltStadionok.length - 1; m >= 0; m--){
        if (talaltStadionok[m].merkozesek < 20){
            talaltStadionok.splice(m, 1);
        }
    }


    return talaltStadionok;
}

function StadionokKereseseKiir(kiirandoStadionok:stadionok[]):void{
    document.write("7. feladat:");
    document.write('<ul style="list-style-type: none">');
    for (let i: number = 0; i < kiirandoStadionok.length; i++) {
        document.write("<li>" + kiirandoStadionok[i].nev + ": " + kiirandoStadionok[i].merkozesek+"</li>");
    }
    document.write("</ul>");
}


StadionokKereseseKiir(StadionokKeresese(KosarEredmenyek));

