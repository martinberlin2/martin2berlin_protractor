//selbst Pseudocode für Locators und Befehle
//dann zusammensetzen, auch mit jans code

// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { browser, element, by} from 'protractor';

// AddActions.ts
/* import {AngularHomepage} from '../pageobjects/angularHomepagePO';
const angHomepage = new AngularHomepage();
 */
//describe('angularjs homepage', () => {
//use strict; 
describe('AddActions', async () => {
 
  beforeEach(async () => {
    // await angHomepage.load();
	await browser.get('http://www.angularjs.org');
  });

  it('Tests From csv', async () => {
	  //forEach...
    //nicht angular.forEach
    // in develop 13.7.17:50
		
  it('smoke test', async() => {
	  expect(true.toBe(true));
  })

  it('howManyActionsAtStart', async () => {
	let todos = element(by.model("todoList.todoText"))
		//by.model = Struktur wie in Quellcode
	let howMany: number;
	howMany = 0;
	todos.forEach() => {
		if (this.todo.equals(true))  {
			howMany = howMany + 1;
		}     //toBe ?
	}
	expect howMany == 2;  //toBe 2  ?
  });
  
  it('howManyActionsAtStartByCount', async () => {
	let todos = element(by.model("todoList.todoText"));
		//by.model = Struktur wie in Quellcode
	let howMany: number;
	howMany = 0;
	let howManyn:number = 0;
	todos.forEach() => {
		howMany = howMany + 1;
	}
	expect(howMany.toEqual(2));  //toBe 2  ?
  });
  
  
  it('howManyDoneActionsAtStart', async () => {
	let todos = element(by.model("todoList.todoText"))
		//by.model = Struktur wie in Quellcode
	let howMany: number;
	howMany = 0;
	todos.forEach() => {
		if done == true:
		howMany = howMany + 1;
	}
	expect howMany == 2;  //toBe 2  ?
  });
  	
  //xit('data driven', async () => {
  //})
	
   /*	  
    await element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(await greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos', async () => {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(await todoList.count()).toEqual(2);
    expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
  */
})

//This Makes a MergeConflict Push 11.7. 14:48
