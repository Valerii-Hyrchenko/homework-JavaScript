//standard function - task 1
function calcSum(numberA, numberB) {
    return numberA + numberB;
}
let sumExample1 = calcSum(54, 87);
let sumExample2;
console.log(`sumExample1`, sumExample1);
if (sumExample1 < 200) {
    sumExample2 = calcSum(154, 85);
} else {
    sumExample2 = calcSum(74, 195);
}
console.log(`sumExample2`, sumExample2);

//arrow function - task 1
const calcSumArrow = (numberA, numberB) => {
    return numberA + numberB;
}
let sumExampleArrow1 = calcSumArrow(45, 81);
let sumExampleArrow2;
console.log(`sumExampleArrow1`, sumExampleArrow1);
if (sumExampleArrow1 > 200) {
    sumExampleArrow2 = calcSum(132, 92);
} else {
    sumExampleArrow2 = calcSum(44, 295);
}
console.log(`sumExampleArrow2`, sumExampleArrow2);

//task 2
const checkNameAge = () => {
    let userName = prompt("Please enter your name!");
    let userAge = Number(prompt("Please enter your age!"));
    if (userAge < 30) {
    alert (`Привет, ${userName}!`);
    } else {
        alert (`Здравствуйте, ${userName}!`);
    }
}
checkNameAge ();

//task 3
const exponentiationNumber = (number, degree = 2) => {
    return number ** degree;
}
let exponentiationExample = exponentiationNumber(18);
console.log(`exponentiationExample`, exponentiationExample);
exponentiationExample = exponentiationNumber(18, 4);
console.log(`exponentiationExample`, exponentiationExample);