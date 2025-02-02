const openButton = document.querySelector("button[data-action='open-modal']")
const closeButton = document.querySelector("button[data-action='close-modal']")
openButton.addEventListener('click', ()=> {
    document.body.classList.add("show-modal");
})
closeButton.addEventListener('click', ()=> {
    document.body.classList.remove("show-modal");
})


// task 2

const backdrop = document.querySelector('.backdrop'); // Select the backdrop
backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) { // Check if the backdrop itself was clicked
        document.body.classList.remove("show-modal");
    }
});