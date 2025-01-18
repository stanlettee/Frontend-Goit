// Метод createElament дозволяю створити DOM-вузол, 
// але не додає ще його на сторінку в dom-дерево

// Створимо статтю в якій буде заголовок, картинка та опис
const articleElement = document.createElement('article')
const titleElement = document.createElement('h1')
titleElement.textContent = 'text content';
articleElement.append(titleElement)

const div = document.querySelector('.container')
div.append(articleElement)