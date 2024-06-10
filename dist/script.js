
/* fast console.log() */
const c = (...args) => console.log(...args);


/* Variables */
const body = document.body;
const app = document.querySelector('#app');
const progressBar = document.querySelector('#progress-bar');




/* Scroll behaviors */
/* window.addEventListener('scroll', () => {
    window.scrollY ? app.classList.add('scroll') : app.classList.remove('scroll');

    const main = document.querySelector('#main');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (winScroll / height * 100) + '%';
    main.innerHTML = '<br>' + winScroll + '<br>' + height + '<br>' + (winScroll / height * 100) + '%';
}); */




/* After loading all resources */
window.addEventListener('load', function() {
    c('All resources loaded in ' + (new Date() - pageStart) + 'ms');

    document.body.dataset.theme = localStorage.getItem('theme') ?? 'dark';

});