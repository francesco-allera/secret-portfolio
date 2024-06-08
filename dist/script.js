
/* fast console.log() */
const c = (...args) => console.log(...args);


/* Variables */
// const loading = document.querySelector('#loading');


/* Loading */
/* function loader(elHtml, delay, duration) {

    elHtml.style.display = '';

    setTimeout(() => {
        elHtml.style = '';
    }, delay);

    setTimeout(() => {
        elHtml.remove()
    }, duration + delay);
} */


/* After loading all resources */
window.addEventListener('load', function() {
    c('All resources loaded in ' + (new Date() - pageStart) + 'ms');

    if (localStorage.getItem('theme'))
        document.body.dataset.theme = localStorage.getItem('theme');
    else
        document.body.dataset.theme = 'dark';

});
