// src/cucumber.js
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

module.exports = {
  default: {
    paths: ["src/test/features/**/*.feature"],
    require: [
      "src/test/steps/**/*.ts",
      "src/test/support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "allure-cucumberjs/reporter",
      "progress"
    ],
    formatOptions: {
      resultsDir: "allure-results",      // dossier où Allure va stocker les résultats
      environmentInfo: {
        UI_AUTOMATION_BROWSER: process.env.UI_AUTOMATION_BROWSER,
        HEADLESS: process.env.HEADLESS,
        BROWSER_WIDTH: process.env.BROWSER_WIDTH,
        BROWSER_HEIGHT: process.env.BROWSER_HEIGHT,
        TEST_ENV: process.env.TEST_ENV,
        // bonus : infos système utiles
        // os_platform: os.platform(),
        // os_release: os.release(),
        // node_version: process.version,
      },
    },
    publishQuiet: true
  }
}


// // src/cucumber.ts
// export default {
//   default: {
//     // Nos .feature
//     paths: ["src/test/features/**/*.feature"],

//     // Steps + hooks
//     require: [
//       "src/test/steps/**/*.ts",
//       "src/test/support/**/*.ts",
//     ],

//     requireModule: ["ts-node/register"],

//     publishQuiet: true,
//     format: ["progress"],
//   },
// };
