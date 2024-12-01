var employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};
var premiumData = {
    isPremium: true,
    premium: 1000
};
var payPerHour = 32;
var workingDays = 14;
var experienceCoefficients = [1, 1.1, 1.2, 1.3, 1.5];
var getSalaryInfo = function (employeeData, premiumData, payPerHour, workingDays, experienceCoefficient) {
    var baseSalary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    var totalSalary = premiumData.isPremium
        ? baseSalary + premiumData.premium
        : baseSalary;
    return "".concat(employeeData.profession, " ").concat(employeeData.name, " has a salary of ").concat(totalSalary, "$ this month");
};
var salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);
console.log(salaryInfo);
//task 2
function processData(param) {
    if (typeof param === "string") {
        console.log(param.toUpperCase());
    }
    else if (typeof param === "number") {
        console.log(param * param);
    }
    else if (typeof param === "boolean") {
        console.log(!param);
    }
    else if (Array.isArray(param)) {
        var squaredArray = param.map(function (num) { return num * num; });
        console.log(squaredArray);
    }
    else {
        console.log("Empty array");
    }
}
console.log(processData("text data"));
console.log(processData(3));
console.log(processData(false));
console.log(processData([1, 2, 3, 4]));
console.log(processData([]));
