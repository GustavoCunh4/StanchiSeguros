import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE_URL = 'http://127.0.0.1:4173';

test('Página inicial atende critérios básicos de acessibilidade', async ({ page }) => {
  await page.goto(BASE_URL);

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
