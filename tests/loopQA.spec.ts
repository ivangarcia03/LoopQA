import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page'; 

test.beforeEach('Login to Demo App', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the demo app
    await loginPage.gotoUrl();

    // Login 
    await loginPage.login('admin', 'password123');
});

/*
Test Case 1
Login to Demo App.
Navigate to "Web Application."
Verify "Implement user authentication" is in the "To Do" column.
Confirm tags: "Feature" "High Priority”
*/

test('Test Case 1', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToWebApplication();
    await loginPage.verifyTaskInTodoColumn('Implement user authentication');
    await loginPage.verifyTaskTagsInTodoColumn('Implement user authentication', ['Feature', 'High Priority']);
});

// Test Case 2
test('Test Case 2', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 2: Navigate to "Web Application"
    await loginPage.navigateToWebApplication();

    // Step 3: Verify the task "Fix navigation bug" is in the "To Do" column
    await loginPage.verifyTaskInTodoColumn('Fix navigation bug');

    // Step 4: Verify the tags for the task
    await loginPage.verifyTaskTagsInTodoColumn('Fix navigation bug', ['Bug']);
});

/* 
Test Case 3
Login to Demo App.
Navigate to "Web Application."
Verify "Design system updates" is in the "In Progress" column.
Confirm tags: "Design”

*/
test('Test Case 3', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToWebApplication();
    await loginPage.verifyTaskInInProgressColumn('Design system updates');
    await loginPage.verifyTaskTagsInInProgressColumn('Design system updates', ['Design']);
});

// Test Case 4
/*
Login to Demo App.
Navigate to "Mobile Application."
Verify "Push notification system" is in the "To Do" column.
Confirm tags: "Feature”
*/
test('Test Case 4', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToMobileApplication();
    await loginPage.verifyTaskInTodoColumn('Push notification system');
    await loginPage.verifyTaskTagsInTodoColumn('Push notification system', ['Feature']);
});

/*
Test Case 5
Login to Demo App.
Navigate to "Mobile Application."
Verify "Offline mode" is in the "In Progress" column.
Confirm tags: "Feature" & "High Priority”
*/

test('Test Case 5', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToMobileApplication();
    await loginPage.verifyTaskInInProgressColumn('Offline mode');
    await loginPage.verifyTaskTagsInInProgressColumn('Offline mode', ['Feature', 'High Priority']);
});

// Test Case 6
/*
Login to Demo App.
Navigate to "Mobile Application."
Verify "App icon design" is in the "Done" column.
Confirm tags: "Design”

*/
test('Test Case 6', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToWebApplication();
    await loginPage.verifyTaskInReviewColumn('API integration');
    await loginPage.verifyTaskTagsInReviewColumn('API integration', ['Feature', 'High Priority']);
});