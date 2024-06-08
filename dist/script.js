
/* fast console.log() */
const c = (...args) => console.log(...args);


/* Variables */




/* After loading all resources */
window.addEventListener('load', function() {
    c('All resources loaded in ' + (new Date() - pageStart) + 'ms');

    document.body.dataset.theme = localStorage.getItem('theme') ?? 'dark';
});
