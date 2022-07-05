//Task 1
const checkValidName = () => {
    let userName;
    let userSurname;
    let isValidNameSuccess = false;
    while (!isValidNameSuccess){
        userName = prompt("Please enter your name!");
        userSurname = prompt("Please enter your surname!");
        if (userName === null || userSurname === null) {
            alert("You didn't enter your name. Try again!");
        } else if (userName.length > 1 && userSurname.length > 1) {
            isValidNameSuccess = true;
        } else {
            alert ("You have entered a short name, it must be longer than 1 letter. Try again!");
        }
    }
    alert("Validation success!");
    alert(`User name is ${userName[0].toUpperCase() + userName.slice(1).toLowerCase()} and surname is ${userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase()}`);
    return true;
}
const checkValidPassword = () => {
    let userPassword;
    let isValidPasswordSuccess = false;
    while (!isValidPasswordSuccess) {
        alert("Your password must consist of at least 6 characters and contain uppercase letters.");
        userPassword = prompt("Please enter your password!").trim();
        if (userPassword.toLowerCase() === userPassword || userPassword.toUpperCase() === userPassword || userPassword.length < 6) {
            alert ("You enter wrong password!");
        } else {
            isValidPasswordSuccess = true;
        }
    }
    alert("Validation success!");
    return true;
    }
//console.log(`checkValidName`, checkValidName());
console.log(`checkValidPassword`, checkValidPassword());
//Task 2
const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(1, 5));