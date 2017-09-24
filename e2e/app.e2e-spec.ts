import { ForgithubPage } from './app.po';

describe('forgithub App', () => {
  let page: ForgithubPage;

  beforeEach(() => {
    page = new ForgithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
