const users = [
    { name: 'Mango', eyeColor: 'green', gender: 'female', age: 23, isActive: false, email: 'test5@gmail.com' },
    { name: 'Poly', eyeColor: 'brown', gender: 'female', age: 45, isActive: true, email: 'test20@gmail.com'},
    { name: 'Jakob', eyeColor: 'blue', gender: 'male', age: 31, isActive: true, email: 'test12@gmail.com'},
    { name: 'Alex', eyeColor: 'blue', gender: 'male', age: 18, isActive: false, email: 'test3@gmail.com'},
    { name: 'Chelsy', eyeColor: 'brown', gender: 'female', age: 29, isActive: true, email: 'test8@gmail.com'},
    { name: 'Maja', eyeColor: 'brown', gender: 'female', age: 36, isActive: false, email: 'test21@gmail.com'},
    { name: 'Peter', eyeColor: 'green', gender: 'male', age: 42, isActive: false, email: 'test8@gmail.com'},
    { name: 'Owen', eyeColor: 'blue', gender: 'male', age: 34, isActive: true, email: 'test9@gmail.com'},
];

// 1

console.log(users.map((user) => user.name))

// 2

console.log(users.filter((user) => user.eyeColor === 'brown'))

// 3

const filterGenders = users.filter((user) => user.gender === 'male')
console.log(filterGenders.map((user) => user.name))

// 4

console.log(users.filter((user) => user.isActive === false))

// 5

console.log(users.find((user) => user.email === 'test21@gmail.com'))

// 6

console.log(users.filter((user) => user.age > 30 && user.age < 40))

