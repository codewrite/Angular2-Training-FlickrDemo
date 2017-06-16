import { FlickrDemoPage } from './app.po';

describe('flickr-demo App', () => {
  let page: FlickrDemoPage;

  beforeEach(() => {
    page = new FlickrDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
