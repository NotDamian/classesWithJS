const talia = [["O","Glupiec"], ["I","Mag"], ["II","Papiezyca"], ["III","Cesarzowa"], ["IIII","Cesarz"], ["V","Papiez"], ["VI","Kochankowie"], ["VII","Rydwan"], ["VIII","Sprawiedliwosc"], ["VIIII","Eremita"], ["X","Kolo Fortuny"], ["XI","Sila"], ["XII","Wisielec"], ["XIII","Smierc"], ["XIIII","Powsciagliwosc"], ["XV","Diabel"], ["XVI","Wieza"], ["XVII","Gwiazda"], ["XVIII","Ksiezyc"], ["XVIIII","Slonce"], ["XX","Sad Ostateczny"], ["XXI","Swiat"]];
let round = 0;

function losujKarte(){
    console.log("losujemy");
    if(round > 0){
        let iKarta = document.querySelector("#wygladKarty");
        iKarta.parentElement.removeChild(iKarta);
    }
    let losowaLiczba = Math.floor(Math.random()*22+1)
    losowaLiczba--;
    console.log(talia[losowaLiczba]);
    let divKarta = document.querySelector("#karta");
    let img = document.createElement("img");
    img.setAttribute("id", "wygladKarty");
    img.src = "images/" + talia[losowaLiczba][0] + ".png";
    divKarta.appendChild(img);
    let opis = document.querySelector("#opis");
    opis.innerHTML = "Karta: " + talia[losowaLiczba][0] + " " + talia[losowaLiczba][1];
    round++;
}
let btnL = document.querySelector("#btnLosuj");
btnL.addEventListener("click", losujKarte);