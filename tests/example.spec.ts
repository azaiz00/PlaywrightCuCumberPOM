// import { test, expect,Page } from '@playwright/test';

// test.only('has title', async ({ page, context }) => {
//   await page.goto('http://zero.webappsecurity.com/index.html');

//   const newPage : Page = await context.newPage()
//   newPage.goto("http://zero.webappsecurity.com/feedback.html")
//   const allPages = await context.pages()
//   //page = allPages[allPages.length - 1]
//   page = allPages[0]
//   await page.bringToFront()
//   await page.pause()

// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
