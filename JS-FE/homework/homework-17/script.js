// 1

const article = document.querySelector('.article')
const button = document.querySelector('button')
button.textContent = article.textContent

// 2

const image = document.querySelector('img')
const title = document.querySelector('h2')
title.style.marginTop = '40px'
image.src = 'image2.jpeg'
image.style.marginBottom = '40px'

// 3

const image2 = document.querySelector('#image3')
image3.alt = 'this is changed alt for image 3'
const link = document.querySelector('a')
link.href = '../../instagram.com'

// 4

const list = document.querySelector('ul')
const firstChild = document.querySelector('li.firstElement')
firstChild.textContent = 'Changed content of one li'
list.style.border = 'solid red'


