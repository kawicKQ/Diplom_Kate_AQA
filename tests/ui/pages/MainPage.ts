import { Page, Locator, FrameLocator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class MainPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly mobilephonepage: Locator;
  readonly forum: Locator;
  readonly tasksLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator(".onliner_logo");
    this.mobilephonepage = page.locator(".project-navigation__sign").nth(2);
    this.forum = page.locator(".b-main-navigation__item:nth-of-type(7)");
    this.tasksLink = page.locator(".b-main-navigation__item:nth-of-type(5)");
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL_UI || "");
  }

  async returnToMainViaLogo() {
    await this.logo.click();
    await this.page.waitForURL(process.env.BASE_URL_UI || "");
  }

  async openMobile() {
    await this.mobilephonepage.click();
  }

  async clickTasks() {
    await this.tasksLink.click();
  }
  async clickForum() {
    await this.forum.click();
  }
}
