import exp from "constants";
import { Locator, Page, expect } from "playwright/test";

    const pageURL = ("https://www.flipkart.com/");

    export class MobilePage {
        readonly page: Page;
        readonly mobileLocator: Locator;
        readonly samsungHeadingLocator: Locator;
        readonly samsungPhoneLocator: Locator;
        readonly samsungPhoneTextLocator: Locator;
        readonly samsungPhoneRatingLocator: Locator;
        readonly samaungPhoneNewPriceLocator: Locator;
        readonly samsungPhoneOldPriceLocator: Locator;
        readonly discountOnSamsungPhoneLocator: Locator;
        readonly samsungviewAllButtonLocator: Locator;
        readonly allSamsungPhonesLocator: Locator;
        readonly appleHeadingLocator: Locator;
        readonly applePhoneLocator: Locator;
        readonly applePhoneTextLocator: Locator;
        readonly applePhoneRatingLocator: Locator;
        readonly applePhoneNewPriceLocator: Locator;
        readonly applePhoneOldPriceLocator: Locator;
        readonly discountOnApplePhoneLocator: Locator;
        readonly appleViewAllButtonLocator: Locator;
        readonly allApplePhoneLocator: Locator;


        

    constructor(page: Page){
        this.page = page;
        this.mobileLocator = page.locator("[class='_2GaeWJ'] [alt='Mobiles']")
        this.samsungHeadingLocator = page.locator("[data-tkid*='42OTAAY8KIGZ'] h2[class='_1DYSFX']");
        this.samsungPhoneLocator = page.locator("[class='_28_T72'] [alt*='(Stardust Silver, 256 GB)']");
        this.samsungPhoneTextLocator = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='s1Q9rs']")
        this.samsungPhoneRatingLocator = page.locator("[id*='MOBGPN55PEBUKZX2_']"); 
        this.samaungPhoneNewPriceLocator = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='_30jeq3']");
        this.samsungPhoneOldPriceLocator = page.locator("[data-tkid*='MOBGPN55PEBUKZX2'] [class='_3I9_wc']");
        this.discountOnSamsungPhoneLocator = page.locator(" [data-tkid*='MOBGPN55PEBUKZX2'] [class='_3Ay6Sb']");
        this.samsungviewAllButtonLocator = page.locator("[data-tkid*='42OTAAY8KIGZ'] [class='_2KpZ6l _3dESVI']");
        this.allSamsungPhonesLocator = page.locator("[data-tracking-id='Samsung smartphones'] [class='_2hKRMr _2CfYpZ'] [class='_4ddWXP _3BCh3_']");
        this.appleHeadingLocator = page.locator("[data-tkid*='QBM1SMZJ3K19'] [class='_1DYSFX']");
        this.applePhoneLocator = page.locator("[data-tkid*='QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='CXW8mj']");
        this.applePhoneTextLocator = page.locator("[data-tkid*='QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='s1Q9rs']");
        this.applePhoneRatingLocator = page.locator("[id='productRating_LSTMOBG6VF5ADKHKXFXBT5ONJ_MOBG6VF5ADKHKXFX_']");
        this.applePhoneNewPriceLocator = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_30jeq3']");
        this.applePhoneOldPriceLocator = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_3I9_wc']");
        this.discountOnApplePhoneLocator = page.locator("[data-tkid*='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19_MC.MOBG6VF5ADKHKXFX'] [class='_3Ay6Sb']");
        this.appleViewAllButtonLocator = page.locator("[data-tkid='M_aea24faf-9391-4173-9470-0dbfdc76cbe6_68_QBM1SMZJ3K19'] [class='_2KpZ6l _3dESVI']");
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
        await (this.samsungHeadingLocator).isVisible();
    }

    async verfiySamsungPhoneDeatails(){
        await (this.samsungPhoneLocator).isVisible();
        await (this.samsungPhoneTextLocator).isVisible();
        await (this.samsungPhoneRatingLocator).isVisible();
        await (this.samaungPhoneNewPriceLocator).isVisible();
        await (this.samsungPhoneOldPriceLocator).isVisible();
        await (this.discountOnSamsungPhoneLocator).isVisible();
        await (this.samsungviewAllButtonLocator).isVisible();
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
        await (this.applePhoneRatingLocator).nth(1).isVisible();
        await (this.applePhoneNewPriceLocator).isVisible();
        await (this.applePhoneOldPriceLocator).isVisible();
        await (this.discountOnApplePhoneLocator).isVisible();
        await (this.appleViewAllButtonLocator).isVisible();
        const applePhones = await this.allApplePhoneLocator.count();

        for(let i =0; i<applePhones; i++)
        {
            await (this.allApplePhoneLocator.nth(i)).isVisible();
        }
    }





}

