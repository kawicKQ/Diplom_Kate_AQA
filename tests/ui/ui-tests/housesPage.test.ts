import { test, expect, chromium, Browser } from "@playwright/test";
import { PageFactory } from "../factories/PageFactory";
import { HousesPage } from "../pages/HousesPage";

let browser: Browser;
let housesPage: HousesPage;

test.beforeEach(async () => {
  browser = await chromium.launch({ headless: true });
  housesPage = await PageFactory.getHousesPage(browser);
});

test.afterEach(async () => {
  await browser.close();
});

test.describe("Tests for Houses page", () => {
  test("Should navigate to rent tab ", async () => {
    await housesPage.navigate();
    await housesPage.clickRent();

    await expect(housesPage.page).toHaveURL(/r\.onliner\.by\/ak/);
    await expect(housesPage.page).toHaveTitle("Снять квартиру, аренда жилья в Минске");
  });

  test("Should navigate to 1st flat in the list ", async () => {
    await housesPage.navigate();
    await housesPage.clickFirstFlat();

    await expect(housesPage.page).toHaveURL(/\/apartments/);
    await expect(housesPage.flatowner).toBeVisible;
  });

  test("Should redirect to login page for adding new advertisement", async () => {
    await housesPage.navigate();
    await housesPage.clicknewadv();

    await expect(housesPage.page).toHaveURL(/\/login/);
    await expect(housesPage.page).toHaveTitle("Профиль");
    await expect(housesPage.loginbtn).toBeVisible;
  });
});
