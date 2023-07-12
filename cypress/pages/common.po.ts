import { resolve } from "cypress/types/bluebird";

export class CommonAction {
  openUrl(urlPath: string) {
    cy.visit(urlPath);
    return this;
  }

  wait(time: number) {
    cy.wait(time);
    return this;
  }

}
