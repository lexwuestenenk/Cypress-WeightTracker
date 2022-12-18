const { defineConfig } = require("cypress");

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'Cypress-WeightTracker', 'cypress', 'config', `cypress.${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: "54jwqn",
  e2e: {
    "experimentalRunAllSpecs": true,
    env: {
      // To make this account, run php artisan db:seed in the WeightTracker project.
      "email": "test-user@test.com",
      "password": "test",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const file = config.env.configFile || 'test'

      return getConfigurationByFile(file)
    },
  },
});
