import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class CatalogPage {
  readonly page: Page;
  readonly categoryLink: Locator;
  readonly categorySectionsLink: Locator;
  readonly popularSectionsLink: Locator;
  readonly selectedItem: Locator;
  readonly schoolpage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryLink = page.locator(".catalog-navigation-classifier__item");
    this.categorySectionsLink = page.locator(".catalog-navigation-list__aside-title");
    this.popularSectionsLink = page.locator(".catalog-navigation-list__popular-title");
    this.selectedItem = page.locator(".catalog-form__link_primary-additional");
    this.schoolpage = page.locator(".catalog-navigation__tag-item").nth(0);
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL_CATALOG || "");
  }

  async selectCategory(name: string) {
    await this.categoryLink.filter({ hasText: name }).first().click();
  }

  getCategoryPageHeader() {
    return this.page.locator("div.catalog-navigation-list__aside-title");
  }

  async selectCategorySection(name: string) {
    await this.categorySectionsLink.filter({ hasText: name }).first().click();
  }

  getCategorySectionHeader() {
    return this.page.locator("h1.catalog-form__title");
  }

  async selectPopularSection(name: string) {
    await this.popularSectionsLink.filter({ hasText: name }).first().click();
  }

  async openSelectedItem(name: string) {
    await this.selectedItem.filter({ hasText: name }).first().click();
  }

  getProductTitle() {
    return this.page.locator("h1.catalog-masthead__title");
  }

  async acceptCookies() {
    const cookieBanner = this.page.locator("#submit-button");
    if (await cookieBanner.isVisible()) {
      await cookieBanner.click();
    }
  }
  async clickschool() {
    await this.schoolpage.click();
  }
}
