// src/cucumber.js

module.exports = {
  default: {
    paths: ["src/test/features/**/*.feature"],
    require: [
      "src/test/steps/**/*.ts",
      "src/test/support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
    ],
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
