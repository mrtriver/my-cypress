/// <reference types="Cypress" />

describe('Login test', () => {
    //? var, let, const
    const correctEmail = 'therapisthypnotes@gmail.com';
    const correctPass = 'Th100522*';
    const wrongEmail = 'abcd@gmail.com';
    const wrongPass = '12345';
    const dashboard = 'https://hypnotes.net/dashboard/calendar';
    it('hypnotes positive login test', () => {
      cy.visit('https://hypnotes.net/');
      cy.contains('Login').click();
      cy.get('.mt-40 > .single-input').type(correctEmail);
      cy.get(':nth-child(6) > .single-input').type(correctPass);
      cy.get('.genric-btn').click();
      cy.url().should('eq', dashboard);
    });
    it('hypnotes negative login test', () => {
      cy.visit('https://hypnotes.net/');
      cy.contains('Login').click();
      cy.get('.mt-40 > .single-input').type(wrongEmail);
      cy.get(':nth-child(6) > .single-input').type(wrongPass);
      cy.get('.genric-btn').click();
      cy.url().should('not.eq', dashboard);
      
    });
  });