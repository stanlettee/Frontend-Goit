let image = document.querySelector('.image')
let item = document.querySelector('li')
const list = document.querySelector('ul')
image.style.opacity = '1'
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight'){
        image.style.opacity = '0'
        item.nextElementSibling.querySelector('.image').style.opacity = '1'
        item = item.nextElementSibling
        image = item.querySelector('.image')
        if (item === list.lastElementChild){
            image.style.opacity = '0'
            list.firstElementChild.querySelector('.image').style.opacity = '1'
            item = list.firstElementChild
            image = item.querySelector('.image')
        }
    } else if (e.code === 'ArrowLeft'){
        if (item === list.firstElementChild){
            image.style.opacity = '0'
            list.lastElementChild.querySelector('.image').style.opacity = '1'
            item = list.lastElementChild
            image = item.querySelector('.image')
        } else {
            image.style.opacity = '0'
            item.previousElementSibling.querySelector('.image').style.opacity = '1'
            item = item.previousElementSibling
            image = item.querySelector('.image')
        }
        
    }
})