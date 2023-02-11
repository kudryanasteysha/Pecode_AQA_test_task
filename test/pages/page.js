module.exports = class Page {
    open (path) {
        return browser.url(`https://rozetka.com.ua/ua/${path}`)
    }
}
