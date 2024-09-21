let age = 15;
console.log(age);

let name = "Stas";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "1. People who boast about their IQ are losers";
let myString2 = "2. Intelligence is the ability to adapt to change";
let myString3 = "3. Nothing is better than reading and getting more and more knowledge";
let myString4 = "4. I am not afraid of death, but i am no hurry to die";
let myString5 = "5. The idea of 10 dimensions might sound exciting, but they would cause real problems if you forget where you parked you car";
console.log("My favorite Steven Hawkings quotes:");
console.log(myString);
console.log(myString2);
console.log(myString3);
console.log(myString4);
console.log(myString5);

let myNumber = 1488
let myNumber2 = myNumber + 10;
console.log(myNumber2)

let myNull = null;
console.log(myNull);

// let myName = window.prompt("What is you name?");
// console.log(myName);

function yourConfirmation() {
    let response = confirm("Ви впевнені, що хочете підтвердити дію?");
    if (response) {
        alert("Дякую за підтвердження");
    } else {
        alert("Дію відміненя");
    }
}

function actionDangerous() {
    alert("Увага. Дія є небезпечною");

    let response = confirm("Ви впевнені, що хочете продовжити?");
    if (response) {
        alert("Дякую за підтвердження");
    } else {
        alert("Дію відмінено");
    }
}

