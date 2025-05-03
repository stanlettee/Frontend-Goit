const title = document.querySelector('.title')
const text = document.querySelector('.text')
const div = document.querySelector('.div')
let count = 0
const interval = setInterval(() => {
    count++;
    console.log(count)
    if ([1, 6, 11, 16].includes(count)){
        title.style.color = 'red'
        text.style.color = 'red'
        div.style.backgroundColor = 'red'
    }
    if ([2, 7, 12, 17].includes(count)){
        title.style.color = 'blue'
        text.style.color = 'blue'
        div.style.backgroundColor = 'blue'
    }
    if ([3, 8, 13, 18].includes(count)){
        title.style.color = 'pink'
        text.style.color = 'pink'
        div.style.backgroundColor = 'pink'
    }
    if ([4, 9, 14, 19].includes(count)){
        title.style.color = 'yellow'
        text.style.color = 'yellow'
        div.style.backgroundColor = 'yellow'
    }
    if ([5, 10, 15, 20].includes(count)){
        title.style.color = 'violet'
        text.style.color = 'violet'
        div.style.backgroundColor = 'violet'
    }
    if (count === 20) {
        clearInterval(interval)
    }
}, 1000)