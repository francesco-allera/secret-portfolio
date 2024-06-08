/* Variables */
const loading = document.querySelector('#loading');

/* Loading */
function loader(animation, delay) {
    setTimeout(() => {
        loading.style.opacity = 0;

        setTimeout(() => {
            loading.remove();
        }, delay);

    }, animation + delay);

}

/* After loading all resources */
window.addEventListener('load', function() {
    loader(4775, 175);
});