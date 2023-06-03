/// <reference types="Cypress" />

const { text } = require("stream/consumers");

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
//cy.waitfor()
})

    it( 'sign in', () => {
        
        
        // Fill input[name="username"]
        cy.get('input[name="username"]', {timeout: 1000}).should('be.visible')
        cy.get('input[name="username"]').type('lmontejano92@hotmail.com');
        // Fill input[name="password"]
        cy.get('input[name="password"]', {timeout: 1000}).should('be.visible')
        cy.get('input[name="password"]').type('Alaska1992');
        // Click [type="submit"]
        cy.get('[type="submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[type="submit"]').click();
        // Click  [data-test="user-onboarding-next"]
        cy.get('[data-test="user-onboarding-next"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="user-onboarding-next"]').click();
        // click  [data-test="sidenav-bankaccounts"]
        cy.get('[data-test="sidenav-bankaccounts"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="sidenav-bankaccounts"]').click();
         // Get [name="bankName"]
         cy.get('[name="bankName"]', {timeout: 1000}).should('be.visible')
         const newbankname = 'bank of america 3';
         cy.get('[name="bankName"]').type(newbankname);
         // Get [name="routingNumber"]
         cy.get('[name="routingNumber"]', {timeout: 1000}).should('be.visible')
         cy.get('[name="routingNumber"]').type('123456789');
         // Get  [name="accountNumber"]
         cy.get('[name="accountNumber"]', {timeout: 1000}).should('be.visible')
         cy.get('[name="accountNumber"]').type('123456789');
         cy.wait(2000);
         // click  [data-test="sidenav-bankaccounts"]
        cy.get('[data-test="bankaccount-submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="bankaccount-submit"]').click();
        //Get account balance
        const bankaccounts = cy.get('li div div p')
        const count = bankaccounts.count();
        for(let i=0; i<count; ++i)
        { 
            if(bankaccounts.nth(i).invoke('text') === newbankname){
                foundbankname = bankaccounts.nth(i).invoke('text');
            }
        }
        expect(foundbankname, "bank of america 3");
        
        
    });


