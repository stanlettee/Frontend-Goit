// 1

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
} 
logItems(['Jack', 'Peter', 'Alex']);

// 2

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWord;
    return totalPrice;
}
console.log(calculateEngravingPrice('Intelligence is the ability to adapt to change', 10));

// 3

function findLongestWord(string){
    const words = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    return longestWord;
}
console.log(findLongestWord('Intelligence is the ability to adapt to change'))

// 4

function formatString(string) {
    if (string.length > 40) {
        return string.slice(0, 40) + "...";
    } 
    return string;
}
console.log(formatString('Intelligence is the ability to adapt to change'));

// 5

function checkForSpam(message){
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')){
        return true
    }
    return false
}
console.log(checkForSpam('Hello my sale world'))
console.log(checkForSpam('SPAM is really good'))
console.log(checkForSpam('hello my friends'))

// 6

function promptNum() {
    let input;;
    const numbers = [];
    let total = 0;
    while (true){
        input = prompt('enter a number');
        if (isNaN(Number(input))){
            alert('you entered not a number, please enter again')
            continue;
        }
        if (input === null || Number(input) === 0){
            break;
        }
        numbers.push(Number(input))
        total += Number(input)
    }
    console.log(`Загальна сума чисел дорівнює ${total}`)
    console.log(numbers)
}
promptNum()

// 7

function isLoginValid(login){
    if (login.length >= 4 && login.length <= 16){
        return true;
    } else {
        return false;
    }
}
function isLoginUnique(allLogins, login){
    if (allLogins.includes(login)){
        return false;
    } else {
        return true
    }
}
function addLogin(allLogins, login){
    if (isLoginValid(login)){
        if (isLoginUnique(allLogins, login)){
            allLogins.push(login);
            return 'Логін успішно доданий!'
        } else {
            return 'Такий логін уже використовується!'
        }
    } else {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
}
const logins = [];
let login
while (true){
    login = prompt('Enter a login')
    console.log(addLogin(logins, login))
    console.log(logins)
}



