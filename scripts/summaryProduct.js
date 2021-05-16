'use strict';
let summaryEl = document.querySelectorAll('summary');
summaryEl.forEach(el => {
    el.addEventListener('click', event => {
        // console.log(event.target.parentElement.hasAttribute('open'));
        if (!event.target.parentElement.hasAttribute('open') && event.target.style.color == '' || event.target.style.color == 'rgb(111, 110, 110)' && event.target.children[0].className == 'fas fa-caret-down') {
            event.target.style.color = 'rgb(239, 91, 112)';
            event.target.children[0].className = 'fas fa-caret-up';
        } else {
            event.target.style.color = 'rgb(111, 110, 110)';
            event.target.children[0].className = 'fas fa-caret-down';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    summaryEl.forEach(el => {
        if (el.parentElement.hasAttribute('open')) {
            el.style.color = 'rgb(239, 91, 112)';
            el.children[0].className = 'fas fa-caret-up';
        }
    })
});