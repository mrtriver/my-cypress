import { faker } from '@faker-js/faker';
 

describe('Various tests in Hypnotes', () => {
    //QUESTIONS : 1) havning trouble with initializing const faker = require('faker')
    //2) Selecting country with index or text did not work

   
    it('User logins Hypnotes', ()=> {
        
         const address = faker.address.street();
         
         const phonemumber = faker.phone.number("##########");

        
        

   cy.login('therapisthypnotes2020@gmail.com','Therapist+tayfa2022');
   //User adds new client

   cy.get('a[href="/dashboard/add-client"]').click({force: true});

   cy.get('#first_name').click({force:true}).type('Murat');
   cy.get('#last_name').click({force:true}).type('Irmak');
   cy.get('.selected-flag > .flag').click().get('[data-country-code="tr"]').click();
    cy.get('.form-control').type(phonemumber);
   cy.get('#occupation').type('QA');
   cy.get('#postal').type('H1R3J5');
   cy.get(':nth-child(9) > :nth-child(2) > .ant-select > .ant-select-selector').click();
   cy.get('[title="Andora"] > .ant-select-item-option-content').click();
    cy.get('#address').type(address);
    







    });
} );