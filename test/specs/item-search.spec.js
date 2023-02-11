const MainPage = require('../pages/main.page')
const SearchResultsPage = require('../pages/searchResults.page');
const data = require('../../data/testData');
const chai = require('chai');
const expect = chai.expect;

describe('Search', () => {
    it('verify that all items are correctly displayed according to your searching request', async () => {
        await MainPage.open();
        expect(await browser.getTitle()).to.equal('Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні');

        await MainPage.inputTextIntoSearchField(data.searchRequest);
        await MainPage.clickSearchBtn();
         
        const itemTitle = await SearchResultsPage.itemTitle.getText();
        const lowerKeyword = data.searchRequest.toLowerCase();
        expect(itemTitle.toLowerCase()).to.include(lowerKeyword);
    })
})


