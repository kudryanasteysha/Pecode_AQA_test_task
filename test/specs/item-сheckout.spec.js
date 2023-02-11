const MainPage = require('../pages/main.page')
const SearchResultsPage = require('../pages/searchResults.page');
const BasketPage = require('../pages/basket.page');
const CheckoutPage = require('../pages/checkout.page');
const data = require('../../data/testData');
const chai = require('chai');
const expect = chai.expect;

describe('Checkout', () => {
    it('verify that error messages should be displayed for Latin characters', async() =>{
        await MainPage.open();
        expect(await browser.getTitle()).to.equal('Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні');
        
        await MainPage.clickCatalogBtn();
        await MainPage.clickCategoryLink(data.category);
        await MainPage.clickSubCategoryLink(data.subcategory);
        await SearchResultsPage.clickBuyBtn();

        await MainPage.clickCartBtn();
        await BasketPage.clickSubmitOrderBtn();
        await CheckoutPage.fillContactInfo(data.lastName, data.firstName, data.phoneNumber);

        const isSurnameValidMessage = await CheckoutPage.errorMessageSurname.getText();
        const isNameValidMessage = await CheckoutPage.errorMessageName.getText();

        expect(isSurnameValidMessage).to.equal('Введіть своє прізвище кирилицею');
        expect(isNameValidMessage).to.equal("Введіть своє імя кирилицею");
    })
})


