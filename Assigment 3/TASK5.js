let start = 1; 
let end = 10;   
let sum = 0;

for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        sum += i;
    }
}

console.log('The sum of prime numbers between ' + start + ' and ' + end + ' is: ' + sum);
