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
    cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-pen6').click();
    cy.contains('Для полного редактирования необходимо отключить активность опроса').should('exist');    
  });
  
  it('3.2a disable check', () => {

    cy.get('.form-control').then(($el) => {
      let formControlList = $el;
      for(let i = 0; i < 3; i++) {
        cy.get(formControlList[i]).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      }
      for(let i = 4; i < 16; i++) {
        cy.get(formControlList[i]).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
      }
    });
    cy.get('.select2-selection').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');

    cy.get(':nth-child(8) > .btn-group-toggle > .active').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(8) > .btn-group-toggle > :nth-child(2)').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');

    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .form-check-input').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .form-check-input').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .form-check-input').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');

    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    for(let i = 1; i < 5; i++) {
      cy.get(`:nth-child(2) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    }
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    
    
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');

    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .form-check-input').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');    
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .form-check-input').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');    

    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    for(let i = 1; i < 5; i++) {
      cy.get(`:nth-child(3) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    }
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');    


    cy.get(':nth-child(4) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    
    for(let i = 1; i < 5; i++) {      
      cy.get(`:nth-child(4) > .w-mask-area > .card > .btn-group-toggle > :nth-child(${i})`).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    }


    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');    
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');    
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');

    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    for(let i = 1; i < 5; i++) {
      cy.get(`:nth-child(5) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
    }
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').wrap({disabled:'disabled' }).its('disabled').should('eq', 'disabled');
  });

  it('3.2а enable check', () => {
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').click();
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');

    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').click();
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active');

    cy.get('.form-control').then(($el) => {
      let formControlList = $el;
      cy.get(formControlList[3]).type('6');
      cy.get(formControlList[3]).should('have.class', 'is-valid');
    });

    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').click();
    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');

    cy.get(':nth-child(3) > .btn-group-toggle > .active').click();
    cy.get(':nth-child(3) > .btn-group-toggle > .active').should('have.class', 'active');


    cy.get(':nth-child(1) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(1) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(1) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(1) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();

    cy.get(':nth-child(2) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(6) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(7) > .form-check-label > .form-check-input').check();
  });
});
