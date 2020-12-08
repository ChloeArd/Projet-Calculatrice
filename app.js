let input1 = document.getElementById("input1")

//Les boutons nombres et virgules:

//Bouton 0
let buttonZero = document.getElementById("zero");
function entrerZero() {
    input1.value += 0;
}
buttonZero.addEventListener("click", entrerZero);

//Bouton 1
let buttonUn = document.getElementById("un");
function entrerUn() {
    input1.value += 1;
}
buttonUn.addEventListener("click", entrerUn);

//Bouton 2
let buttonDeux = document.getElementById("deux");
function entrerDeux() {
    input1.value += 2 ;
}
buttonDeux.addEventListener("click", entrerDeux);

//Bouton 3
let buttonTrois = document.getElementById("trois");
function entrerTrois() {
    input1.value += 3;
}
buttonTrois.addEventListener("click", entrerTrois);

//Bouton 4
let buttonQuatre = document.getElementById("quatre");
function entrerQuatre() {
    input1.value += 4;
}
buttonQuatre.addEventListener("click", entrerQuatre);

//Bouton 5
let buttonCinq = document.getElementById("cinq");
function entrerCinq() {
    input1.value += 5;
}
buttonCinq.addEventListener("click", entrerCinq);

//Bouton 6
let buttonSix = document.getElementById("six");
function entrerSix() {
    input1.value += 6;
}
buttonSix.addEventListener("click", entrerSix);

//Bouton 7
let buttonSept = document.getElementById("sept");
function entrerSept() {
    input1.value += 7;
}
buttonSept.addEventListener("click", entrerSept);

//Bouton 8
let buttonHuit = document.getElementById("huit");
function entrerHuit() {
    input1.value += 8;
}
buttonHuit.addEventListener("click", entrerHuit);

//Bouton 9
let buttonNeuf = document.getElementById("neuf");
function entrerNeuf() {
    input1.value += 9;
}
buttonNeuf.addEventListener("click", entrerNeuf);

//Bouton virgule
let buttonVirgule = document.getElementById("virgule");
function entrerVirgule() {
    input1.value += ".";
}
buttonVirgule.addEventListener("click", entrerVirgule);

//Les boutons d'opérations:

let buttonPlus = document.getElementById("addition");
let buttonMoins = document.getElementById("soustraction");
let buttonFois = document.getElementById("multiplication");
let buttonModulo = document.getElementById("modulo");

function addition() {
    input1.value += "+";
}
buttonPlus.addEventListener("click", addition);

function soustraction() {
    input1.value += "-";
}
buttonMoins.addEventListener("click", soustraction);

function multiplication() {
    input1.value += "x";
}
buttonFois.addEventListener("click", multiplication);

function modulo() {
    input1.value += "%";
}
buttonModulo.addEventListener("click", modulo);





// Calculer les opérations:
function calculer () {
    let a = document.getElementsByClassName("input1");
    let b = document.getElementsByClassName("input1");
    switch (x) {
        case "+":
            document.getElementsByClassName("input1").value = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            document.getElementsByClassName("input1").value = parseFloat(a) - parseFloat(b);
            break;
        case "x":
            document.getElementsByClassName("input1").value = parseFloat(a) * parseFloat(b);
            break;
        case "%":
            document.getElementsByClassName("input1").value = parseFloat(a) % parseFloat(b);
    }
}

document.getElementById("result").addEventListener("click", calculer());

