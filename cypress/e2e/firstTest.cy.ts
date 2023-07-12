import { HomePage } from '../pages/home.po';

describe('First test', () => {
  const homePage = new HomePage();

  it('First test', () => {
    homePage.openUrl(" ").verifyContentVisible("Trainerella");
  });

});