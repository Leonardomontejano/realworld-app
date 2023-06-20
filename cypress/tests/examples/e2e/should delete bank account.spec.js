/// <reference types="Cypress" />


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
        //cy.get('[data-test="user-onboarding-next"]', {timeout: 1000}).should('be.visible')
        //cy.get('[data-test="user-onboarding-next"]').click();
        // click  [data-test="sidenav-bankaccounts"]
        cy.get('[data-test="sidenav-bankaccounts"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="sidenav-bankaccounts"]').click();
        const bankaccounts = cy.get('li div div p')
        var tobedeleted = bankaccounts.last().invoke('text') + " (deleted)";
        const count = bankaccounts.count();
         // click  [data-test="bankaccount-delete"]
        cy.get('[data-test="bankaccount-delete"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="bankaccount-delete"]').click();
        //Get account balance
        cy.get('li div div p').invoke('text').then(text1);
        expect(text1, "$0.00");

        
        for(let i=0; i<count; ++i)
        { 
            if(bankaccounts.nth(i).invoke('text') === tobedeleted){
                founddeleted = bankaccounts.nth(i).invoke('text');
            }
        }
        expect(founddeleted, "bank of america 3 (deleted)");
        
        
    });


