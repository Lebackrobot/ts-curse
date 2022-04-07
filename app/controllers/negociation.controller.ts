import { Negociation } from '../models/negociation.js'
import { Negociations } from '../models/negociations.js'

export class negociationController {

    private inputDate: HTMLInputElement
    private inputQuantity: HTMLInputElement
    private inputValue : HTMLInputElement
    private negociations: Negociations

    constructor() {

        this.inputDate = document.querySelector('#data')
        this.inputQuantity = document.querySelector('#quantidade')
        this.inputValue = document.querySelector('#valor')
    }

        
    add(): void {
        
        const negociation = this.createNegociation()
        this.clearForm()
    }


    createNegociation() : Negociation {

        let date = new Date(this.inputDate.value)
        let quantity = parseInt(this.inputQuantity.value)
        let value = parseFloat(this.inputValue.value)

        return new Negociation(date, quantity, value)
    }

    clearForm(): void {

        this.inputDate.value = String()
        this.inputQuantity.value = String()
        this.inputValue.value = String()

        this.inputDate.focus()
        
    }

    
} 