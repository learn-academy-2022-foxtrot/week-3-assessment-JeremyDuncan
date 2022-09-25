// ASSESSMENT 3: Coding Practical Questions with Jest

const { clear } = require("console");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//==============================================================================
// --------------------1)👉 Create a function that takes in a number
// (greater than 2) and returns an array that length containing the numbers
// of the Fibonacci sequence.
//==============================================================================
// a)🧪 Create a test with expect statements for each of the variables provided.
//------------------------------------------------------------------------------
=======
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
>>>>>>> parent of 3c30ea8 (updated formatting)

describe("getFibonacci", () => {
  it("returns an array of numbers in Fibonacci sequence", () => {
    // === Provided Test Cases ===
    const fibLength1 = 6;
    const fibLength2 = 10;
    //=== Expected Test Results ===
    const expected1 = [1, 1, 2, 3, 5, 8];
    const expected2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(getFibonacci(fibLength1)).toEqual(expected1);
    expect(getFibonacci(fibLength2)).toEqual(expected2);
  });
  it("returns that number must be greater than 2", () => {
    //=== Additional Edge Case ===
    const fibLength3 = 2;
    //=== Expected Test Results ===
    const expected3 = "Number must be greater than 2";

    expect(getFibonacci(fibLength3)).toEqual(expected3);
  });
  it("returns that number must be greater than 2 if negative number", () => {
    //=== Additional Edge Case ===
    const fibLength4 = -22;
    //=== Expected Test Results ===
    const expected4 = "Number must be greater than 2";
=======
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>>>>>> parent of 3c30ea8 (updated formatting)

    expect(getFibonacci(fibLength4)).toEqual(expected4);
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//---------------------||❌ Initial Test Results ❌||---------------------------
// ● getFibonacci › returns that number must be greater than 2 if negative number
=======
// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
>>>>>>> parent of 3c30ea8 (updated formatting)

// ReferenceError: getFibonacci is not defined

<<<<<<< HEAD
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
// b)👨‍💻 Create the function that makes the test pass.
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

//--------------------||✅ Final Test Results ✅||------------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be greater than 2
//     ✓ returns that number must be greater than 2 if negative number

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.72s.
//------------------------------------------------------------------------------

//==============================================================================
// --------------------2)👉 Create a function that takes in an object and
//returns an array of the numbers sorted from least to greatest.
//==============================================================================
// a)🧪 Create a test with expect statements for each of the variables provided.
//------------------------------------------------------------------------------

describe("sortObjNumbers", () => {
  it("returns an array of the numbers sorted from least to greatest.", () => {
    //=== Provided Test Cases ===
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    //=== Expected Test Results ===
    const expected1 = [15, 15, 20, 30, 30, 60, 90];
    const expected2 = [10, 15, 20, 45, 60, 65, 100];

    expect(sortObjNumbers(studyMinutesWeek1)).toEqual(expected1);
    expect(sortObjNumbers(studyMinutesWeek2)).toEqual(expected2);
  });
});

//---------------------||❌ Initial Test Results ❌||---------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be greater than 2
//     ✓ returns that number must be greater than 2 if negative number (2 ms)
//   sortObjNumbers
//     ✕ returns an array of the numbers sorted from least to greatest.

//   ● sortObjNumbers › returns an array of the numbers sorted from least to
//     greatest.

//     ReferenceError: sortObjNumbers is not defined

//       165 |     const expected2 = [10, 15, 20, 45, 60, 65, 100];
//       166 |
//     > 167 |     expect(sortObjNumbers(studyMinutesWeek1)).toEqual(expected1);
//           |     ^
//       168 |     expect(sortObjNumbers(studyMinutesWeek2)).toEqual(expected2);
//       169 |   });
//       170 | });

//       at Object.expect (code-challenges.test.js:167:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 3 passed, 4 total
// Snapshots:   0 total
// Time:        0.227 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this
// command.
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// b)👨‍💻 Create the function that makes the test pass.
//------------------------------------------------------------------------------

// declare function
const sortObjNumbers = (obj) => {
  // create array to hold sorted numbers
  const numArr = [];
  // loop through all object keys
  for (const key in obj) {
    // for each iteration push the value of the key into the array
    numArr.push(obj[key]);
  }
  // return the value of the array that has been sorted from least to greatest
  return numArr.sort(function (a, b) {
    return a - b;
  });
};
=======
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
>>>>>>> parent of 3c30ea8 (updated formatting)

//--------------------||✅ Final Test Results ✅||------------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be greater than 2
//     ✓ returns that number must be greater than 2 if negative number
//   sortObjNumbers
//     ✓ returns an array of the numbers sorted from least to greatest.

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.217 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.76s.
//------------------------------------------------------------------------------
=======
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
>>>>>>> parent of 3c30ea8 (updated formatting)

//==============================================================================
// --------------------3)👉 Create a function that takes in an array and returns
// an array of the accumulating sum. An empty array should return an empty array
//==============================================================================
// a)🧪 Create a test with expect statements for each of the variables provided.
//------------------------------------------------------------------------------
describe("accumulateArray", () => {
  it("returns an array of the accumulating sum", () => {
    //=== Provided Test Cases ===
    const accountTransactions1 = [100, -17, -23, -9];
    const accountTransactions2 = [250, -89, 100, -96];
    //=== Expected Test Results ===
    const expected1 = [100, 83, 60, 51];
    const expected2 = [250, 161, 261, 165];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(accumulateArray(accountTransactions1)).toEqual(expected1);
    expect(accumulateArray(accountTransactions2)).toEqual(expected2);
  });
  it("An empty array should return an empty array", () => {
    //=== Provided Test Cases ===
    const accountTransactions3 = [];
    //=== Expected Test Results ===
    const expected3 = [];

    expect(accumulateArray(accountTransactions3)).toEqual(expected3);
  });
});

//---------------------||❌  Initial Test Results ❌||--------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be greater than 2
//     ✓ returns that number must be greater than 2 if negative number (1 ms)
//   sortObjNumbers
//     ✓ returns an array of the numbers sorted from least to greatest.
//   accumulateArray
//     ✕ returns an array of the accumulating sum
//     ✕ An empty array should return an empty array
=======
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
=======
>>>>>>> parent of 3c30ea8 (updated formatting)
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
>>>>>>> parent of 3c30ea8 (updated formatting)

//   ● accumulateArray › returns an array of the accumulating sum

//     ReferenceError: accumulateArray is not defined

//       263 |     const expected2 = [250, 161, 261, 165];
//       264 |
//     > 265 |     expect(accumulateArray(accountTransactions1)).toEqual(expected1);
//           |     ^
//       266 |     expect(accumulateArray(accountTransactions2)).toEqual(expected2);
//       267 |   });
//       268 |   it("An empty array should return an empty array", () => {

//       at Object.expect (code-challenges.test.js:265:5)

//   ● accumulateArray › An empty array should return an empty array

//     ReferenceError: accumulateArray is not defined

//       272 |     const expected3 = [];
//       273 |
//     > 274 |     expect(accumulateArray(accountTransactions3)).toEqual(expected3);
//           |     ^
//       275 |   });
//       276 | });
//       277 |

//       at Object.expect (code-challenges.test.js:274:5)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 4 passed, 6 total
// Snapshots:   0 total
// Time:        0.176 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// b)👨‍💻 Create the function that makes the test pass.
//------------------------------------------------------------------------------

// declare function
const accumulateArray = (numArr) => {
  // create variable with a value of zero to hold a value
  // This is created outside the scope of the map() function so the data can be
  // persistent across multiple iterations
  let accumulator = 0;

  //ternary operator:
  // if input array is empty then "?" return an empty array..
  // else ":" map through the array..
  //  then store the value of the sum of "value" and accomulator
  //  then set the accumulator value to the new value assigned previously
  //  repeat the accumulation process till the array has been iterated through
  return numArr.length === 0
    ? []
    : numArr.map((value) => {
        value = value + accumulator;
        accumulator = value;
        return value;
      });
};

//--------------------||✅ Final Test Results ✅||------------------------------
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/Repos/week-3-assessment-JeremyDuncan/
// node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   getFibonacci
//     ✓ returns an array of numbers in Fibonacci sequence (1 ms)
//     ✓ returns that number must be greater than 2
//     ✓ returns that number must be greater than 2 if negative number
//   sortObjNumbers
//     ✓ returns an array of the numbers sorted from least to greatest. (1 ms)
//   accumulateArray
//     ✓ returns an array of the accumulating sum
//     ✓ An empty array should return an empty array

// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        0.2 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.78s.
//------------------------------------------------------------------------------
//==============================================================================
