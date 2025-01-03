const divide = (dividend, divisor) => {
    return new Promise((resolve, reject) => {
      if (divisor === 0) {
        reject("Division by zero is not allowed.");
      } else {
        resolve(dividend / divisor);
      }
    });
  };
  
  // Test cases
  const testCases = [
    { dividend: 10, divisor: 2, expected: 5 },
    { dividend: 10, divisor: 0, expected: "Division by zero is not allowed." },
    { dividend: 5, divisor: 2, expected: 2.5 },
    { dividend: 15, divisor: 3, expected: 5 },
    { dividend: 0, divisor: 5, expected: 0 },
  ];
  
  testCases.forEach((testCase) => {
    divide(testCase.dividend, testCase.divisor)
      .then((result) => {
        console.log(`Example: Dividing ${testCase.dividend} by ${testCase.divisor}...`);
        console.log(`Result: ${result}`);
      })
      .catch((error) => {
        console.log(`Example: Dividing ${testCase.dividend} by ${testCase.divisor}...`);
        console.log(`Error: ${error}`);
      });
  });