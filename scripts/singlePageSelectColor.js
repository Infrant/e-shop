'use strcit';
let selectEl = document.getElementById('singlePageFormBottomSelectColor');
let selectElColor = document.querySelector('.singlePageFormBottomSelectColorRed');
selectEl.addEventListener('change', event => {
    let elIndex = event.target.options.selectedIndex;
    switch (event.target.options[elIndex].value) {
        case 'red':
            selectElColor.className = 'singlePageFormBottomSelectColorRed';
            break;
        case 'green':
            selectElColor.className = 'singlePageFormBottomSelectColorGreen';
            break;
        case 'blue':
            selectElColor.className = 'singlePageFormBottomSelectColorBlue';
            break;
    }
})