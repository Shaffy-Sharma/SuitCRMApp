// Cucumber configuration profiles
module.exports = {
  default: {
    requireModule: [],
    require: [
      "tests/step-definitions/**/*.js",
      "tests/hooks/**/*.js"
      
    ],
    format: ["html:cucumber-report.html"],
    paths: ["tests/features/**/*.feature"]
  },
  // Runs scenarios in parallel worker processes.
  // Each worker gets its own World instance, so each scenario
  // launches/closes its own browser (see tests/hooks/hooks.js).
  // Usage: npx cucumber-js --profile parallel --parallel 2
  parallel: {
    requireModule: [],
    require: [
      "tests/step-definitions/**/*.js",
      "tests/hooks/**/*.js"
    ],
    format: [],
    paths: ["tests/features/**/*.feature"],
    parallel: 2
  }
};
