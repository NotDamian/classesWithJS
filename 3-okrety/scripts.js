// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);
let statek1;
let statek2;
let statek3;
let pudlo = 0;
let trafiony = 0;
//losuje pozycje statkow
function losujPozucjeStatku(){
    let losowaLiczba = Math.floor(Math.random()*9+0);
    console.log(losowaLiczba);
    let pozycja;
    pozycja = losowaLiczba + "";
    losowaLiczba = Math.floor(Math.random()*9+0)
    pozycja += losowaLiczba;
    console.log(pozycja);
    console.log(typeof(pozycja));
    return pozycja;
}
//koniec gry
function koniec(){
    console.log("koniec");
    pola.forEach(key => key.removeEventListener("click", checkF));
    btnStart.classList.remove("displayNone");
}
//sprawdza czy statek zostal trafiony
function checkF(){
    console.log("click");
    let a = this.id;
    let aBtn = document.getElementById(a);
    if(a == statek1 || a == statek2 || a == statek3){
        aBtn.classList.add("trafionyy");
        trafiony++;
    }else{
        aBtn.classList.add("redd");
        pudlo++;
    }
    if(trafiony == 3){
        koniec();
    }
    console.log("kliknoles w pole nr");
    console.log(a);
}
//usuwanie czerwonych i zielonych pol
function reset(ele){
    if(ele.classList.contains("redd")){
        ele.classList.remove("redd");
    }else if(ele.classList.contains("trafionyy")){
        ele.classList.remove("trafionyy");
    }

}
//funkcja po nacisnieciu przycisku start
function start(){
    console.log("start");
    if(trafiony > 0){
        trafiony = 0;
        pudlo = 0;
        pola.forEach(reset);
    }
    statek1 = losujPozucjeStatku();
    statek2 = losujPozucjeStatku();
    statek3 = losujPozucjeStatku();
    console.log("pozycja statku 1");
    console.log(statek1);
    console.log("pozycja statku 2");
    console.log(statek2);
    console.log("pozycja statku 3");
    console.log(statek3);
    btnStart.classList.add("displayNone");
    //let pola = document.querySelectorAll(".check");
    pola.forEach(key => key.addEventListener("click", checkF));

}
let pola = document.querySelectorAll(".check");
let btnStart = document.querySelector("#btn");
btnStart.addEventListener("click", start);