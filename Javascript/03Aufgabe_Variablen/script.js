let banana = 0;
let apple = 0;
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

console.log("Anzahl Bananen pro Kilo: " + (1 / bananaWeightPerBanana));
console.log("Anzahl Äpfel pro Kilo: " + (1 / appleWeightPerApple));
console.log("Preis pro Banane: " + (bananaPricePerKilo / bananaWeightPerBanana));
console.log("Preis pro Apfel: " + (applePricePerKilo / appleWeightPerApple));

// Preis von 8 Äpfeln
console.log("8 Äpfel kosten " + (applePricePerKilo / appleWeightPerApple * 8));

// Preis von 17 Bananen
console.log("17 Bananen kosten " + (bananaPricePerKilo / bananaWeightPerBanana * 17));

// Preis von 1 Tonne Äpfel
let tonOfApple = 1000 / appleWeightPerApple
console.log("Eine Tonne Äpfel kosten: " + tonOfApple * applePricePerKilo);

let tonOfBananas = 1000 /bananaWeightPerBanana
console.log("Eine Tonne Bananen kostet: " + tonOfBananas * bananaPricePerKilo);