const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = browser.newPage();
  (await page).goto("http://localhost:8080/main.html");
  const imgs = (await page).$$("a");
  console.log(imgs);
})();
