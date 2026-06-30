const { expect } = require('@playwright/test');

class checkoutpage {

    constructor(page) {
        this.page = page;
        this.checkoutbutton = page.locator('#checkout');
        this.firstname = page.locator('#first-name');
        this.lastname = page.locator('#last-name');
        this.postalcode = page.locator('#postal-code');
        this.continuebutton = page.locator('#continue');
        this.finishbutton = page.locator('#finish');
    }

    async checkout(first, last, zip) {
        await this.checkoutbutton.click();
        await this.firstname.fill(first);
        await this.lastname.fill(last);
        await this.postalcode.fill(zip);
        await this.continuebutton.click();
        await this.finishbutton.click();
    }

    
}

module.exports = checkoutpage;