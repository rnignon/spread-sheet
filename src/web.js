import Table from './Table.js';

loadWeb();
function loadWeb() {
    const table = new Table();
    loadTable(table);
}

function loadTable(table) {
    console.log(table);
    const cells = ['cell-A', 'cell-B', 'cell-C', 'cell-D', 'cell-E', 'cell-F', 'cell-G', 'cell-H', 'cell-I'];
    for (let i = 0; i < table.getRowLenght(); i++) {
        let base = document.querySelector(`#row-${[i+1]}`);
        for (let j = 0; j < table.getColLenght(); j++) {
            let cell = document.createElement('td');
            cell.setAttribute('contenteditable', 'true');
            cell.classList.add(`${cells[j]}`, `cell-${i+1}`);
            cell.innerText = table.list[j][i];
            cell.addEventListener('focus', (e) => overCell(e.target));
            cell.addEventListener('blur', (e) => {
                outCell(e.target);
                updateTable(table, i, j, e.target.innerText);
            });
            base.appendChild(cell);
        }
    }
}

function updateTable (table, x, y, value) {
    if (value !== '') {
        table.setCell(x, y, value);
    } else {
        table.setCell(x, y, null);
    }
}

function overCell(e) {
    let row = document.querySelector(`#${e.classList[1]}`);
    let col = document.querySelector(`#${e.classList[0]}`);
    let cell = document.querySelector(`.main__cell`);

    cell.innerText = `Cell : ${e.classList[0].split('-')[1]}${e.classList[1].split('-')[1]}`;

    hightlightCell(row, col);
}

function outCell(e, table) {
    let row = document.querySelector(`#${e.classList[1]}`);
    let col = document.querySelector(`#${e.classList[0]}`);
    let cell = document.querySelector(`.main__cell`);

    cell.innerText = `Cell :`;

    unHightlightCell(row, col);
}

function hightlightCell(row, col) {
    row.style.backgroundColor = 'rgb(var(--highlight))';
    col.style.backgroundColor = 'rgb(var(--highlight))';
}

function unHightlightCell(row, col) {
    row.style.backgroundColor = 'rgb(var(--cell))';
    col.style.backgroundColor = 'rgb(var(--cell))';
}

function exportTable() {

}