'use strict';
let selectEl = document.querySelector('.selectWrapper');
let iEl = selectEl.querySelector('.fa-caret-down');
let select = selectEl.querySelector('select');
selectEl.addEventListener('click', (event) => {
    // console.log(iEl.attributes);
    event.stopPropagation();
    select.classList.add('selectBlack');
    if (iEl.className === "fas fa-caret-down") {
        iEl.className = 'fas fa-caret-up';
    } else {
        iEl.className = 'fas fa-caret-down';
    }
});
document.body.addEventListener('click', () => {
    if (iEl.className === 'fas fa-caret-up') {
        iEl.className = 'fas fa-caret-down';
    }
});
