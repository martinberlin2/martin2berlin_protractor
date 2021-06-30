// import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { browser, element, by} from 'protractor';

// loadAngularHomepage.js
import {AngularHomepage} from '../pageobjects/angularHomepagePO';
const angHomepage = new AngularHomepage();

//describe('angularjs homepage', () => {
describe('loadPage', async () => {
 
  beforeEach(async () => {
    await angHomepage.load();
    // await browser.get('http://www.angularjs.org');
  });

  //it('todo checkboxes',async() =>{
  it('just load the page', async () => {
  })
})

