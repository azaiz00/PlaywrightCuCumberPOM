import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { BrowserType, chromium, firefox, webkit } from "@playwright/test";
import type { CustomWorld } from "./world";
// load env variables from .env file 
import { config as LoadEnv } from "dotenv";
const env = LoadEnv({ path: './env/.env' })

// create a configuration object for esay access ton env variables 
const config = {
  headless: true,//process.env.CI ? : true : env.parsed?.HEADLESS === 'true',
  browser: env.parsed?.UI_AUTOMATION_BROWSER || 'firefox',
  width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
  height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080')
}
// create a dictionnary mapping broser names to thier launch functions 
const browsers: { [key: string]: BrowserType } = {
  'chromium': chromium,
  'firefox': firefox,
  'webkit': webkit
}
//

setDefaultTimeout(15000);

Before(async function (this: CustomWorld) {
  const browserType = browsers[config.browser];
  try {
    if (!browserType) {
      throw new Error(`Invalid browser name in config: ${config.browser}`);
    }
    else {
      this.browser = await browserType.launch({ headless: config.headless });
      this.context = await this.browser.newContext(
        {
          viewport: { width: config.width, height: config.height },
          baseURL: "http://zero.webappsecurity.com"
        });

      this.page = await this.context.newPage();
    }
  } catch (error) {
    console.log("Browser context initilation failed:", error)
  }


});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    if (this.page) {
      const screenShotPath = `./test-results/cuReports/screenshots/${scenario.pickle.name}-${Date.now()}.png`
      const image = await this.page.screenshot({
        path: screenShotPath,
        type: 'png'
        // timeout: 60000
      });
      await this.attach(image, 'image/png');
    }
    else {
      console.error("\n\t!!inable to take a screenShot page is undefined!!\n")
    }
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();

});
