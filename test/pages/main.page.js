const Page = require('./page');

class MainPage extends Page {
    get banner() { return $('//a[@id="rz-banner"]//span[@class="exponea-close a_dma_a_lovesale_010223"]') }
    
    open () {
        return super.open('');
    }

    async getTitle() {
        await $('//html//title').getText();
    }

    async inputTextIntoSearchField(keyword) {
        await $('//input[@name="search"]').addValue(keyword);
    }

    async clickSearchBtn() {
        await $('//button[contains(.,"Знайти")]').click();
    }

    async clickCatalogBtn() {
        await $('#fat-menu').click();
    }

    async clickCategoryLink(category) {
        await $(`//a[@class="menu-categories__link js-menu-categories__link menu-categories__link_state_hovered" and contains(.,"${category}")]`).click()
    }

    async clickSubCategoryLink(subCategory) {
        await $(`//div[@class="tile-cats" and contains(.,"${subCategory}")]`).click()
    }

    async clickCartBtn() {
        await $('//li[@class="header-actions__item header-actions__item--cart"]//button').click()
    }
}

module.exports = new MainPage();
