import { Ng2marketPage } from './app.po';

describe('ng2market App', () => {
  let page: Ng2marketPage;

  beforeEach(() => {
    page = new Ng2marketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
