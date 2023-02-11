const MainPage = require('../pages/main.page')
const SearchResultsPage = require('../pages/searchResults.page');
const BasketPage = require('../pages/basket.page');
const data = require('../../data/testData');
const chai = require('chai');
const expect = chai.expect;

describe('Basket', () => {
    it.only('verify that a user can add items to the basket', async () => {
        await MainPage.open();
        expect(await browser.getTitle()).to.equal('Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні');
        
        await MainPage.clickCatalogBtn();
        await MainPage.clickCategoryLink(data.category);
        await MainPage.clickSubCategoryLink(data.subcategory);
        await SearchResultsPage.clickBuyBtn();

        await MainPage.clickCatalogBtn();
        await MainPage.clickCategoryLink(data.category);
        await MainPage.clickSubCategoryLink('Планшети');

        const firstItemTitleFromSearchResult = await SearchResultsPage.getTitleFromLink();   

        await SearchResultsPage.clickBuyBtn();

        await MainPage.clickCartBtn();
        expect(await BasketPage.basketHeader.getText()).to.equal('Кошик');

        // verify information of items inside the basket  
        const firstItemTitleFromCart = await BasketPage.firstCartProductTitle.getText();    
        expect(firstItemTitleFromCart).to.include(firstItemTitleFromSearchResult);

        // verify that the price is calculated correctly
        const firstItemPriceValue = await BasketPage.firstCartProductPrice.getText();
        const extractedFirstItemPriceValue  = firstItemPriceValue.replace(/[^\d]/g, '');
        const firstItemPrice = Number(extractedFirstItemPriceValue);

        const secondItemPriceValue = await BasketPage.secondCartProductPrice.getText();
        const extractedSecondItemPriceValue  = secondItemPriceValue.replace(/[^\d]/g, '');
        const secondItemPrice = Number(extractedSecondItemPriceValue);

        const itemSumPriceValue = await BasketPage.cartSumPrice.getText();
        const extractedSumValue = itemSumPriceValue.replace(/[^\d]/g, '');
        const expectedSumPrice = Number(extractedSumValue);

        expect(expectedSumPrice).to.equal(firstItemPrice+secondItemPrice);
        
        // verify that the delete item button is clickable
        await BasketPage.clickPopUpMenu();

        const clickable = await BasketPage.deleteBtn.isClickable();
        expect(clickable).to.be.true;

        await BasketPage.deleteBtn.click();
    })
})


