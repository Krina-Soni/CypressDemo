/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
describe('My First Testsuite', function() {
    before(function() {
    cy.fixture('example').then(function(data){
            this.data=data
    })
    }) 
    
    it('My Second Testcase', function(){
        const homePage = new HomePage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        cy.get(':nth-child(2) > .nav-link').click()
        //shop page
        //cy.selectProduct('Blackberry')

        this.data.productName.forEach(element => {
            cy.selectProduct('element')
        });
        

        // cy.get('h4.card-title').each(($el, index, $list) => {
        //    if($el.text().includes('Blackberry')){
        //     cy.get('button.btn.btn-info').eq(index).click()
        //    }
        // })
    })
  })


