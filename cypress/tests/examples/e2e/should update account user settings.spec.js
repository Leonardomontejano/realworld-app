/// <reference types="Cypress" />

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
//cy.waitfor()
})

    it( 'sign in', () => {
        
        
        // Fill input[name="username"]
        cy.get('input[name="username"]').type('username@domain.com');
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
        cy.get('#user-settings-firstName-input').type('luis');
        cy.wait(2000);
        // Get text  #user-settings-lastName-input
        cy.get('#user-settings-lastName-input').type('diaz');
        cy.wait(2000);
        // Get text  #user-settings-email-input
        cy.get('#user-settings-email-input').type('luis92@hotmail.com');
        cy.wait(2000);
        // Get text  #user-settings-phoneNumber-input
        cy.get('#user-settings-phoneNumber-input').type('4419449464');
        cy.wait(2000);
         // Click  [data-test="user-settings-submit"]
         cy.get('[data-test="user-settings-submit"]').click();
         cy.wait(2000);
          // Get text  #user-settings-firstName-input
        cy.get('#user-settings-firstName-input').should('have.text', 'luis');
        cy.wait(2000);
        // Get text  #user-settings-lastName-input
        cy.get('#user-settings-lastName-input').should('have.text', 'diaz');
        cy.wait(2000);
        // Get text  #user-settings-email-input
        cy.get('#user-settings-email-input').should('have.text', 'luis92@hotmail.com');
        cy.wait(2000);
        // Get text  #user-settings-phoneNumber-input
        cy.get('#user-settings-phoneNumber-input').should('have.text', '4419449464');
        cy.wait(2000);

        
    });


