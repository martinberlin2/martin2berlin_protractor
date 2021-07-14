"use strict";
//selbst Pseudocode für Locators und Befehle
//dann zusammensetzen, auch mit jans code
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
    it('Tests From csv', () => __awaiter(void 0, void 0, void 0, function* () {
        //forEach...
        //nicht angular.forEach
        // in develop 13.7.17:50
        it('smoke test', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(true.toBe(true));
            //and loads page 
        }));
        it('howManyActionsAtStart', () => __awaiter(void 0, void 0, void 0, function* () {
            let todos = protractor_1.element(protractor_1.by.model("todoList.todoText"));
            //by.model = Struktur wie in Quellcode
            let howMany;
            howMany = 0;
            todos.forEach();
            {
                if (this.todo.equals(true)) {
                    howMany = howMany + 1;
                } //toBe ?
            }
            expect;
            howMany == 2; //toBe 2  ?
        }));
        it('howManyActionsAtStartByCount', () => __awaiter(void 0, void 0, void 0, function* () {
            let todos = protractor_1.element(protractor_1.by.model("todoList.todoText"));
            //by.model = Struktur wie in Quellcode
            let howMany;
            howMany = 0;
            let howManyn = 0;
            todos.forEach();
            {
                howMany = howMany + 1;
            }
            expect(howMany.toEqual(2)); //toBe 2  ?
        }));
        it('howManyDoneActionsAtStart', () => __awaiter(void 0, void 0, void 0, function* () {
            let todos = protractor_1.element(protractor_1.by.model("todoList.todoText"));
            //by.model = Struktur wie in Quellcode
            let howMany;
            howMany = 0;
            todos.forEach();
            {
                if (done == true)
                    : howMany = howMany + 1;
            }
            expect;
            howMany == 2; //toBe 2  ?
        }));
        //xit('data driven', async () => {
        //})
    }));
}));
