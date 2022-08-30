describe('Hypnotes', () => {
  it('Test 1', () => {
    cy.visit('https://hypnotes.net/');
    cy.title().should('eq', 'Practice Management Software & EHR - Hypnotes')
    cy.title().should('include', 'Hypnotes')
    cy.contains('Login').click();
    //! ASSERTIONS
    cy.url().should('include', 'login');
    cy.url().should('include', 'https');
    cy.url().should('include', 'hypnotes');
    cy.get('.hide > [href="/login"]').should('have.text', 'Login');
    //* should('be.visible') -> gorunmesini istiyoruz
    cy.get('.hide > [href="/login"]').should('be.visible')
    cy.title().should('eq', 'Log in')
    //* .should('include.text', 'partial text') -> partial texti icermesini bekliyoruz
    cy.get('.hide > [href="/login"]').should('include.text', 'in');
  });
});