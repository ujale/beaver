Feature: Admin Registration

  This describes the onboarding step for a beaver admin on the data beaver portal
  Scenario: Sign up with already existing email

    Given User is on the login page
    When User clicks on the 'Register' link
    Then Fills the sign up form with valid first name "Ronke", last name "Tiller", an already existing email "udeme2@yopmail.com", phonenumber "08021213456", password "Password"  
    And Clicks on the Submit button
    Then User will see a pop up message stating that the email already exists