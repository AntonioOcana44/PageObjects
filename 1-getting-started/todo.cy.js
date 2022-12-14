/// <reference types="cypress" />

describe('TESTS DE LOGIN', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()

  })

it('A valid user can login', () =>{

  cy.get('#username').type("tomsmith")
  cy.get('#password').type("SuperSecretPassword!")
  cy.get('.fa').click()
  cy.get('#flash').contains("You logged into a secure area!")




   })
  
it('An invalid password cannot login', () =>{

  cy.get('#username').type("tomsmith")
  cy.get('#password').type("error!")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your password is invalid!")
  
  
  
  
     })

it('An invalid user cannot login', () =>{

  cy.get('#username').type("samsmith")
  cy.get('#password').type("SuperSecretPassword!")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your username is invalid!")
    
    
    
    
     })


it('Blank form', () =>{

  cy.get('#username').clear()
  cy.get('#password').clear()
  cy.get('.fa').click()
  cy.get('#flash').contains("Your username is invalid!")
      
      
  
      
     })
    })