import { browser, by, element } from 'protractor';

export class StudentListPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async isListPresent(): Promise<boolean> {
    return element(by.css('app-student-list ul')).isPresent();
  }

  addButton() {
    return element(by.buttonText("Add"));
  }
  async addModalElement(): Promise<boolean> {
    return element(by.css(".add-student")).isPresent();
  }
  closeButton() {
    return element(by.buttonText("Close"));
  }

  saveButton() {
    return element(by.buttonText("Save"));
  }
  //Field Validation 
  nameErrorElement() {
    return element(by.cssContainingText(".invalid-feedback", "Name is required"));
  }
  rollErrorElement() {
    return element(by.cssContainingText(".invalid-feedback", "Roll is required"));
  }

}
