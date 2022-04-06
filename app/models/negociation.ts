//class model
export class Negociation {

    private _data: Date
    private _quantity: number
    private _value: number 

    //constructor
    constructor(data: Date, quantity: number, value: number) {
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