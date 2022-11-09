/// <reference types="cypress" />
import {MainPage} from './page-objects/main'
import {ClickPage} from './page/objects/click'




describe('TESTS DE LOGIN', () => {
    const mainPage = new MainPage()

    beforeEach(() => {
      mainPage.navigate()

   
    })

    it('Contar botones de color gris', () =>{

        clickPage.clickButtonShifting ()        
        cy.get('[href="/shifting_content/menu"]').click()
        cy.get('ul').find('li').its('length').should('eq', 5)
      
             })

            })