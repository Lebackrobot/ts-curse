//class model
export class Negociation {

    #data
    #quantity
    #value

    //constructor
    constructor(data, quantity, value) {
        this.#data = data
        this.#quantity = quantity
        this.#value = value


    }

    //getters
    get data() {
        return this.#data
    }

    get value() {
        return this.#value
    }

    get volume() {
        return this.#value * this.#quantity
    }
}