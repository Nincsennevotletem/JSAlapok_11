const focimElem = document.getElementById("focim");
focimElem.textContent = "Mátrix endszer";


let sztatuszElemek = document.getElementsByClassName("statusz-szoveg");


console.log(sztatuszElemek.length)


sztatuszElemek[0].textContent = "Rendszer ellenörzése folyamatban..."


sztatuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."


const listaElemek = document.querySelectorAll(".lista-elem")


console.log(listaElemek[0].textContent)


listaElemek[1].textContent = "Szerver állapot: ONLINE"


const nevInput = document.querySelector("#jatekos-nev-input")


const eredmenyDiv = document.getElementById("eredmeny")

const inditoGomb = document.getElementById("indito-gomb")
inditoGomb.addEventListener("click", function(){
    const gombSzoveg = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzoveg}`;
})