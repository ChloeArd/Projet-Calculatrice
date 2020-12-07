


function nombre (x) {
    switch (x){
        case "0":
            document.getElementsByClassName("input1").value = "0";
            break;
        case "1":
            document.getElementsByClassName("input1").value = "1";
            break;
        case "2":
            document.getElementsByClassName("input1").value = "2";
            break;
        case "3":
            document.getElementsByClassName("input1").value = "3";
            break;
        case "4":
            document.getElementsByClassName("input1").value = "4";
            break;
        case "5":
            document.getElementsByClassName("input1").value = "5";
            break;
        case "6":
            document.getElementsByClassName("input1").value = "6";
            break;
        case "7":
            document.getElementsByClassName("input1").value = "7";
            break;
        case "8":
            document.getElementsByClassName("input1").value = "8";
            break;
        case "9":
            document.getElementsByClassName("input1").value = "9";
            break;
        case '.':
            document.getElementById("label").value += ".";
            break;
    }
}

let zero = document.getElementsByClassName("zero");
zero.addEventListener("click", nombre("0"));

let un = document.getElementsByClassName("un");
un.addEventListener("click", nombre("1"));

let deux = document.getElementsByClassName("deux");
deux.addEventListener("click", nombre("2"));

let trois = document.getElementsByClassName("un");
trois.addEventListener("click", nombre("3"));

let quatre = document.getElementsByClassName("quatre");
quatre.addEventListener("click", nombre("4"));

let cinq = document.getElementsByClassName("cinq");
cinq.addEventListener("click", nombre("5"));

let six = document.getElementsByClassName("six");
six.addEventListener("click", nombre("6"));

let sept = document.getElementsByClassName("sept");
sept.addEventListener("click", nombre("7"))

let huit = document.getElementsByClassName("huit");
huit.addEventListener("click", nombre("8"));

let neuf = document.getElementsByClassName("neuf");
neuf.addEventListener("click", nombre("9"));

let virgule = document.getElementsByClassName("virgule");
virgule.addEventListener("click", nombre("."));




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


