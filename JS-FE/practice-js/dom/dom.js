// const boxElement = document.querySelector('div')
// console.log(boxElement)

// // querySellectorAll шукає масив елементів вказанних в круглих дужках, якщо не знайшов нічого то повертає порожній масив

// const itemsList = document.querySelectorAll('li')
// console.log(itemsList)
// itemsList.forEach((item) => {
//     item.style.border = '1px solid red'
// })

// const listElements = document.querySelector('ul')
// console.log(listElements)

// const secondElement = listElements.querySelector('li:nth-child(2)')
// console.log(secondElement)

// const itemText = secondElement.textContent
// console.log(itemText)

// secondElement.textContent = 'це другий елемент списку'

// const secondElementParent = secondElement.parentNode

// const prefSibling = secondElement.previousElementSibling

// boxElement.style.backgroundColor = 'violet'

// secondElement.classList.add('item-2')

// const hasClass = secondElement.nextElementSibling.classList.contains('test')
// console.log(hasClass) // false

// const replaceClass = secondElement.classList.replace('item-2', 'second-item')
// secondElement.classList.add('item-2')

// secondElement.classList.remove('second-item')

// ПРАКТИКА

// 1
// Дано розмітку. 
// {/* <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="">Про нас</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="https://">Портфоліо</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="">Контакти</a>
//       </li>
//     </ul>
// Отримайте доступ до списку
// Додайте жовтий колір фону 
// Додайте клас "site-nav__link" до першого посилання
// Збільшіть розмір шрифта посилання з атрибутом href="https://" */}

// const listElements = document.querySelector('.site-nav')
// listElements.style.backgroundColor = 'yellow'
// const firstLink = document.querySelector('a')
// firstLink.classList.add('site-nav__link')
// const linkAttribute = document.querySelector('a[href="https://"]')
// linkAttribute.style.fontSize = '30px'

// 2

// Зробіть всі зовнішні посилання помаранчевими, 
// змінюючи властивість style.
// Оберіть всі посилання всередині списку та 
// додайте першому і останньому клас зі стилями
// Додайте заголовок до тексту та стилізуйте 
// його за допомогою додаткового класу.
// Замініть клас на заголовку.
// Перевірте чи містить посилання клас list

const firstLink = document.querySelector('a')
firstLink.style.color = 'orange'

const listElements = document.querySelector('ul')
listElements.firstChild.classList.add('first-item')
listElements.firstChild.style.color = 'blue'
listElements.lastChild.classList.add('last-item')
listElements.lastChild.style.color = 'yellow'

const title = document.querySelector('')




