//#3: Głowa robota jest przekrzywiona o 45' za pomocą kodu JS
let robotHead = document.querySelector("#head");
robotHead.style.transform = "rotate(45deg)";

//#4: Lewe oko robota po kliknięciu skacze w górę i wraca na miejsce
//(do zmiennej przypisać setIterval(a, b), warunek na odległość od góry,
//po osiągnięciu danej odległości clearInterval(zmienna))
function jumpF2(top, left){
    let elem = document.querySelector(".loko");
    let posTop = top;
    let posLeft = left;
    let id = setInterval(frame, 5);
    function frame() {
        if (posTop == 4) {
            clearInterval(id);
        } else {
            posTop++;
            posLeft++;
            elem.style.top = posTop + 'px';
            elem.style.left = posLeft + 'px';
        }
    }
}
function jumpF() {
    let elem = document.querySelector(".loko");
    let posTop = 4;
    let posLeft = 15;
    let id = setInterval(frame, 5);
    function frame() {
        if (posTop == -20) {
            jumpF2(posTop, posLeft);
            clearInterval(id);
        } else {
            posTop--;
            posLeft--;
            elem.style.top = posTop + 'px';
            elem.style.left = posLeft + 'px';
        }
    }
}
let leftEye = document.querySelector("#leye");
leftEye.addEventListener("click", jumpF);

//#5: Prawe oko robota po kliknięciu znika na chwilę i pojawia na nowo
// (robot mruga / puszcza oko)//
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
function mm(){
    rightEye.classList.remove("o");
    sleep(300).then(() => {
        rightEye.classList.add("o");
    });
}
let rightEye = document.querySelector("#reye");
rightEye.addEventListener("click", mm);

//#6: Prawa ręka Robota po kliknięciu odskakuje w lewo i wraca na miejsce
function rekaF(){
    console.log("hi");
    //let elem = document.querySelector(".loko");
    let counter = 0;
    let id = setInterval(frame, 2);
    function frame() {
        if (counter == 1) {
            clearInterval(id);
            sleep(400).then(() => {
                prawaReka.style.transform = "rotate(0)";
                prawaReka.style.left = -45 + "px";
            });
        } else {
            counter++;
            prawaReka.style.transform = "rotate(-45deg)";
            prawaReka.style.left = 0 + "px";
        }
    }
}
let prawaReka = document.querySelector(".prawareka");
prawaReka.addEventListener("click", rekaF);



//#7: Robot ma dodatkową, indywidualną funkcjonalność.
const colors = ["red", "green", "yellow", "grey", "blue", "dark", "pink", "orange"];
let robot2 = document.querySelectorAll(".b");
robot2.forEach(box =>{
    box.addEventListener("mouseover", e => {
        let liczba = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
        box.style.background = colors[liczba];
    });
})