class LandingPage {
    getLogin() {
        return cy.get('[data-cy="login"]')
    }

    getRegister() {
        return cy.get('[data-cy="register"]')
    }

    getForgotPassword() {
        return cy.get('[data-cy="forgot-password"]')
    }
}

export default LandingPage