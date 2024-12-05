//task1
type SortDirection = "asc" | "desc";

type SortFunction = (arr: string[], direction: SortDirection) => string[];

const superSort: SortFunction = (arr, direction) => {
    
    const sortedArray = [...arr];

    
    if (direction === "asc") {
        sortedArray.sort((a, b) => a.localeCompare(b));
    } else if (direction === "desc") {
        sortedArray.sort((a, b) => b.localeCompare(a));
    }

    return sortedArray;
};


const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));


const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);


//task2
enum PackageStatus {
    Pending = "Pending",
    InTransit = "InTransit",
    Delivered = "Delivered",
    Lost = "Lost"
}
interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Parcel {
    readonly id: number;
    weight: number; 
    dimensions: Dimensions; 
    description?: string;
    sender: string | number; 
    status: PackageStatus; 
    deliver(isSuccess: boolean): void; 
    readonly statusName: string; 
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess
            ? PackageStatus.Delivered
            : PackageStatus.Lost;
    },
    get statusName() {
        return this.status;
    }
};

item.deliver(true);
console.log(item.statusName); 

