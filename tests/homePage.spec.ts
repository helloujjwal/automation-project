import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
let homePage: HomePage

    test.describe('flipkart homePage tests', () =>{ 
        test.beforeEach(async ({ page }) =>{
            homePage = new HomePage(page);
            await homePage.navigateToUrl();
        })
        
        test('Flipkart Icon on Top Home Page', async ({ page }) =>{
            await homePage.verfiyFlipkartIcon();
        })

        test('Flipkart Search Bar Section Home Page', async ({ page }) =>{
            await homePage.verifySearchBar();
        })

        test('Flipkart Login Button', async ({ page }) =>{
            await homePage.verifyLoginButton();
        })

        test('Cart Button Section', async ({ page }) =>{
            await homePage.verifyCartButton();
        })

        test('Become A Seller Section Home Page', async ({ page }) =>{
            await homePage.verifyBecomeASellerSection();
        })

        test('Three Vertical Dots Home Page', async ({ page }) =>{
            await homePage.verifyVerticalDots();
        })

        test('All Categories of Flipkart Home Page', async ({ page }) =>{
            await homePage.verifyCategoriesHeading();
        })

        test('Electronic Heading Home Page', async ({ page }) =>{
            await homePage.verifyElectronicsItems();        
        })

        test('Banner Left and RIght Next Button Home Page', async ({ page }) =>{
            await homePage.verifyBannerNextButton();
        })

        test('Best Deal for Mobile Section Home Page', async ({ page }) =>{
            await homePage.verifyBestDealSection();
        })

        test('Featured Brand Section Home Page', async ({ page }) =>{
            await homePage.verifyFeaturedBrandSection();
        })

        test('All Smart Gadgets Section Home Page', async ({ page }) =>{
            await homePage.verifySmartGadgetsSection();
        })

        test('Best Gifting Collection Home Page', async ({ page }) =>{
            await homePage.verifyBestGiftingCollectionSection();
        })

        test('Recently Viewed Section Home Page', async ({ page }) =>{
            await homePage.verfiyRecentlyViewedSection();
        })

        


})