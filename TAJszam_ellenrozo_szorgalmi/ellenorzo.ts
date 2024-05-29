let TAJ1: string = "673457015";
console.log("Kérem a TAJ számot: "+TAJ1);

//Utolsó számjegy megállapítása
function lastTAJNum(TAJszam: string): number {
    return Number(TAJszam.slice(8));
}

let EllNum: number = lastTAJNum(TAJ1);
console.log("Az ellenörző számjegy: "+EllNum);

//TAJ számjegyeinek összegének számítása
function TAJSzorzatOsszeg(TAJszam: string): number {
    let eredmeny:number=0;
    for (let i: number = 0; i < 8; i++) {
        if ((i + 1) % 2 === 0) {
            eredmeny += Number(TAJszam[i]) * 7;
        } else {
            eredmeny += Number(TAJszam[i]) * 3;
        }
    }
    return eredmeny;
}

console.log("Szorzatok összege: "+TAJSzorzatOsszeg(TAJ1));

//TAJ szám ellenőrzése
function TAJEll(TAJszam: string): boolean {
    let szamjegyekOsszege: number = Number(TAJSzorzatOsszeg(TAJszam));
    let ellSzam: number = lastTAJNum(TAJszam);
    if (szamjegyekOsszege % 10 === ellSzam) {
        return true;
    } else {
        return false;
    }
}

//Eredmény kiírató
function TAJEllKiir(TAJszam: string): void {
    if (TAJEll(TAJszam)) {
        console.log("Helyes szám!");
    } else {
        console.log("Hibás szám!");
    }
}

TAJEllKiir(TAJ1);


/// TAJ szám generátor
function TAJGenerator ():string{
    let TAJszam:string = "";
    for (let i:number=0; i<8; i++){
        TAJszam += Math.floor(Math.random()*10).toString();
    }
    let reszOsszeg:number = TAJSzorzatOsszeg(TAJszam);
    TAJszam += reszOsszeg%10;
    console.log("Generált TAJ: "+ TAJszam);
    return TAJszam;
}


TAJEllKiir(TAJGenerator());
TAJEllKiir(TAJGenerator());
TAJEllKiir(TAJGenerator());