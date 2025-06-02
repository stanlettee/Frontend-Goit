// Отримати погоду за допомогою OpenWeatherMap API Опис: 
// Використайте публічне API OpenWeatherMap для отримання поточної погоди. 
// Зробіть GET-запит за адресою 
// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}, де {city} - 
// назва міста, а {API_KEY} - 
// ваш ключ API OpenWeatherMap. 
// Перегляньте отримані дані щодо погоди.

const input = document.querySelector('input')


function makeList (object){
    const html = `<li><p>Погода: ${object.weather[0].main}</p></li>
                <li><p>Опис погоди: ${object.weather[0].description}</p></li>
                <li><p>Кількість хмар: ${object.clouds.all}</p></li>
                <li><p>Вологість: ${object.main.humidity}</p></li>
                <li><p>Видимість: ${object.visibility}</p></li>
                <li><p>Швидкість вітру: ${object.wind.speed}</p></li>
                <li><p>Часовий пояс: ${object.timezone}</p></li>
                <li><p>Довгота: ${object.coord.lon}</p></li>
                <li><p>Широта: ${object.coord.lat}</p></li>
    `
    return html

}

input.addEventListener('input', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=4b5057d13fd90b7c50bd4726d2f7e8b7`)
    .then((res) => {return res.json()})
    .then((data) => document.querySelector('ul').innerHTML = makeList(data))
})


