import {CustomWorld} from "../support/CustomWorld"
import {Then, When} from "@cucumber/cucumber"

When('i open the application {string}', async function (this: CustomWorld, url: string) 
{
    // this.page.goto(url)
    //  this.page.waitForTimeout(2000)

    await this.page.goto(url, { timeout: 30000 });
await this.page.waitForLoadState('networkidle');
   //  this.page.locator(".logout-btn").click()
      
}
)

Then('i enter {string} and {string}', async function(this:CustomWorld,userName:string,passWord:string)
    {
    await this.page.locator("#username").fill(userName)
    await this.page.locator("#password").fill(passWord)  
    await this.page.waitForTimeout(3000)
    
    }
)

Then('i click on login button', async function(this:CustomWorld)
{
  await this.page.locator("//button[@type='submit']").click()
  await this.page.waitForTimeout(3000)
})
