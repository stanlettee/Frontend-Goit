const openButton = document.querySelector("button[data-action='open-modal']")
const closeButton = document.querySelector("button[data-action='close-modal']")
openButton.addEventListener('click', ()=> {
    document.body.classList.add("show-modal");
})
closeButton.addEventListener('click', ()=> {
    document.body.classList.remove("show-modal");
})