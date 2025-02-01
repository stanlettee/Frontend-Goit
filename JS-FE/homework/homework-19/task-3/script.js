const inputs = document.querySelectorAll('input[type="radio"]')
for (let input of inputs){
    input.addEventListener('input', (e) => {
        if (e.target.checked){
            document.body.style.backgroundColor = e.target.value
        }
    })
}
