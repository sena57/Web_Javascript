const subtrahieren = document.getElementById("subtrahieren");
const addieren = document.getElementById("addieren"); 
const dividieren = document.getElementById("dividieren");
const multiplizieren = document.getElementById("multiplizieren");


subtrahieren.addEventListener("click", function() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = parseFloat(number1.value) - parseFloat(number2.value);
    alert("Ergebnis" + result);
});

addieren.addEventListener("click", function() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = parseFloat(number1.value) + parseFloat(number2.value);
    alert("Ergebnis " + result);
});

dividieren.addEventListener("click", function() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = parseFloat(number1.value) + parseFloat(number2.value);
    alert("Ergebnis " + result);
});

multiplizieren.addEventListener("click", function() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = parseFloat(number1.value) * parseFloat(number2.value);
    alert("Ergebnis " + result);
});