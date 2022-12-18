// Import reusable methods. This is used for small things, like generating fake passwords or reformatting text
import { assignEnvVariables, getFakeName, getFakeDescription, getFakeEmail, getFakePassword, getFakeAge, getFakeWeight, getFakeLength } from "../../support/reusable-methods"

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../../support/pageobjects/landing-page"
import Forms from "../../support/pageobjects/forms"
import Nav from "../../support/pageobjects/nav"
import Workout from "../../support/pageobjects/workout"
import Generic from "../../support/pageobjects/generic"
import User from "../../support/pageobjects/user"

const landingPage = new LandingPage()
const forms = new Forms()
const nav = new Nav()
const workout = new Workout()
const generic = new Generic()
const user = new User()

describe('Create a new health log entry', function () {
    // Assign env variables, so they only have to be loaded once
    const env = assignEnvVariables()

    // Generate data to create new health entry
    const age = getFakeAge()
    const length = getFakeLength()
    const weight = getFakeWeight()

    // Calculate BMI
    let bmi = Math.round(((weight / length / length) * 10000) * 100) / 100

    beforeEach(() => {
        cy.visit(env.base_url)
    })

    it('Create a new health log entry', function () {
        // Click register button
        landingPage.getLogin().click()

        // Login with the admin account
        cy.login(env.email, env.password)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')

        // Go to User page
        nav.getUser().click()

        // Check if user is on correct page
        cy.url().should('include', '/user')

        cy.createNewHealthEntry(age, length, weight)
    })

    it('Check health row data', function () {
        // Click register button
        landingPage.getLogin().click()

        // Login with the admin account
        cy.login(env.email, env.password)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')

        // Go to User page
        nav.getUser().click()

        // Check if user is on correct page
        cy.url().should('include', '/user')

        // Check if row with bmi & KG exists
        user.getLogsBMI(bmi).should('exist')
        user.getLogsWeight(weight).should('exist')
    })
})