import '@4tw/cypress-drag-drop';

describe('drag and drop', ()=>{
    it('drag drop', ()=>{
        cy.visit('https://demo.guru99.com/test/drag_drop.html');
         cy.get(':nth-child(2) > .button').drag('#amt8', { force: true });
         cy.get('#credit2 > .button').drag('#bank',{force: true})
         cy.get(':nth-child(4) > .button').drag('#amt7 > li',{force:true});
         cy.get('#credit1 > .button').drag('#loan',{force:true});


    });
});