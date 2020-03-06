/// <reference types="cypress" />

describe('qweqwe', () => {
    it('3.2в enable check', () => {
        cy.viewport(1800, 1200);                // login
        cy.visit('http://quiz:4000/admin');
        cy.get('#vue-text-input-21').type('admin');
        cy.get('#vue-password-input-24').type('admin');
        cy.contains('Войти').click();

        cy.get(':nth-child(2) > .navbar-nav-link').click();
        cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-checkbox-unchecked').click();
        cy.wait(1000);
        cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-bin').click();      
        cy.contains('Активный опрос удалить нельзя').should('exist');
    });
});