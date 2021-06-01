// ASSESSMENT 3: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
describe ("fibonacci", () => {
    test("array of that length containing the numbers of the Fibonacci", () => {
        expect(fibonacci(num)).toEqual([1, 1, 2, 3, 5, 8])
    })
})
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//Create a function called fibonacci
const fibonacci = (int) => {
//create an empty array
    let array = []
//for loop to interate over array
    for(let i = 0; i < int; i++){
        array[i]= array[i-1] + array[i-2]
    }
//return array and push int
    return array.push(int[i])
}




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("onlyOddsOrder", () => {
    test("return a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOddsOrder(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddsOrder(fullArr2)).toEqual([-823, 7, 23])
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]




// b) Create the function that makes the test pass.
//create a function called onlyOddsOrder
const onlyOddsOrder = (arr) => {
//create a variable
    let oddNums = [];
//for loop to iterate over the 
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddNums.push(arr[i])
        }
    }
//return only odd numbers
    return oddNums
}


// const onlyOddsOrder = (arr) => {
//    return arr.filter
// }




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe ("accumulatingSum", () => {
    test("an array that returns an arrayof the accumulating sum", () => {
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })

})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []





// b) Create the function that makes the test pass.
//Create a function called accumulatingSum
const accumulatingSum = (arr) => {
//conditional it itereate over array
    if (arr.length<1){
//if array is empty return nothing
    return;
    }
//initiate variable sum to 0
    let returnArr = Array(arr.length)
    let sum = 0
//for each number passed in array
    for (let i in arr){
//add each number
    sum+=arr[i]
//add sum to index element and return array
    returnArr[i]= sum
    }
    return returnArr
}
//Got some help on this one