const message = "I love JavaScript";
console.log(message.toUpperCase()); // переводить всі символи у великий регістр
console.log(message.toLowerCase()); // переводить всі символи у малий регістр

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
console.log(string1.includes("це не спам")); //  перевіряє чи містить рядок певний символ або набір символів

const letterIndex = message.indexOf("J"); // дивиться під яким індексом знаходиться задана літера у рядку
console.log(letterIndex);

const wordIndex = message.indexOf("love");
console.log(wordIndex);
// якщо ми передали в IndexOf символ якого немає в рядку, то в результаті отримаємо -1

// метод trim обрізяє пробіли на початку та вкінці рядка
const testMessage = "Я люблю займатись програмуванням   ";
console.log(testMessage.length);
const newTestMessage = testMessage.trim();
console.log(newTestMessage.length);

// Method startsWidth
console.log(message.startsWith('I'))
console.log(message.startsWith('love', 2))
console.log(message.startsWith('script', 3))
// Перевіряє чи починаєтся радок з певного символу чи слова у рядку

// Method endsWith
console.log(message.endsWith('t'))
console.log(message.endsWith('r'))
// Перевіряє чи закінчуєтся радок з певного символу чи слова у рядку

const str = 'Hello World';
console.log(str.length)
console.log(str.padStart(15, '.'))
console.log(str.padEnd(15, '!'))

const myName = 'Stas';
console.log(myName.charAt(0))
console.log(myName.replace('S', 'P'))
console.dir(String)


