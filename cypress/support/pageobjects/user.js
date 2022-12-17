class User {
    getAge() {
        return cy.get('[data-cy="age"]')
    }

    getLength() {
        return cy.get('[data-cy="length"]')
    }

    getWeight() {
        return cy.get('[data-cy="weights"]')
    }

    getLogsWeight(kg) {
        return cy.get('[data-cy="' + kg + '"]')
    }
    
    getLogsBMI(bmi) {
        return cy.get('[data-cy="' + bmi + '"]')
    }
}

export default User