import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('이력서', () => {
  test('기본정보를 작성할 수 있다', async ({ page }) => {
    await page.locator('[placeholder="이름"]').fill('홍길동');
    await page.locator('[placeholder="이메일"]').fill('hong@amail.com');
    await page.locator('[placeholder="연락처"]').fill('010-0000-0000');
    await page.locator('[placeholder="블로그\\/웹사이트"]').fill('https://github.com/0000');
    await page.locator('textarea[name="description"]').fill('안녕하세요. 개발자입니다.');
  });

  test('경력 컴포넌트를 삭제하고 추가할 수 있다', async ({ page }) => {
    const loc = page.locator('[placeholder="회사명"]')
    await expect(loc).toBeVisible();

    // 삭제
    await page.locator('text=X').first().click();
    await expect(loc).not.toBeVisible();
    
    // 추가
    await page.locator('text=+').first().click();
    await expect(loc).toBeVisible();
  })

  test('경력을 작성할 수 있다', async ({ page }) => {
    await page.locator('[placeholder="회사명"]').fill('좋은회사1');
    await page.locator('[placeholder="직무"]').fill('직무1');
    await page.locator('input[name="job\\.0\\.period"]').fill('2020.10 ~ 2021.10');
    await page.locator('textarea[name="job\\.0\\.description"]').fill('여러업무를 진행함.');
  });

  test('경력 컴포넌트를 추가해서 작성할 수 있다', async ({ page }) => {
    await page.locator('text=+').first().click();

    await page.locator('input[name="job\\.1\\.company"]').fill('좋은회사2');
    await page.locator('input[name="job\\.1\\.role"]').fill('직무2');
    await page.locator('input[name="job\\.1\\.period"]').fill('2020.01 ~ 2020.09');
    await page.locator('textarea[name="job\\.1\\.description"]').fill('여러업무2.');
  });

  test('PDF 다운로드', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('text=PDF 다운로드').click()
    ]);
  })
});
