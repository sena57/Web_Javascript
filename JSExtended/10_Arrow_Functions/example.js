class Person {
    constructor(name, age) {
        this.name = name;
    }


    printNameArrow() {
        setTimeout(() =>{
            console.log('Arrow: ' + this.name);
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}

let person = new Person('John');
person.printNameArrow();
person.printNameFunction();
console.log(this.name);