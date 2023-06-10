/// <reference types="Cypress" />
describe('My First Testsuite', function() {
    it('My Second Testcase', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('div.mouse-hover-content').invoke('show')
       //cy.contains('Top').click({force: true})
       cy.url().should('include','top')
    })
  })


