import { FitqWebPage } from './app.po';

describe('fitq-web App', function() {
  let page: FitqWebPage;

  beforeEach(() => {
    page = new FitqWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
