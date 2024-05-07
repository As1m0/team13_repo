function EredmenyekKonvertalasa(eredmenyek) {
    var konvertaltEredmenyek = [];
    for (var i = 0; i < eredmenyek.length; i++) {
        var daraboltAdatSor = eredmenyek[i].split(";");
        var ujAdat = {
            hazai: daraboltAdatSor[0],
            idegen: daraboltAdatSor[1],
            hazaiPont: Number(daraboltAdatSor[2]),
            idegenPont: Number(daraboltAdatSor[3]),
            helyszin: daraboltAdatSor[4],
            idopont: daraboltAdatSor[5]
        };
        konvertaltEredmenyek.push(ujAdat);
    }
    return konvertaltEredmenyek;
}
var KosarEredmenyek = EredmenyekKonvertalasa(eredmenyek);
//3. feladat
function adottCsapatMerkozesSzama(KosarEredmenyek, keresettCsapat) {
    var hazaiMerkozesekSzama = 0;
    var idegenMerkozesekSzama = 0;
    for (var i = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazai === keresettCsapat) {
            hazaiMerkozesekSzama++;
        }
        else if (KosarEredmenyek[i].idegen === keresettCsapat) {
            idegenMerkozesekSzama++;
        }
    }
    return [keresettCsapat, hazaiMerkozesekSzama, idegenMerkozesekSzama];
}
function adottCsapatMerkozesSzamaKiir(merkozesek) {
    document.write("3. feladat: " + merkozesek[0] + ": " + "Hazai: " + merkozesek[1] + ", Idegen: " + merkozesek[2]);
}
adottCsapatMerkozesSzamaKiir(adottCsapatMerkozesSzama(KosarEredmenyek, "Real Madrid"));
document.write("<br>");
//4. feladat
function VoltEDontetlen(KosarEredmenyek) {
    var dontetlen = false;
    for (var i = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazaiPont === KosarEredmenyek[i].idegenPont) {
            dontetlen = true;
        }
    }
    return dontetlen;
}
function VoltEDontetlenKiir(voltE) {
    if (voltE) {
        document.write("4. feladat: Volt döntetlen? igen");
    }
    else {
        document.write("4. feladat: Volt döntetlen? nem");
    }
}
VoltEDontetlenKiir(VoltEDontetlen(KosarEredmenyek));
document.write("<br>");
//5. feladat
function BarcelonaTeljesNeve(KosarEredmenyek) {
    var teljesNev = "";
    for (var i = 0; i < KosarEredmenyek.length; i++) {
        if (KosarEredmenyek[i].hazai.includes("Barcelona") ||
            KosarEredmenyek[i].idegen.includes("Barcelona") ||
            KosarEredmenyek[i].helyszin.includes("Barcelona")) {
            teljesNev = KosarEredmenyek[i].hazai;
        }
    }
    return teljesNev;
}
function BarcelonaTeljesNeveKiir(teljesNev) {
    document.write("5. feladat: barceloniai csapat teljes neve: " + teljesNev);
}
BarcelonaTeljesNeveKiir(BarcelonaTeljesNeve(KosarEredmenyek));
document.write("<br>");
function MelyCsapatokJatszottakAdottIdopontban(KosarEredmenyek, adottIdopont) {
    var adottCsapatok = [];
    for (var i = 0; i < KosarEredmenyek.length; i++) {
        var aktIdopont = KosarEredmenyek[i].idopont.replaceAll("-", ".");
        if (aktIdopont === adottIdopont) {
            var aktcsapat = {
                hazaiCsapat: KosarEredmenyek[i].hazai,
                idegenCsapat: KosarEredmenyek[i].idegen,
                hazaiEredmeny: Number(KosarEredmenyek[i].hazaiPont),
                idegenEredmeny: Number(KosarEredmenyek[i].idegenPont)
            };
            adottCsapatok.push(aktcsapat);
        }
    }
    return adottCsapatok;
}
function hatodikFeladatKiir(csapatok) {
    document.write("6. feladat:");
    document.write('<ul style="list-style-type: none">');
    for (var i = 0; i < csapatok.length; i++) {
        document.write("<li>" + csapatok[i].hazaiCsapat + " " + csapatok[i].idegenCsapat + " (" + csapatok[i].hazaiEredmeny + ":" + csapatok[i].idegenEredmeny + ")" + "</li>");
    }
    document.write("</ul>");
}
hatodikFeladatKiir(MelyCsapatokJatszottakAdottIdopontban(KosarEredmenyek, "2004.11.21"));
document.write("<br>");
function StadionokKeresese(KosarEredmenyek) {
    var talaltStadionok = [];
    //Összes stadion összegyűjtése
    for (var i = 0; i < KosarEredmenyek.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < talaltStadionok.length; j++) {
            if (talaltStadionok[j].nev === (KosarEredmenyek[i].helyszin)) {
                szerepelE = true;
            }
        }
        if (!szerepelE) {
            var aktStadion = {
                nev: KosarEredmenyek[i].helyszin,
                merkozesek: 0
            };
            talaltStadionok.push(aktStadion);
        }
    }
    //mérkőzések megszámlálása
    for (var k = 0; k < KosarEredmenyek.length; k++) {
        for (var l = 0; l < talaltStadionok.length; l++) {
            if (KosarEredmenyek[k].helyszin === talaltStadionok[l].nev) {
                talaltStadionok[l].merkozesek++;
            }
        }
    }
    //20-nál kevesebb mérkőzéses stadion törlése
    for (var m = talaltStadionok.length - 1; m >= 0; m--) {
        if (talaltStadionok[m].merkozesek < 20) {
            talaltStadionok.splice(m, 1);
        }
    }
    return talaltStadionok;
}
function StadionokKereseseKiir(kiirandoStadionok) {
    document.write("7. feladat:");
    document.write('<ul style="list-style-type: none">');
    for (var i = 0; i < kiirandoStadionok.length; i++) {
        document.write("<li>" + kiirandoStadionok[i].nev + ": " + kiirandoStadionok[i].merkozesek + "</li>");
    }
    document.write("</ul>");
}
StadionokKereseseKiir(StadionokKeresese(KosarEredmenyek));
