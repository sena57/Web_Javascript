import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

console.log("Please enter your name: ");
let input = await readLineAsync();
console.log("Hello " + input + "!");
readline.close();