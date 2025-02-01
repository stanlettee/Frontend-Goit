const input = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')
input.addEventListener('input', (e) => {
    let fontSize = e.target.value;
    span.style.fontSize = `${fontSize}px`; 
})