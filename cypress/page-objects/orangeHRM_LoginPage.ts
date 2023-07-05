/// <reference types="cypress" />

class LoginPage
{
    getOrangeHRMUrl(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    getLoginPageTitle(){
        return cy.title()
    }

    getTxtUsername(){
        return cy.xpath("//input[@name='username']")
    }

    getTxtPassword(){
        return cy.xpath("//input[@type='password']")
    }

    getLoginBtn(){
        return cy.xpath("//button[@type='submit']")
    }

    getCurrentURL(){
        return cy.url()
    }
}

export default LoginPage;