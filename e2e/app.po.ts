import { browser, element, by } from 'protractor';

export class AbtMEPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('me-root h1')).getText();
  }
}
