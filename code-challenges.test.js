// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought
// process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//==============================================================================
// --------------------1) Create a function that takes in a number
// (greater than 2) and returns an array that length containing the numbers
// of the Fibonacci sequence.
//==============================================================================
// a) Create a test with expect statements for each of the variables provided.
//------------------------------------------------------------------------------

describe("getFibonacci", () => {
  it("returns an array of numbers in Fibonacci sequence", () => {
    //=== Provided Test Cases ===
    const fibLength1 = 6;
    const fibLength2 = 10;
    //=== Expected Test Results ===
    const expected1 = [1, 1, 2, 3, 5, 8];
    const expected2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

    expect(getFibonacci(fibLength1)).toEqual(expected1);
    expect(getFibonacci(fibLength2)).toEqual(expected2);
  });
  it("returns that number must be great then 2", () => {
    //=== Additional Edge Case ===
    const fibLength3 = 2;
    //=== Expected Test Results ===
    const expected3 = "Number must be greater than 2";

    expect(getFibonacci(fibLength3)).toEqual(expected3);
  });
  it("returns that number must be great then 2 if negative number", () => {
    //=== Additional Edge Case ===
    const fibLength4 = -22;
    //=== Expected Test Results ===
    const expected4 = "Number must be greater than 2";

    expect(getFibonacci(fibLength4)).toEqual(expected4);
  });
});

//---------------------|| Initial Test Results ||-------------------------------
// ● getFibonacci › returns that number must be great then 2 if negative number

// ReferenceError: getFibonacci is not defined

//   46 |     const expected4 = "Number must be greater than 2";
//   47 |
// > 48 |     expect(getFibonacci(fibLength4)).toEqual(expected4);
//      |     ^
//   49 |   });
//   50 | });
//   51 |

//   at Object.expect (code-challenges.test.js:48:5)

// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 3 total
// Snapshots:   0 total
// Time:        0.245 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this
// command.
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// b) Create the function that makes the test pass.
//------------------------------------------------------------------------------

// declare function
const getFibonacci = (num) => {
  // declare variables to manipulate fibanacci sequence with.
  // These are stored outside the scope of the loop so that the values will be
  // persistent across iterations.
  let a = 0;
  let b = 1;
  let c;

  // create empty array to hold numbers
  let fibArr = [];

  // if the input number is less than or equal 2 then return message
  if (num <= 2) {
    return "Number must be greater than 2";
  }

  // Create for-loop to cycle through iterations based on the input number.
  // add the value of B into the Array which should be initally 1..
  // then set the inital value of C to equal the sum of A & B..
  // then assign the value of B to A..
  // Then Assign the value of C to B..
  // Repeat loop which will increment the fibanacci sequence until the
  // iterations based on the input number is complete.
  for (let i = 0; i < num; i++) {
    fibArr.push(b);
    c = a + b;
    a = b;
    b = c;
  }

  // Return the result of the fibonacci sequence.
  return fibArr;
};

//--------------------------|| Final Test Results ||----------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be great then 2
//     ✓ returns that number must be great then 2 if negative number

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.72s.
//------------------------------------------------------------------------------

// --------------------2) Create a function that takes in an object and returns
// an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns
// an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = [];
// Expected output: []

// b) Create the function that makes the test pass.
