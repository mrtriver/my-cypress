describe('hooks', () => {
    //? runs first
    before(()=> {
      console.log('before method worked');
    });
  
    beforeEach(() => {
      console.log('before each method worked');
      cy.visit('https://qa-environment.koalaresorthotels.com/');
    });
  });