/// <reference types="cypress" />

describe('qweqwe', () => {
  it('3.2в enable check', () => {
    cy.viewport(1800, 1200);                // login
    cy.visit('http://quiz:4000/admin');
    cy.get('#vue-text-input-21').type('admin');
    cy.get('#vue-password-input-24').type('admin');
    cy.contains('Войти').click();

    cy.get(':nth-child(2) > .navbar-nav-link').click();       // переход на страницу редактирования
    cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-pen6').click(); 
    cy.wait(4000);
    cy.get('.form-control').then(($el) => {
      let formControlList = $el;
      debugger 
      for(let i = 0; i < formControlList.length; i++) {                                   // проверка полей ввода        
        cy.get(formControlList[i]).type('{backspace}6');          
        cy.get(formControlList[i]).should('have.class', 'is-valid');
      }         
    });

    cy.get('.select2-selection').should('not.be.disabled');
 
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').click();                        // порядок вопросов
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').click();
    cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active');

    cy.get(':nth-child(8) > .btn-group-toggle > :nth-child(2)').click();                        // формат вопроса
    cy.get(':nth-child(8) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');    
    cy.get(':nth-child(8) > .btn-group-toggle > :nth-child(1)').click();
    cy.get(':nth-child(8) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active');

    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').click();                        // отображение списка участников
    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');            

    cy.get(':nth-child(1) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();  // настройка для отображения в списке участников
    cy.get(':nth-child(1) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(1) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(1) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(2) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(6) > .form-check-label > .form-check-input').check();
    cy.get(':nth-child(7) > .form-check-label > .form-check-input').check();

    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(1)').click();
    cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active'); 

    for(let i = 4; i < 0; i--) {
      cy.get(`:nth-child(2) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).click();
      cy.get(`:nth-child(2) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).should('have.class', 'active'); // панель типа вопроса
    }
    for(let i = 4; i < 0; i--) {
      cy.get(`:nth-child(3) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).click();
      cy.get(`:nth-child(3) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).should('have.class', 'active');
    }    
    for(let i = 4; i < 0; i--) {
      cy.get(`:nth-child(4) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).click();
      cy.get(`:nth-child(4) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).should('have.class', 'active');
    }
    for(let i = 4; i < 0; i--) {
      cy.get(`:nth-child(5) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).click();
      cy.get(`:nth-child(5) > .w-mask-area > :nth-child(1) > .btn-group-toggle > :nth-child(${i})`).should('have.class', 'active');
    }

    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').should('be.not.be.disabled'); // кнопка добавления варианта ответа
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').should('be.not.be.disabled');    
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > :nth-child(5) > .btn').should('be.not.be.disabled');

    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').should('be.not.be.disabled'); // кнопка удаления вопроса
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(4) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').should('be.not.be.disabled');

    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').should('be.not.be.disabled'); // удаление варианта ответа
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(1) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(2) > .form-check > .answer-container > .btn').should('be.not.be.disabled');
    cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card > :nth-child(3) > .form-check > .answer-container > .btn').should('be.not.be.disabled');    

    cy.get(':nth-child(6) > .btn-light').click();               // добавление вопроса
    cy.get('.form-control').then(($el) => {
      let formControlLis = $el;
      cy.get(formControlLis[17]).type('6');
      cy.get(formControlLis[17]).should('have.class', 'is-valid');
    });
    cy.get(':nth-child(6) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').click();

    cy.setCookie('auth_token', 'bS6E4s90869Hfbgc2vlv4DKkPtgGROoCnGBV3K9DrNa');
    cy.get('.text-right').click();  // сохранение и выход
  });
});
  