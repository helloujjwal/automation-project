import exp from "constants";
import { Locator, Page, expect } from "playwright/test";

    const pageURL = ("https://www.flipkart.com/");

    export class HomePage {
        readonly page: Page;
        readonly mobileLocator: Locator;
        readonly samsungHeading: Locator;
        readonly samsungPhoneLocator: Locator;
        readonly samsungPhoneTextLocator: Locator;
        readonly samsungPhoneRating: Locator;
        readonly samaungPhoneNewPrice: Locator;
        readonly samsungPhoneOldPrice: Locator;
        readonly discountOnSamsungPhone: Locator;
        readonly samsungviewAllButton: Locator;
        readonly allSamsungPhonesLocator: Locator;
        readonly appleHeadingLocator: Locator;
        readonly applePhoneLocator: Locator;
        readonly applePhoneTextLocator: Locator;
        readonly applePhoneRating: Locator;
        readonly applePhoneNewPrice: Locator;
        readonly applePhoneOldPrice: Locator;
        readonly discountOnApplePhone: Locator;
        readonly appleViewAllButton: Locator;
        readonly allApplePhoneLocator: Locator;


        

    constructor(page: Page){
        this.page = page;
        this.mobileLocator = page.locator("[class='_2GaeWJ'] [alt='Mobiles']")
        this.samsungHeading = page.locator("[data-tkid*='42OTAAY8KIGZ'] h2[class='_1DYSFX']");
        this.samsungPhoneLocator = page.locator("[class='_28_T72'] [alt*='(Stardust Silver, 256 GB)']");
        this.samsungPhoneTextLocator = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='s1Q9rs']")
        this.samsungPhoneRating = page.locator("[id*='MOBGPN55PEBUKZX2_']"); 
        this.samaungPhoneNewPrice = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='_30jeq3']");
        this.samsungPhoneOldPrice = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='_3I9_wc']");
        this.discountOnSamsungPhone = page.locator(" [data-tkid*='MOBGPN55PEBUKZX2'] [class='_3Ay6Sb']");
        this.samsungviewAllButton = page.locator("[data-tkid*='42OTAAY8KIGZ'] [class='_2KpZ6l _3dESVI']");
        this.allSamsungPhonesLocator = page.locator("[data-tracking-id='Samsung smartphones'] [class='_2hKRMr _2CfYpZ'] [class='_4ddWXP _3BCh3_']");
        this.appleHeadingLocator = page.locator("[data-tkid*='QBM1SMZJ3K19'] [class='_1DYSFX']");
        this.applePhoneLocator = page.locator("[data-tkid*='QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='CXW8mj']");
        this.applePhoneTextLocator = page.locator("[data-tkid*='QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='s1Q9rs']");
        this.applePhoneRating = page.locator("[id='productRating_LSTMOBG6VF5ADKHKXFXBT5ONJ_MOBG6VF5ADKHKXFX_']");
        this.applePhoneNewPrice = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_30jeq3']");
        this.applePhoneOldPrice = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_3I9_wc']");
        this.discountOnApplePhone = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_3Ay6Sb']");
        this.appleViewAllButton = page.locator("[data-tkid='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19'] [class='_2KpZ6l _3dESVI']");
        this.allApplePhoneLocator = page.locator("[data-tracking-id='Apple Smartphones'] [class='_28_T72']");


    }
    async navigateToUrl(){
        await this.page.goto(pageURL);
        await this.page.waitForLoadState();
    }
    async clickOnMobileTab(){
        await this.mobileLocator.click();
    }

    async verifyTitleHeadingOfSPhone(){
        await (this.samsungHeading).isVisible();
    }

    async verfiySamsungPhoneDeatails(){
        await (this.samsungPhoneLocator).isVisible();
        await (this.samsungPhoneTextLocator).isVisible();
        await (this.samsungPhoneRating).isVisible();
        await (this.samaungPhoneNewPrice).isVisible();
        await (this.samsungPhoneOldPrice).isVisible();
        await (this.discountOnSamsungPhone).isVisible();
        await (this.samsungviewAllButton).isVisible();
        const samsungPhones = await this.allSamsungPhonesLocator.count();

        for(let i =0; i< samsungPhones; i++)
        {
            await (this.allSamsungPhonesLocator.nth(i)).isVisible();
        }        
    }

    async verifyTitleHeadingOfApplePhone(){

        await (this.appleHeadingLocator).isVisible();
    }

    async verifyApplePhoneDetails(){
        await (this.applePhoneLocator).isVisible();
        await (this.applePhoneTextLocator).isVisible();
        await (this.applePhoneRating).nth(1).isVisible();
        await (this.applePhoneNewPrice).isVisible();
        await (this.applePhoneOldPrice).isVisible();
        await (this.discountOnApplePhone).isVisible();
        await (this.appleViewAllButton).isVisible();
        const applePhones = await this.allApplePhoneLocator.count();

        for(let i =0; i<applePhones; i++)
        {
            await (this.allApplePhoneLocator.nth(i)).isVisible();
        }
    }





}

