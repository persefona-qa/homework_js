var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var superSort = function (arr, direction) {
    var sortedArray = __spreadArray([], arr, true);
    if (direction === "asc") {
        sortedArray.sort(function (a, b) { return a.localeCompare(b); });
    }
    else if (direction === "desc") {
        sortedArray.sort(function (a, b) { return b.localeCompare(a); });
    }
    return sortedArray;
};
var names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
var func = superSort;
var result = func(["A", "C", "D", "B"], "desc");
console.log(result);
//task2
var PackageStatus;
(function (PackageStatus) {
    PackageStatus["Pending"] = "Pending";
    PackageStatus["InTransit"] = "InTransit";
    PackageStatus["Delivered"] = "Delivered";
    PackageStatus["Lost"] = "Lost";
})(PackageStatus || (PackageStatus = {}));
var item = {
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
    deliver: function (isSuccess) {
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
