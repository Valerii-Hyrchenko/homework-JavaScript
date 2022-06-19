let valueA = Number (prompt ("Enter number A!"));
let valueB = Number (prompt ("Enter number B!"));
let typeOperation = prompt ("Please enter the type of operation. (+), (-), (/), (*)");
function resultSum(valueA,valueB) {
    return valueA + valueB;
}
function resultSubtraction(valueA,valueB) {
    return valueA - valueB;
}
function resultDivide(valueA,valueB) {
    return valueA / valueB;
}
function resultMultiply(valueA,valueB) {
    return valueA * valueB;
}
switch (typeOperation) {
    case "+":
        alert (`Your result is ${resultSum(valueA,valueB)}`);
        break;
    case "-":
        alert (`Your result is ${resultSubtraction(valueA,valueB)}`);
        break;
    case "/":
        if (valueB != 0) {
            alert (`Your result is ${resultDivide(valueA,valueB)}`);
        } else {
            alert ("Cannot be divided by zero!");
        }
        break;
    case "*":
        alert (`Your result is ${resultMultiply(valueA,valueB)}`);
        break;
    default:
        alert ("You entered the wrong type of operation. Please enter it correctly.");
}