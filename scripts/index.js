import fillColumns from './fillColumns.js';
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    fillColumns()
    btn.disabled = true;
});