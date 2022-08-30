describe('Log in', () => {
  it('hypnotes', () => {
    cy.visit('https://hypnotes.net/');
    //? 1. yol: Selector Playground
    //cy.get('.hide > [href="/login"]').click()
    //? 2. yol: textinden bulmak
    cy.contains('Login').click();
    //? 3. yol: inspect css locator
    cy.get('.mt-40 > .single-input').type('therapisthypnotes@gmail.com');
    cy.get(':nth-child(6) > .single-input').type('Th100522*');
    cy.get('.genric-btn').click();
    cy.url().should('eq', 'https://hypnotes.net/dashboard/calendar');
  });
});