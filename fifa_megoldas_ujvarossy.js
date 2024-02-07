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

//Objectek létrehozása
const csapatObjects = csapatAdat.map(teamString => {
  const [nev, helyezes, valtozas, pont] = teamString.split(';');
  
  return {
    nev: nev,
    helyezes: parseInt(helyezes),
    valtozas: parseInt(valtozas),
    pont: parseInt(pont)
  };
});

//1. feladat
function csapatSzam (array) {
	return array.length;
}

document.write("Csapatok száma: "+csapatSzam(csapatObjects)+"<hr>");

//2. feladat
function atlagPontszam (array) {
	let pont=0;
	for (let i=0; i<array.length; i++){
    	console.log(array[i].points);
    	pont += array[i].pont;
    }
    return pont/array.length;
}
document.write("Átlag pontszám: "+atlagPontszam(csapatObjects)+"<hr>");

//3. feladat
function atlagFelettiCsapatok (array){
	document.write("Átlag feletti csapatok listája:<br>"); 
    document.write("<table style='border:1px solid black; padding: 10px'>");  
    document.write("<tr style='text-align: left;'><th>csapatnév</th><th>pontszám</th><tr>");
    for (let i=0; i<array.length; i++){
    	if (array[i].pont>atlagPontszam (array)){
        	document.write("<tr>");
        	document.write("<td>"+array[i].nev+"</td>");
            document.write("<td>"+array[i].pont+"</td>");
            document.write("</tr>");
        }
    }
    document.write("</table><hr>");
}

atlagFelettiCsapatok(csapatObjects);

//4. feladat
function legTobbetJavitoCsapat (array){
	let LegjobbCsapatIndex=0;
    for (let i=1; i<array.length; i++){
		if (array[i].valtozas > array[LegjobbCsapatIndex].valtozas){
        	LegjobbCsapatIndex=i;
        }
    }
    return array[LegjobbCsapatIndex];
}

document.write("Legtöbbet javító csapat helyezése: "+legTobbetJavitoCsapat(csapatObjects).helyezes+"<br>");
document.write("Legtöbbet javító csapat neve: "+legTobbetJavitoCsapat(csapatObjects).nev+"<br>");
document.write("Legtöbbet javító csapat pontszáma: "+legTobbetJavitoCsapat(csapatObjects).pont+"<br><hr>");

//5. feladat
function orszagKereso (array, csapat) {
	let szerepel=false;
	for (let i=0; i<array.length; i++){
    	if (array[i].nev === csapat){
        	szerepel=true;
        }
    }
    return szerepel
}

let keresendoOrszag= "Magyarország";
document.write("A csapatok között szerepel "+keresendoOrszag+": "+orszagKereso(csapatObjects, keresendoOrszag)+"<hr>");

//6. feladat
function valtozasStatisztika (array){
	let valtozasok=[];
	for (i=0; i<array.length; i++){
    	let szerepelE = false;
    	for (k=0; k<valtozasok.length; k++){
        	if (array[i].valtozas == valtozasok[k]){
            	szerepelE = true;
            }
        }
        if (szerepelE == false){
        	valtozasok.push(array[i].valtozas);
        }
    }
    return valtozasok;
}

function orszagSzamlalo(array, valtozasok){
	let evMennyiseg= [];
    for (i=0; i<valtozasok.length; i++){
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

function kiirato (array1, array2){
	document.write("<table style='border:1px solid black; padding: 10px'>");
    document.write("<tr><th>változás</th><th>csapatok száma</th></tr>");
    for (let i=0; i<array1.length; i++){
    	document.write("<tr><td>");
        document.write(array2[i]);
        document.write("</td>");
        document.write("<td>");
        document.write(array1[i]);
        document.write("</td></tr>");
    }
}

document.write(kiirato(valtozasStatisztika(csapatObjects),orszagSzamlalo(csapatObjects,valtozasStatisztika(csapatObjects))));