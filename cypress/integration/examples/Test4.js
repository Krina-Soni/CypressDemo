/// <reference types="Cypress" />
describe('My First Testsuite', function() {
    it('My Second Testcase', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert',(str) =>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        

    // Switching to chind window

   cy.get('#opentab').invoke('removeAttr','target').click()

   cy.wait('80000ms')

   //get current page url
   cy.url().should('include', 'rahulshettyacademy')

   // Browser Navigating back
   cy.wait('80000ms')
   cy.go('back')
    })
  })


