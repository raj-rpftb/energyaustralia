import abc from '../fixtures/respone.json';

describe('API test', () => {

  it("Verify Status code of API is 200 ", () => {
    cy.request("GET", "/api/v1/festivals").then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it("Verify Status code of API is 400 ", () => {
    cy.request("GET", "/api/v1/festivals").then((response) => {
      expect(response.status).to.eq(400);
    })
  })

});