const wybory = ["", "kamien", "papier", "nozyce"];
let computerOption;
let myOption;
let yourPoints = 0;
let computerPoints = 0;
let round = 0;
let choiceArea = document.querySelector(".choice");
let yourPoint = document.querySelector("#yourPkt");
let computerPoint = document.querySelector("#computerPkt");
//fukcja sleep
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
//start gry
function btnStartFunction(){
    console.log("start");
    //usuwa widoczne odpowiedzi jesli sa
    if(round > 0){
        let all = document.querySelectorAll(".czyMa");
            all.forEach(e => {
                if( e.classList.contains("displayNone") == 0){
                    e.classList.add("displayNone");
                }
            })
    }
    choiceArea.classList.remove("displayNone");
    yourPoint.innerHTML = yourPoints;
    computerPoint.innerHTML = computerPoints;
    btnStart.classList.add("displayNone");
}
let btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", btnStartFunction);

//funkcja sprawczenia kto wygral i reset obrazkow
function walka(){
    if(myOption == computerOption){
        console.log("remis");
       // alert("REMIS");
    }else if(myOption == "kamien" && computerOption == "nozyce"){
        console.log("wygrales");
        yourPoints++;
        yourPoint.innerHTML = yourPoints;
        // alert("WYGRALES!!");
    }else if(myOption == "kamien" && computerOption == "papier"){
        console.log("przegrales");
        computerPoints++;
        computerPoint.innerHTML = computerPoints;
        // alert("PRZEGRALES");
    }else if(myOption == "papier" && computerOption == "kamien"){
        console.log("wygrales");
        yourPoints++;
        yourPoint.innerHTML = yourPoints;
        // alert("WYGRALES!!");
    }else if(myOption == "papier" && computerOption == "nozyce"){
        console.log("przegrales");
        computerPoints++;
        computerPoint.innerHTML = computerPoints;
        //alert("PRZEGRALES");
    }else if(myOption == "nozyce" && computerOption == "papier"){
        console.log("wygrales");
        yourPoints++;
        yourPoint.innerHTML = yourPoints;
        // alert("WYGRALES!!");
    }else if(myOption == "nozyce" && computerOption == "kamien"){
        console.log("przegrales");
        computerPoints++;
        computerPoint.innerHTML = computerPoints;
        // alert("PRZEGRALES");
    }
}
//losowanie co wybierze komputer a nastepnie sprawdzenie wynikow
function computerLosoj(){
    let losowaLiczba = Math.floor(Math.random()*3+1)
    console.log(losowaLiczba);
    computerOption = wybory[losowaLiczba];
    if(computerOption == "kamien"){
        document.querySelector(".imgComputerOptionK").classList.remove("displayNone");
        walka();
    }else if(computerOption == "papier"){
        document.querySelector(".imgComputerOptionP").classList.remove("displayNone");
        walka();
    }else if(computerOption == "nozyce"){
        document.querySelector(".imgComputerOptionN").classList.remove("displayNone");
        walka();
    }
}
//funkcja wybrania kamienia
function kamienF(){
    console.log("wybrales kamien");
    choiceArea.classList.add("displayNone");
    btnStart.classList.remove("displayNone");
    round++;
    let imgKamienO = document.querySelector(".imgYourOptionK");
    imgKamienO.classList.remove("displayNone");
    myOption = "kamien";
    computerLosoj();
}
let kamien = document.querySelector(".kamien");
kamien.addEventListener("click", kamienF);
//funkcja wybrania papieru
function papierF(){
    console.log("wybrales papier");
    choiceArea.classList.add("displayNone");
    btnStart.classList.remove("displayNone");
    round++;
    let imgPapierO = document.querySelector(".imgYourOptionP");
    imgPapierO.classList.remove("displayNone");
    myOption = "papier";
    computerLosoj();
}
let papier = document.querySelector(".papier");
papier.addEventListener("click", papierF);
//funkcja wybrania nozyce
function nozyceF(){
    console.log("wybrales nozyce");
    choiceArea.classList.add("displayNone");
    btnStart.classList.remove("displayNone");
    round++;
    let imgNozyceO = document.querySelector(".imgYourOptionN");
    imgNozyceO.classList.remove("displayNone");
    myOption = "nozyce";
    computerLosoj();
}
let nozyce = document.querySelector(".nozyce");
nozyce.addEventListener("click", nozyceF);
