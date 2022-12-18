class Forms {

    // Form fields - These are used globally, 
    // so they have to be used in combination with the "within" command referenced below
    getFormName() {
        return cy.get('[data-cy="name"]')
    }

    getFormDescription() {
        return cy.get('[data-cy="description"]')
    }

    getFormEmail() {
       return  cy.get('[data-cy="email"]')
    }

    getCurrentPassword() {
        return cy.get('[data-cy="password-current"]')
    }

    getFormPassword() {
        return cy.get('[data-cy="password"]')
    }

    getFormPasswordConfirmation() {
        return cy.get('[data-cy="password-confirmation"]')
    }

    getFormSubmit() {
        return cy.get('[data-cy="submit"]')
    }

    // Forms - These are used with the "within" command,
    // otherwise the different modal forms will interfere with eachother.
    getCreateWorkoutForm() {
        return cy.get('[data-cy="workout-create-form"]')
    }

    getPasswordUpdateForm() {
        return cy.get('[data-cy="password-update-form"]')
    }

    getPasswordResetForm() {
        return cy.get('[data-cy="password-reset-form"]')
    }
}

export default Forms