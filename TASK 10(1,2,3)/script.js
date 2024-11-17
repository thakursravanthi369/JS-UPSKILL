let P = 5000; // Principal amount
let r = 0.09; // Annual interest rate (9%)
let n = 15; // Number of times interest is compounded per year
let t = 12; // Time in years

//  compound interest
let A = P * Math.pow((1 + (r / n)), (n * t));

console.log("The amount after " + t + " years is: " + A.toFixed(6));
document.write(A);