let visitorAge = Number(prompt ("Hello! Please enter your age!"));
let parentalPermission;
if (visitorAge <= 80 && visitorAge >= 12) {
    if (visitorAge < 60 && visitorAge > 18) {
        alert ("Welcome to the amusement park!");
    } else {
        parentalPermission = confirm ("Do you have parental permission to visit the amusement park?");
        if (parentalPermission === true) {
            alert ("Welcome to the amusement park!");
        } else {
            alert ("You are not allowed to visit the amusement park!");
        }
    }
} else {
    alert ("You are not allowed to visit the amusement park!");
}