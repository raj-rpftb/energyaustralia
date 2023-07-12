
### Environments

Functional e2e tests is executed on Dev environments.

#### Running tests for the first time:

* Install all dependencies (**including cypress**):

  - `npm install` or `npm i`
  
* Running test via headless mode:
  - `npm run cypress:run`
  
* Running test via UI mode:
   - `npm run cypress:open`

#### Test Features and Scenarios:

- Test Scenarios folder: `/cypress/integration/`

-  Reports and Results:

   * Report folder - `/cypress/report/`
   * Screenshots - `/cypress/screenshots/`

#### Custom cypress Commands:

- Add your cypress custom commands under `support/commands.js`

#### Without headless:
- Add `--headed` to the npm command