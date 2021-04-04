import { browser, logging } from 'protractor';
import { StudentListPage } from './student-list.po';

describe('E2E test StudentList page', () => {
  let page: StudentListPage;

  beforeEach(() => {
    page = new StudentListPage();
  });

  it('should display the student list', async () => {
    await page.navigateTo();
    expect(await page.isListPresent()).toBeTruthy('Student list loaded');
  });


  it('should open & close add  modal', async () => {
    await page.addButton().click();
    expect(page.addModalElement()).toBeTruthy("Add modal opened");

    await page.closeButton().click();
    expect(page.addModalElement()).toBeFalsy("Add modal closed");
  });


  // Validation check
  it('should validate the form on Save click', async () => {
    await page.addButton().click();
    await page.saveButton().click();
    expect( page.nameErrorElement().isPresent()).toBeTruthy("Name required error message shown");    
    expect( page.rollErrorElement().isPresent()).toBeTruthy("Roll required error message shown");    
    await page.closeButton().click();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
