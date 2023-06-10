/// <reference types="Cypress" />

describe('My First Testsuite', function() {
    it('My First Testcase', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
           cy.wrap($el).find('button').click()
        }
        })
        //Assertion if logo is displaying correctly or not
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoelement)
        {
          cy.log(logoelement.text())
        })

    })
  })

