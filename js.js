// Pierwszy sposób deklarowania funkcji

function even(val) {
	…
}

// Drugi sposób deklarowania funkcji

let even = (val) => {
    …
}
    

//Funkcje wyrażenia / anonimowe 

var pole = function(szer, wys) {
	return szer * wys;
};

var wielkość = pole(5, 4);

// - tam gdzie interpreter chce wyrażenia
// - nie ma nazwy
// - czeka na wykrycie

--------------------------------------------------
// METODY
// String

//slice - wycina fragment tekstu

let text = "Lorem ipsum kitty dolor";
console.log(text.slice(0, 5));
let part = text.slice(0, 5);

let text2 = "kitty puppy and hau hau";

text2 = part + " " + text2;

console.log(text.slice(-5));

//indexOf - znajduje nam wartość indexu danego słowa

let text = "Lorem ipsum kitty dolor";
console.log(text.indexOf("ipsum"));


//replace - zastępowanie np. wulgaryzmów znakami specjalnymi ^^

let text = "Niech to cholera trafi";
text = text.replace("cholera", "*******");


//toLowerCase() / to UpperCase() - małe / duże litery

let text = "nazwa nazwa NAZWA NAZWA";
text = text.toLowerCase();
text = text.tiUpperCase();


//split - zamienia string w tablicę

let clients = "Adam, Janek, Kasia, Jasia, Małgosia, Zosia";"
let clientsList = clients.split(", ");
clients ==> ["Adam", "Janek", "Kasia",...]

//Number

//toString()

let number = 143;
let myNumber = number.toString();
let myNumber = (134 + 23).toString();


//toFixed() - zaokrągle liczbę do wskazanej ilości znaków po przecinku

let number = 1.246746;
number.toFixed();
number.toFixed(2);
number.toFixed(4);

1, 1.24, 1.2467


//Number() - kiedy chcemy na number przekształcić np. stringa

Number("12345");
Number("123.45");
Number("123,45");
Number("123+45");
Number(false);
Number(true);
Number(null);


-----------------------------

// Jeszcze obiekty - klucz

let obiekt = {
	... : ...,
	...: ...,
}

let obiekty = {}
obiekt.name = "Alina";


let obiekt = newObject();
obiekt.name = ...

function Obiekt (name, age) {
	this.name = nazwa;
	fdfsdfsd
}

------------------------------

const users = [
	{
		name: "Tomasz",
		children: "Jagoda", "Michał"],
	},
	{
		name: "Andrzej",
		children: "Kuba"],
		...
	},
];

users.forEach(({children}) => {
	children.forEach((child) => {
		console.log(child);
	});
});



const number = [1, 2, 3, 4, 5];
for (let i=0; i < numbers.length; i++) {
	if numbers[i] % 2 === 0) {
		continue;
	}
	console.log(numbers[i]);
}

//jeżeli jakaś metoda zwraca tablicę, można te wywołania ze sobą połączyć

const numbers = [1, 2, 3];
numbers.concat([4]).concat([5,6]).concat([7,8,9]);

//metody mutowalne i niemutowalne - są metody które ingerują w tablicę i ją zmieniają

const numbers = [1, 2, 3];
numbers.push(4);

const numbers = [1, 2, 3];
const words = ["Ala", "ma", "kota"];
const newArray = numbers.concat(words);

//

let men = [
	{
		firstName: "Janek",
		lastName: "Kowalski"
	},
	{
		firstName: "Karol",
		lastName: "Nowak"
	},
	{
		firstName: "Alojzy",
		lastName: "Śmiechała"
	},
];

men.forEach(function(man) {
	console.log(man.firstName);
})

console.log(men[0].firstName);
console.
pop();
shift();
unshift();

// For

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

while (i<10) {
	...
};

do-while

do {
	...while.

} while (i <1);


----------------------------------

html:

var samochod = {
	marka: "AAA",
	model: "2378dg",
	kolor: "#2353",
	cena: 5000,
},

<p>To jest cena za auto <span id="cena"></span>


document.getElementById("cena").innerHTML = samochod.cena;


===========================

1. Sprawdzić parzystość liczby
 
 html js 

 <button id ="parzysta">Policz liczbę</button>
 <p id = "liczba"> Nic tutaj jeszcze nie ma</p>

 var button = document.getElementById("parzysta");
 button.addEventListener("click", par);

 function par(e){
	 var n = prompt("podaj liczbę");
	 var paragraf = document.getElementById("liczba");

	 if (n%2 ==0) {
		 paragraf.innerHTML = "parzysta";
	 } else {
		 paragraf.innerHTML = "licz jeszcze raz";
	 }


<ul>
	<li>tańczenie</li>
	<li>śpiewanie</li>
	<li>gotowanie</li>
</ul>

----------------------
Losowanie
<h1></h1>
<p></p>

function losy() {
	var element = [1,2,3,4,5];
	var rand = Math.floor(Math.random()*element.length);

	var loteriaEl = document.getElementById("loteria");
	loteriaEl.innerHTML = rand;

}
window.onload = losy;