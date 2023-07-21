const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://userinyerface.com");

  await driver.findElement(By.className("start__link")).sendKeys(Key.RETURN);

  const randomEmail = generateRandomEmail(12);
  await testGenerateRandomPassword(driver, randomEmail);
  await testGenerateRandomEmail(driver);
  await testGenerateRandomDomain(driver);

  await driver.findElement(By.className("icon icon-check checkbox__check")).click();

  await driver.findElement(By.className("dropdown__field")).click();

  const options = await driver.findElements(By.className("dropdown__list-item"));
  await options[8].click();
  await driver.findElement(By.className("button--secondary")).click();



}

  function generateRandomPassword(length, email) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numerals = "0123456789";
    const cyrillicCharacters = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
  
    let password = "";
  
    
    const charset = uppercaseLetters + numerals + cyrillicCharacters+lowercaseLetters;
    for (let i = 0; i < length - 4; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    password += numerals.charAt(Math.floor(Math.random() * numerals.length));
  
    const randomEmailIndex = Math.floor(Math.random() * email.length);
    password += email.charAt(randomEmailIndex);
  
    password += cyrillicCharacters.charAt(Math.floor(Math.random() * cyrillicCharacters.length));
  
    return password;
  }
  
  

  function generateRandomEmail(length) {
    const validEmailChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const validDomainChars = "abcdefghijklmnopqrstuvwxyz";
    let email = "";
  
    // The email name should start with a letter
    const randomStartChar = validEmailChars.charAt(Math.floor(Math.random() * 26)); // 26 is the number of lowercase letters
    email += randomStartChar;
  
    // Generate the remaining characters for the email name
    for (let i = 1; i < length - 5; i++) {
      const randomIndex = Math.floor(Math.random() * validEmailChars.length);
      email += validEmailChars.charAt(randomIndex);
    }
  
    return email;
  }
  

function generateRandomDomain(length) {
    const domains = ["yahoo", "gmail","microsoftonline","a1qa"]; 
    const randomIndex = Math.floor(Math.random() * domains.length);
    return domains[randomIndex];
}

async function testGenerateRandomPassword(driver, email) {
    const randomPassword = generateRandomPassword(10, email);
  
    const passwordInput = await driver.findElement(By.xpath("//input[@placeholder='Choose Password']"));
  
    passwordInput.click();
    passwordInput.clear();
    await passwordInput.sendKeys(randomPassword);
  }
  

async function testGenerateRandomEmail(driver) {
  const randomEmail = generateRandomEmail(12);

  const emailInput = await driver.findElement(By.xpath("//input[@placeholder='Your email']"));

  emailInput.click();
  emailInput.clear();
  await emailInput.sendKeys(randomEmail);
  
}

async function testGenerateRandomDomain(driver) {
  const randomDomain = generateRandomDomain();

  const domainInput = await driver.findElement(By.xpath("//input[@placeholder='Domain']"));

  domainInput.click();
  domainInput.clear();
  await domainInput.sendKeys(randomDomain);
}

test_case();
