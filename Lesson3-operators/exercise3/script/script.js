let visitorAge = Number(prompt ("Hello! Please enter your age!"));
let parentalPermission;
if (visitorAge <= 80 && visitorAge >= 12) {
    if (visitorAge < 60 && visitorAge > 18) {
        alert ("Welcome to the amusement park!");
    } else {
        parentalPermission = prompt ("Do you have parental permission to visit the amusement park? Enter yes/no.");
        if (parentalPermission == "yes") {
            alert ("Welcome to the amusement park!");
        } else if (parentalPermission == "no") {
            alert ("You are not allowed to visit the amusement park!");
        } else {
            alert ("Please enter your answer correctly!");
        }
    }
} else {
    alert ("You are not allowed to visit the amusement park!");
}