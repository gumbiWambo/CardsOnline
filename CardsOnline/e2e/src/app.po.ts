import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWelcomeTitle() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  
  getHeaderText() {
    return element(by.css('app-root app-header ul')).getText() as Promise<string>;
  }
  
  getRules() {
    return element(by.css('app-root article h1')).getText() as Promise<string>;
  }

  navigateToGameField() {
    return element(by.css('app-root app-header ul li a')).click();
  }
}
