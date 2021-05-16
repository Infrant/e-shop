'use strict';
let allEl = document.querySelectorAll('.productPromo');
allEl.forEach(el => {
    el.addEventListener('mouseover', event => {
        allEl.forEach(elem => {
            if (elem !== event.target.parentElement) {
                elem.classList.add('productPromoHover');
            }
        });
    });
});
allEl.forEach(el => {
    el.addEventListener('mouseout', () => {
        allEl.forEach(elem => {
            elem.classList.remove('productPromoHover');
        });
    });
});