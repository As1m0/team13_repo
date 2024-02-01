const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
];

function koltseg(Dolgozok){
	let osszeg=0;
	for (let i=0; i<Dolgozok.length; i++){
    osszeg+=Dolgozok[i].fizetes;
    }
    return osszeg;
}

document.write("Dolgozók összbére: "+koltseg(Dolgozok).toLocaleString()+" Ft<hr>");

function legmagasabbBer(Dolgozok){
	let maxBer=0;
    let dolgozo="";
	for (let i=0; i<Dolgozok.length; i++){
    	if (maxBer<Dolgozok[i].fizetes){
        maxBer=Dolgozok[i].fizetes;
        dolgozo=Dolgozok[i].nev;
        }
    }
    return dolgozo;
}

document.write("A legtöbbet kereső dolgozó: "+legmagasabbBer(Dolgozok)+"<hr>");

function legfiatalabb(Dolgozok){
	let legfiatalabb="";
    let kor=Dolgozok[0].kor;
    for (let i=1; i<Dolgozok.length; i++){
    	if (kor>Dolgozok[i].kor){
        	kor=Dolgozok[i].kor;
            legfiatalabb=Dolgozok[i].nev;
        }
    }
    return legfiatalabb;
}

document.write("A legfiatalabb dolgozó: "+legfiatalabb(Dolgozok)+"<hr>");

function emelesLegfiatalabbnak(Dolgozok){
	for (let i=0; i<Dolgozok.length; i++){
    	if (legfiatalabb(Dolgozok)==Dolgozok[i].nev){
        	Dolgozok[i].fizetes += 30000;
            document.write("A legfiatalabb dolgozó emelt fizetése: "+Dolgozok[i].fizetes.toLocaleString()+" Ft<hr>")
        }
    }
}

emelesLegfiatalabbnak(Dolgozok);

function atlagKereset(Dolgozok){
	return koltseg(Dolgozok)/Dolgozok.length;
}

document.write("Átlagkereset: "+atlagKereset(Dolgozok).toLocaleString()+" Ft<hr>");


function emelesAtlagAlattiaknak(Dolgozok){
	for (let i=0; i<Dolgozok.length; i++){
    	if (Dolgozok[i].fizetes < atlagKereset(Dolgozok)){
        	Dolgozok[i].fizetes *= 1.1;
            document.write("Emelést kapott: "+Dolgozok[i].nev+", új fizetés: "+Dolgozok[i].fizetes.toLocaleString()+" Ft<br>")
        }
    }
}

emelesAtlagAlattiaknak(Dolgozok);


function legidosebb(Dolgozok){
	let legidosebb="";
    let kor=Dolgozok[0].kor;
    for (let i=1; i<Dolgozok.length; i++){
    	if (kor<Dolgozok[i].kor){
        	kor=Dolgozok[i].kor;
            legidosebb=Dolgozok[i].nev;
        }
    }
    return legidosebb;
}

document.write("<hr>")
document.write("A legidősebb dolgozó: "+legidosebb(Dolgozok)+"<hr>");

function nyugdijEv(Dolgozok) {
	for (let i=0; i<Dolgozok.length; i++){
		if (legidosebb(Dolgozok)==Dolgozok[i].nev){
    	return 65-Dolgozok[i].kor;
    	}
    }
}

document.write("A legidősebb dolgozónak "+nyugdijEv(Dolgozok)+" év van hátra a nyugdíjig.<hr>");
