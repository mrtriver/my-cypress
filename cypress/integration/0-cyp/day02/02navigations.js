describe('Navigation', () => {
    it('back, forward, refresh', () => {
      cy.visit('https://hypnotes.net/');
      cy.contains('Login').click();
      cy.wait(2000); //!hard wait
      cy.go('back');
      cy.wait(2000);
      cy.go('forward');
      cy.wait(2000);
      cy.go(-1);
      cy.wait(2000);
      cy.go(1);
      cy.wait(2000);
      cy.reload();
    });
    it('chained methods', () => {
      cy.visit('https://hypnotes.net/');
      cy
      .contains('Login')
      .click()
      .go('back')
      .go('forward')
      .wait(2000)
      .go(-1)
      .reload(true);
    });
  });