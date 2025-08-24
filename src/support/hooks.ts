import {Before,After} from '@cucumber/cucumber'
import {CustomWorld} from './CustomWorld'
import {chromium} from "@playwright/test"

Before(async function(this:CustomWorld)
{
  this.browser=await chromium.launch({headless:true})
  this.page=await this.browser.newPage()
  
})

After(async function(this:CustomWorld){
    await this.browser.close()
})

