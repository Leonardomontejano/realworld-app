/// <reference types="Cypress" />

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
})


    it( 'register', () => {
        
        // Click button [data-test="signup"]
        cy.get('[data-test="signup"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="signup"]').click(); 
        // Fill #firstName
        cy.get('#firstName', {timeout: 1000}).should('be.visible')
        cy.get('#firstName').type('Leonardo');
        // Fill #lastName
        cy.get('#lastName', {timeout: 1000}).should('be.visible')
        cy.get('#lastName').type('Montejano');
        // Fill #username
        cy.get('#username', {timeout: 1000}).should('be.visible')
        cy.get('#username').type('lmontejano92@hotmail.com');
        // Fill #password
        cy.get('#password', {timeout: 1000}).should('be.visible')
        cy.get('#password').type('Alaska1992');
        // Fill #confirmPassword
        cy.get('#confirmPassword', {timeout: 1000}).should('be.visible')
        cy.get('#confirmPassword').type('Alaska1992');
        // Fill #confirmPassword
        cy.get('[data-test="signup-submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="signup-submit"]').click();
        
    });


