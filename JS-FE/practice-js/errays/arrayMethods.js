// метод forЕach переберає масив та робить щось з кожним елеменом масиву, нічого не повертає

// const friends = ['John', 'Jack', 'Joe'];
// friends.forEach((friend, index) => {
//     console.log(`Друг ${friend}, має індекс ${index}`)
// })

// синтаксис перебераючих методів 
// назвамасива.назваМетоду((елементМасиву, інлексЕлементу) => {тут расписуємо що будемо робити з елементом масиву})

// Метод map переберає масив та з кожним елементом масиву робить те що ми вказали в тілі колбеку, і цей змінений елемент записує у новий масив
// const updateFriends = friends.map((friend) => `${friend} is my friend`)
// console.log(updateFriends)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

//   Використовуючи 👆 масив об’єктів виконай наступні завдання
//   1. Отримати масив імен всіх гравців
//   2. Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
//   3. Збільшити кількість годин гравця по id. Переписати на тернарник
//   4. Отримати масив всіх гравців онлайн
//   5. Отримати масив всіх гравців офлайн
//   6. Oтримати масив всіх хардкорних гравців з часом більше 250
//   Знайти гравця по id
//   Знайти гравця по імені
//   Перевірити чи всі гравці мають час більше 200
//   Перевірити чи всі гравці онлайн

const allPlayers = players.map((player) => player.name)
console.log(allPlayers)

// const addPoints = players.map((player) => {
//     const addedPoints = ((player.points / 100) * 10) + player.points
//     const updatePlayer = {...player, points: addedPoints} 
//     // Розшифруємо 40 рядок:
//     // const updatePlayer = { 
//     //     id: 'player-1',
//     //     name: 'Mango',
//     //     timePlayed: 310, 
//     //     points: 59.4,
//     //     online: false,
//     //     points: addedPoints
//     // }
//     return updatePlayer
// })
// console.log(addPoints)
// console.log(players)

const addPoints = players.map((player) => ({...player, points: ((player.points / 100) * 10) + player.points}))
console.log(addPoints)
console.log(players)

const playerToFind = players.find((player) => player.id === 'player-3')
console.log(playerToFind)
function addHours(hours, player){
    return player.timePlayed + hours
}
console.log(addHours(50, playerToFind))

console.log(players.filter((player) => player.online))
console.log(players.filter((player) => player.online === false))
console.log(players.filter((player) => player.timePlayed > 250))
const playerToFind1 = players.find((player) => player.id === 'player-5')
const playerToFind2 = players.find((player) => player.name === 'Mango')
// console.log(players.map((player) => player.timePlayed > 200))
// console.log(players.map((player) => player.online))

// метод every перебирає масив та перевіряє чи кожне значення з цього масива відповідає заданій умові; якщо всі елементи пройшли перевірку то метод every поверне true
const array = [15, 13, 5, 23, 45]
const isNumberEven = array.every((num) => num % 2 !== 0)
console.log(isNumberEven)

// метод some перебирає масив та перевіряє чи хоча б одне значення масиву відповідає заданій умові
const numbers = [90, 4, 150, 23]
const hasBigNumber = numbers.some((number) => number > 100)
console.log(hasBigNumber)

const checkHours = [310, 470, 230, 150, 80]
const isNumber = checkHours.every((player) => player.timePlayed > 250)
console.log(isNumber)

const checkOnline = [false, true, true, false, true]
const online = checkOnline.every((player) => player.online)
console.log(online)