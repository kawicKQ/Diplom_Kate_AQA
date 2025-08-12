import { test, chromium, expect, Browser } from "@playwright/test";
import { PageFactory } from "../factories/PageFactory";
import { MainPage } from "../pages/MainPage";

let browser: Browser;
let mainPage: MainPage;

test.beforeEach(async () => {
  browser = await chromium.launch({ headless: true });
  mainPage = await PageFactory.getMainPage(browser);
});

test.afterEach(async () => {
  await browser.close();
});

test.describe("Tests for Main page", () => {
  test("Should return to the Main page when clicking the logo", async () => {
    await mainPage.navigate();
    await mainPage.openMobile();
    await mainPage.returnToMainViaLogo();

    await expect(mainPage.page).toHaveURL(process.env.BASE_URL_UI || "");
  });

  test("should open tasks from header", async () => {
    await mainPage.navigate();
    await mainPage.clickTasks();

    await expect(mainPage.page).toHaveURL(/s\.onliner\.by\/tasks/);
    await expect(mainPage.page).toHaveTitle(/Заказы на услуги/);
  });

  test("should open people page", async () => {
    await mainPage.navigate();
    await mainPage.clickForum();

    await expect(mainPage.page).toHaveURL(/\/forum\.onliner\.by\//);
    await expect(mainPage.page).toHaveTitle("Форум onliner.by - Главная страница");
  });
});
