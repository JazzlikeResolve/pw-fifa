import { test, expect } from '@playwright/test';
import { url } from 'inspector';
import { title } from 'process';
import { text } from 'stream/consumers';

test('Open webpage and verify title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en');

  const cookieButton = page.locator('#onetrust-accept-btn-handler');
  await cookieButton.click();

  const popUpCloseButton = page.locator('.pop-up_closeIcon__etsqq');
  if (await popUpCloseButton.isVisible()) {
    await popUpCloseButton.click();
    console.log('Button was clicked successfully');
  } else {
    console.log('the button was not clicked');
  }

  await expect(page).toHaveTitle('FIFA | The Home of Football');
  console.log('Title Assertion has Passed');
});

test('Verify if this logo is visible', async ({ page }) => {
  await page.goto('https://www.fifa.com/en');
  const pageLogo = page.locator("img[title='FIFA']");
  await expect(pageLogo).toBeVisible();
  await expect(pageLogo).toHaveAttribute('title', 'FIFA');
  await page.waitForTimeout(3000);
});

test('Verify if headings on the page are visible', async ({ page }) => {
  const expectedLinks: string[] = [
    'OVERVIEW',
    'FIFA WORLD CUP 26™',
    "FIFA WOMEN'S WORLD CUP 2027™",
    'FIFA U-17 WORLD CUP 2025',
    'THE BEST FIFA FOOTBALL AWARDS™ 2025',
    "FIFA FUTSAL WOMEN'S WORLD CUP 2025",
    'FIFA ARAB CUP 2025™',
    'MATCH CENTRE',
    'NEWS',
    'RANKINGS',
    '',
    'HOME',
    'FIFA WORLD CUP 26™ QUALIFIERS',
    'LIVE',
    'ORIGINALS',
    'ARCHIVE',
    '',
    'PAIRS',
    'GLOBAL GOALSCORER',
    'WHO AM I?',
    'FIVES',
    'TRIVIA',
    'SUPER LEAGUE SOCCER',
    'FIFA RIVALS',
    'MORE GAMES',
    'FIFA STORE',
    'TICKETS & HOSPITALITY',
    'FIFA COLLECT',
    'OVERVIEW',
    'STRATEGIC OBJECTIVES: 2023–2027',
    'WHAT FIFA DOES',
    'ORGANISATION',
    'CAMPAIGNS',
    'MEMBER ASSOCIATIONS',
    'REPORTS & DOCUMENTS',
    'FIFA RANKINGS',
  ];

  await page.goto('https://www.fifa.com/en');

  const navLinks = page.locator('#mainLinksID a');

  await page.waitForTimeout(3000);

  const actualLinks = await navLinks.allInnerTexts();
  console.log(actualLinks);

  // Normalize both arrays before comparing
  const normalize = (s: string) =>
    s
      .replace(/\u00A0/g, ' ') // replace non-breaking spaces with normal spaces
      .replace(/\u2019/g, "'") // replace curly apostrophe with straight apostrophe
      .trim();

  expect(actualLinks.map(normalize)).toEqual(expectedLinks.map(normalize));
});
