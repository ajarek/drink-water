"use strict";
const info = document.querySelector('.info');
const blue = document.querySelector('#blue');
const drinks = document.querySelectorAll('.drink');
const arr = [];
drinks.forEach(drink => {
    drink.addEventListener('click', addDrink);
});
function addDrink(e) {
    arr.push(12.5);
    info.style.top = `${93 - arr.length * 12.5}%`;
    blue.style.height = `${arr.length * 12.5}%`;
    info.innerHTML = `${2 - (arr.length * 12.5 * 2 / 100)}L<br>Remained`;
    blue.innerHTML = `${arr.length * 12.5}%`;
    if (e.target instanceof HTMLDivElement) {
        e.target.classList.add(`background`);
    }
    if (e.target instanceof HTMLDivElement && e.target.classList.contains('background')) {
        e.target.removeEventListener('click', addDrink);
    }
    if (arr.length === 8) {
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}
