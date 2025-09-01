module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["support/*.ts"],
    format: [
      "@cucumber/pretty-formatter",
      "html:../report/playwright/cucumber-report.html",
      "json:../report/playwright/cucumber-report.json",
    ],
    paths: ["features/*.feature"],
    parallel: 1,
    timeout: 30000,
  },
};
