import { ZzzPage } from './app.po';

describe('zzz App', function() {
  let page: ZzzPage;

  beforeEach(() => {
    page = new ZzzPage();
  });

  it('should display hello message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello Russell');
  });
});
