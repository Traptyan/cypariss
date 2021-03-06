/// <reference types="cypress" />

describe('qweqwe', () => {
  
    it('login', () => {
      cy.viewport(1800, 1200);
      cy.visit('http://quiz:4000/admin');
      cy.get('#vue-text-input-21').type('admin');
      cy.get('#vue-password-input-24').type('admin');
      cy.contains('Войти').click();
    })
    it('3.2б message exist', () => {      
      cy.get(':nth-child(2) > .navbar-nav-link').click();
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-checkbox-checked').click();
      cy.get('.swal2-confirm').click();
      cy.wait(1000);
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-pen6').click();      
      cy.contains('Для полного редактирования необходимо удалить ответы пользователей').should('exist');      
    });
    
    it('3.2б disable check', () => {
      cy.get('.form-control').then(($el) => {
        let formControlList = $el;  
        for(let i = 4; i < 17; i++) {
          cy.get(formControlList[i]).wrap({disabled:'disabled'}).its('disabled').should('eq', 'disabled');
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
  
    it('3.2б enable check', () => {

      cy.get('.form-control').then(($el) => {
        let formControlList = $el;
        for(let i = 0; i < 4; i++) {
          cy.get(formControlList[i]).type('{backspace}6');              // проверка полей ввода
          cy.get(formControlList[i]).should('have.class', 'is-valid');
        }
        
      });

      cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').click();                        // порядок вопросов  
      cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');  
      cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').click();
      cy.get(':nth-child(6) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active');

      cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(1)').click();                      
      cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(1)').should('have.class', 'active'); 
      cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').click();                        //отображение списка участников
      cy.get(':nth-child(3) > .btn-group-toggle > :nth-child(2)').should('have.class', 'active');        

      cy.get(':nth-child(1) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check(); // настройка для отображения в списке участников
      cy.get(':nth-child(1) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(1) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(1) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();  
      cy.get(':nth-child(2) > .form-group > :nth-child(2) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(2) > .form-group > :nth-child(3) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(2) > .form-group > :nth-child(4) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(2) > .form-group > :nth-child(5) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(6) > .form-check-label > .form-check-input').check();
      cy.get(':nth-child(7) > .form-check-label > .form-check-input').check();     

              

      cy.get(':nth-child(2) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .ml-1').click(); // удаление ответов на вопрос
      cy.contains('Удалить все ответы').should('exist');
      cy.get('.swal2-cancel').click();

      cy.get(':nth-child(3) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .ml-1').click(); // удаление ответов на вопрос
      cy.contains('Удалить все ответы').should('exist');
      cy.get('.swal2-cancel').click();

      cy.get(':nth-child(4) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .ml-1').click(); // удаление ответов на вопрос
      cy.contains('Удалить все ответы').should('exist');
      cy.get('.swal2-cancel').click();

      cy.get(':nth-child(5) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .ml-1').click(); // удаление ответов на вопрос
      cy.contains('Удалить все ответы').should('exist');
      cy.get('.swal2-cancel').click();  

      cy.get(':nth-child(6) > .btn-danger').click();              // удаление всех ответов
      cy.contains('Удаление ответов участников').should('exist');
      cy.get('.swal2-cancel').click();

      cy.get(':nth-child(6) > .btn-light').click(); // добавление вопроса
      cy.get('.form-control').then(($el) => {
        let formControlLis = $el;
        cy.get(formControlLis[17]).type('6');
        cy.get(formControlLis[17]).should('have.class', 'is-valid');
      });
      cy.get(':nth-child(6) > .w-mask-area > :nth-child(1) > .card-body > .form-gr-row > .input-group-append > .btn').click();

      cy.setCookie('auth_token', 'bS6E4s90869Hfbgc2vlv4DKkPtgGROoCnGBV3K9DrNa');
      cy.get('.text-right').click(); // сохранение и выход
    });
  });
  