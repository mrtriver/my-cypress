describe('my first test', ()=>{
    it('URL test', ()=> {
        //it ('testin ismi', (parametre) => {body ,test})
    cy.visit('https://www.google.com/');

    cy.url().should('include', 'google');
    cy.url().should('include', '.com');

    cy.url().should('eq', 'https://www.google.com/');

    cy.url().should('not.include', 'amazon');


    });
it('Title test', ()=> {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google')
})

} );