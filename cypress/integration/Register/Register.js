import cypress from "cypress";
import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import registerpage from "../pages/registerpage";


Given(/^User is on the login page$/, () => {
	registerpage.visitUrl()
});

When(/^User clicks on the 'Register' link$/, () => {
	registerpage.clickRegister()
});


Then(/^Fills the sign up form with valid first name "([^"]*)", last name "([^"]*)", an already existing email "([^"]*)", phonenumber "([^"]*)", password "([^"]*)"$/, (firstName,lastName, email, phoneNumber, password) => {
	registerpage.enterSignupCred(firstName,lastName, email, phoneNumber, password)
});


Then(/^Clicks on the Submit button$/, () => {
	registerpage.clickSubmit
});

Then(/^User will see a pop up message stating that the email already exists$/, () => {
	cy.get('.alert-body').should('be.visible')
});
