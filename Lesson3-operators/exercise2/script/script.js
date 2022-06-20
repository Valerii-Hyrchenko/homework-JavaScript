let valueA = Number (prompt ("Enter number A!"));
let valueB = Number (prompt ("Enter number B!"));
let typeOperation = prompt ("Please enter the type of operation. (+), (-), (/), (*)");
switch (typeOperation) {
    case "+":
        (isNaN(valueA) == false) && (isNaN(valueB) == false) ? alert (`Your result is ${valueA + valueB}!`) : alert ("Please enter numbers correctly!");
        break;
    case "-":
        (isNaN(valueA) == false) && (isNaN(valueB) == false) ? alert (`Your result is ${valueA - valueB}!`) : alert ("Please enter numbers correctly!");
        break;
    case "/":
        if (valueB != 0) {
            (isNaN(valueA) == false) && (isNaN(valueB) == false) ? alert (`Your result is ${valueA / valueB}!`) : alert ("Please enter numbers correctly!");
        } else {
            alert ("Cannot be divided by null!");
        }
        break;
    case "*":
        (isNaN(valueA) == false) && (isNaN(valueB) == false) ? alert (`Your result is ${valueA * valueB}!`) : alert ("Please enter numbers correctly!");
        break;
    default:
        alert ("You entered the wrong type of operation. Please enter it correctly.");
}