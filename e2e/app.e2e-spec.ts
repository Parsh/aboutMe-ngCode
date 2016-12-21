import { AbtMEPage } from './app.po';

describe('abt-me App', function() {
  let page: AbtMEPage;

  beforeEach(() => {
    page = new AbtMEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('me works!');
  });
});
