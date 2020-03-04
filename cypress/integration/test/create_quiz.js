/// <reference types="cypress" />
let rndMail = Math.random()
  .toString(36)
  .substring(7);

describe("qweqwe", () => {
  it("create_quiz", () => {
    // создаем персон. опрос
    cy.request({
      method: "POST",
      url: "http://quiz:4000/api/quizzes",
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "auth_token=93oc3Cme9Jy5d0SJLTsJjbWqhBA091nWp9EU4WFqPDv; io=YvYjRW1cm-DCSkwUAAYo"
      },
      body: {
        name: "dsf",
        isActive: false,
        isPublished: false,
        isAnonymous: false,
        isSequential: true,
        eventId: 457,
        eventName: "alexandr.martinovitch",
        eventDateStart: "2020-02-24T15:05:00.000+03:00",
        eventDateEnd: "2021-03-03T15:06:00.000+03:00",
        questions: [
          {
            name: "В1",
            type: "Checkbox",
            answers: [
              { name: "1 tr", isCorrect: true },
              { name: "2 tr", isCorrect: true },
              { name: "3", isCorrect: false }
            ]
          },
          {
            name: "В2",
            type: "Radio",
            answers: [
              { name: "1 tr", isCorrect: true },
              { name: "2", isCorrect: false },
              { name: "3", isCorrect: false }
            ]
          },

          { name: "В3", type: "Open", answers: [] },

          {
            name: "В4",
            type: "Many",
            answers: [
              { name: "1", isCorrect: false },
              { name: "2", isCorrect: false },
              { name: "3", isCorrect: false }
            ]
          }
        ],
        countFirstAnswer: 5,
        showEventRequestList: false,
        eventFields: {
          staticPakFields: [
            { name: "lastName", checked: false, title: "Фамилия" },
            { name: "firstName", checked: false, title: "Имя" },
            { name: "middleName", checked: false, title: "Отчество" },
            { name: "email", checked: false, title: "Email" }
          ],
          dynamicPakFields: [],
          statisticFields: [
            {
              name: "rightAnswers",
              checked: false,
              title: "Правильных ответов"
            },
            {
              name: "wrongAnswers",
              checked: false,
              title: "Неправильных ответов"
            },
            {
              name: "percentRightAnswers",
              checked: false,
              title: "Процент правильных ответов"
            },
            { name: "startTime", checked: false, title: "Время начала" },
            { name: "endTime", checked: false, title: "Время окончания" },
            { name: "time", checked: false, title: "Продолжительность" }
          ]
        },
        autoEndPercent: 5,
        autoEndLength: 420
      }
    }).then(response => {      
      let quizId = response.body.id;
      cy.log(quizId);

      cy.reload();

      // запускаем запрос
      cy.viewport(1800, 1200);
      cy.visit("http://quiz:4000/admin");
      cy.get("#vue-text-input-21").type("admin");
      cy.get("#vue-password-input-24").type("admin");
      cy.contains("Войти").click();
      cy.get(":nth-child(2) > .navbar-nav-link").click();
      cy.contains(".ag-row", "alexandr.martinovitch")
        .find(".icon-checkbox-unchecked")
        .click();
      cy.wait(1000);
      cy.contains(".ag-row", "alexandr.martinovitch")
        .find(".btn-sm")
        .click();

      // записываем участника на мероприятие связанное с созданным опросом
      cy.log("Регистраиця на мероприятие");
      cy.request({
        method: "POST",
        url: "http://pak:3001/api/events/register",
        headers: {
          "X-User-Email": "admin@mcko.ru",
          "X-User-Token": "7gzo2K7sihTGS_v_o8Xs",
          "Content-Type": "application/json"
        },
        body: {
          event_id: 457,
          customs: {
            "25": ""
          },
          form: {
            first_name: "чсмчсмчсм",
            middle_name: "чсмчсмчсм",
            last_name: "чмчсмчсмчсм",
            email: `${rndMail}@noreplymail.ru`
          }
        }
      }).then(response => {
        let partPin = response.body.pin;
        cy.log(partPin);

        //получаем код клиента
        cy.request({
          method: "POST",
          url: "http://quiz:4000/api/login/pin",
          headers: {
            "Content-Type": "application/json",
            Cookie:
              "auth_token=93oc3Cme9Jy5d0SJLTsJjbWqhBA091nWp9EU4WFqPDv; io=YvYjRW1cm-DCSkwUAAYo"
          },
          body: {
            pin: partPin
          }
        }).then(response => {
          let partCode = response.body.id;

          cy.visit(`http://quiz:4000/quizzes/${quizId}/`);
          cy.get('.form-control').type(partPin);
          cy.wait(200);
          cy.get('.btn').click();

          cy.wait(1000);
          cy.get(':nth-child(1) > .form-check-label > .uniform-checker > span > .form-check-input-styled').check();
          cy.get(':nth-child(2) > .form-check-label > .uniform-checker > span > .form-check-input-styled').check();          
          cy.wait(200);
          cy.get('.btn').click();

          cy.get(':nth-child(1) > .form-check-label > .uniform-choice > span > .form-check-input-styled').click();
          cy.wait(200);
          cy.get('.btn').click();

          cy.get('.form-control').type(partPin);
          cy.wait(200);
          cy.get('.btn').click();

          cy.get(':nth-child(1) > .form-check-label > .uniform-checker > span > .form-check-input-styled').check();
          cy.get(':nth-child(2) > .form-check-label > .uniform-checker > span > .form-check-input-styled').check();
          cy.get(':nth-child(3) > .form-check-label > .uniform-checker > span > .form-check-input-styled').check();
          cy.wait(200);
          cy.get('.btn').click();          
        });
      });
    });
  });
});
