describe('alerts', () => {
    it('alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
       cy.get(':nth-child(1) > button').click();
       cy.get('#result').should('have.text', 'You successfully clicked an alert');
       cy.on('window:alert',(a)=> {
        expect(a).to.contains('I am a JS Alert')
       })

    });
  });