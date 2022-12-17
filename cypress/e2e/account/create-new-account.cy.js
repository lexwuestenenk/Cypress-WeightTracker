// Import reusable methods. This is used for small things, like generating fake passwords or reformatting text
import { assignEnvVariables, getFakeName, getFakeEmail, getFakePassword } from "../../support/reusable-methods"

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../../support/pageobjects/landing-page"
import Forms from "../../support/pageobjects/forms"

const landingPage = new LandingPage()
const forms = new Forms()

describe('Create a new account', function () {
    // Assign env variables, so they only have to be loaded once
    const env = assignEnvVariables()

    // Generate data to create account with
    const username = getFakeName()
    const email = getFakeEmail(username.split(' '))
    const password = getFakePassword()

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
})