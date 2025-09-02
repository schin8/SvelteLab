import {Before, After, BeforeAll, AfterAll, BeforeStep} from "@cucumber/cucumber";
import { CustomWorldClass } from "./world";
import logger from "./logger";

BeforeAll(async function () {
  logger.info("Starting Cucumber tests...");

});

AfterAll(async function () {
  logger.info("Cucumber tests completed.");
});

Before(async function (this: CustomWorldClass, testCase) {
  const scenarioName = testCase.pickle.name;
  logger.info(`🎬 Scenario: ${scenarioName}`);
  await this.init();
});

After(async function (this: CustomWorldClass, testCase) {
  if (testCase.result) {
    logger.info(displayResult(testCase.result.status));
  } else {
    logger.warn('No result found for the scenario.');
  }
  await this.cleanup();
});

BeforeStep(async function (this: CustomWorldClass, step) {
  logger.debug(`Step: ${step.pickleStep.text}`);
});


// Helpers
function displayResult(status: string) {
  switch (status) {
    case 'PASSED':
      return 'Passed : 🟢';
    case 'PENDING':
      return 'Pending 🟡';
    case 'SKIPPED':
      return 'Skipped 🟡';
    default:
      return 'Failed 🔴';
  }
}