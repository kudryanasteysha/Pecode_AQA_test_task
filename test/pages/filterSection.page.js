const Page = require('./page');

class FilterSection extends Page {
    async checkBrand(brand) {
        await $(`//a[@data-id="${brand}"]`).click();
        await browser.pause(1000); // need for stability
    }

    async checkSeries(series) {
        await $(`//a[@data-id="${series}"]`).click();
        await browser.pause(1000); // need for stability
    }

    async checkScreenDiagonal(diagonal) {
        await $(`//a[@data-id='${diagonal}']`).click();
        await browser.pause(1000); // need for stability
    }

    async checkItemReadyToDelivery() {
        await $('//a[@data-id="Готовий до відправлення"]').click();
        await browser.pause(1000); // need for stability
    }

    async inputPriceValues(min, max) {
        await $('//input[@formcontrolname="min"]').setValue(min);
        await $('//input[@formcontrolname="max"]').setValue(max);
        await browser.pause(1000); // need for stability
    }

    async submitPriceBtn() {
        await $('//button[contains(.,"Ok")]').click();
        await browser.pause(1000); // need for stability
    }
}

module.exports = new FilterSection();
