const user = {
    userName: 'John',
    login: 'qwerty',
    isRegistered: true,
    userAge: 72,
    userFriends: ['Jimmy', 'Peter', 'Stewie', 'Lois', 'Quagmire', 'Meg'],
    location: {
        country: 'New Zeeland',
        city: 'Wellington',
        street: 'Main Street'
    },
    showFriends(){
        return this.userFriends.join(' ')
    }
}
console.log(user)
const userLogin = user.login;
console.log(userLogin)
user.status = 'online';
console.log(user.status)
console.log(user.showFriends())

// Створіть об'єкт "person" з властивостями
// "name", "age", "gender". 
// Додайте до об'єкту метод, який буде виводити на екран
// повідомлення про особистість зі значеннями всіх властивостей.

const person = {
    name: 'Jack',
    age: 23,
    gender: 'male',
    print (){
        return `${this.name} is ${this.age} and his gender is ${this.gender}`
    }
}
console.log(person.print())

// Створіть масив об'єктів "students", 
// де кожен об'єкт буде містити властивості
// "name", "age", "gender" та "grade". 
// Напишіть функцію, яка приймає масив об'єктів 
// "students" і повертає середній бал групи.

const students = [
    {
        name: 'Alex',
        age: 16,
        gender: 'male',
        grade: '89'
    },
    {
        name: 'Maria',
        age: 15,
        gender: 'female',
        grade: '56'
    },
    {
        name: 'Peter',
        age: 18,
        gender: 'male',
        grade: '78'
    }
]
console.log(students)
let grade = 0;
function studentsGrade(students){
    for(const student of students){
        grade += Number(student.grade)
        
    }
    let average = grade / students.length
    return average;
}
console.log(studentsGrade(students))

const cart = {
    products: [
        {name: "strawberry", price: 50},
        {name: 'blueberry', price: 70},
        {name: 'lemon', price: 60},
        {name: 'apple', price: 110}
    ],
    getProducts(){
        let message = 'У вашому кошику: ';
        for (let i = 0; i < this.products.length; i++){
            const element = this.products[i];
            message += element.name;
            return message
        }
    }
}
console.log(cart.getProducts())