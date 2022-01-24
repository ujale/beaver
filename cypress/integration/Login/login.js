import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginpage from "../pages/loginpage";

Given(/^The admin is on the login page of data beaver web application$/, () => {
    loginpage.visitUrl()
    cy.url().should('include', 'http://23.22.151.143/login')
});

When(/^He enters his invalid email "([^"]*)" and his invalid password as "([^"]*)"$/, (email, password) => {
    loginpage.enterLoginCred(email, password)
});

And(/^The sign in button is clicked$/, () => {
	loginpage.clickSubmit()
});

And(/^The admin waits for 3000 milliseconds$/, () => {
	cy.wait(3000)
});

Then(/^admin should get an error message$/, () => {
	loginpage.errorMessage()
});


When(/^He enters his valid email "([^"]*)" and his valid password as "([^"]*)"$/, (email, password) => {
	loginpage.enterLoginCred(email, password)
});

Then(/^admin is successfully logged into the application and views dashboard page$/, () => {
	loginpage.assertDashboard()
});

Then(/^Click on profile followed by 'sign out' to log out of the application$/, () => {
	return true;
});
