function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.querySelector("#szelesseg").value;
    const magassag=document.querySelector("#magassag").value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    //Megjelenítés
    document.getElementById('koltseg').textContent = koltseg;
    document.getElementById('terulet').textContent = terulet;
    document.getElementById('papir').textContent = papir;
    document.getElementById('valasz').style.visibility = "visible";
}

