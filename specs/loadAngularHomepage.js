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
// loadAngularHomepage.js
const angularHomepagePO_1 = require("../pageobjects/angularHomepagePO");
const angHomepage = new angularHomepagePO_1.AngularHomepage();
//describe('angularjs homepage', () => {
describe('loadPage', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield angHomepage.load();
        // await browser.get('http://www.angularjs.org');
    }));
    //it('todo checkboxes',async() =>{
    it('just load the page', () => __awaiter(void 0, void 0, void 0, function* () {
    }));
}));
