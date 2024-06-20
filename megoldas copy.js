//1.feladat
document.write('Ujvárossy Ábel<br>#TEAM13<br><br>HTML: 100<br>CSS: 80<br>JS: 80');

//2.feladat
let a=Number(prompt('Adja meg a hatványozandó számot!'));
let b=Number(prompt('Adja meg a hatvány számot!'));
document.write(`<hr>Hatványozás eredménye: ${a} <sup>${b}</sup>=${a**b}`);

//3.feladat
let c=Number(prompt('Adja meg az intervallum asó értékét!'));
let d=Number(prompt('Adja meg az intervallum felső értékét!'));
document.write(`<hr>Páros számok ${c} és ${d} között:<br>`);
for (let i=c; i<=d; i++) {
	if (i%2==0) {
    document.write(i+',');
    }
}

//4.feladat
document.write('<hr>');
let kor=Number(prompt('Adja meg az életkorát!'));
if (kor>60 && kor<=120) {
	document.write(kor+':Aggkor');
} else if (kor>30 && kor<=60) {
	document.write(kor+':Felnőtt kor');
} else if (kor>20 && kor<=30) {
	document.write(kor+':Fiatal felnőtt kor');
} else if (kor>16 && kor<=20) {
	document.write(kor+':Ifjúkor');
} else if (kor>12 && kor<=16) {
	document.write(kor+':Serdölőkor');
} else if (kor>6 && kor<=12) {
	document.write(kor+':Gyermekkor');
} else if (kor<6 && kor>0){
	document.write(kor+':Kisgyermekkor');
} else {
	document.write('Hibás életkort adott meg!');
}

//5.feladat
document.write('<hr>');
let szam=Number(prompt('Adja meg a vizsgálandó számot!'));
let oszto=Number(prompt('Adja meg az osztó számot!'));

if (szam%oszto==0) {
	document.write(`A ${szam}/${oszto} osztható maradék nélkül (=${szam/oszto})`);
} else {
	document.write(`A ${szam}/${oszto} <b>NEM</b> osztható maradék nélkül (=${szam/oszto})`);
}

//6.feladat
document.write('<hr>Az első 10 négyzetszám:<br>');
for (let j=0; j<10; j++) {
	document.write(2**j+',');
}