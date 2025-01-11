const car = {
    wheels: 4,
    healights: 2,
    engine: 'Diesel engine',
    title: 'BMW'
}
const bmwX3 = Object.create(car)
bmwX3.color = 'blue';
bmwX3.model = 'X3';

// для того щоб перевикористовувати модель для екземплярів придумали функції конструктори

// const Car = function(wheelsCar, headlightsCar, modelCar, priceCar){
//     this.wheels = wheelsCar;
//     this.headlights = headlightsCar;
//     this.model = modelCar;
//     this.price = priceCar
// }
// const car1 = new Car(4, 2, 'BMW i8', 100000)
// console.log(car1)
// const car2 = new Car(4, 2, 'BMW M4')

// const Car = function({wheelsCar, headlightsCar, modelCar, priceCar}){
//     this.wheels = wheelsCar;
//     this.headlights = headlightsCar;
//     this.model = modelCar;
//     this.price = priceCar
// }
// const data1 = {
//     wheelsCar: 4,
//     headlightsCar: 2,
//     modelCar: 'BMW X7',
//     priceCar: 160000
// }
// const data2 = {
//     wheelsCar: 4,
//     headlightsCar: 2,
//     modelCar: 'BMW M4',
//     priceCar: 150000
// }
// const car1 = new Car(data1)
// console.log(car1)
// const car2 = new Car(data2)
// console.log(car2)

// Перепишемо цю функцію на класс: 

// class Car {
//     constructor ({wheels, headlights, model, price}){
//         // Це функція в який ми зберігаємо данні. Якщо ми ії не створили то вона автоматично створется і буде порожньою
//         this.wheels = wheels;
//         this.headlights = headlights;
//         this.model = model;
//         this.price = price
//     }
//     showInfo(){
//         return `Автомобіль марки ${this.model} має ${this.headlights} та ${this.wheels}, коштує ${this.price}`
//     }
// }
// const info1 = {
//     wheels: 4,
//     headlights: 2,
//     model: 'BMW M4',
//     price: 150000
// }
// const bmw = new Car(info1)
// console.log(bmw.showInfo())

// const info2 = {
//     wheels: 4,
//     headlights: 2,
//     model: 'Lexus RX',
//     price: 200000
// }
// const lexus = new Car(info2)
// console.log(lexus.showInfo())

// Напишемо гру

class Hero {
    constructor(heroName, heroPoints){
        this.name = heroName;
        this.points = heroPoints;
    }
    showInfo(){
        return `Hero name is ${this.name}, hero points are ${this.points}`
    }
}

class Ork extends Hero{
    constructor({orkName, orkPoints, orkGender, orkSkinColor, orkWeapons}){
        super(orkName, orkPoints)
        this.gender = orkGender;
        this.skinColor = orkSkinColor;
        this.weapons = orkWeapons;
    }
    showOrkPoints(){
        return `Ork ${this.name} has ${this.points}`
    }
    orkAttacks(){
        this.points += 100
        return `Ork ${this.name} attacks Elfs with ${this.weapons} and has ${this.points}`
    }
}

class Elf extends Hero{
    constructor({elfName, elfPoints, elfLifeTime, elfEarSize}){
        super(elfName, elfPoints)
        this.lifeTime = elfLifeTime;
        this.earSize = elfEarSize;
    }
    elfFights(){
        return `Elf ${this.name} fights with ${this.points} points`
    }
}

const orkRufus = new Ork({
    orkName: 'Rufus',
    orkPoints: 100,
    orkGender: 'male',
    orkSkinColor: 'green',
    orkWeapons: 'gun'
})
console.log(orkRufus.showOrkPoints())
console.log(orkRufus.orkAttacks())

const elfRufas = new Elf({
    elfName: 'Rufas',
    elfPoints: 200,
    elfLifeTime: 120,
    elfEarSize: '10cm'
})
console.log(elfRufas.elfFights())
console.log(orkRufus.orkAttacks())
