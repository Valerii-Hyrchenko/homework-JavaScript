//Task 1
const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";
let isAuthorizeSuccess = false;
let attemptAuthorize = 3;
const authorizeUser = () => {
do {
    if (attemptAuthorize === 0) {
        alert ("Sorry, you can't sign up. Please try again later!");
        break;        
    } else {
        alert (`You have ${attemptAuthorize} attempts to authorize!`);
        let userLogin = prompt ("Login: ");
        let userPassword = prompt ("Password: ");
        attemptAuthorize--
        if (!userLogin) {
            alert ("Please, enter your login!");
            continue;
        }
        if (!userPassword) {
            alert ("Please, enter your password!");
            continue;
        }
        if (userLogin === LOGIN && userPassword === PASSWORD) {
            isAuthorizeSuccess = true;
            alert ("Welcome!");
            break;
        } else {
            alert ("Wrong login or password!");
        }
        }
    } while (!isAuthorizeSuccess);
}
authorizeUser ();
//Task 2
const getPrimeNumbers = (numberStart, numberFinish) => {
    for (numberStart; numberStart <= numberFinish; numberStart++) {
        let wrongNumber = false;
        for (let checkDivide = 2; checkDivide < numberStart; checkDivide++) {
            if (numberStart % checkDivide === 0) {
                wrongNumber = true;
                continue;
            }
        }
        if (wrongNumber === false && numberStart > 1) {
            console.log(`PrimeNumber`, numberStart);
        }
    }
}
getPrimeNumbers(20, 100);