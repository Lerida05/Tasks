const {By, Key, Builder, WebDriver, until, assert} = require("selenium-webdriver");
require ("chromedriver");




async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://userinyerface.com");
    driver.manage().window().maximize();

    await driver.findElement(By.className("start__link")).sendKeys(Key.RETURN);

   

}
test_case();

 

