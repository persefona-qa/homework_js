
//task1
function display(a: string): void;
function display(a: string, b: string): void;
function display(a: string[]): void;

function display(a: string | string[], b?: string): void {
    if (typeof a === "string" && b === undefined) {
       
        console.log(a);
    } else if (typeof a === "string" && typeof b === "string") {
    
        console.log(a);
        console.log(b);
    } else if (Array.isArray(a)) {
 
        a.forEach((msg) => console.log(msg));
    } else {
        throw new Error("Invalid arguments");
    }
}

display("Hello, World!"); 
display("Hello", "World!"); 
display(["Hello", "World", "!"]);

//task2
function identity<T extends { rating: number }>(items: T[]): number {
    if (items.length === 0) {
        throw new Error("Array is empty");
    }

    const totalRating = items.reduce((sum, item) => sum + item.rating, 0);
    return totalRating / items.length;
}

console.log(identity([{ name: "Anna", rating: 3 }]));
console.log(
    identity([
        { title: "Encounter", rating: 3 },
        { title: "Dead to me", rating: 4 },
        { title: "Riverdale", rating: 5 },
    ])
);


//task3
function withEmploymentDate(constructor: Function): void {
    Object.defineProperty(constructor.prototype, "employmentDate", {
        value: new Date("2024-04-12").toISOString(),
        writable: true,
        configurable: true,
    });
}
@withEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';
    constructor() {
        console.log('Initializing the Manager class');
    }
}
const manager = new Manager();
console.log(manager);


