import { AutosureAdminPage } from './app.po';

describe('autosure-admin App', function() {
  let page: AutosureAdminPage;

  beforeEach(() => {
    page = new AutosureAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
