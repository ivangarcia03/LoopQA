import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitBtn: Locator;
    readonly webApplication: Locator;
    readonly mobileApplication: Locator;
    readonly toDoColumn: Locator;
    readonly inProgressColumn: Locator;
    readonly reviewColumn: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.submitBtn = page.locator('[type="submit"]');
        this.webApplication = page.locator('nav button:nth-of-type(1)');
        this.mobileApplication = page.locator('nav button:nth-of-type(2)');
        this.toDoColumn = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4');
        this.inProgressColumn = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').nth(1);
        this.reviewColumn = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').nth(2); 
    }

    // Navigate to the demo app
    async gotoUrl() {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }

    // Login 
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitBtn.click();
    }

    // Navigate to the "Web Application"
    async navigateToWebApplication() {
        await this.webApplication.click();
    }

    // Navigate to the "Mobile Application"
    async navigateToMobileApplication() {
        await this.mobileApplication.click();
    }

    // Verify a task exists in the "To Do" column
    async verifyTaskInTodoColumn(taskName: string) {
        const task = this.toDoColumn.locator('h3.font-medium.text-gray-900', { hasText: taskName });
        await expect(task).toBeVisible();
    }

    // Verify a task exists in the "In Progress" column
    async verifyTaskInInProgressColumn(taskName: string) {
        const task = this.inProgressColumn.locator('h3.font-medium.text-gray-900', { hasText: taskName });
        await expect(task).toBeVisible();
    }

    // Verify a task exists in the "Review" column
    async verifyTaskInReviewColumn(taskName: string) {
        const task = this.reviewColumn.locator('h3.font-medium.text-gray-900', { hasText: taskName });
        await expect(task).toBeVisible();
    }

    // Verify tags for a task in the "To Do" column
    async verifyTaskTagsInTodoColumn(taskName: string, tags: string[]) {
        const taskContainer = this.toDoColumn.locator('div.bg-white', { has: this.page.locator(`h3:has-text("${taskName}")`) });
        for (const tag of tags) {
            const tagElement = taskContainer.locator('span', { hasText: tag });
            await expect(tagElement).toBeVisible();
        }
    }

    // Verify tags for a task in the "In Progress" column
    async verifyTaskTagsInInProgressColumn(taskName: string, tags: string[]) {
        const taskContainer = this.inProgressColumn.locator('div.bg-white', { has: this.page.locator(`h3:has-text("${taskName}")`) });
        for (const tag of tags) {
            const tagElement = taskContainer.locator('span', { hasText: tag });
            await expect(tagElement).toBeVisible();
        }
    }

    // Verify tags for a task in the "Review" column
    async verifyTaskTagsInReviewColumn(taskName: string, tags: string[]) {
        const taskContainer = this.reviewColumn.locator('div.bg-white', { has: this.page.locator(`h3:has-text("${taskName}")`) });
        for (const tag of tags) {
            const tagElement = taskContainer.locator('span', { hasText: tag });
            await expect(tagElement).toBeVisible();
        }
    }
}