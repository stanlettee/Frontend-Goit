const sushiArray = [
    {
        name: "Філадельфія",
        description: "Рол з лососем, вершковим сиром та огірком",
        price: 200,
        image: "https://example.com/images/philadelphia.jpg"
    },
    {
        name: "Каліфорнія",
        description: "Рол з крабом, авокадо та огірком",
        price: 180,
        image: "https://example.com/images/california.jpg"
    },
    {
        name: "Дракон",
        description: "Рол з вугрем, авокадо та унагі соусом",
        price: 220,
        image: "https://example.com/images/dragon.jpg"
    },
    {
        name: "Чіз рол",
        description: "Рол з лососем, вершковим сиром та огірком, запечений під соусом",
        price: 210,
        image: "https://example.com/images/cheese-roll.jpg"
    },
    {
        name: "Темпура рол",
        description: "Рол з креветкою в темпурі, огірком та соусом спайсі",
        price: 190,
        image: "https://example.com/images/tempura-roll.jpg"
    },
    {
        name: "Вегетаріанський рол",
        description: "Рол з авокадо, огірком, перцем та морквою",
        price: 150,
        image: "https://example.com/images/vegetarian-roll.jpg"
    },
    {
        name: "Спайсі тунц",
        description: "Рол з тунцом та гострим соусом",
        price: 170,
        image: "https://example.com/images/spicy-tuna.jpg"
    },
    {
        name: "Аляска",
        description: "Рол з лососем, авокадо та огірком",
        price: 185,
        image: "https://example.com/images/alaska.jpg"
    },
    {
        name: "Унагі рол",
        description: "Рол з вугрем та соусом унагі",
        price: 230,
        image: "https://example.com/images/unagi-roll.jpg"
    },
    {
        name: "Гейша",
        description: "Рол з тунцом, лососем, авокадо та гострим соусом",
        price: 240,
        image: "https://example.com/images/geisha.jpg"
    }
];

const sushiArrayMap = sushiArray.map((item) => {
    return `<li class="sushi-item">
            <h2 class="sushi-title">${item.name}</h2>
            <img class="sushi-img" src="${item.image}" alt="sushi image">
            <p class="sushi-description">${item.description}</p>
            <p class="sushi-price">${item.price} гривень</p>
            </li>`
})

const sushiArrayJoin = sushiArrayMap.join(" ")
const list = document.querySelector('.sushi-list')
list.innerHTML = sushiArrayJoin;