import { test,} from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
let homePage: HomePage;

test.describe('flipkart tests', () =>{
    test.beforeEach(async ({ page}) =>{
        homePage = new HomePage(page);
        await homePage.navigateToUrl();
        await homePage.clickOnMobileTab();
      })

    test('Title of Samsung Mobile', async ({ page }) =>{
      await homePage.verifyTitleHeadingOfSPhone();
    })

    test('Details of Samsung Phones', async ({ page }) =>{
      await homePage.verfiySamsungPhoneDeatails();
    })

    test('Tile of Apple Heading', async ({ page }) =>{
      await homePage.verifyTitleHeadingOfApplePhone();
    })

    test('Details of Apple Phones', async ({ page }) =>{
      await homePage.verifyApplePhoneDetails();
    })
});
