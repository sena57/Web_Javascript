if (true) {
    var varVariable = 'This is new'  //var kann man auch von aussen verwe

}

var varVariable = 'This is false' // das überschreibt das obere

console.log(varVariable); 

let letVariable = 'true' 
let letVariable = 'false'   //geht nicht gibt ein error aus, man kann es nicht überschreiben

if (true) {
    let letVariable = 'This is new' //let/const kann man nur in dem if sehen
    console.log(letVariable); 
}

console.log(letVariable); 




const constVariable = 1
let letVariable = 1

constVar.name = 'sally'  // kann man nicht mehr ändern, ein fixer wert
letVar = 2

console.log(constVariable);

