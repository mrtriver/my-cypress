describe('viewports', () => {
    it('iphone', () => {
      cy.visit('https://www.amazon.com/');
      cy.viewport('iphone-5');
      cy.screenshot();
      //git add .
      //git commit -m "v001"
      //git commit -a -m "v001"
    });
    it.skip('custom width, height', () => {
      cy.visit('https://www.amazon.com/');
      cy.viewport(3000, 500); //width, height
      cy.screenshot();
    });
  });