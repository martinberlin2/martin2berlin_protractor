//selbst Pseudocode für Locators und Befehle
//dann zusammensetzen, auch mit jans code
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
const protractor_1 = require("protractor");
// AddActions.ts
/* import {AngularHomepage} from '../pageobjects/angularHomepagePO';
const angHomepage = new AngularHomepage();
 */
//describe('angularjs homepage', () => {
//use strict; 
describe('AddActions', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // await angHomepage.load();
        yield protractor_1.browser.get('http://www.angularjs.org');
    }));
    // it('Tests From csv', async () => {
    //forEach...
    //nicht angular.forEach
    // in develop 13.7.17:50
    /*
        it('smoke test', async() => {
          //expect(true.toBe(true));  // falsch
          expect(true === true);	 // geht
          //and loads page
        }) */
    // https://www.tabnine.com/code/javascript/classes/jasmine/Env
    // https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1
    // https://www.coreycleary.me/why-does-async-await-in-a-foreach-not-actually-await
    it('howManyActionsAtStart', () => __awaiter(void 0, void 0, void 0, function* () {
        let todos = protractor_1.element(protractor_1.by.model("todoList.todoText"));
        //by.model = Struktur wie in Quellcode
        //let todoElems = todos.element.all(byModel("text"));    //kein all
        let howMany;
        howMany = 0;
        todos.each(function (element, index) {
            element.getText().then(function (text) {
                console.log(index, text);
            });
        });
    }));
    // https://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.each
    /* element.all(by.css('.items li')).each(function(element, index) {
    // Will print 0 First, 1 Second, 2 Third.
    element.getText().then(function (text) {
      console.log(index, text);
    }); */
    /*
    elem) {
        if (elem.equals(true))  {  //19.7.
            howMany = howMany + 1;
        }     //toBe ?
    }
    expect howMany == 2;  //toBe 2  ? */
    // });
}));
