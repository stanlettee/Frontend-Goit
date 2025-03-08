const article = document.querySelector('article')
article.style.backgorund = 'blue';
article.addEventListener('click', (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
})