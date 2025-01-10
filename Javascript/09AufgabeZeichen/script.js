function sumASCII(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let asciiValue = str.charCodeAt(i);

        //gerade Zahlen werden doppeelt gezählt
        if (asciiValue % 2 === 0) {
            sum += 2 * asciiValue;
        } else {
            sum += asciiValue;
        }
    }

    return sum;
}


const input = "ab";
console.log(sumASCII(input));