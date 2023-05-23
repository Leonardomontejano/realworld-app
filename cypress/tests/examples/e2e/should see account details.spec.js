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
        // Get text  #user-settings-firstName-input
        cy.get('#user-settings-firstName-input').should('have.text', 'leonardo');
        cy.wait(2000);
        // Get text  #user-settings-lastName-input
        cy.get('#user-settings-lastName-input').should('have.text', 'montejano');
        cy.wait(2000);
        // Get text  #user-settings-email-input
        cy.get('#user-settings-email-input').should('have.text', 'lmontejano92@hotmail.com');
        cy.wait(2000);
        // Get text  #user-settings-phoneNumber-input
        cy.get('#user-settings-phoneNumber-input').should('have.text', '3319439363');
        cy.wait(2000);

        
        
    });


