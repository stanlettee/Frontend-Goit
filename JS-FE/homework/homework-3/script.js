let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

let email = '1234567@email.com';
let haveAtSymbol = email.includes('@');
let totalCharacters = email.length;
console.log(`Does it include '@': ${haveAtSymbol}`);
console.log(`Total amount of characters: ${totalCharacters}`);

let my = 'My';
let myName = ' name ';
let myNameIs = 'is';
let fullName = my+myName+myNameIs;
console.log(fullName+' Victor')

let userName = 'Олександр';
let payment = 300;
alert(`Дякуємо, ${userName}o! До сплати ${payment} гривень`)
