// Метод createElement дозволяю створити DOM-вузол, але не додає ще його на сторінку в dom-дерево

// Створимо статтю в якій буде заголовок, картинка та опис]

const linkElement = document.createElement("a")
linkElement.textContent = "Рецепти"
linkElement.href = "https://rud.ua/consumer/recipe/desertu/milk-pancakes-71/"


const articleElement = document.createElement("article");
console.log(articleElement);
const titleElement = document.createElement("h1");
console.log(titleElement);
titleElement.textContent = "Мої улюблені млинці-рецепт";
console.log(titleElement);
const pictureElement = document.createElement("img");
pictureElement.src =
  "https://yasensvit.ua/uploads/recipes/prev/6384b279a98d9.jpg";
pictureElement.alt = "Млинець з шоколадом";
const textElement = document.createElement("p");
textElement.textContent =
  "Кожен народ має свої багаті, взяті ще з сивої давнини традиції. Вони присутні всюди: в одязі, побуті, мові, піснях, їжі тощо. Особливо цікавими є українські традиції в приготуванні різноманітних національних страв. Так, до кожного великого свята українці мають перелік обов'язкових страв. Хіба ж можна уявити Різдво без куті, а Великдень без паски?";

// для того щоб вкрасти елемент в елемент або на сторінку використовуємо метод append
articleElement.append(titleElement, pictureElement, textElement, linkElement);
articleElement.width = "300px"
articleElement.style.backgroundColor = "green"
articleElement.style.color = "yellow"
console.log(articleElement, pictureElement, textElement, linkElement);

// додамо статтю з усім що в ній є на сторінку
// const boxElement = document.querySelector(".box");
// boxElement.append(articleElement);


// const linkElem = document.createAttribute("a");
// linkElem.textContent = "посилання на урок";
// linkElem.setAttribute("src", "https://meet.google.com/wzz-zxys-ige");
// console.log(linkElem)
// const check = linkElem.hasAttribute("src")
// console.log(check)
// linkElem.removeAttribute("src")
// linkElem.setAttribute("href")

// console.log(linkElement.innerHTML)
// linkElement.innerHTML = 'посилання на рецепти'

// const container = querySelector('.container')
// const markUp = `<ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
// </ul>`
// // container.innerHTML = markUp
// // Властивість innerHTML затерає попередній контент в елементі та вставляє туди те що вказано після дорівнює
// // Якщо нам потрібно додати елементи після існуючих тоді використовуємо:
// container.insertAdjacentHTMl('afterBegin',markUp)

// Practice

const dishes = [
    {
        title: 'Вареники',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WTeq7y1qmQ5qYGo0XtyO0JxMdcibHKCbBA&s',
        description: 'Українська національна страва[4][5] у вигляді відвареного прісного тіста з начинкою.'
    },
    {
        title: 'Борщ',
        photo: 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
        description: 'українська рідка страва, що вариться з посічених буряків, капусти з додаванням картоплі, квасолі, та різних приправ[8].'
    },
    {
        title: 'Яєчня',
        photo: 'https://shuba.life/static/content/thumbs/1905x1016/9/d9/irjkkd---c1905x1016x50px50p-up--698d9f1eaea9e835c96709d90f78fd99.jpg',
        description: 'смажена страва з яєць.'
    }
]
const markUp = dishes.map((dish) => {
    const layout = `<li class="item">
        <h2>${dish.title}</h2>
        <img src="${dish.photo}" alt="">
        <p>${dish.description}</p>
    </li>`
    return layout
})
console.log(markUp)
const markUpToAdd = markUp.join('')
console.log(markUpToAdd)
const list = document.querySelector('.list')
list.insertAdjacentHTML('afterBegin', markUpToAdd)
