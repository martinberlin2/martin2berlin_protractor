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
exports.AngularHomepage = void 0;
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
const protractor_1 = require("protractor");
class AngularHomepage {
    constructor() {
        this.nameInput = protractor_1.element(protractor_1.by.model('yourName'));
        this.greeting = protractor_1.element(protractor_1.by.binding('yourName'));
        this.checkboxLearn = protractor_1.element.all(protractor_1.by.model("todo.done")).first();
        this.todoText = protractor_1.element(protractor_1.by.model("todoList.todoText"));
        this.newTodo = protractor_1.element.all(protractor_1.by.className("checkbox")).last();
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://www.angularjs.org');
        });
    }
}
exports.AngularHomepage = AngularHomepage;
