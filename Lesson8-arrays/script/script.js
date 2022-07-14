//Task 1
let booleanArray1 = [true, false, false, true, false, true, false, false, true, false, false, true, false];
const getCountTrue = (booleanArray) => {
    let counter = 0;
    for (let item of booleanArray) {
        if (item === true) {
            counter++;
        }
    }
    return counter;
}
console.log(`getCountTrue`, getCountTrue(booleanArray1));
//Task 2
const letterArray = ["a", "v", "a", "b", "b", "f", "f", "p", "h", "h"];
const fruitsArray = [
    "apples",
    "oranges",
    "pears",
    "pineapple",
    "pears",
    "watermelon",
    "apples",
    "oranges",
    "oranges",
    "pears",
    "oranges",
    "watermelon",
    "cucumber",
    "pineapple",
    "melon",
    "watermelon",
    "watermelon",
];
const getOccurrencesCount = (dataArray) => {
    const resultCount = {};
    for (let element of dataArray) {
        if (!resultCount[element]) {
            resultCount[element] = 1;
        } else {
            resultCount[element] += 1
        }
    }
    return resultCount;
}
console.log(`getOccurrencesCount`, getOccurrencesCount(fruitsArray));
//Task 3
const numbersArrayExample1 = [2, 6, 8, 10, 3];
const numbersArrayExample2 = [1, 2, 3];
const getRedundantNumber = (numbersArray) => {
    const evenNumbers = [];
    const oddNumbers = [];
    for (let number of numbersArray) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }
    if (evenNumbers.length < oddNumbers.length) {
        return evenNumbers;
    } else {
        return oddNumbers;
    }
}
console.log(`getRedundantNumber`, getRedundantNumber(numbersArrayExample1));
console.log(`getRedundantNumber`, getRedundantNumber(numbersArrayExample2));