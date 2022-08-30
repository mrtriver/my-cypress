describe('custom method', () => {
    it.skip('without custom method', () => {
      cy.visit('http://automationpractice.com/index.php');
  
      cy.get('.login').click();
  
      cy.get('#email').type('123murat123@gmail.com');
      cy.get('#passwd').type('123murat123');
  
      cy.get('#SubmitLogin > span').click();
    });
  
    it('with custom method', () => {
      cy.login('123murat123@gmail.com', '123murat123');
  
      cy.url().should(
        'eq',
        'http://automationpractice.com/index.php?controller=my-account'
      );
  
     cy.screenshot();
    });
  });