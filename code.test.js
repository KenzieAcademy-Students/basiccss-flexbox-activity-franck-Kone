require('expect');
require('chromedriver');
const { Console } = require('console');
const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');


// This is the URL that each test will start in
// It can easily be changed to any URL.
const baseURL = 'file://' + __dirname + '/';
const file = 'index.html'

//timeout threshold 
const defaultTimeout = 20000;
let driver;

// Three simple functions to ease DOM navigation
const getElementByName = async (name, timeout = defaultTimeout) => {
    return driver.wait(until.elementLocated(By.name(name)), timeout);
};

const getElementById = async (id, timeout = defaultTimeout) => {
    let element = await driver.wait(until.elementLocated(By.id(id)), timeout);
    return driver.wait(until.elementIsVisible(element));
};

const getElementByTag = async (tag, timeout = defaultTimeout) => {
    return driver.wait(until.elementLocated(By.css(tag)), timeout);
};

// Start up a new browser session before each test and go to a specific url
beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(baseURL + file);
}, defaultTimeout);


// Make sure the browser session exits after each test finishes.
afterEach(async () => {
    await driver.quit();
}, defaultTimeout);


//TESTS for .cardGroup CSS selector
describe('Test CSS Style correct for .cardGroup CSS selector', () => {
    test('The CSS Style for Display is incorrect for the CSS Class .cardGroup, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardGroup')).getCssValue("display");

        expect(element).toBe("flex");
    });
});

//TESTS for .card CSS selector
describe('Test CSS Style correct for .card CSS selector', () => {
    test('The CSS Style for Display is incorrect for the CSS Class .card, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('card')).getCssValue("flex-basis");

        expect(element).toBe("0");
    });

    test('The CSS Style for Display is incorrect for the CSS Class .card, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('card')).getCssValue("flex-grow");

        expect(element).toBe("1");
    });

    test('The CSS Style for Display is incorrect for the CSS Class .card, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('card')).getCssValue("display");

        expect(element).toBe("flex");
    });
    
    test('The CSS Style for Display is incorrect for the CSS Class .card, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('card')).getCssValue("flex-direction");

        expect(element).toBe("column");
    });
});

//TESTS for .cardDescription CSS selector
describe('Test CSS Style correct for .cardDescription CSS selector', () => {
    test('The CSS Style for Display is incorrect for the CSS Class .cardDescription, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardDescription')).getCssValue("flex-grow");

        expect(element).toBe("1");
    });

    test('The CSS Style for Display is incorrect for the CSS Class .cardDescription, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardDescription')).getCssValue("display");

        expect(element).toBe("flex");
    });
    
    test('The CSS Style for Display is incorrect for the CSS Class .cardDescription, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardDescription')).getCssValue("flex-direction");

        expect(element).toBe("column");
    });

    test('The CSS Style for Display is incorrect for the CSS Class .cardDescription, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardDescription')).getCssValue("justify-content");

        expect(element).toBe("center");
    });

    test('The CSS Style for Display is incorrect for the CSS Class .cardDescription, please ensure you are using the display CSS property correctly under the correct CSS identifier in style.css', async () => {
        let element = await driver.findElement(By.className('cardDescription')).getCssValue("align-items");

        expect(element).toBe("center");
    });

});
