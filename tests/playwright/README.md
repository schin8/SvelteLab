# Cucumber Tests with Playwright

This directory contains end-to-end tests for the SvelteLab monorepo using **Cucumber with Playwright** for behavior-driven development (BDD).

## Structure

```
tests/
├── features/          # Cucumber feature files (.feature)
│   └── playground.feature
├── support/          # Cucumber step definitions and support files
│   ├── world.ts      # Custom World class with Playwright integration
│   ├── hooks.ts      # Cucumber lifecycle hooks
│   └── playground.steps.ts      # Step definitions
├── package.json      # Test dependencies and scripts
├── cucumber.js       # Cucumber configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Make sure your playground app is running:
   ```bash
   pnpm playground:dev
   ```

## Running Tests

### From the root directory:

```bash
# Run Cucumber tests
pnpm test:cucumber

# Run Cucumber tests in parallel
pnpm test:cucumber:parallel

# Run with visible browser
pnpm test:cucumber:headed

# Run debug tests (with @debug tag)
pnpm test:cucumber:debug
```

### From the tests directory:

```bash
# Run Cucumber tests
pnpm cucumber

# Run Cucumber tests in parallel
pnpm cucumber:parallel

# Run with visible browser
pnpm cucumber:headed

# Run debug tests
pnpm cucumber:debug
```

## Writing Cucumber Tests

### Feature Files

Create `.feature` files in the `features/` directory using Gherkin syntax.

Example:

```gherkin
Feature: User Authentication
  As a user
  I want to log in to the application
  So that I can access my account

  Background:
    Given I am on the homepage

  Scenario: Successful login
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see my user profile
```

### Step Definitions

Add step definitions in `support/playground.steps.ts`:

```typescript
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorldClass } from "./world";

Given("I am on the homepage", async function (this: CustomWorldClass) {
  await this.page!.goto("http://localhost:5173");
});

When("I enter valid credentials", async function (this: CustomWorldClass) {
  // Implementation here
});

Then(
  "I should be redirected to the dashboard",
  async function (this: CustomWorldClass) {
    await expect(this.page!).toHaveURL(/dashboard/);
  },
);
```

## Configuration

### Cucumber Configuration (`cucumber.js`)

- TypeScript support with `ts-node`
- Pretty formatter for readable output
- HTML and JSON reports
- Parallel execution support

## Environment Variables

- `HEADLESS`: Set to `false` to run tests with visible browser
- `BASE_URL`: Override the default base URL (defaults to http://localhost:5173)

## Reports

Cucumber generates:

- **HTML Report**: `cucumber-report.html`
- **JSON Report**: `cucumber-report.json`
- **Console Output**: Pretty-formatted test results

## Best Practices

1. **Use Background**: Define common setup steps in Background
2. **Keep Steps Atomic**: Each step should do one thing
3. **Use Scenario Outlines**: For testing multiple data sets
4. **Leverage World**: Store shared state in the CustomWorld class
5. **Write Descriptive Steps**: Make scenarios readable for non-technical stakeholders
6. **Use Tags**: Organize tests with tags like `@smoke`, `@regression`, `@debug`
