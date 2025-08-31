import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CustomWorldClass } from './world';

BeforeAll(async function() {
  console.log('Starting Cucumber tests...');
});

Before(async function(this: CustomWorldClass) {
  await this.init();
});

After(async function(this: CustomWorldClass) {
  await this.cleanup();
});

AfterAll(async function() {
  console.log('Cucumber tests completed.');
}); 