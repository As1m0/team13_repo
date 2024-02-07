const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]
//1. feladat
function tagokSzama(array) {
    return array.length;
}

document.write("EU tagok száma: " + tagokSzama(EuropaiUnio) + "<hr>");

//2. feladat
function csatlakozasEve(array, ev) {
    let orszagok = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].csatlakozas.includes(ev)) {
            orszagok += 1;
        }
    }
    return orszagok;
}

let csatlakozas = "2004";
document.write(csatlakozas + "-ben csatlakozott országok száma: " + csatlakozasEve(EuropaiUnio, csatlakozas) + "<hr>");

//3. feladat
function csatlakozottE(array, orszag) {
    let csatlakozottEazOrszag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].orszag === orszag) {
            csatlakozottEazOrszag = true;
        }
    }
    return csatlakozottEazOrszag;
}

let vizsgalandoOrszag = "Magyarország";
document.write(vizsgalandoOrszag + " csatlakozott-e: " + csatlakozottE(EuropaiUnio, vizsgalandoOrszag));


//4. feladat
function adottHonapCsatlakozas(array, honap) {
    let honapSzammal;
    if (honap == "január") {
        honapSzammal = 1;
    } else if (honap == "február") {
        honapSzammal = 2;
    } else if (honap == "március") {
        honapSzammal = 3;
    } else if (honap == "április") {
        honapSzammal = 4;
    } else if (honap == "május") {
        honapSzammal = 5;
    } else if (honap == "június") {
        honapSzammal = 6;
    } else if (honap == "július") {
        honapSzammal = 7;
    } else if (honap == "augusztus") {
        honapSzammal = 8;
    } else if (honap == "szeptember") {
        honapSzammal = 9;
    } else if (honap == "október") {
        honapSzammal = 10;
    } else if (honap == "november") {
        honapSzammal = 11;
    } else if (honap == "december") {
        honapSzammal = 12;
    }
    console.log(honapSzammal);
    let csatlakazott = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].csatlakozas.substring(6, 7).includes(honapSzammal)) {
            csatlakazott = true;
        }
    }
    return csatlakazott;
}

let honap = "május";
document.write("Van olyan ország, ami csatlakozott " + honap + " hónapban: " + adottHonapCsatlakozas(EuropaiUnio, honap));


//5. feladat
function utolsoCsatlakozas(array) {
    let keresettOrszagIndex = 0;
    let csatlakozasDatuma = array[0].csatlakozas.replaceAll(".", "");
    for (let i = 1; i < array.length; i++) {
        if (array[i].csatlakozas.replaceAll(".", "") > csatlakozasDatuma) {
            csatlakozasDatuma = array[i].csatlakozas.replaceAll(".", "");
            keresettOrszagIndex = i;
        }
    }
    return array[keresettOrszagIndex];
}

document.write("Utoljára csatlakozott ország: " + utolsoCsatlakozas(EuropaiUnio).orszag + "<hr>");

//6. feladat
function csatlakozasEveStatisztika (array){
	let evek=[];
	for (let i=0; i<array.length; i++){
    	let szerepel= false;
    	for (let j=0; j<evek.length; j++){
        	if (array[i].csatlakozas.substring(0,4)==evek[j]){
            	szerepel=true;
            }
        }  
      if (szerepel==false){
      	evek.push(array[i].csatlakozas.substring(0,4));
      }
    }
	return evek;
}

function EvMegszamlalo (array, evlista){
	let evMennyiseg=[];
    for (let i=0; i<evlista.length; i++){
    	evMennyiseg.push(0);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < evlista.length; j++) {
            if (evlista[j] == array[i].csatlakozas.substring(0, 4)) {
                evMennyiseg[j]++;
            }
        }
    }
    return evMennyiseg;
}

function kiirato (array1, array2){
	document.write("<table>");
    document.write("<tr><th>évszámok</th><th>országok száma</th></tr>");
    for (let i=0; i<array1.length; i++){
    	document.write("<tr><td>");
        document.write(array2[i]);
        document.write("</td>");
        document.write("<td>");
        document.write(array1[i]);
        document.write("</td></tr>");
    }
}

kiirato(EvMegszamlalo(EuropaiUnio,csatlakozasEveStatisztika(EuropaiUnio)),csatlakozasEveStatisztika(EuropaiUnio));