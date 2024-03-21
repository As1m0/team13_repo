//----------------------MATRIX------------------------

//mátrix táblák kigenerálása- 90 cella
function MATRIXTableGenerator() {
    let table = document.querySelector("#osszesKihuzottSzam-otosLotto");
    let table2 = document.querySelector("#osszesKihuzottSzam-hatosLotto");
    let k = 1;
    while (k < 91) {
        for (let i = 0; i < 9; i++) {
            let row = table.insertRow();
            let row2 = table2.insertRow();
            for (let j = 0; j < 10; j++) {
                let cell = row.insertCell();
                let cell2 = row2.insertCell();
                cell.innerHTML = k;
                cell2.innerHTML = k;
                cell.style.opacity = "0";
                cell2.style.opacity = "0";
                k++;
            }
        }
    }
}

MATRIXTableGenerator();


//Mátrix tábla színezése kihúzott számok alapján- Ötös Lottó
function OtosLottoSzamokMatrix(array) {
    let table = document.querySelector("#osszesKihuzottSzam-otosLotto");
    //összes cella színezése alap színre
    let allCell = [...table.getElementsByTagName("td")];
    allCell.forEach(cell => {
        cell.style.backgroundColor = "rgb(1, 85, 85)";
    });
    //ismétlődő cellák keresése
    for (let j = 0; j < array[array.length - 1].length; j++) {

        for (let row = 0; row < table.rows.length; row++) {
            for (let col = 0; col < table.rows[row].cells.length; col++) {

                const cell = table.rows[row].cells[col];
                const cellNumber = cell.innerHTML;
                //ismétlődő cellák színezése
                if (cellNumber == array[array.length - 1][j]) {
                    cell.style.backgroundColor = "red";
                    cell.style.opacity = Number(cell.style.opacity) + 0.15;
                }
            }
        }
    }
}

//Mátrix tábla színezése kihúzott számok alapján-  Hatos Lottó
function HatosLottoSzamokMatrix(array) {
    let table = document.querySelector("#osszesKihuzottSzam-hatosLotto");
    //összes cella színezése alap színre
    let allCell = [...table.getElementsByTagName("td")];
    allCell.forEach(cell => {
        cell.style.backgroundColor = "rgb(1, 85, 85)";
    });
    //ismétlődő cellák keresése
    for (let j = 0; j < array[array.length - 1].length; j++) {

        for (let row = 0; row < table.rows.length; row++) {
            for (let col = 0; col < table.rows[row].cells.length; col++) {

                const cell = table.rows[row].cells[col];
                const cellNumber = cell.innerHTML;
                //ismétlődő cellák színezése
                if (cellNumber == array[array.length - 1][j]) {
                    cell.style.backgroundColor = "red";
                    cell.style.opacity = Number(cell.style.opacity) + 0.15;
                }
            }
        }
    }
}





//reset mindkettő matrix
function MatrixReset() {
    let table = document.querySelector("#osszesKihuzottSzam-otosLotto");
    let table2 = document.querySelector("#osszesKihuzottSzam-hatosLotto");
    //összes cella színezése alap színre
    let allCell = [...table.getElementsByTagName("td")];
    allCell.forEach(cell => {
        cell.style.backgroundColor = "rgb(1, 85, 85)";
        cell.style.opacity = "0";
    })

    let allCell2 = [...table2.getElementsByTagName("td")];
    allCell2.forEach(cell2 => {
        cell2.style.backgroundColor = "rgb(1, 85, 85)";
        cell2.style.opacity = "0";
    })
}