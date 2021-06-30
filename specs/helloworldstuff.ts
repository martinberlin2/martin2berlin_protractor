// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { browser, element, by} from 'protractor';

// helloworldstuff.js
import {AngularHomepage} from '../pageobjects/angularHomepagePO';
const angHomepage = new AngularHomepage();

//describe('angularjs homepage', () => {
describe('helloworldsteps', async () => {
 
  beforeEach(async () => {
    await angHomepage.load();
    // await browser.get('http://www.angularjs.org');
  });

  xit('should greet the named user', async () => {
    await element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(await greeting.getText()).toEqual('Hello Julie!');
  });

  xit('should list todos', async () => {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(await todoList.count()).toEqual(2);
    expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
})

