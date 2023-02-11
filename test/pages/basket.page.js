const Page = require('./page');

class BasketPage extends Page {
    get basketHeader() { return $('//div[@class="modal__header"]') }
    get firstCartProductTitle() { return $('(//a[@data-testid="title"])[1]') }
    get firstCartProductPrice() { return $('(//p[@data-testid="cost"])[1]') }
    get secondCartProductPrice() { return $('(//p[@data-testid="cost"])[2]') }
    get cartSumPrice() { return $('//div[@data-testid="cart-receipt-sum"]') }
    get deleteBtn() { return $('//div[@id="cartProductActions0"]//button') }

    async clickPopUpMenu() {
        await $('//button[@id="cartProductActions0"]').click();
    }

    async clickSubmitOrderBtn() {
        let el = await $('[data-testid="cart-receipt-submit-order"]');
        await el.waitForClickable( { timeout: 10000 } );
        await el.click();
    }
}

module.exports = new BasketPage();
