import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  viewportHeight: 1000,
  viewportWidth: 1200,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  nodeVersion: 'bundled',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:4200',
  },
})
