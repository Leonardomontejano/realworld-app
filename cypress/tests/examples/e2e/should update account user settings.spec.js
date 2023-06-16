/// <reference types="Cypress" />

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
//cy.waitfor()
})

    it( 'sign in', () => {
        
        
        // Fill input[name="username"]
        cy.get('input[name="username"]', {timeout: 1000}).should('be.visible')
        cy.get('input[name="username"]').type('luis');
        // Fill input[name="password"]
        cy.get('input[name="password"]', {timeout: 1000}).should('be.visible')
        cy.get('input[name="password"]').type('Alaska1992');
        // Click [type="submit"]
        cy.get('[type="submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[type="submit"]').click();
        // Click  [data-test="user-onboarding-next"]
        cy.get('[data-test="user-onboarding-next"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="user-onboarding-next"]').click();
        // Get text  #user-settings-firstName-input
        cy.get('#user-settings-firstName-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-firstName-input').type('luis');
        // Get text  #user-settings-lastName-input
        cy.get('#user-settings-lastName-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-lastName-input').type('diaz');
        // Get text  #user-settings-email-input
        cy.get('#user-settings-email-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-email-input').type('luis92@hotmail.com');
        // Get text  #user-settings-phoneNumber-input
        cy.get('#user-settings-phoneNumber-input"]', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-phoneNumber-input').type('4419449464');
        // Click  [data-test="user-settings-submit"]
        cy.get('[data-test="user-settings-submit"]', {timeout: 1000}).should('be.visible')
        cy.get('[data-test="user-settings-submit"]').click();
        // Get text  #user-settings-firstName-input
        cy.get('#user-settings-firstName-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-firstName-input').should('have.text', 'luis');
        // Get text  #user-settings-lastName-input
        cy.get('#user-settings-lastName-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-lastName-input').should('have.text', 'diaz');
        // Get text  #user-settings-email-input
        cy.get('#user-settings-email-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-email-input').should('have.text', 'luis92@hotmail.com');
        // Get text  #user-settings-phoneNumber-input
        cy.get('#user-settings-phoneNumber-input', {timeout: 1000}).should('be.visible')
        cy.get('#user-settings-phoneNumber-input').should('have.text', '4419449464');

        
    });


