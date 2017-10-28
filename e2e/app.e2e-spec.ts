import { Yongular2Page } from './app.po';

describe('yongular2 App', function() {
  let page: Yongular2Page;

  beforeEach(() => {
    page = new Yongular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
