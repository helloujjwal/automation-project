import { Locator, Page, expect } from "playwright/test";

    const pageURL = ("https://www.flipkart.com/")

    export class HomePage{
        readonly page:  Page;
        readonly flipkartIconLocator: Locator;
        readonly flipkartSearchBarLocator: Locator;
        readonly flipkartSearchMagnifierLocator: Locator;
        readonly flipkartSearchBarTextLocator: Locator;
        readonly flipkartLoginButtonLocator: Locator;
        readonly flipkartLoginDropDownButtonLocator: Locator; 
        readonly cartLogoLocator: Locator;
        readonly cartTextLocator: Locator;
        readonly becomeSellerIconLocator: Locator;
        readonly becomesellerTextLocator: Locator;
        readonly verticalDotLocator: Locator;
        readonly categoriesLocator: Locator;
        readonly categoriesTopicsLocator: Locator;
        readonly electronicsTabLocator: Locator;
        readonly rightNextButtonLocator: Locator;
        readonly leftNextButtonLocator: Locator;
        readonly bestDealPhoneHeadingLocator: Locator;
        readonly bestDealViewAllButtonLocator: Locator;
        readonly bestDealIteamsLocator: Locator;
        readonly featuredBrandHeadingLocator: Locator;
        readonly featuredIteamsLocator: Locator;
        readonly smartGadgetsHeadingLocator: Locator;
        readonly smartGadgetViewAllLocator: Locator;
        readonly smartGadgetIteamsLocator: Locator;
        readonly bestGiftinCollectionLocator: Locator;
        readonly bestGiftViewAllButtonLocator: Locator;
        readonly bestGiftIeamsLocator: Locator;
        readonly recentlyViewedHeadingLocator: Locator;
        readonly recentlyViewedViewAllButtonLocator: Locator;
        





    constructor(page: Page){
        this.page = page;
        this.flipkartIconLocator = page.locator("[class='YLCOuy']");
        this.flipkartSearchBarLocator = page.locator("[class='_3NorZ0 _3jeYYh']");
        this.flipkartSearchMagnifierLocator = page.locator("[class='_3NorZ0 _3jeYYh'] [class='_2iLD__']");
        this.flipkartSearchBarTextLocator = page.locator("[class='_2SmNnR'] [name='q']");
        this.flipkartLoginButtonLocator = page.locator("[class='_1Us3XD'] [title='Login']");
        this.flipkartLoginDropDownButtonLocator = page.locator("[class='_1Us3XD'] [class='-dOa_b XdYXbi']");
        this.cartLogoLocator = page.locator("[class='_3RX0a-']")
        this.cartTextLocator = page.locator("[title='Cart']", {hasText: 'Cart'});
        this.becomeSellerIconLocator = page.locator("[class='_2msBFL'] [class='_3RX0a- _3jeYYh']");
        this.becomesellerTextLocator = page.locator("[class='_2msBFL'] [title='Become a Seller']", {hasText: 'Become a Seller'});
        this.verticalDotLocator = page.locator("[class='H6-NpN'] [title='Dropdown with more help links']");
        this.categoriesLocator = page.locator("[id='container'] [class='_1yQHx8 _2UnIQ_ _3ak8Rd _2y8Yzt'] [class='_3sdu8W emupdz']");
        this.categoriesTopicsLocator = page.locator("[class='_3sdu8W emupdz'] [class='YBLJE4']");
        this.electronicsTabLocator = page.locator("[aria-label='Electronics']");
        this.bestDealPhoneHeadingLocator = page.locator("[class='_1yQHx8 _2UnIQ_ _3ak8Rd _1kAmyc'] [class='_58bkzq7s _3n8fnaug _3n8fnamv _3n8fnaf9 _3n8fna1 _3n8fna7n _58bkzqn _1i2djtb9 _1i2djt0']");
        this.bestDealViewAllButtonLocator = page.locator("[class='_1yQHx8 _2UnIQ_ _3ak8Rd _1kAmyc'] [class*='_1i2djtg0']");
        this.bestDealIteamsLocator = page.locator("[class='_1yQHx8 _2UnIQ_ _3ak8Rd _1kAmyc'] [class='css-175oi2r']");
        this.featuredBrandHeadingLocator = page.locator("[class='_1yQHx8 _2UnIQ_ _3ak8Rd _2y8Yzt'] [class*='_58bkzq62 _3n8fnaug _3n8fnamv _3n8fnaf9 _3n8fna1 _3n8fna7n _58bkzqh']");
        this.featuredIteamsLocator = page.locator("[class='css-175oi2r'] [class='tLbyDf'] [class='zlQd20 ']");
        this.smartGadgetsHeadingLocator = page.getByRole('link', { name: 'Smart Gadgets' });
        this.smartGadgetViewAllLocator = page.locator("[data-observerid-bd15a11e-ce2a-4007-8ee6-2e074d2dd3d7='f89f38fe-b074-4182-8254-ab2d4ee2092a'] [class*=' _3n8fna1 _3n8fna7n _1i2djtb9 _1i2djt0 _9nihix7c']");
        this.smartGadgetIteamsLocator = page.locator("[class='_3n8fnaug _3n8fnars _3n8fnak6 _3n8fna4y _3n8fnack _1i2djtb9 _1i2djtk9 _1i2djti0 _1i2djt9f _1i2djt76 _1i2djtdi _1i2djtfr _1i2djt2o _1i2djt4x'] [class='_25HC_u']");
        this.bestGiftinCollectionLocator = page.locator("[class='css-175oi2r r-13awgt0 r-eqz5dr'] [class='_58bkzq8b _3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _58bkzqo _1i2djtb9 _1i2djt0']", {hasText: 'Best Gifting Collection'});
        this.bestGiftViewAllButtonLocator = page.locator("[class='_3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _1i2djtb9 _1i2djt0 _1i2djt9x _1i2djt7o _1i2djt36 _1i2djt5f'] [class='_3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _1i2djtb9 _1i2djt0 _9nihix7u']");
        this.bestGiftIeamsLocator = page.locator("[class='css-175oi2r'] [class='grid-formation grid-column-2']");
        this.recentlyViewedHeadingLocator = page.locator("[class='_3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _1i2djtb9 _1i2djt0'] [class='_58bkzq63 _3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _58bkzqi _1i2djtb9 _1i2djt0']")
        this.recentlyViewedViewAllButtonLocator = page.locator("[class='_3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _1i2djtb9 _1i2djt0 _1i2djt9x _1i2djt7o _1i2djt36 _1i2djt5f'] [class='_3n8fnawg _3n8fnaod _3n8fnag9 _3n8fna1 _3n8fna85 _1i2djtb9 _1i2djt0 _9nihix7u']");
        this.rightNextButtonLocator = page.locator("[class='_5GBmrW']");
        this.leftNextButtonLocator = page.locator("[class='_1JY_i0']");


    }

    async navigateToUrl(){
        await this.page.goto(pageURL);
        await this.page.waitForLoadState();
    }

    async verfiyFlipkartIcon(){
        await expect(this.flipkartIconLocator).toBeVisible();
    }

    async verifySearchBar(){
        await expect(this.flipkartSearchBarLocator).toBeVisible();
        await expect(this.flipkartSearchBarTextLocator).toBeVisible();  
        await expect(this.flipkartSearchMagnifierLocator).toBeVisible();
    }

    async verifyLoginButton(){
        await expect(this.flipkartLoginButtonLocator).toBeVisible();
        await expect(this.flipkartLoginDropDownButtonLocator).toBeVisible();
    }

    async verifyCartButton(){
        await expect(this.cartLogoLocator).toBeVisible();
        await expect(this.cartTextLocator).toHaveText('Cart');
    }

    async verifyBecomeASellerSection(){
        await expect(this.becomeSellerIconLocator).toBeVisible();
        await expect(this.becomesellerTextLocator).toHaveText('Become a Seller');
    }

    async verifyVerticalDots(){
        await expect(this.verticalDotLocator).toBeVisible();
    }

    async verifyCategoriesHeading(){
        await this.categoriesLocator.isVisible(); 
        const allTopics = await this.categoriesTopicsLocator.count();

        for(let i =0; i<allTopics; i++)
        {
            await expect(this.categoriesTopicsLocator.nth(i)).toBeVisible();
        }
    }

    async verifyElectronicsItems(){
        await this.electronicsTabLocator.hover();        
    }

    async verifyBannerNextButton(){
        await expect(this.rightNextButtonLocator).toBeVisible();
        await expect(this.leftNextButtonLocator).toBeVisible();    
    }

    async verifyBestDealSection(){
        await (this.bestDealPhoneHeadingLocator).isVisible();
        await (this.bestDealViewAllButtonLocator).isVisible();
        const iteamsOfBestDeal = await this.bestDealIteamsLocator.count();

        for(let i=0; i<iteamsOfBestDeal; i++)
        {
            await expect(this.bestDealIteamsLocator.nth(i)).toBeVisible();
        }       
    }

    async verifyFeaturedBrandSection(){
        await (this.featuredBrandHeadingLocator).nth(0).isVisible();
        const allFeaturedIteams = await (this.featuredIteamsLocator).nth(0).count();
        for(let i=0; i<allFeaturedIteams; i++)
        {
            await (this.featuredIteamsLocator.nth(i)).nth(0).isVisible();
        }
    }

    async verifySmartGadgetsSection(){
        await (this.smartGadgetsHeadingLocator).isVisible();
        await (this.smartGadgetViewAllLocator).isVisible();
    }

    async verifyBestGiftingCollectionSection(){
        await this.bestGiftinCollectionLocator.isVisible();
        await (this.bestGiftViewAllButtonLocator).nth(2).isVisible();
        await (this.bestGiftIeamsLocator).nth(0).isVisible();
    }

    async verfiyRecentlyViewedSection(){
        await (this.recentlyViewedHeadingLocator).nth(4).isVisible();
        await (this.recentlyViewedViewAllButtonLocator).nth(7).isVisible();
    }



















    }