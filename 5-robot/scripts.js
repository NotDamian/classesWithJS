let car = {
    marka: "opel",
    rok: 2000,
    kolor: "red"
};
let cb2 = document.querySelector(".carBody2");
cb2.style.background= "red";
let cb1 = document.querySelector(".carBody1");
cb1.style.background= "red";
function zmienMarke(){
    console.log(car.marka);
    let nowaMarka = prompt("Podaj nowa marke: ");
    car.marka = nowaMarka;
    console.log(car.marka);
    let spanMarka = document.querySelector("#marka").innerHTML = nowaMarka;
    console.log("Po zmianie: ");
    console.log(car);
}
function zmienRok(){
    console.log(car.rok);
    let nowyRok = prompt("Podaj nowa rok: ");
    car.rok = nowyRok;
    console.log(car.rok);
    let spanRok = document.querySelector("#rok").innerHTML = nowyRok;
    console.log("Po zmianie: ");
    console.log(car);
}
function zmienKolor(){
    console.log(car.kolor);
    let nowyKolor = prompt("Podaj nowy kolor po angielsku: ");
    car.kolor = nowyKolor;
    console.log(car.kolor);
    let spanKolor = document.querySelector("#kolor").innerHTML = nowyKolor;
    cb1.style.background= car.kolor;
    cb2.style.background= car.kolor;
    console.log("Po zmianie: ");
    console.log(car);
}




console.log(car);
let btnMarka = document.querySelector("#btnMarka");
btnMarka.addEventListener("click", zmienMarke);
let btnRok = document.querySelector("#btnRok");
btnRok.addEventListener("click", zmienRok);
let btnKolor = document.querySelector("#btnKolor");
btnKolor.addEventListener("click", zmienKolor);