/// <reference types="cypress" />
describe('qweqwe', () => {
  
    it('login', () => {
      cy.viewport(1800, 1200);
      cy.visit('/admin');
      cy.get('#vue-text-input-21').type('admin');
      cy.get('#vue-password-input-24').type('admin');
      cy.contains('Войти').click();
    })
    it('3.2a message exist', () => {      
      cy.get(':nth-child(2) > .navbar-nav-link').click();
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-checkbox-checked').click();
      cy.get('.swal2-confirm').click();
      cy.wait(1000);
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-pen6').click();      
      cy.contains('Для полного редактирования необходимо удалить ответы пользователей').should('exist');      
    });
    
    it('3.2a disable check', () => {
      //cy.get('.form-control').first().wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      
      cy.get('#vue-text-input-124').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get('.select2-selection').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get('#vue-number-input-128').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get('#vue-number-input-131').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get('#vue-text-input-159').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
  
      cy.get(':nth-child(8) > .btn-group-toggle');
      cy.get('.active').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get(':nth-child(2)').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get(':nth-child(2) > .w-mask-area > :nth-child(1)');
        cy.get('.card-body > .form-gr-row > .input-group-append > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
        cy.get('.card > :nth-child(1) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
        cy.get('.card > :nth-child(2) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
        cy.get(':nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
        cy.get('.btn-group-toggle');
          cy.get(':nth-child(1)').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
          cy.get('.active').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
          cy.get(':nth-child(3)').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
          cy.get(':nth-child(4)').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      
      cy.get('#vue-text-input-164').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      cy.get('#vue-text-input-168').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
  
      cy.get('.content > :nth-child(1) > :nth-child(5) > .btn-light').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      
    });
  
    // it('3.2а enable check', () => {
    //   cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').click();      
    //   cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');
  
    //   cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').click();
    //   cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active');
  
    //   cy.get('#vue-number-input-134').type('6');
    //   cy.get('#vue-number-input-134').should('have.class', 'is-valid');
  
    //   cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').click();
    //   cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');
  
    //   cy.get(':nth-child(3) > .btn-group-toggle > .active').click();
    //   cy.get(':nth-child(3) > .btn-group-toggle > .active').should('have.class', 'active');
  
  
    //   cy.get(':nth-child(1) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(1) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(1) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(1) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
  
    //   cy.get(':nth-child(2) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(2) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(2) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(2) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(6) > .form-check-label > .form-check-input').check();
    //   cy.get(':nth-child(7) > .form-check-label > .form-check-input').check();      
    // });
  });
  