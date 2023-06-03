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
        cy.get('input[name="password"]"]', {timeout: 1000}).should('be.visible')
        cy.get('input[name="password"]').type('Alaska1992');
        // Click [type="submit"]
        cy.get('[type="submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[type="submit"]').click();
        // Click  [data-test="user-onboarding-next"]
        cy.get('[data-test="user-onboarding-next"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="user-onboarding-next"]').click();
        //Click [data-test="sidenav-home"]
        cy.get('[data-test="sidenav-home"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="sidenav-home"]').click();
        //Click [data-test="nav-personal-tab"]
        cy.get('[data-test="nav-personal-tab"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="nav-personal-tab"]').click();
        // Get text  [data-test="transaction-sender-bX35EyEU5"]
        cy.get('[data-test="transaction-sender-bX35EyEU5"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="transaction-sender-bX35EyEU5"]').should('have.text', 'Leonardo Montejano');
        // Get text  [data-test="transaction-action-bX35EyEU5"]
        cy.get('[data-test="transaction-action-bX35EyEU5"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="transaction-action-bX35EyEU5"]').should('have.text', ' paid ');
        // Get text  [data-test="transaction-receiver-bX35EyEU5"]
        cy.get('[data-test="transaction-receiver-bX35EyEU5"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="transaction-receiver-bX35EyEU5"]').should('have.text', 'Edgar Johns');
        
    });


