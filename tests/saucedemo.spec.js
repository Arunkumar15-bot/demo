const { test,expect } = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const ProductPage = require('../pages/productpage');
const CheckoutPage = require('../pages/checkoutpage');

test('SauceDemo Test', async ({ page }) => {

    const loginpage = new LoginPage(page);
    const productpage = new ProductPage(page);
    const checkoutpage = new CheckoutPage(page);

    await loginpage.navigate();

    await loginpage.login('standard_user', 'secret_sauce');
    await loginpage.verifyLoginSuccess();

    await productpage.addproduct();
    await productpage.verifyCartCount();

    await productpage.gotocart();

    await checkoutpage.checkout('Arun', 'Kumar', '627758');
});