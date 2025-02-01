const modalButton = document.querySelector('button[data-action="open-modal"]')
modalButton.addEventListener('click', ()=> {
    const div = document.querySelector(".backdrop js-backdrop");
    div.style.display = 'none';
    modalButton.style.display = 'flex'
})