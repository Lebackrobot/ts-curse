export class Negociations {
    constructor() {
        this.negociations = [];
    }
    push(negociation) {
        this.negociations.push(negociation);
    }
    list() {
        return this.negociations;
    }
}
