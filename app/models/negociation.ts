//class model
export class Negociation {

    private _data
    private _quantity
    private _value

    //constructor
    constructor(data, quantity, value) {
        this._data = data
        this._quantity = quantity
        this._value = value


    }

    //getters
    get data() {
        return this._data
    }

    get value() {
        return this._value
    }

    get volume() {
        return this._value * this._quantity
    }
}