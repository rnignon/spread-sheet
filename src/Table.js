export default class Table {
    constructor() {
        this._list = Array.from(Array(9), () => new Array(9).fill(null));
    }

    get list() {
        return this._list;
    }

    set list(value) {
        this._list = value;
    }

    getRowLenght() {
        return this._list.length;
    }

    getColLenght() {
        return this._list[0].length;
    }

    setCell(x, y, value) {
        this._list[x][y] = value;
    }
}