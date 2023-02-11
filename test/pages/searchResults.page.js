const Page = require('./page');

class SearchPage extends Page {
    get catalogName() { return $('//h1') }
    get itemTitle() { return $('(//span[@class="goods-tile__title"])[1]') }
    get itemAvailableTitle() { return $('//div[@class="goods-tile__availability goods-tile__availability--available ng-star-inserted"]')}
    get itemPriceValue() { return $('//span[@class="goods-tile__price-value"]') }

    async clickBuyBtn() {
        await browser.pause(800); // need for stability
        await $('(//button[contains(@class, "goods-tile__buy-button")])[1]').click();
    }

    async getBuyBtnState(goods_id) {
        await $(`//app-buy-button[@goods_id="${goods_id}"]//button`).getAttribute('aria-label');
    }

    async selectSortOption(value) {
        await $('//rz-sort[@class="catalog-settings__sorting"]//select').click();
        await $(`//option[@value="${value}"]`).click();
    }

    async getTitleFromLink() {
       let el = await $('(//a[contains(@class, "goods-tile__heading")])[1]');
       await el.waitForDisplayed();
       console.log('TITLE IS' +  await el.getAttribute('title'));
       return await el.getAttribute('title');
    }
}

module.exports = new SearchPage();
