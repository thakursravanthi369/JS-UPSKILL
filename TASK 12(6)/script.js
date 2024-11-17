// Function to check if the number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the sum of first n natural numbers
function sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2;
}


// Function to find all the factors of a number
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Function to find the sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Function to check if the number is an Armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digitsCount = num.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digitsCount);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

// Main function
function analyzeNumber(n) {
    // Check if the number is prime
    let primeCheck = isPrime(n) ? 'Yes' : 'No';
    console.log(`Is it a prime number? ${primeCheck}`);

    // Find the factors of the number
    let factors = findFactors(n);
    console.log(`Factors: ${factors.join(', ')}`);

    // Sum of digits of the number
    let digitSum = sumOfDigits(n);
    console.log(`Sum of its digits: ${digitSum}`);

    // Check if it is an Armstrong number
    let armstrongCheck = isArmstrong(n) ? 'Yes' : 'No';
    console.log(`Is it an Armstrong number? ${armstrongCheck}`);
}

// Example usage with number 5
let number = 5;
console.log(`Number: ${number}`);
analyzeNumber(number);


