import { createInterface } from "readline";
import { finished } from "stream";

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

let isGameRunning = true;
let balance = "";

while (isGameRunning) {
console.log("Wählen Sie die Gewünschte Funktion aus: ");
const selection = [1 + '. Einzahlen', 2 + '. Abheben', 3 + '. Kontostand', 4 +'. Ende'];

    for (let i = 0; i < selection.length; i++) {
    console.log(selection[i]);
    } 

    let input = await readLineAsync();

    

    switch (input) {
        case "1":
            console.log("Geben Sie einen Betrag ein den Sie Einzahlen wollen:");
            let betrag1 = await readLineAsync();
            balance += betrag1;
            console.log("Sie haben " + betrag1 + " eingezahlt.");
            break;

        case "2":
            console.log("Geben Sie einen Betrag ein den Sie Abheben wollen:");
            let betrag2 = await readLineAsync();
            balance -= betrag2;
            console.log("Sie haben " + betrag2 + " abgehoben.");
            break;

        case "3":
            console.log("Der Kontostand beträgt: " + balance + " €.");
            break;
        
        case "4":
            isGameRunning = false;
            console.log("Maschine wurde beendet!");
            readline.close();
    }
  }