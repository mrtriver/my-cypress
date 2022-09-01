describe('working with credentials from fixtures', ()=> {
    before(function() {
         cy.fixture('credentials').then((cred )=>{
                 this.cred = cred;
           });
       });
       it('login',function() {
       cy.visit('https://hypnotes.net/');
       cy.get('.BaseNavbar_nav__SDgOU > [href="/login"]').click()
       cy.get('[type="email"]').type(this.cred.email)
       cy.get('[type="password"]').type(this.cred.password)
       cy.get('.ant-btn > span').click(); //login
       });
     });