const allImages = document.querySelectorAll('img[loading="lazy"]')
allImages.forEach(element => {
    element.addEventListener("load", (e) => {
        console.log('the image has loaded')
        setTimeout(() => {
            e.target.classList.add('show')
        })
       
    }, {once: true})
})