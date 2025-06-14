// 50860863-3fd2c2b6f6ec06a8734a828e4


const makeList = (array) => {
    const mapList =  array.map((element) => {
        return `<li><img src="${element.largeImageURL}" alt="photo"></li>`
    }).join('')
    return mapList
}


let perPage = 4


document.querySelector('button').addEventListener('click', () => {
  perPage += 4;
  fetchPhotos(perPage);
});


function fetchPhotos(perPage) {
    fetch(`https://pixabay.com/api/?key=50860863-3fd2c2b6f6ec06a8734a828e4&per_page=${perPage}`)
    .then((res) => {return res.json()})
    .then((data) => {document.querySelector('.photo-list').innerHTML = makeList(data.hits);});
}

fetch(`https://pixabay.com/api/?key=50860863-3fd2c2b6f6ec06a8734a828e4&per_page=${perPage}`)
.then((res) => {return res.json()})
.then((data) => {document.querySelector('.photo-list').innerHTML = makeList(data.hits);});
