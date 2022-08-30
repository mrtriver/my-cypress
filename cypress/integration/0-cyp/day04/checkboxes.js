describe('checkboxes', () => {
    it('checking one checkbox', () => {
      cy.visit('http://automationpractice.com/index.php');
  
      cy.get('.sf-with-ul').first().click();
  
      cy.get('#layered_category_4').should('not.be.checked');
      cy.get('#layered_category_4').parent().should('have.class', 'checked');
      
      //* should('have.class', 'value');
      //* should('have.id', 'value');
      //* should('have.value', 'value');
      //* should('have.attr', 'attribute', 'value');
      //* should('have.attr', 'type', 'checkbox');
  
      cy.get('#layered_category_4').check();
  
      cy.get('#layered_category_4').should('be.checked');
      cy.get('#layered_category_4').uncheck();
    });
  
    it('checking all checkboxes', () => {
      cy.visit('http://automationpractice.com/index.php');
  
      cy.get('.sf-with-ul').first().click();
  
      cy.get('.checkbox').check();
      cy.get('.checkbox').uncheck();
    });
  
    it.skip('checking one checkbox with click', () => {
      cy.visit('http://automationpractice.com/index.php');
  
      cy.get('.sf-with-ul').first().click();
  
      cy.get('#layered_category_4').should('not.be.checked');
      cy.get('#layered_category_4').click();
  
      cy.get('#layered_category_4').should('be.checked');
      cy.get('#layered_category_4').click();
    });
  
    it.only('checking all checkboxes with click', () => {
      cy.visit('http://automationpractice.com/index.php');
  
      cy.get('.sf-with-ul').first().click();
  
      cy.get('.checkbox').click({ multiple: true });
      cy.get('.checkbox').first().parent().should('have.class', 'checked')
  
      cy.wait(3000);
      cy.get('.checkbox').click({ multiple: true });
  
  
    });
  });