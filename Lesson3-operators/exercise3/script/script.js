let visitorAge = Number(prompt ("Hello! Please enter your age!"));
if (visitorAge <= 80 && visitorAge >= 12) {
    if (visitorAge < 60 && visitorAge > 18) {
        alert ("Welcome to the amusement park!");
    } else {
        alert ("You can visit the amusement park only with the permission of your parents or other responsible person!");
    }
} else {
    alert ("You are not allowed to visit the amusement park!");
}