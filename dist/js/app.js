import { negociationController } from './controllers/negociation.controller.js';
const controller = new negociationController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
