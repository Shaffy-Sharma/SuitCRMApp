// Cucumber configuration profiles
module.exports = {
  default: {
    requireModule: [],
    require: [
      "src/step-definitions/**/*.js",
      "src/hooks/**/*.js"
      
    ],
    format: ["html:cucumber-report.html"],
    paths: ["src/features/**/*.feature"]
  },
  // Runs scenarios in parallel worker processes.
  // Each worker gets its own World instance, so each scenario
  // launches/closes its own browser (see src/hooks/hooks.js).
  // Usage: npx cucumber-js --profile parallel --parallel 2
  parallel: {
    requireModule: [],
    require: [
      "src/step-definitions/**/*.js",
      "src/hooks/**/*.js"
    ],
    format: [],
    paths: ["src/features/**/*.feature"],
    parallel: 2
  }
};
