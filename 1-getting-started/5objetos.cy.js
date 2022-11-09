/// <reference types="cypress" />

it('A valid user can login', () =>{

    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('ul').find('li').its('length').should('eq', 5)
  
         })

