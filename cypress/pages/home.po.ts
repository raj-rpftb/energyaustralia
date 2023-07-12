import { CommonAction } from './common.po';

export class HomePage extends CommonAction {

  verifyContentVisible(value: string) {
    cy.get('app-festivals ol li li').contains(value).should('be.visible');
    return this;
  }

}