//task 1
type Employee = {
    name: string;
    profession: string;
    workingHoursPerDay: number;
};

type PremiumData = {
    isPremium: boolean;
    premium: number;
};

const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000
};

const payPerHour: number = 32;
const workingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
    employeeData: Employee,
    premiumData: PremiumData,
    payPerHour: number,
    workingDays: number,
    experienceCoefficient: number
): string => {
    const baseSalary =
        employeeData.workingHoursPerDay * payPerHour * workingDays * experienceCoefficient;
    const totalSalary = premiumData.isPremium
        ? baseSalary + premiumData.premium
        : baseSalary;

    return `${employeeData.profession} ${employeeData.name} has a salary of ${totalSalary}$ this month`;
};

const salaryInfo = getSalaryInfo(
    employee,
    premiumData,
    payPerHour,
    workingDays,
    experienceCoefficients[2]
);

console.log(salaryInfo);


//task 2

function processData(param: string | number | boolean | number[]): void {
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
        const squaredArray = param.map((num) => num * num);
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