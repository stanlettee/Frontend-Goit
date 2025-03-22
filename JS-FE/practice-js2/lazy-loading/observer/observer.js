const options = {
    // root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0,
};

const articles = document.querySelectorAll('.article')

const intersectionCallback = (articles) => {
    articles.forEach((article) => {
    if (article.isIntersecting) {
        let elem = article.target;
        elem.classList.add('article1')
        console.log(article)
  
        if (article.intersectionRatio >= 0.75) {
            intersectionCounter++;
        }
    }
    });
  };
  
const observer = new IntersectionObserver(intersectionCallback, options);

articles.forEach((article) => {
    observer.observe(article);
})
