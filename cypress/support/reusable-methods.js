import { faker } from '@faker-js/faker';

// Assign env variables to variable so it only has to be read once
const assignEnvVariables = () => {
    const env = {
        "environment": Cypress.env('environment'),
        "base_url": Cypress.env('base_url'),
        "email": Cypress.env('email'),
        "password": Cypress.env('password')
    } 
    return env
}

// Fake data for accounts
const getFakeName = () => {
    return faker.name.findName()
}

const getFakeDescription = () => {
    return faker.commerce.productDescription()
}

const getFakeEmail = (username) => {
    return faker.internet.email(username)
}

const getFakePassword = () => {
    return faker.internet.password()
}

const getFakeWeight = () => {
    return Math.floor(Math.random() * (200 - 50 + 1) + 50)
}

const getFakeLength = () => {
    return Math.floor(Math.random() * (200 - 140 + 1) + 150)
}

// Fake data for health logs
const getFakeAge = () => {
    const birthyear = new Date(faker.date.birthdate()).getUTCFullYear()
    const currentyear = new Date().getUTCFullYear()
    const age = currentyear - birthyear
    return age
}

export {
    assignEnvVariables,
    getFakeName,
    getFakeDescription,
    getFakeEmail,
    getFakePassword,
    getFakeAge,
    getFakeWeight,
    getFakeLength
}
