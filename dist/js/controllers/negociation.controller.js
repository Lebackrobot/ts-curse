import { Negociation } from '../models/negociation.js';
export class negociationController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negociation = this.createNegociation();
        this.clearForm();
    }
    createNegociation() {
        let date = new Date(this.inputDate.value);
        let quantity = parseInt(this.inputQuantity.value);
        let value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = String();
        this.inputQuantity.value = String();
        this.inputValue.value = String();
        this.inputDate.focus();
    }
}
