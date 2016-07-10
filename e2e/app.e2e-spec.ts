import { DevHubPage } from './app.po';

describe('dev-hub App', function() {
  let page: DevHubPage;

  beforeEach(() => {
    page = new DevHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
