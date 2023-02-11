const MainPage = require('../pages/main.page')
const SearchResultsPage = require('../pages/searchResults.page');
const FilterSection = require('../pages/filterSection.page');
const data = require('../../data/testData');
const chai = require('chai');
const expect = chai.expect;

describe('Filtering', () => {
    it('verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.open();
        expect(await browser.getTitle()).to.equal('Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні');

        await MainPage.clickCatalogBtn();
        await MainPage.clickCategoryLink(data.category);
        await MainPage.clickSubCategoryLink(data.subcategory);
        await FilterSection.checkBrand(data.brand);
        await FilterSection.checkSeries(`${data.seriesName}`);
        await FilterSection.checkItemReadyToDelivery();
        await FilterSection.inputPriceValues(data.minPrice, data.maxPrice);
        await FilterSection.submitPriceBtn();

        expect(await browser.getTitle()).to.include(`${data.subcategory}`);

        const expectedItemTitle = new RegExp(`${data.brand}|${data.seriesName}}`);
        expect(await SearchResultsPage.itemTitle.getText()).to.match(expectedItemTitle);

        expect(await SearchResultsPage.itemAvailableTitle.getText()).to.equal('Готовий до відправлення');
        
        const itemPriceValue = await SearchResultsPage.itemPriceValue.getText();
        const extractedValue = itemPriceValue.replace(/[^\d]/g, '');
        const expectedPrice = Number(extractedValue);

        expect(expectedPrice).to.be.within(data.minPrice, data.maxPrice);
    });
});


