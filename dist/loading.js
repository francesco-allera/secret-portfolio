
const loader = (animation, delay) => {
    const loading = document.createElement('div');
    loading.id = 'loading';
    const loadingBar = document.createElement('div');
    loadingBar.id = 'loading-bar';
    loading.appendChild(loadingBar);
    document.body.appendChild(loading);

    document.removeEventListener('visibilitychange', load);

    setTimeout(() => {
        loading.style.opacity = 0;
        setTimeout(() => {
            loading.remove();
            app.style.display = '';
        }, delay);
    }, animation + delay);
};

const load = () => loader(6300, 100);

window.addEventListener('load', function() {
    if (document.visibilityState === 'visible') {
        load();
    } else {
        document.addEventListener('visibilitychange', load);
    }
});
