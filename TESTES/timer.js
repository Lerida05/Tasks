const {By, Key, Builder, WebDriver, until, assert} = require("selenium-webdriver");
require ("chromedriver");

 //This code shows elapsed time (in milliseconds) in terminal of VS 

 
async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://userinyerface.com");
  driver.manage().window().maximize();

  const startTime = new Date().getTime();

  await driver.findElement(By.className("start__link")).sendKeys(Key.RETURN);
  await driver.findElement(By.className("timer timer--white timer--center")).getTime;

  const endTime = new Date().getTime();
  const elapsedTimeMilliseconds = endTime - startTime;
  const elapsedTimeSeconds = elapsedTimeMilliseconds; 
  console.log("Elapsed Time (in milliseconds):", elapsedTimeSeconds);

  //await driver.quit();
  
}
test_case();