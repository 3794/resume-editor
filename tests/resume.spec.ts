import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test.describe('Resume', () => {
  test('should edit basic infomation', async ({ page }) => {
    await page.locator('input[name="basics\\.name"]').fill('John Doe')
    await page.locator('input[name="basics\\.label"]').fill('Programmer')
    await page.locator('input[name="basics\\.image"]').fill('')
    await page.locator('input[name="basics\\.email"]').fill('john@gmail.com')
    await page.locator('input[name="basics\\.phone"]').fill('(912) 555-4321')
    await page.locator('input[name="basics\\.summary"]').fill('A summary of John Doe...')
  })

  test('should delete and add work componenet', async ({ page }) => {
    const loc = page.locator('input[name="work\\.0\\.name"]')
    await expect(loc).toBeVisible()
    await page.locator('[aria-label="remove work"]').click()
    await expect(loc).not.toBeVisible()
    await page.locator('[aria-label="append work"]').click()
    await expect(loc).toBeVisible()
  })

  test('should download PDF', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('text=Download PDF').click()
    ])

    // TODO
    expect(download).toBe(download)
  })
})
