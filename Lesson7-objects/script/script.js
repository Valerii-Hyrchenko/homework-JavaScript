//Task 1
function getSchedule() {
    isScheduleFull = false;
    const schedule = {};
    while (!isScheduleFull) {
        let userTask = prompt("Enter your task");
        let userTime = prompt("Enter the scheduled execution time");
        if (userTask === null && userTime === null) {
            isScheduleFull = true;
        } else {
            schedule[userTime] = userTask;
        }
    }
    return schedule;
}
console.log(`getSchedule`, getSchedule());
//Task 2
const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};
function getSumSalaries (salaries) {
    let result = 0;
    for (let employee in salaries) {
        result += Number(salaries[employee]);
    }
    return result.toFixed(2);
}   
console.log(`getSumSalaries`, getSumSalaries(salaries));