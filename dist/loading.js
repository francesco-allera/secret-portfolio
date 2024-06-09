const loading = document.querySelector('#loading');

const loader = (animation, delay) => {
    setTimeout(() => {
        loading.style.opacity = 0;
        setTimeout(() => loading.remove(), delay);
    }, animation + delay);
};

document.addEventListener('DOMContentLoaded', () => {
    let pageIsLoaded = false, pageIsFocused = document.hasFocus();

    window.addEventListener('load', () => {
        pageIsLoaded = true;
        if (pageIsLoaded && pageIsFocused) {
            loader(6300, 100);
        }
    });

    window.addEventListener('focus', () => {
        pageIsFocused = true;
        if (pageIsLoaded && pageIsFocused) {
            loader(6300, 100);
        }
    });
});