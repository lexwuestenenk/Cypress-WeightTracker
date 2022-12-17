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

    beforeEach(() => {
        cy.visit(env.base_url)
    })

    it('Login to previously made account', function () {
        // Click login button
        landingPage.getLogin().click()

        // Login to default account
        cy.login(env.email, env.password)

        // Verify user is logged in by checking if the url contains dashboard
        // as the user can't be here without being logged in
        cy.url().should('include', '/dashboard')
    })
})