import { FitnessEducationPage } from './app.po';

describe('fitness-education App', () => {
  let page: FitnessEducationPage;

  beforeEach(() => {
    page = new FitnessEducationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
