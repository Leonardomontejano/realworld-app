/// <reference types="Cypress" />

    beforeEach( () => {
cy.visit('http://localhost:3000/signin')
cy.wait(2000)
})


    it( 'register', () => {
        
        // Click button [data-test="signup"]
        cy.get('[data-test="signup"]').click(); 
        // Fill #firstName
        cy.get('#firstName').type('Leonardo');
        cy.wait(2000)
        // Fill #lastName
        cy.get('#lastName').type('Montejano');
        cy.wait(2000)
        // Fill #username
        cy.get('#username').type('lmontejano92@hotmail.com');
        cy.wait(2000)
        // Fill #password
        cy.get('#password').type('Alaska1992');
        cy.wait(2000)
        // Fill #confirmPassword
        cy.get('#confirmPassword').type('Alaska1992');
        cy.wait(2000)
        // Fill #confirmPassword
        cy.get('[data-test="signup-submit"]').click();
        cy.wait(2000)
        
    });


