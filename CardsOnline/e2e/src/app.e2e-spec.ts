import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getWelcomeTitle()).toEqual('Willkommen bei Cards Online');
  });
  it('should display Rules', () => {
    page.navigateTo();
    expect(page.getRules()).toEqual('Regeln');
  });
  it('should display header text \'Navigation\'', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Navigation');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
