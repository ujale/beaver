const url = "http://23.22.151.143"
const emailField = '#inputEmail'
const passwordField = '#inputPassword'
const signInBtn = '.btn'
const dashboard = 'img'
const errorMessage = '.alert-body'


class loginpage{
    static visitUrl () {
        cy.visit (url)
    }

    static enterLoginCred (email, password) {
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

    static clickSubmit () {
        cy.get(signInBtn).click()
    }

    static assertDashboard() {
        cy.get(dashboard).should('be.visible')
    }

    static errorMessage() {
        cy.get(errorMessage).should("contains.text", "Error: Authentication failed. User not found")
    }


} export default loginpage