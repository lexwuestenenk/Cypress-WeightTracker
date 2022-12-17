// Import reusable methods. This is used for small things, like generating fake passwords or reformatting text
import { assignEnvVariables, getFakeName, getFakeDescription, getFakeEmail, getFakePassword } from "../../support/reusable-methods"

// Import pageobjects. These contain locators for elements on the website.
import LandingPage from "../../support/pageobjects/landing-page"
import Forms from "../../support/pageobjects/forms"
import Nav from "../../support/pageobjects/nav"
import Workout from "../../support/pageobjects/workout"
import Generic from "../../support/pageobjects/generic"

const landingPage = new LandingPage()
const forms = new Forms()
const nav = new Nav()
const workout = new Workout()
const generic = new Generic()

describe('Create a new account', function () {
    // Assign env variables, so they only have to be loaded once
    const env = assignEnvVariables()
    
    const name = getFakeName()
    const description = getFakeDescription()

    beforeEach(() => {
        cy.visit(env.base_url)
    })

    it('Login to fitness-app and create workout', function () {
        // Click register button
        landingPage.getLogin().click()

        // Login with the admin account
        cy.login(env.email, env.password)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')

        // Go to workout page
        nav.getWorkout().click()

        // Create new workout
        workout.getWorkoutCreate().click()

        // Create new workout
        cy.createNewWorkout(name, description)

        // Check if status pop-up has the right status
        generic.getStatus().should('contain', 'Workout has been created!')

    })

    it('Verify workout exists', function () {
        // Click register button
        landingPage.getLogin().click()

        // Login with the admin account
        cy.login(env.email, env.password)

        // Verify user is logged in
        cy.url().should('include', '/dashboard')

        // Go to workout page
        nav.getWorkout().click()

        // Check if element containing name & description exist
        cy.contains(name).should('exist')

    }) 
})