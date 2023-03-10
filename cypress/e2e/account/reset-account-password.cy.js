// Import reusable methods. This is used for small things, like generating fake passwords or reformatting text
import { assignEnvVariables, getFakeName, getFakeEmail, getFakePassword } from "../../support/reusable-methods"

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../../support/pageobjects/landing-page"
import Forms from "../../support/pageobjects/forms"

const landingPage = new LandingPage()
const forms = new Forms()

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

        // Click forgot password
        landingPage.getForgotPassword().click()

        // Enter mail in form
        forms.getPasswordResetForm().within(() => {
            forms.getFormEmail()
                .click()
                .clear()
                .type(email)
            
            forms.getFormSubmit().click()
        })
    })

    it('Verify mail was sent through mailhog & reset password', function () {
        cy.request(env.mail_url + '/api/v1/messages').then((response) => {
            console.log(response.body[0].Content.Body)
            const parser = new DOMParser()
            const mail = parser.parseFromString(response.body[0].Content.Body, 'text/html')
            const anchor = mail.querySelector("a.button")
            console.log(anchor)
            const password_reset_url = anchor.href

            cy.visit(password_reset_url)
        })
    })
})
