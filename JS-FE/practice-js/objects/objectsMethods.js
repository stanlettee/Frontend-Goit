// const user = {
//     name: "coolguy",
//     password: 12345678, 
//     email: 'guy@gmail.com'
// }
// for(const key in user){
//     console.log(`в об'єкті юзер є ключ ${key} ші значення ${user[key]}`)
// }

// Методи об'єсктів
// const array = Object.keys(user) // витягує ключі об'єкта та робить з них масив
// console.log(array)
// const values = Object.values(user) // витягуэ значення з обёэкта та робить з них масив
// console.log(values)
// const entries = Object.entries(user) // витягує пару, ключ значення як масив
// console.log(entries)

// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Alex', online: false },
//   ];
// 1. Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 
// function findFriendByName(array, name){
//     for (let friend of array){
//         if (friend.name === name){
//             return friend.name;
//         }
//     }
//     return 'Нема такого ім я'

// }
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Alex'));

// 2. Написати функцію яка буде повертати масив всіх імен друзів
// function getAllNames(array){
//     let arrayName = []
//     for (let friend of array){
//         arrayName.push(friend.name)
//     }
//     return arrayName
// }
// console.log(getAllNames(friends));

// 3. Написати функцію яка буде повертати масив імен друзів які онлайн
// function getOnlineFriends(array){
//     for(let friend of array){
//         if(friend.online === true){
//             return friend.name
//         }
//     }
// }
// console.log(getOnlineFriends(friends));

// Операція rest дозволяє нам зібрати аргументи в масив

// function sumNumbers(...numbers){
//     let sum = 0;
//     for (number of numbers){
//         sum += number;
//         return sum;
//     }
// }
// sumNumbers(11, 23, 45, 67)

// Опперація spread дозволяє витягнути всі елементи з масива та зробити їх не масивом

// function makeMesssage(fruit1, fruit2, fruit3){
//     return `My favorite fruits are ${fruit1}, ${fruit2}, ${fruit3}`
// }
// console.log(makeMessage(...fruits))

// Деструктурізація це спосіб скорочення звернення до ключа об'єкта

// const user = {
//     userName: 'qwerty123',
//     isStudent: true,
//     friends: ['Alex', 'Maria', 'Ivan'],
//     adress: {
//         country: 'New Zeeland',
//         city: 'Welington',
//         street: 'Main Street'
//     }
// }
// const {userName, isStudent, friends, adress: {country, city, street}} = user;
// console.log(userName, isStudent, friends, country, city, street)

// const password = '34534673.Q';
// const newUser = {
//     login: 'hello',
//     password: '31415926user',
// }
// const {login, password: userPassword, avatar = 'avatar11'} = newUser; // avatar = 'avatar11' це ми задали дефолтне значення для ключа який може не прийти з об'єкта
// console.log(password)

const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
          {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',
            year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}

const { count, artists } = musicLibrary;
const [beatles, pinkFloyd] = artists;
const {beatlesName, beatlesAlbums} = beatles;
const [stg, abbey] = beatlesAlbums;





