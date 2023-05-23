/// <reference types="Cypress" />

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
        //Click [data-test="sidenav-home"]
        cy.get('[data-test="sidenav-home"]').click();
        cy.wait(2000);
        //Click [data-test="nav-personal-tab"]
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.wait(2000);
        // Get text  [data-test="transaction-item-bX35EyEU5"]
        cy.get('[data-test="transaction-item-bX35EyEU5"]').click();
        cy.wait(2000);
        //Get account balance
        const amount = cy.get('[data-test="transaction-amount-bX35EyEU5"]').invoke('text');
        expect(amount, "- $10.00");
        cy.wait(2000);
        // Get text  [data-test="transaction-sender-bX35EyEU5"]
        cy.get('[data-test="transaction-sender-bX35EyEU5"]').should('have.text', 'Leonardo Montejano');
        cy.wait(2000);
        // Get text  [data-test="transaction-action-bX35EyEU5"]
        cy.get('[data-test="transaction-action-bX35EyEU5"]').should('have.text', ' paid ');
        cy.wait(2000);
        // Get text  [data-test="transaction-receiver-bX35EyEU5"]
        cy.get('[data-test="transaction-receiver-bX35EyEU5"]').should('have.text', 'Edgar Johns');
        cy.wait(2000);
        
        
    });


