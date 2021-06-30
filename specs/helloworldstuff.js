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
// helloworldstuff.js
const angularHomepagePO_1 = require("../pageobjects/angularHomepagePO");
const angHomepage = new angularHomepagePO_1.AngularHomepage();
//describe('angularjs homepage', () => {
describe('helloworldsteps', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield angHomepage.load();
    }));
    it('should greet the named user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('yourName')).sendKeys('Julie');
        const greeting = protractor_1.element(protractor_1.by.binding('yourName'));
        expect(yield greeting.getText()).toEqual('Hello Julie!');
    }));
    it('should list todos', () => __awaiter(void 0, void 0, void 0, function* () {
        const todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(yield todoList.count()).toEqual(2);
        expect(yield todoList.get(1).getText()).toEqual('build an AngularJS app');
    }));
}));
