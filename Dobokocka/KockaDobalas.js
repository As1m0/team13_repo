var dobasok = [];
let dobasokSzama = 0;

function KockaDobas() {
    return Math.round(Math.random() * 5) + 1;//1 és 6 közötti dobás
}

function TobbKockaDobas(dobasokMennyisege) {
    let tobbDobas = [];
    for (let i = 0; i < dobasokMennyisege; i++) {
        tobbDobas.push(KockaDobas());
    }
    return tobbDobas;
}

//ÍGY HÍVHATSZ MEG ADD EVENT LISTENERBEN PARAMÉTERES FÜGGVÉNYT!!!
kockaEldobasa.addEventListener("click", () => { KockaMegjelenites(3) });

//Kockák eldobása 100-szor
kockaEldobasa100.addEventListener("click", function () {
    var i = 0;                  //  set your counter to 1

    function myLoop() {         //  create a loop function
        setTimeout(function () {   //  call a 3s setTimeout when the loop is called
            KockaMegjelenites(3);   //  your code here
            StatisztikaKiir(DobasokSzama());
            i++;                    //  increment the counter
            if (i < 100) {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, 3)
    }

    myLoop();

})



function KockaMegjelenites(dobasokMennyisege) {
    let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
    for (let i = 0; i < megtortentDobasok.length; i++) {
        dobasok.push(megtortentDobasok[i]);
    }
    MaxDobas(megtortentDobasok);
    TriplaHatos(megtortentDobasok);
    Egyformak(megtortentDobasok);
    Kulonbozok(megtortentDobasok);
    //aktDobasokObjektuma(megtortentDobasok);
    DobasElfordulasok(aktDobasOsszeg(megtortentDobasok));
    dobasokSzama++;
    leggyakoribbKockaOsszeg();
    legritkabbbKockaOsszeg();
    parosokSzerepelese();
    paratlanokSzerepelese();
    sorozatSzamlalo(megtortentDobasok);

    /*
    for (let i = 0; i < megtortentDobasok.length; i++) {
        document.querySelector(`#kockaKep0${i}`).style.backgroundImage = "url(img/" + megtortentDobasok[i] + ".png)";

    }*/
    document.querySelector("#kockaKep01").style.backgroundImage = "url(img/" + megtortentDobasok[0] + ".png)";
    document.querySelector("#kockaKep02").style.backgroundImage = "url(img/" + megtortentDobasok[1] + ".png)";
    document.querySelector("#kockaKep03").style.backgroundImage = "url(img/" + megtortentDobasok[2] + ".png)";

}


function DobasokSzama() {
    let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dobasok.length; i++) {
        dobasMennyiseg[0] += dobasok[i];
        dobasMennyiseg[dobasok[i]]++;
    }
    return dobasMennyiseg;
}
kockaEldobasa.addEventListener("click", () => { StatisztikaKiir(DobasokSzama()) });


function AtlagSzamitas(eredmenyek) {
    return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
    document.querySelector("#egyes").innerHTML = eredmenyek[1];
    document.querySelector("#kettes").innerHTML = eredmenyek[2];
    document.querySelector("#harmas").innerHTML = eredmenyek[3];
    document.querySelector("#negyes").innerHTML = eredmenyek[4];
    document.querySelector("#otos").innerHTML = eredmenyek[5];
    document.querySelector("#hatos").innerHTML = eredmenyek[6];
    document.querySelector("#dobasokSzama").innerHTML = dobasokSzama;
    document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
    document.querySelector("#osszesen").innerHTML = eredmenyek[0];
    document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);
}

//TRIPLA DOBÁSRA VAN CSAK!
function MaxDobas(aktDobasok) {
    let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
    let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
    if (aktDobasOsszege > eddigiLegnagyobb) {
        document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
    }
}

function TriplaHatos(aktDobasok) {
    if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
        document.querySelector("#triplaHat").innerHTML = "Volt";
    }
}

function Egyformak(aktDobasok) {
    if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
        let regiErtek = document.querySelector("#egyformak").innerHTML;
        document.querySelector("#egyformak").innerHTML = Number(regiErtek) + 1;
    }
}

function Kulonbozok(aktDobasok) {
    if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2] && aktDobasok[0] != aktDobasok[2]) {
        let regiErtek = document.querySelector("#kulonbozoek").innerHTML;
        document.querySelector("#kulonbozoek").innerHTML = Number(regiErtek) + 1;
    }
}
//Extra OBJEKTUMBA VALÓ FELTÖTLÉS!
var dobasOsszegek = [];
function aktDobasokObjektuma(aktDobasok) {
    let aktDobas = {
        elsoKocka: aktDobasok[0],
        masodikKocka: aktDobasok[1],
        harmadikKocka: aktDobasok[2],
        dobasOsszege: aktDobasok[0] + aktDobasok[1] + aktDobasok[2]
    }
    dobasOsszegek.push(aktDobas);
}

//Adott indexen adott dobásmennyiség van... Ezt növelem majd mindig...
let dobasOsszegekMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function aktDobasOsszeg(aktDobasok) {
    return aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
}

function DobasElfordulasok(aktDobasOsszeg) {
    dobasOsszegekMennyiseg[aktDobasOsszeg]++;
}

function leggyakoribbKockaOsszeg() {
    let leggyakoribbOsszegIndex = 0;
    let legnagyobbSzam = 0;
    for (let i = 0; i < dobasOsszegekMennyiseg.length; i++) {
        if (dobasOsszegekMennyiseg[i] > legnagyobbSzam) {
            legnagyobbSzam = dobasOsszegekMennyiseg[i];
            leggyakoribbOsszegIndex = i;
        }
    }
    document.querySelector("#leggyakoribbKockaOsszeg").innerHTML = leggyakoribbOsszegIndex;
}

function legritkabbbKockaOsszeg() {
    let legritkabbIndex = 0;
    let legkisebbSzam = 4;
    for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
        if (dobasOsszegekMennyiseg[i] < legkisebbSzam) {
            legkisebbSzam = dobasOsszegekMennyiseg[i];
            legritkabbIndex = i;
        }
    }
    //console.log(dobasOsszegekMennyiseg);
    document.querySelector("#legritkabbKockaOsszeg").innerHTML = legritkabbIndex;
}

function parosokSzerepelese() {
    let parosSzamlalo = 0;
    dobasok.forEach(szam => {
        if (szam % 2 == 0) {
            parosSzamlalo++;
        }
    })
    document.querySelector("#parosDobasokAranya").innerHTML = (parosSzamlalo / dobasok.length * 100).toFixed(2) + "%";
}

function paratlanokSzerepelese() {
    let paratlanSzamlalo = 0;
    dobasok.forEach(szam => {
        if (szam % 2 != 0) {
            paratlanSzamlalo++;
        }
    })
    document.querySelector("#paratlanDobasokAranya").innerHTML = (paratlanSzamlalo / dobasok.length * 100).toFixed(2) + "%";
}

function sorozatSzamlalo(aktDobasok) {
    let sorozatokSzama = Number(document.querySelector("#sorozatokSzama").innerHTML);
    let i = 0;
    if (Math.abs(aktDobasok[i] - aktDobasok[i + 1]) === 1 && Math.abs(aktDobasok[i + 1] - aktDobasok[i + 2]) === 1) {
        sorozatokSzama++;
    }
    document.querySelector("#sorozatokSzama").innerHTML = sorozatokSzama;
}