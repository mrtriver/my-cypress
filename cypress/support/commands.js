// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email,password )=>{
    // cy.visit('http://automationpractice.com/index.php');
    cy.visit('https://hypnotes.net/login');
    cy.get('.btn-primary').click();
    cy.get('.mt-40 > .single-input').type(email);
    cy.get(':nth-child(6) > .single-input').type(password);
    cy.get('.genric-btn').click();

    // cy.get('#SubmitLogin > span').click();
})

const faker = require('faker');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';