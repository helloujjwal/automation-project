import { test } from '@playwright/test';
import { MobilePage } from '../pageObjects/mobilePage';
let mobilePage: MobilePage

test.describe('flipkart mobile tests', () =>{
    test.beforeEach(async ({ page}) =>{
        mobilePage = new MobilePage(page);
        await mobilePage.navigateToUrl();
        await mobilePage.clickOnMobileTab();
      })

    test('Title of Samsung Mobile', async ({ page }) =>{
      await mobilePage.verifyTitleHeadingOfSPhone();
    })

    test('Details of Samsung Phones', async ({ page }) =>{
      await mobilePage.verfiySamsungPhoneDeatails();
    })

    test('Tile of Apple Heading', async ({ page }) =>{
      await mobilePage.verifyTitleHeadingOfApplePhone();
    })

    test('Details of Apple Phones', async ({ page }) =>{
      await mobilePage.verifyApplePhoneDetails();
    })

});
