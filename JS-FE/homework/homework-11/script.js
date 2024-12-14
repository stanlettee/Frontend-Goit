// 1

const bankAccount = {
    ownerName: 'Owen',
    accountNumber: 4,
    balance: 1,
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    },
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            return true;
        } else {
            console.log('Не хватає грошей на аккаунті')
            return false;
        }
    }
}
const message = confirm('Чи хочете ви поповнити свій банківський аккаунт?')
if (message === true){
    let amount = prompt('На скількі ви хочете поповнити рахунок?')
    bankAccount.deposit(amount)
} else {
    const message2 = confirm('Чи хочете ви вивести гроші з аккаунта')
    if (message2 === true){
        let amount2 = prompt('Скількі ви хочете вивести?')
        bankAccount.withdraw(amount2)
    }
}
console.log(`На вашому аккаунті ${bankAccount.balance} гривень`)

// 2

const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};

const temperatureInput = prompt("Введіть температуру (°C):");
const temperatureValue = parseFloat(temperatureInput);
if (isNaN(temperatureValue)) {
    alert("Будь ласка, введіть числове значення");
}
weather.temperature = temperatureValue;
if (weather.isBelowZero()) {
    alert("Температура нижче 0 градусів Цельсія.");
} else {
    alert("Температура вище або дорівнює 0 градусів Цельсія.");
}

// 3

const user = {
    name: "Alex2012",      
    email: "user@gmail.com",  
    password: "qwerty123",      
    login(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
};

const inputEmail = prompt("Введіть ваш email:");
const inputPassword = prompt("Введіть ваш пароль:");
if (user.login(inputEmail, inputPassword)) {
    alert(`Ласкаво просимо, ${user.name}!`);
} else {
    alert("Невірний email або пароль.");
}

// 4

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighlyRated() {
        return this.rating > 8;
    }
};
if (movie.isHighlyRated()) {
    alert('Змінюємо колір на зелений тому що рейтінг фільму більше 8');
}
