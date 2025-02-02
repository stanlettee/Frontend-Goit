const inputs = document.querySelectorAll('input[type="radio"]')
const input1 = document.querySelector('input[type="radio"]')
if (input1.checked){
    document.body.style.backgroundColor = input1.value
}
for (let input of inputs){
    input.addEventListener('input', (e) => {
        if (e.target.checked){
            document.body.style.backgroundColor = e.target.value
        }
    })
}
