const { test, expect } = require('@playwright/test');
class loginpage
{
    constructor(page)
    {
        this.page=page;

        this.userinput=page.locator('#user-name');
        this.passinput=page.locator('#password');
        this.loginbutton=page.locator('#login-button');
    }
    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
        
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory/);
    }
    async login(username, password) {
        await this.userinput.fill(username);
        await this.passinput.fill(password);
        await this.loginbutton.click();
    }
}

module.exports = loginpage;