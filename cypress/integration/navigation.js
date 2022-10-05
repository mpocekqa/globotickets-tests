/// <reference types="cypress" />

describe('Navigation', () => {
    it('Should navigate to sign in page', () => {
        //navigate to homepage
        cy.visit('/Catalog.action');
        //check that "Sign in" link is there
        expect(cy.contains('Sign In')).to.exist;
        //click on 'Sign In' link
        cy.contains('Sign In').click();
        //verify a user has been redirected
        expect(cy.get('p').contains('Please enter your username and password.')).to.exist;

    })

    it('Register new user', () => {
        cy.contains('Register Now!').click();
        cy.get('input[name="username"]').type('123');
        cy.get('input[name="password"]').type('abc123');
        cy.get('input[name="repeatedPassword"]').type('abc123');
        cy.get('input[name="account.firstName"]').type('Milovan');
        cy.get('input[name="account.lastName"]').type('Peric');
        cy.get('input[name="account.email"]').type('abc123@fakemail.com');
        cy.get('input[name="account.address1"]').type('ns1');
        cy.get('input[name="account.address2"]').type('ns2');
        cy.get('input[name="account.city"]').type('novi sad');
        cy.get('input[name="account.state"]').type('Serbia');
        cy.get('input[name="account.zip"]').type('21000');
        cy.get('input[name="account.country"]').type('Serbia');
        cy.get('input[name="account.listOption"]').check();
        cy.get('input[name="account.bannerOption"]').check();
        cy.get('input[name="account.newAccount"]').click();

    })
    

})