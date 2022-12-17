class Nav {
    getDashboard() {
        return cy.get('[data-cy="dashboard"]')
    }

    getExercise() {
        return cy.get('[data-cy="exercise"]')
    }

    getWorkout() {
        return cy.get('[data-cy="workout"]')
    }

    getUser() {
        return cy.get('[data-cy="user"]')
    }

    getAdmin() {
        return cy.get('[data-cy="dashboard"]')
    }

    getAccountDropdown() {
        return cy.get('[data-cy="account-dropdown"]')
    }

    getProfile() {
        return cy.get('[data-cy="profile"]')
    }

    getLogout() {
        return cy.get('[data-cy="logout"]')
    }
}

export default Nav