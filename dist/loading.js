const loading = document.querySelector('#loading');

const loader = (animation, delay) => {
    setTimeout(() => {
        loading.style.opacity = 0;
        setTimeout(() => loading.remove(), delay);
    }, animation + delay);
};

/* function loader(animation, delay) {
    setTimeout(() => {
        loading.style.opacity = 0;

        setTimeout(() => {
            loading.remove();
        }, delay);

    }, animation + delay);

} */

window.addEventListener('load', () => loader(4775, 175));