import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class HousesPage {
  readonly page: Page;
  readonly rent: Locator;
  readonly flat: Locator;
  readonly flatowner: Locator;
  readonly makeadv: Locator;
  readonly loginbtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rent = page.locator(".project-navigation__item").nth(1);
    this.flat = page.locator(".classified").nth(1);
    this.flatowner = page.locator(".arenda-popover__control btn-flat btn-flat_full-width");
    this.makeadv = page.locator(".project-navigation__button");
    this.loginbtn = page.locator(".auth-button auth-button_primary");
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL_HOUSES || "");
  }

  async clickRent() {
    await this.rent.click();
  }

  async clickFirstFlat() {
    await this.flat.click();
  }
  async clicknewadv() {
    await this.makeadv.click();
  }
}
