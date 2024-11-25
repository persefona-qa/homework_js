//task 1
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    address: {
        city: "New York",
        country: "USA"
    },
}

function gettUserInfo(obj) {
    const {
        firstName,
        lastName,
        contact: { email, phone },
        address: { city }
    } = obj;

    return { firstName, lastName, email, phone, city };
}

const userInfo = gettUserInfo(user)
console.log(userInfo)

//task2
function countCars(cars) {
    const carCounts = new Map();

    for (const car of cars) {
        if (carCounts.has(car)) {
            carCounts.set(car, carCounts.get(car) + 1);
        } else {
            carCounts.set(car, 1);
        }
    }

    return carCounts;
}
const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));

//task3
function checkLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "qwerty123456") {
                resolve(`Welcome, ${username}!`);
            } else {
                reject("Invalid username or password!");
            }
        }, 2000);
    });
}
checkLogin("admin", "qwerty123456")
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

//task 4
async function loadUserProfile(userId) {
    const profile = await fetchUserProfile(userId);
    const posts = await fetchUserPosts(userId);

    return { profile, posts };
}

async function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId, name: "John Doe", age: 30 });
        }, 1000);
    });
}

async function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, content: "Hello, world!" },
                { postId: 2, content: "Loving this app!" }
            ]);
        }, 2000);
    });
}
loadUserProfile(1)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
