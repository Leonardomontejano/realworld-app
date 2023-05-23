/// <reference types="Cypress" />

const { text } = require("stream/consumers");

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
//cy.waitfor()
})

    it( 'sign in', () => {
        
        
        // Fill input[name="username"]
        cy.get('input[name="username"]').type('lmontejano92@hotmail.com');
        cy.wait(2000);
        // Fill input[name="password"]
        cy.get('input[name="password"]').type('Alaska1992');
        cy.wait(2000);
        // Click [type="submit"]
        cy.get('[type="submit"]').click();
        cy.wait(2000);
        // Click  [data-test="user-onboarding-next"]
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.wait(2000);
        // click  [data-test="sidenav-bankaccounts"]
        cy.get('[data-test="sidenav-bankaccounts"]').click();
        cy.wait(2000);
         // Get [name="bankName"]
         const newbankname = 'bank of america 3';
         cy.get('[name="bankName"]').type(newbankname);
         cy.wait(2000);
         // Get [name="routingNumber"]
         cy.get('[name="routingNumber"]').type('123456789');
         cy.wait(2000);
         // Get  [name="accountNumber"]
         cy.get('[name="accountNumber"]').type('123456789');
         cy.wait(2000);
         // click  [data-test="sidenav-bankaccounts"]
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.wait(2000);
        //Get account balance
        const bankaccounts = cy.get('li div div p')
        const count = bankaccounts.count();
        for(let i=0; i<count; ++i)
        { 
            if(bankaccounts.nth(i).invoke(text) === newbankname){
                foundbankname = newbankname;
            }
        }
        expect(foundbankname, "bank of america 3");
        
        
    });


