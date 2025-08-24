import {setDefaultTimeout, setWorldConstructor, World} from '@cucumber/cucumber';
import {Page,Browser} from '@playwright/test'

setDefaultTimeout(60 * 1000); // 60 seconds timeout

export class CustomWorld extends World{
 page !:Page
 browser !:Browser
 
}
setWorldConstructor(CustomWorld)