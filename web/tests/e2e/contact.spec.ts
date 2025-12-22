import { test, expect } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:4173';

test.describe('Página principal', () => {
  test('abre o formulário de contato e permite preencher', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByRole('heading', { name: /entre em contato/i })).toBeVisible();

    await page.getByLabel('Nome completo').first().fill('Maria da Silva');
    await page.getByLabel('E-mail').first().fill('maria@example.com');
    await page.getByLabel('WhatsApp').first().fill('(71) 99999-0000');
    await page.getByLabel('Tipo de plano').first().selectOption({ label: 'Plano Familiar' });
    await page.getByLabel('Observações (opcional)').first().fill('Teste automatizado.');
    await page.getByRole('checkbox', { name: /concordo com o tratamento dos meus dados/i }).first().check();
    await expect(
      page.getByRole('button', {
        name: /falar com especialista agora|enviar mensagem/i,
      }),
    ).toBeVisible();
  });
});
