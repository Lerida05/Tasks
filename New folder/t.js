const { Builder, Chrome } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testWebDriverExecution() {
  // Set the path to the WebDriver executable using ChromeOptions
  const options = new chrome.Options().setChromeBinaryPath('Program Files\\Google\\Chrome\\Application\\chrome.exe');

  const service = new chrome.ServiceBuilder('Program Files\\Google\\Chrome\\Application\\chromedriver.exe').build();
  const driver = new Builder().forBrowser('chrome').setChromeOptions(options).setChromeService(service).build();

  // Perform some actions with the WebDriver

  // Close the browser
  await driver.quit();
}

testWebDriverExecution();
