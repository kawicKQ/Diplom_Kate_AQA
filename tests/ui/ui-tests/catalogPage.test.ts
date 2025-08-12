import { test, expect, chromium, Browser } from "@playwright/test";
import { PageFactory } from "../factories/PageFactory";
import { CatalogPage } from "../pages/CatalogPage";

let browser: Browser;
let catalogPage: CatalogPage;

test.beforeEach(async () => {
  browser = await chromium.launch({ headless: true });
  catalogPage = await PageFactory.getCatalogPage(browser);
});

test.afterEach(async () => {
  await browser.close();
});

test.describe("Tests for Catalog page", () => {
  test("Should open selected category ", async () => {
    await catalogPage.navigate();
    await catalogPage.selectCategory("Электроника");

    const selectedCategoryHeader = catalogPage.getCategoryPageHeader();

    await expect(selectedCategoryHeader).toBeVisible();
    await expect(selectedCategoryHeader).toHaveText("Электроника");
  });

  test("Should open the selected subcategory", async () => {
    await catalogPage.navigate();
    await catalogPage.selectCategory("Электроника");
    await catalogPage.selectCategorySection("Видеоигры");

    const categorySectionHeader = catalogPage.getCategorySectionHeader();

    await expect(categorySectionHeader).toBeVisible();
    await expect(categorySectionHeader).toHaveText("Видеоигры");
    await expect(catalogPage.page).toHaveURL(/\/videoigry/);
  });

  test("should open product detail page when clicking on item name", async () => {
    await catalogPage.navigate();
    await catalogPage.selectCategory("Электроника");
    await catalogPage.selectPopularSection("Мобильные телефоны");
    await catalogPage.acceptCookies();
    await catalogPage.openSelectedItem("Телефон Xiaomi Redmi Note 14 Pro 8GB/256GB международная версия (фиолетовый)");

    const productTitle = catalogPage.getProductTitle();

    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText(
      "Телефон Xiaomi Redmi Note 14 Pro 8GB/256GB международная версия (фиолетовый)",
    );
    await expect(catalogPage.page).toHaveURL(/\/mobile\/xiaomi\/rnnote14p8256pr$/);
  });

  test("should open school discount page", async () => {
    await catalogPage.navigate();
    await catalogPage.clickschool();

    await expect(catalogPage.page).toHaveURL(/\/back-to-school/);
    await expect(catalogPage.page).toHaveTitle("Всё для школы — в Onlíner");
  });
});
