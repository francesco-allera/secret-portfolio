const loader = (animation, delay) => {
    const loading = document.createElement('div');
    loading.id = 'loading';
    document.body.appendChild(loading);

    window.removeEventListener('focus', load);

    setTimeout(() => {
        loading.style.opacity = 0;
        setTimeout(() => loading.remove(), delay);
    }, animation + delay);
};

const load = () => loader(6300, 100);

window.addEventListener('load', () => {
    window.addEventListener('focus', load);
});