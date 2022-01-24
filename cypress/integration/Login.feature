Feature: Login
  As a data beaver admin, i should not be abe to login with a invalid email and password
  As a data beaver admin, i should be abe to login with a valid email and password


  Scenario: Login with invalid email and invalid password

    Given The admin is on the login page of data beaver web application
    When He enters his invalid email "ud@yopmail.com" and his invalid password as "Password11"
    And The sign in button is clicked
    And The admin waits for 3000 milliseconds
    Then admin should get an error message


  Scenario: Login with valid credentials

    Given The admin is on the login page of data beaver web application
    When He enters his valid email "udeme@yopmail.com" and his valid password as "P@ssw0rd"
    And The sign in button is clicked
    And The admin waits for 3000 milliseconds
    Then admin is successfully logged into the application and views dashboard page
    Then Click on profile followed by 'sign out' to log out of the application
