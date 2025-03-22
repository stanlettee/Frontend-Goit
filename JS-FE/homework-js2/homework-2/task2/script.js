document.addEventListener("mousemove", _.debounce((e) => {
    const box = document.querySelector('#box')
    box.style.left = `${e.clientX - 25}px`;
    box.style.top = `${e.clientY +- 25}px`;
    console.log(e.clientX, e.clientY)
}, 100))