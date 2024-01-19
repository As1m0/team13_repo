function PrimEljaras() {
    let oszto = 0;
    let szam = Number(prompt('Add meg a vizsgálandó számot!'));
    for (let i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        document.write(szam + ': Prím');
    } else {
        document.write(szam + ': Nem prím');
    }
}

//PrimEljaras();


function Koordinata(x, y) {
    if (x > 0 && y > 0) {
        document.write('Az (' + x + ',' + y + ') pont a 2. síknegyeden van');
    } else if (x > 0 && y < 0) {
        document.write('Az (' + x + ',' + y + ') pont a 4. síknegyeden van');
    } else if (x < 0 && y > 0) {
        document.write('Az (' + x + ',' + y + ') pont a 1. síknegyeden van');
    } else if (x < 0 && y < 0) {
        document.write('Az (' + x + ',' + y + ') pont a 3. síknegyeden van');
    } else if (x == 0 && y == 0) {
        document.write('Az (' + x + ',' + y + ') pont az origón van');
    } else if (x == 0) {
        document.write('Az (' + x + ',' + y + ') pont az X tengelyen van');
    } else if (y == 0) {
        document.write('Az (' + x + ',' + y + ') pont az Y tengelyen van');
    }
}

//Koordinata(-3,-4);

function MelyikANagyobb(szamEgy, szamKetto, szamHarom) {
    if (szamEgy > szamKetto && szamEgy > szamHarom) {
        return szamEgy;
    } else if (szamKetto > szamEgy && szamKetto > szamHarom) {
        return szamKetto;
    } else if (szamHarom > szamEgy && szamHarom > szamKetto) {
        return szamHarom;
    }
}

let legnagyobb = MelyikANagyobb(12, 5, 333);

//document.write(legnagyobb);

function SzorgalomSzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return 'példás'
    } else if (jegy == 4) {
        return 'jó'
    } else if (jegy == 3) {
        return 'változó'
    } else if (jegy == 2) {
        return 'hanyag'
    } else {
        return 'hibás érték'
    }
}

//document.write(SzorgalomSzovegesErtekeles(4));

function TizennyolcPlusz(kor) {
    if (kor >= 18 && kor < 120) {
        return true;
    } else if (kor > 0 && kor < 18) {
        return false;
    } else {
        return 'hibás érték';
    }
}

//document.write(TizennyolcPlusz(18));

function LNKO(szamEgy, szamKetto) {
    let kisebb;
    if (szamEgy < szamKetto) {
        kisebb = szamEgy;
    } else {
        kisebb = szamKetto;
    }
    let lnko = 1;
    for (let i = 2; i <= kisebb; i++) {
        if (szamEgy % i == 0 && szamKetto % i == 0) {
            lnko = i;
        }
    }
    return lnko;
}

//document.write(LNKO(1200,2505));


function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam) {
    document.write('Számtani sorozat: ');
    for (let i = 1; i <= elemSzam; i++) {
        if (i < elemSzam) {
            document.write(elsoElem + i * kulonbseg + ', ');
        } else {
            document.write(elsoElem + i * kulonbseg);
        }
    }
}

//SzamtaniSorozatGenerator(1,3,10);

function PrimFuggveny(szam) {
    let oszto = 0;
    for (let i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            oszto++;
        }
    }
    if (oszto == 2) {
        return true;
    } else {
        return false;
    }
}

//document.write(PrimFuggveny(3));

function ParosGenerator(alsoHatar, felsoHatar) {
    let min;
    let max;
    if (alsoHatar < felsoHatar) {
        min = alsoHatar;
        max = felsoHatar;
    } else {
        min = felsoHatar;
        max = alsoHatar;
    }
    let randomSzam = Math.round(Math.random() * (max - min) + min);
    if (randomSzam % 2 == 0) {
        return randomSzam;
    } else {
        return randomSzam + 1;
    }
}

//document.write(ParosGenerator(122,40));


function KettoHatvanyai(elemSzam) {
    let sorozat = [];
    for (let i = 0; i < elemSzam; i++) {
        sorozat.push(2 ** i);
    }
    return sorozat;
}

//document.write(KettoHatvanyai(10));

function SzerkeszhetoHaromszog(aOldal, bOldal, cOldal) {
    if (aOldal + bOldal > cOldal && bOldal + cOldal > aOldal && aOldal + cOldal > bOldal) {
        return true;
    } else {
        return false;
    }
}

//document.write(SzerkeszhetoHaromszog(23,23,392));

function NegyzetKerulet(aOldal){
	return aOldal*4;
}

function NegyzetTerulet(aOldal){
	return aOldal*aOldal;
}


function EredmenyKiirato(aOldal){
	let terulet=NegyzetTerulet(aOldal);
    let kerulet=NegyzetKerulet(aOldal);
	document.write(`Az ${aOldal} oldalú négyzet kerülete: ${kerulet}<br>`);
    document.write(`Az ${aOldal} oldalú négyzet területe: ${terulet}<br>`);
}

//EredmenyKiirato(Number(prompt('Adja meg a négyzet oldalának hosszát!')));