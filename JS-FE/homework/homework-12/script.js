// 1

const user = {
    name: "John",
    age: 17,
    hobby: "football",
    premium: true
};
user.hobby = 'tennis';
user.mood = 'happy';
user.premium = false

let { userName, hobby, premium, mood } = user;
console.log(userName)
console.log(hobby)
console.log(premium)
console.log(mood)
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// 2

function countProps(obj){
    return Object.keys(obj).length
}
console.log(countProps(user))
let { age } = user;
console.log(age)

// 3

const performance = {
    'Peter': 12,
    'Louis': 19,
    'Stewie': 6,
    'Brian': 27,
    'Quagmire': 15,
    'Joe': 33
}
function findBestEmployee(employees) {
    let maxPerformance = 0;
    let bestEmployee = null;

    for (const [name, performance] of Object.entries(employees)) {
        if (performance > maxPerformance) {
            maxPerformance = performance;
            bestEmployee = name;
        }
    }

    return `Our best empoyee is ${bestEmployee} with performance of ${maxPerformance}`;
}
console.log(findBestEmployee(performance));
// const { Peter, Louis, Stewie, Brian, Quagmire, Joe } = performance;
// console.log(Peter);
// console.log(Louis);
// console.log(Stewie);
// console.log(Brian);
// console.log(Quagmire);
// console.log(Joe);

// 4

const salary = {
    'Peter': 1000,
    'Louis': 2000,
    'Stewie': 300,
    'Brian': 3500,
    'Quagmire': 1200,
    'Joe': 4000
}
function countTotalSalary(employees){
    let totalSalary = 0;
    const values = Object.values(employees);
    for (let value of values){
        totalSalary += value
    }
    return totalSalary
}
console.log(countTotalSalary(salary))
const { Peter, Louis, Stewie, Brian, Quagmire, Joe } = salary;
console.log(Peter);
console.log(Louis);
console.log(Stewie);
console.log(Brian);
console.log(Quagmire);
console.log(Joe);

// 5

function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
}
const products = [
    { name: 'Apple', price: 100, quantity: 50 },
    { name: 'Banana', price: 80, quantity: 150 },
    { name: 'Cherry', price: 120, quantity: 30 }
];

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price')); 
console.log(getAllPropValues(products, 'quantity')); 

for (const { name, price, quantity } of products) {
    console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
}

// 6

function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
    return 0;
}
console.log(calculateTotalPrice(products, 'Apple'));
console.log(calculateTotalPrice(products, 'Banana')); 
console.log(calculateTotalPrice(products, 'Cherry')); 
for (const { name, price, quantity } of products) {
    console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
}