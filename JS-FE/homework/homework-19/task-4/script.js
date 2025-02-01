const nameInput = document.querySelector('#name-input')
let span = document.querySelector('#name-output')
nameInput.addEventListener('change', (e) => {
    if (e.target.value === ""){
        span.innerHTML = 'незнайомець'
    } else {
        span.innerHTML = e.target.value
    }
})
const validationInput = document.querySelector('#validation-input')
validationInput.addEventListener('blur', (e) => {
    if (e.target.value.length < 6){
        validationInput.classList.add("invalid")
        validationInput.classList.remove("valid");
        console.log('You did not eneter all 6 symbols')
    } else {
        validationInput.classList.add("valid")
        validationInput.classList.remove("invalid");
    }
})