// Import reusable methods. This is used for small things, like generating fake passwords or reformatting text
import { assignEnvVariables, getFakeName, getFakeEmail, getFakePassword } from "../../support/reusable-methods"

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../../support/pageobjects/landing-page"
import Forms from "../../support/pageobjects/forms"
import Nav from "../../support/pageobjects/nav"

const landingPage = new LandingPage()
const forms = new Forms()
const nav = new Nav()

describe('Reset account password', () => {
    // Assign env variables, so they only have to be loaded once
    const env = assignEnvVariables()

    // Generate data to create new account & reset password
    const username = getFakeName()
    const email = getFakeEmail(username.split(' '))
    const password = getFakePassword()
    const newPassword = getFakePassword()

    beforeEach(() => {
        cy.visit(env.base_url)
    })

    it('Register to fitness-app', function () {
        // Click register button
        landingPage.getRegister().click()

        // Create a new account
        cy.register(username, email, password)

        // Verify user is registered
        cy.url().should('include', '/dashboard')
    })

    it('Reset password', function () {
        // Click login button
        landingPage.getLogin().click()

        // Login to previously made account
        cy.login(email, password)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')

        // Go to profile
        nav.getAccountDropdown().click()
        nav.getProfile().click()

        // Check user is on profile page
        cy.url().should('include', '/profile')

        // Only find elements within the password reset form
        forms.getPasswordResetForm().within(() => {
            forms.getCurrentPassword()
                .click()
                .clear()
                .type(password)

            // Fill in password twice
            forms.getFormPassword()
                .click()
                .clear()
                .type(newPassword)

            forms.getFormPasswordConfirmation()
                .click()
                .clear()
                .type(newPassword)

            // Submit form
            forms.getFormSubmit().click()
        })
    })

    it('Login with new user information', function () {
        // Click login button
        landingPage.getLogin().click()

        // Login to previously made account
        cy.login(email, newPassword)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')
    })
})