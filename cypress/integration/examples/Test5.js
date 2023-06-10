/// <reference types="Cypress" />
describe('My First Testsuite', function() {
    it('My Second Testcase', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //How do you find web table element dynamically from table row/columnn
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text= $el.text()
            if(text.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                  const priceText=price.text()
                  expect(priceText).to.equal('25')
                })
            }
        })
    })
  })


