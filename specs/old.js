// local import of the exported AngularPage class
//............ old one !!!! 

require('protractor');
// geht ohne Pfad ? wie browser ?
// import {browser} from 'protractor';
import {AngularHomepage} from './angularPage';
const angularHomepage = new AngularHomepage(); 

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

  xit('should greet the named user', async () => {
    await angularHomepage.get();
    await angularHomepage.setName('Julie');
    expect(await angularHomepage.getGreeting()).toEqual('Hello Julie!');
  }) ;

  it('todo checkboxes',async() =>{
    //expect(angularHomepage.checkboxLearn.isChecked()).toBeTruthy();    
    expect(await angularHomepage.checkboxLearn.isSelected()).toBeFalsy();
    browser.sleep(5000);
    await angularHomepage.checkboxLearn.click();
    browser.sleep(5000);
    expect(await angularHomepage.checkboxLearn.isSelected()).toBeFalsy();
    //expect(angularHomepage.checkboxLearn.isChecked()).toBeFalsy();       
  });

  xit('add todo',async() =>{
    await(angularHomepage.addTodo("find out if checkbox is checked"))
    expect(angularHomepage.newTodo.isPresent()).toBeTruthy()
  });
});
