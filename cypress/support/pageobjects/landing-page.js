class LandingPage {
    getLogin() {
        return cy.get('[data-cy="login"]')
    }

    getRegister() {
       return  cy.get('[data-cy="register"]')
    }
}

export default LandingPage