const { expect } = require('@playwright/test');

class productpage {
    constructor(page) {
        this.page = page;
        this.addtocart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.carticon = page.locator('.shopping_cart_link');
    }

    async addproduct() {
        await this.addtocart.click();
    }

    async gotocart() {
        await this.carticon.click();
    }
    async verifyCartCount() {
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
    }
}

module.exports = productpage;