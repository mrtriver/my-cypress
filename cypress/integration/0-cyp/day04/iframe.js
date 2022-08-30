import 'cypress-iframe';

describe('iframe', () => {
  it('iframes', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.frameLoaded('#mce_0_ifr');

    cy.iframe().find('p').clear();

    cy.iframe().find('p').type('Hello World!')

    // cy.get('.large-4 > div > a').should('have.text', 'Elemental Selenium').click()

  });
});