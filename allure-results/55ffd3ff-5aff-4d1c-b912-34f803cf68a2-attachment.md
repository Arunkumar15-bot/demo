# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> SauceDemo Test
- Location: tests\saucedemo.spec.js:6:1

# Error details

```
Error: toHaveText can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e16]: Your Cart
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25]:
              - /url: "#"
              - generic [ref=e26]: Sauce Labs Backpack
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]:
              - generic [ref=e29]: $29.99
              - button "Remove" [ref=e30] [cursor=pointer]
      - generic [ref=e31]:
        - button "Go back Continue Shopping" [ref=e32] [cursor=pointer]:
          - img "Go back" [ref=e33]
          - text: Continue Shopping
        - button "Checkout" [ref=e34] [cursor=pointer]
  - contentinfo [ref=e35]:
    - list [ref=e36]:
      - listitem [ref=e37]:
        - link "Twitter" [ref=e38]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e39]:
        - link "Facebook" [ref=e40]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e41]:
        - link "LinkedIn" [ref=e42]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e43]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class checkoutpage{
  4  | 
  5  |     constructor(page)
  6  |     {
  7  |         this.page=page;
  8  |         this.checkoutbutton = page.locator('#checkout');
  9  |         this.firstname=page.locator('#first-name');
  10 |         this.lastname=page.locator('#last-name');
  11 |         this.postalcode=page.locator('#postal-code');
  12 |         this.continuebutton=page.locator('#continue');
  13 |         this.finishbutton=page.locator('#finish');
  14 | 
  15 |     }
  16 |     async checkout(first, last, zip) {
  17 |         await this.checkoutbutton.click();
  18 |         await this.firstname.fill(first);
  19 |         await this.lastname.fill(last);
  20 |         await this.postalcode.fill(zip);
  21 |         await this.continuebutton.click();
  22 |         await this.finishbutton.click();
  23 |     }
  24 |     async verifyOrderSuccess() {
  25 |         await expect(this.successMessage)
> 26 |             .toHaveText('Thank you for your order!');
     |              ^ Error: toHaveText can be only used with Locator object, was called with undefined
  27 |     }
  28 | }
  29 | module.exports=checkoutpage;
```