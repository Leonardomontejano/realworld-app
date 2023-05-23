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
        //Get account balance
        const balance = cy.get('[data-test="sidenav-user-balance"]').invoke('text');
        expect(balance, "$0.00");
        
    });


