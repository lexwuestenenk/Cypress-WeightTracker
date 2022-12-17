// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../support/pageobjects/landing-page"
import Forms from "../support/pageobjects/forms"
import User from "./pageobjects/user"

const landingPage = new LandingPage()
const forms = new Forms()
const user = new User()

Cypress.Commands.add('register', (username, email, password) => {
    // Enter username
    forms.getFormName()
        .click()
        .clear()
        .type(username)

    // Enter email
    forms.getFormEmail()
        .click()
        .clear()
        .type(email)

    // Enter password
    forms.getFormPassword()
        .click()
        .clear()
        .type(password)

    // Enter password confirmation
    forms.getFormPasswordConfirmation()
        .click()
        .clear()
        .type(password)

    // Submit form
    forms.getFormSubmit()
        .click()
})

Cypress.Commands.add('login', (email, password) => {
    // Enter previously made email
    forms.getFormEmail()
        .click()
        .clear()
        .type(email)

    // Enter previously made password
    forms.getFormPassword()
        .click()
        .clear()
        .type(password)

    // Submit form
    forms.getFormSubmit().click()
})

Cypress.Commands.add('createNewWorkout', (name, description) => {
    // Only get form elements within the "create-workout-form"
    // If "within" is not used, it will find multiple forms and break
    forms.getCreateWorkoutForm().within(() => {
        // Enter workout name
        forms.getFormName()
        .click()
        .clear()
        .type(name)
        
        // Enter workout description
        forms.getFormDescription()
            .click()
            .clear()
            .type(description)

        // Submit form
        forms.getFormSubmit().click()
    })
})

Cypress.Commands.add('createNewHealthEntry', function (age, length, weight) {
    user.getAge()
    .click()
    .clear()
    .type(age)

    user.getLength()
        .click()
        .clear()
        .type(length)

    user.getWeight()
        .click()
        .clear()
        .type(weight)

    forms.getFormSubmit().click()
})