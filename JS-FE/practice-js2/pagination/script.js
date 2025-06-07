// Зробіть GET-запит за адресою 
// https://jsonplaceholder.typicode.com/posts та перегляньте отримані дані.
// Додайте пагінацію.

let currentPage = 1

const listJson = (array) => {
    return array.map((item) => {
        const object = `<li>
            <h2>User id: ${item.userId}</h2>
            <p>Id: ${item.id}</p>
            <p>Title: ${item.title}</p>
            <p>Body: ${item.body}</p>
    </li>`
    return object
}).join()
}

document.querySelector('button').addEventListener('click', () => {
    currentPage++
    return currentPage
})


fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPage}`)
.then((res) => {return res.json()})
.then((data) => document.querySelector('ul').innerHTML = listJson(data))