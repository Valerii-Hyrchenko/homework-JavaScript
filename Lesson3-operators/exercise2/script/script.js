let valueA = Number (prompt ("Enter number A!"));
let valueB = Number (prompt ("Enter number B!"));
let typeOperation = prompt ("Please enter the type of operation. (+), (-), (/), (*)");
if ((isNaN(valueA) === false) && (isNaN(valueB) === false)) {
    switch (typeOperation) {
        case "+":
            alert (`Your result is ${valueA + valueB}!`);
            break;
        case "-":
            alert (`Your result is ${valueA - valueB}!`);
            break;
        case "/":
            if (valueB != 0) {
                alert (`Your result is ${valueA / valueB}!`);
            } else {
                alert ("Cannot be divided by null!");
            }
            break;
        case "*":
            alert (`Your result is ${valueA * valueB}!`);
            break;
        default:
            alert ("You entered the wrong type of operation. Please enter it correctly.");
    }
} else {
    alert ("Please enter numbers correctly!");
}