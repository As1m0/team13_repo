//-----------------------FUNKCIÓK STATISZTIKÁHOZ---------------------

function legGyakrabbSzamOtosLotto(array) {
    const numberCount = {};

    array.forEach(array2 => {
        array2.forEach(num => {
            if (numberCount[num]) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
        })
    })

    let mostRepeatedNum;
    let maxCount = 0;

    for (const num in numberCount) {
        if (numberCount[num] > maxCount) {
            mostRepeatedNum = num;
            maxCount = numberCount[num];
        }
    }
    return mostRepeatedNum;
}


function legGyakrabbSzamHatosLotto(array) {
    const numberCount = {};

    array.forEach(array2 => {
        array2.forEach(num => {
            if (numberCount[num]) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
        })
    })

    let mostRepeatedNum;
    let maxCount = 0;

    for (const num in numberCount) {
        if (numberCount[num] > maxCount) {
            mostRepeatedNum = num;
            maxCount = numberCount[num];
        }
    }
    return mostRepeatedNum;
}



function legritkabbSzamOtosLotto(array) {
    const numberCount = {};

    array.forEach(array2 => {
        array2.forEach(num => {
            if (numberCount[num]) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
        })
    })

    let lessRepeatedNum;
    let minCount = 90;

    for (const num in numberCount) {

        if (numberCount[num] < minCount) {
            lessRepeatedNum = num;
            minCount = numberCount[num];
        }
    }

    return lessRepeatedNum;

}

function legritkabbSzamHatosLotto(array) {
    const numberCount = {};

    array.forEach(array2 => {
        array2.forEach(num => {
            if (numberCount[num]) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
        })
    })

    let lessRepeatedNum;
    let minCount = 90;

    for (const num in numberCount) {

        if (numberCount[num] < minCount) {
            lessRepeatedNum = num;
            minCount = numberCount[num];
        }
    }

    return lessRepeatedNum;

}

function legkisebbSzamOtosLotto(array) {
    let legkisebbszam = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (array[i][k] < legkisebbszam) {
                legkisebbszam = array[i][k];
            }
        }
    }
    return legkisebbszam;
}

function legnagyobbSzamOtosLotto(array) {
    let legnagyobbSzam = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (array[i][k] > legnagyobbSzam) {
                legnagyobbSzam = array[i][k];
            }
        }
    }
    return legnagyobbSzam;
}

function legkisebbSzamHatosLotto(array) {
    let legkisebbszam = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (array[i][k] < legkisebbszam) {
                legkisebbszam = array[i][k];
            }
        }
    }
    return legkisebbszam;
}

function legnagyobbSzamHatosLotto(array) {
    let legnagyobbSzam = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (array[i][k] > legnagyobbSzam) {
                legnagyobbSzam = array[i][k];
            }
        }
    }
    return legnagyobbSzam;
}









//-----------------STATISZTIKA TÁBLÁK FRISSÍTÉSE----------------

//Otoslottó Tábla frissítése
function OtosLottoStatisztikaFrissitese() {
    let tablazat = document.querySelector("#statisztikak-otosLotto");
    if (tablazat.rows.length > 1) {
        tablazat.deleteRow(1);
    }
    let sor = tablazat.insertRow();
    let adat1 = sor.insertCell();
    let adat2 = sor.insertCell();
    let adat3 = sor.insertCell();
    let adat4 = sor.insertCell();
    let adat5 = sor.insertCell();

    adat1.textContent = osszesKihuzottSzamOtosLotto.length;
    adat2.textContent = legGyakrabbSzamOtosLotto(osszesKihuzottSzamOtosLotto);
    adat3.textContent = legritkabbSzamOtosLotto(osszesKihuzottSzamOtosLotto);
    adat4.textContent = legkisebbSzamOtosLotto(osszesKihuzottSzamOtosLotto);
    adat5.textContent = legnagyobbSzamOtosLotto(osszesKihuzottSzamOtosLotto);
}

//Hatoslottó Tábla frissítése
function HatosLottoStatisztikaFrissitese() {
    let tablazat = document.querySelector("#statisztikak-hatosLotto");
    if (tablazat.rows.length > 1) {
        tablazat.deleteRow(1);
    }
    let sor = tablazat.insertRow();
    let adat1 = sor.insertCell();
    let adat2 = sor.insertCell();
    let adat3 = sor.insertCell();
    let adat4 = sor.insertCell();
    let adat5 = sor.insertCell();

    adat1.textContent = osszesKihuzottSzamHatosLotto.length;
    adat2.textContent = legGyakrabbSzamHatosLotto(osszesKihuzottSzamHatosLotto);
    adat3.textContent = legritkabbSzamHatosLotto(osszesKihuzottSzamHatosLotto);
    adat4.textContent = legkisebbSzamHatosLotto(osszesKihuzottSzamHatosLotto);
    adat5.textContent = legnagyobbSzamHatosLotto(osszesKihuzottSzamHatosLotto);
}










//táblázatok tölrése
function resetStatisticTables() {
    let tablazat = document.querySelector("#statisztikak-otosLotto");
    if (tablazat.rows.length > 1) {
        tablazat.deleteRow(1);
    }
    let tablazat2 = document.querySelector("#statisztikak-hatosLotto");
    if (tablazat2.rows.length > 1) {
        tablazat2.deleteRow(1);
    }
}
