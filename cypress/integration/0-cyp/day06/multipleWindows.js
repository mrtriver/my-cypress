describe('multiple windows', () => {
    it.skip('removing target', () => {
      cy.visit('https://the-internet.herokuapp.com/windows');
  
      //target=_blank -> bu varsa yeni sayfada aciliyor
      cy.get('.example > a').invoke('removeAttr', 'target').click();
    });
  
    it('eski sayfada devam', () => {
      cy.visit('https://the-internet.herokuapp.com/windows');
  
      cy.wait(2000)
  
      cy.get('.example > a').then((element) => {
        const newUrl = element.prop('href');
        cy.visit(newUrl);
      });
    });
  
    it('opening in new  tab', ()=>{
      cy.visit('https://the-internet.herokuapp.com/windows');
  
      cy.get('.example > a').click();
    })
  });