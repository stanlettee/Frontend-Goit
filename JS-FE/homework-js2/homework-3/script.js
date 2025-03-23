const button = document.querySelector('#loadImages')
button.addEventListener('click', () => {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null,
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => imageObserver.observe(img));
});

