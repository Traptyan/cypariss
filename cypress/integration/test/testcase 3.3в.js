describe('qweqwe', () => {
    it('login', () => {
        cy.viewport(1800, 1200);
        cy.visit('http://quiz:4000/admin');
        cy.get('#vue-text-input-21').type('admin');
        cy.get('#vue-password-input-24').type('admin');
        cy.contains('Войти').click();
    });
    it('delete', () => {
        cy.get(':nth-child(2) > .navbar-nav-link').click();
        cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-pen6').click();
        cy.get(':nth-child(6) > .btn-danger').click();
        cy.get('.swal2-confirm').click();
    });
});