////li[1]//div[@class="checkout-product__title-product"]
const Page = require('./page');

class CheckoutPage extends Page {
    get checkoutHeader() { return $('//h1') }
    get firstCheckoutProductTitle() { return $('//li[1]//div[@class="checkout-product__title-product"]') }
    get secondCheckoutProductTitle() { return $('//li[2]//div[@class="checkout-product__title-product"]') }
    get firstCheckoutProductPrice() { return $('//li[1]//span[@class="checkout-product__price"]') }
    get checkoutTotalPriceValue() { return $('//dd[@class="checkout-total__value checkout-total__value_size_large"]') }
    get errorMessageSurname() { return $('//rz-checkout-contact-info//input[@formcontrolname="surname"]/following-sibling::form-error') }
    get errorMessageName() { return $('//rz-checkout-contact-info//input[@formcontrolname="name"]/following-sibling::form-error') }
    get errorMessagePhone() { return $('//input[@id="checkoutUserPhone"]/following-sibling::form-error') }

    async fillContactInfo (surname, name, phone) {
        await $('//fieldset[@class="checkout-block checkout-block_no_border"]//input[@formcontrolname="surname"]').setValue(surname);
        await $('//fieldset[@class="checkout-block checkout-block_no_border"]//input[@formcontrolname="name"]').setValue(name);
        await $('[id="checkoutUserPhone"]').setValue(phone);
    }

    async submitCheckoutBtn() {
        await $('//input[@value="Замовлення підтверджую"]').click();
    }
}

module.exports = new CheckoutPage();
