/// <reference types="cypress" />
let rndMail = Math.random().toString(36).substring(7);

describe('qweqwe', () => {
  
  it('create_quiz', () => {
    // создаем персон. опрос
    cy.request({
      method: 'POST',
      url: 'http://quiz:4000/api/quizzes',
      headers: {
          'Content-Type': 'application/json',
          'Cookie': 'auth_token=93oc3Cme9Jy5d0SJLTsJjbWqhBA091nWp9EU4WFqPDv; io=YvYjRW1cm-DCSkwUAAYo'
      },
      body: {
        "name": "cvbcbvbvcbvc",
        "isActive": false,
        "isPublished": false,
        "isAnonymous": false,
        "isSequential": false,
        "eventId": 457,
        "eventName": "alexandr.martinovitch",
        "eventDateStart": "2020-02-24T15:05:00.000+03:00",
        "eventDateEnd": "2021-03-03T15:06:00.000+03:00",
        "questions": [
            {
                "name": "que1",
                "type": "Radio",
                "answers": [
                    {
                        "name": "tr",
                        "isCorrect": true
                    },
                    {
                        "name": "fl",
                        "isCorrect": false
                    }
                ]
            }
        ],
        "countFirstAnswer": 5,
        "showEventRequestList": false,
        "eventFields": {
            "staticPakFields": [
                {
                    "name": "lastName",
                    "checked": false,
                    "title": "Фамилия"
                },
                {
                    "name": "firstName",
                    "checked": false,
                    "title": "Имя"
                },
                {
                    "name": "middleName",
                    "checked": false,
                    "title": "Отчество"
                },
                {
                    "name": "email",
                    "checked": false,
                    "title": "Email"
                }
            ],
            "dynamicPakFields": [],
            "statisticFields": [
                {
                    "name": "rightAnswers",
                    "checked": false,
                    "title": "Правильных ответов"
                },
                {
                    "name": "wrongAnswers",
                    "checked": false,
                    "title": "Неправильных ответов"
                },
                {
                    "name": "percentRightAnswers",
                    "checked": false,
                    "title": "Процент правильных ответов"
                },
                {
                    "name": "startTime",
                    "checked": false,
                    "title": "Время начала"
                },
                {
                    "name": "endTime",
                    "checked": false,
                    "title": "Время окончания"
                },
                {
                    "name": "time",
                    "checked": false,
                    "title": "Продолжительность"
                }
            ]
        }
      }
    }).then((response) => {
      let quizId = response.body.id;
      cy.log(quizId);
      // запускаем запрос
      cy.viewport(1800, 1200);
      cy.visit('/admin');
      cy.get('#vue-text-input-21').type('admin');
      cy.get('#vue-password-input-24').type('admin');
      cy.contains('Войти').click();
      cy.get(':nth-child(2) > .navbar-nav-link').click();
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.icon-checkbox-unchecked').click();
      cy.wait(1000);
      cy.contains('.ag-row', 'alexandr.martinovitch').find('.btn-sm').click();     

      // записываем участника на мероприятие связанное с созданным опросом
      cy.log('Регистраиця на мероприятие')
      cy.request({
        method: 'POST',
        url: 'http://pak:3001/api/events/register',
        headers: {
            'X-User-Email': 'admin@mcko.ru',
            'X-User-Token': '7gzo2K7sihTGS_v_o8Xs',
            'Content-Type': 'application/json'
        },
        body: {
          "event_id": 457,
          "customs": {
                "25": ""
            },
            "form": {
              "first_name": "чсмчсмчсм",
              "middle_name": "чсмчсмчсм",
              "last_name": "чмчсмчсмчсм",
              "email": `${rndMail}@noreplymail.ru`
           }
        }        
      }).then((response) => {
        let partPin = response.body.pin;
        cy.log(partPin);

        //получаем код клиента
        cy.request({
          method: 'POST',
          url: 'http://quiz:4000/api/login/pin',
          headers: {
              'Content-Type': 'application/json',
              'Cookie': 'auth_token=93oc3Cme9Jy5d0SJLTsJjbWqhBA091nWp9EU4WFqPDv; io=YvYjRW1cm-DCSkwUAAYo'
          },
          body: {
            "pin": partPin
          }
        }).then((response) => {
          let partCode = response.body.id;

          //получаем информацию о созданом опросе
          cy.request({
            method: 'GET',
            url: `http://quiz:4000/api/quizzes/${quizId}`,
            headers: {},
            body: {}
          }).then((resp) => {
            let questId = resp.body.questions[0].id;
            cy.log(`question Id ${questId}`);
            let wrongAnswId = resp.body.questions[0].answers[1].id;
            cy.log(`wrong answer Id ${wrongAnswId}`);
            let rightAnswId = resp.body.questions[0].answers[0].id;
            cy.log(`right answer Id ${rightAnswId}`);

            //проходим опрос
            cy.request({
              method: 'POST',
              url: 'http://quiz:4000/api/results',
              headers: {
                  'Content-Type': 'application/json',
                  'Cookie': 'auth_token=93oc3Cme9Jy5d0SJLTsJjbWqhBA091nWp9EU4WFqPDv; io=YvYjRW1cm-DCSkwUAAYo'
              },
              body: {
                "userId": partCode,
                "quizId": quizId,
                "questionId": questId,
                "answerIds":[rightAnswId],
                "abstractAnswer":null
            }
            })
          })

        })
      })
     
    })

  })   
});
  