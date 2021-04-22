import randomNumbers from './randomNumbers.js';

const fillColumns = (e) => {
    const numbers = randomNumbers();
    const resultDiv = document.querySelector('.result');
    const ids = ['firstColumn', 'secondColumn'];

    let columns = ids.map((id) => {
        const div = document.createElement('div');
        const ul = document.createElement('ul');
        div.setAttribute('id', id);
        div.setAttribute('class', 'result__column')
        div.appendChild(ul);
        return div;
    })
    
    columns.forEach((column) => {
        resultDiv.appendChild(column);
    })

    const firstColumn = document.querySelector('#firstColumn');
    const secondColumn = document.querySelector('#secondColumn');
    firstColumn.innerHTML = 'Liczby nieparzyste: ';
    secondColumn.innerHTML = 'Liczby parzyste: ';    

    numbers.sort((a,b) => a - b).map((el) => {
        if(el % 2 !== 0) {
            firstColumn.innerHTML += `<li key=${el}>${el}</li>`;
        } else {
            secondColumn.innerHTML += `<li key=${el}>${el}</li>`;
        }
    })
    
}

export default fillColumns;