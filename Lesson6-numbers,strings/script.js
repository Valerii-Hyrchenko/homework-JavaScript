//Task 1
const checkValidRegistration = () => {
    let userName;
    let userSurname;
    let userPassword;
    let isValidSuccess = false;
    while (!isValidSuccess){
        userName = prompt("Please enter your name!").trim();
        userSurname = prompt("Please enter your surname!").trim();
        if (userName === null || userSurname === null) {
            alert("You didn't enter your name. Try again!");
        } else if (userName.length > 1 && userSurname.length > 1) {
            alert("Your password must consist of at least 6 characters and contain uppercase letters.");
            userPassword = prompt("Please enter your password!").trim();
            for (let i = 0; i < userPassword.length; i++) {
                let countSlice = i + 1;
                if (userPassword.slice(i, countSlice) === userPassword.slice(i, countSlice).toUpperCase() && userPassword.length > 6) {
                    isValidSuccess = true;
                } else if (countSlice === userPassword.length && isValidSuccess === false) {
                    alert ("You enter wrong password!");
                }
            }
        } else {
            alert ("You have entered a short name, it must be longer than 1 letter. Try again!");
        }
    }
    alert("Validation success!");
    alert(`User name is ${userName[0].toUpperCase() + userName.slice(1).toLowerCase()} and surname is ${userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase()}`);
    return true;
}
console.log(`checkValidRegistration`, checkValidRegistration());
//Task 2
const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(1, 5));