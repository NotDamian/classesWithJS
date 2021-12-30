let btnn = document.getElementById("btn");
let li = document.querySelectorAll("#list");
let aa = [];
aa[0] = prompt("podaj nowa wartosc 1:");
aa[1] = prompt("podaj nowa wartosc 2:");
aa[2] = prompt("podaj nowa wartosc 3:");
console.log(li);
btnn.addEventListener('click', function(){for(let i =0; i<=li.length ;i++){
    li[i].innerHTML = aa[i];
}
});




function losy() {
	var element = [1,2,3,4,5];
	var rand = Math.floor(Math.random()*element.length);

	var loteriaEl = document.getElementById("loteria");
	loteriaEl.innerHTML = rand;

};
let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', losy);
//window.onload = losy;