import {browser, element, by, Key} from 'protractor';

export class Navigation {

    bar = element(by.id('navbar-main'))
    learn = element(by.cssContainingText('.dropdown-toggle', 'Learn'))
    tutorial = element(by.linkText('Tutorial'))
    subbar = element(by.id("navbar-sub"))
    title = this.subbar.element(by.className("ng-binding"))
    
    searchField = this.bar.element(by.className("search-query"))

    async get(): Promise<void> {
        await browser.get('http://www.angularjs.org')
    }

    async get_subbar_title(): Promise<string> {
        return this.title.getText()
    }

    async goto_Tutorial(): Promise<void>{
        await this.learn.click()
        await browser.sleep(1000)
        await this.tutorial.click()
    }

    async search(item: string):Promise<void> {
        await this.searchField.click()
        await this.searchField.sendKeys(item)
        await this.searchField.sendKeys(Key.ENTER);
      };
}
