// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { browser, element, by} from 'protractor';

// AddActions.ts
import {AngularHomepage} from '../pageobjects/angularHomepagePO';
const angHomepage = new AngularHomepage();

//describe('angularjs homepage', () => {
describe('AddActions', async () => {
 
  beforeEach(async () => {
    await angHomepage.load();
  });

  it('Tests From csv', async () => {
	  //forEach...
    //nicht angular.forEach
    // in develop 13.7.17:50
		
  });
		
		
		
	  
    await element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(await greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos', async () => {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(await todoList.count()).toEqual(2);
    expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
})

