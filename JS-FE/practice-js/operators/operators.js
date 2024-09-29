const result = Boolean(0)
console.log(result)

// Логічне та (оператор &&)
// Виводе перше false, якщо буде всі true тоді виводить останнє true

console.log(0 && "" && 5) // вивиде 0
console.log(15 && "hdc" && null) // вивиде null
console.log("false" && false && 1) // вивиде false

// Логічне або (оператор ||)
// Шукає перше true, якщо зустрічає false то пропуская його поки не знайде true, якщо в усіх умовах false то виведе останнє false

console.log(0 || "" || undefined)
console.log(false || 5 || null || 0)
console.log(5 > 3 || 2 < 3 || "test")
console.log(undefined === 0 || 0 === '0' && 5)

//    Напиши скрипт перевірки підписки користувача при доступі до контенту
//  - Є три типи підписки: free, pro та vip.
//  - Отримати доступ можуть лише користувачі pro та vip
const subscribe = prompt('У вас є підписка: free, pro, vip')
let hasAccess = subscribe === 'pro' || subscribe === 'vip';
console.log(hasAccess)

// Напиши скрипт який провіряє можлтвість відкрити чат з користувачем.
//  Для цього користувач має бути:
//  - другом
//  - онлайн
const isFriend = confirm('Він є вашим другом?')
const isOnline = confirm('Чи є він в мережі?')
const chatCheck = isFriend && isOnline;
console.log(chatCheck)

// Логічне ні (оператор !)