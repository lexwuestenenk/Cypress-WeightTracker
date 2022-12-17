class Workout {
    getWorkout(name) {
        return cy.get('[data-cy="' + name + '"]')
    }

    getWorkoutCreate() {
        return cy.get('[data-cy="workout-create"]')
    }

    getWorkoutEdit() {
        return cy.get('[data-cy="workout-edit"]')
    }

    getWorkoutDelete() {
        return cy.get('[data-cy="workout-delete"]')
    }

    // Forms
    getWorkoutCreateForm() {
        return cy.get('[data-cy="workout-create-form"]')
    }

    getWorkoutEditForm(name) {
        return cy.get('[data-cy="' + name + '-edit"]')
    }

    getWorkoutDeleteForm(name) {
        return cy.get('[data-cy="' + name + '-delete"]')
    }
}

export default Workout