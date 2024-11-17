// Dummy array for testing purposes
const array = [5, 9, 3, 12, 7, 8, 11];

// 1. Find the maximum number in the array using an arrow function
const findMax = arr => Math.max(...arr);
console.log("Maximum number:", findMax(array));

// 2. Calculate the sum of all elements in the array using an anonymous function
const sumArray = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};
console.log("Sum of all elements:", sumArray(array));

// 3. Count the number of odd numbers in the array using a named function
function countOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).length;
}
console.log("Count of odd numbers:", countOddNumbers(array));

