let count = 0;

for (var i = 7; i < 344; i++) {
    if (i % 2 == 0) {
        count += i;
    }
    
    else if (i % 12 == 0) {
        count += i*3;
    }
    
}    
console.log(count);

