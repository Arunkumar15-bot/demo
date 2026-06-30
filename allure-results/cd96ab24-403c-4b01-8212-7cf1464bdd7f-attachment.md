# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> SauceDemo Test
- Location: tests\saucedemo.spec.js:6:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.complete-header')
Expected: "Thank you for your order!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.complete-header')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs 1 Your Cart QTY Description 1
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Remove"
- button "Go back Continue Shopping":
  - img "Go back"
  - text: Continue Shopping
- button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class checkoutpage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.checkoutbutton = page.locator('#checkout');
  8  |         this.firstname = page.locator('#first-name');
  9  |         this.lastname = page.locator('#last-name');
  10 |         this.postalcode = page.locator('#postal-code');
  11 |         this.continuebutton = page.locator('#continue');
  12 |         this.finishbutton = page.locator('#finish');
  13 |         this.successMessage = page.locator('.complete-header');
  14 |     }
  15 | 
  16 |     async checkout(first, last, zip) {
  17 |         await this.checkoutbutton.click();
  18 |         await this.firstname.fill(first);
  19 |         await this.lastname.fill(last);
  20 |         await this.postalcode.fill(zip);
  21 |         await this.continuebutton.click();
  22 |         await this.finishbutton.click();
  23 |     }
  24 | 
  25 |     async verifyOrderSuccess() {
  26 |         await expect(this.successMessage)
> 27 |             .toHaveText('Thank you for your order!');
     |              ^ Error: expect(locator).toHaveText(expected) failed
  28 |     }
  29 | }
  30 | 
  31 | module.exports = checkoutpage;
```