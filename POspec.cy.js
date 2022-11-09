/// <reference types="cypress" />
import {MainPage} from './page-objects/main'
import {LoginPage} from './page-objects/login'
import {WelcomePage} from './page-objects/welcome'


describe('TESTS DE LOGIN', () => {
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()


    beforeEach(() => {
      mainPage.navigate()
      mainPage.clickLoginOption()

  
    })
  
  it('A valid user can login', () =>{
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage("You logged into a secure area!") 
    
     })
    
  it('An invalid password cannot login', () =>{
  
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("fail")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage("Your password is invalid!") 
     
    
       })
  
  it('An invalid user cannot login', () =>{
  
        loginPage.fillUser("pepe")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage("Your username is invalid!") 
      
      
      
       })
  
  
  it('Blank form', () =>{
  
        loginPage.fillUser()
        loginPage.fillPass()
        loginPage.clickButtonLogin()
        welcomePage.checkMessage("Your username is invalid!") 
        
        
    
        
       })

    })