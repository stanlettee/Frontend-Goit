// 1

const categoriesLength = document.querySelectorAll('.item').length
console.log(`There are ${categoriesLength} categories`)

const categoriesItems = document.querySelectorAll('.item')
let title;
let itemsCount;
for (let item of categoriesItems){
    title = item.querySelector('h2').textContent;
    itemsCount = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Amount of elements: ${itemsCount}`);
}

// 2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsList = document.querySelector('#ingredients')
let liElement
for (let ingredient of ingredients){
    liElement = document.createElement('li')
    liElement.textContent = ingredient;
    ingredientsList.append(liElement)
}

// 3

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];
const gallery = document.querySelector('#gallery')
gallery.style.display = 'flex';
gallery.style.gap = '40px'
gallery.style.listStyleType = 'none'
let item2;
let createdImage;
for (let image of images){
    item2 = document.createElement('li');
    createdImage = document.createElement('img');
    createdImage.src = image.url;
    createdImage.alt = image.alt; 
    createdImage.style.width = '500px'
    createdImage.style.height = '100%'
    item2.append(createdImage);
    gallery.append(item2);
}

// 4

let counterValue = 0;
const value = document.querySelector('#value')
const decrementButton = document.querySelector('#decrement')
const incrementButton = document.querySelector('#increment')
function increment(){
    counterValue += 1
    value.textContent = counterValue
}
function decrement(){
    counterValue -= 1
    value.textContent = counterValue
}
decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
