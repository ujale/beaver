const url = "http://23.22.151.143"
const registerBtn = 'a'
const FirstName = '#exampleInputEmail1'
const LastName = '#exampleInputEmail2'
const emailField = ':nth-child(3) > #exampleInputEmail4'
const phoneNumberField = ':nth-child(4) > #exampleInputEmail4'
const passwordField = ':nth-child(5) > #exampleInputEmail4'
const submitBtn = '.btn'


class registerpage{
    static visitUrl () {
        cy.visit (url)
    }

    static clickRegister () {
        cy.get (registerBtn).click()
        cy.url().should('include', 'http://23.22.151.143/register')
    }

    static enterSignupCred (firstName,lastName, email, phoneNumber, password) {
        cy.get(FirstName).type(firstName)
        cy.get(LastName).type(lastName)
        cy.get(emailField).type(email)
        cy.get(phoneNumberField).type(phoneNumber)
        cy.get(passwordField).type(password)
    }

    static clickSubmit () {
        cy.get(submitBtn).click()
    }
   
    
} export default registerpage