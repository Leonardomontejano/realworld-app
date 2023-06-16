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
    
            cy.request("DELETE", "http://localhost:3002/bankaccounts/Mj4mPXkdC", {
          }).then((r) => {
             expect(r.status).to.eq(200)
          });
            
        });