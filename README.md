# SvelteLab 🚀

A modern monorepo for SvelteKit applications and shared packages, featuring comprehensive testing with Cucumber and Playwright.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Contributing](#contributing)

## 🎯 Overview

SvelteLab is a pnpm monorepo that provides a scalable foundation for building SvelteKit applications with shared components and comprehensive testing infrastructure. It features:

- **Modern SvelteKit 2.37** with Svelte 5
- **Cucumber BDD testing** with Playwright
- **TypeScript** throughout
- **Shared component library** architecture
- **Monorepo management** with pnpm workspaces

## 🏗️ Project Structure

```
SvelteLab/
├── apps/
│   └── my-playground/          # SvelteKit application
│       ├── src/
│       ├── static/
│       ├── package.json
│       └── svelte.config.js
├── packages/
│   └── ui/                     # Shared UI components (ready for expansion)
├── tests/                      # Centralized testing infrastructure
│   ├── features/               # Cucumber feature files
│   ├── support/                # Step definitions and hooks
│   ├── cucumber.js             # Cucumber configuration
│   └── package.json
├── pnpm-workspace.yaml         # Workspace configuration
├── package.json                # Root configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 8+ (recommended package manager)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd SvelteLab
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm playground:dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 💻 Development

### Available Scripts

#### **Playground Application**
```bash
# Development
pnpm playground:dev          # Start development server
pnpm playground:build        # Build for production
pnpm playground:preview      # Preview production build
pnpm playground:check        # Type checking
pnpm playground:lint         # Lint code
pnpm playground:test         # Run app-specific tests
```

#### **Testing Infrastructure**
```bash
# Cucumber Tests (BDD)
pnpm test:cucumber           # Run all Cucumber tests
pnpm test:cucumber:parallel  # Run tests in parallel
pnpm test:cucumber:headed    # Run with visible browser
pnpm test:cucumber:debug     # Run debug tests only
```

#### **Monorepo Management**
```bash
# Root level
pnpm dev                     # Start default app (currently playground)
pnpm build                   # Build default app
pnpm lint                    # Lint all packages
pnpm test                    # Run all tests
```

### Development Workflow

1. **Start Development:**
   ```bash
   pnpm playground:dev
   ```

2. **Run Tests (in another terminal):**
   ```bash
   pnpm test:cucumber
   ```

3. **Check Code Quality:**
   ```bash
   pnpm playground:lint
   pnpm playground:check
   ```

## 🧪 Testing

### Cucumber BDD Testing

The project uses **Cucumber with Playwright** for behavior-driven development testing.

#### **Test Structure**
```
tests/
├── features/
│   └── playground.feature    # Gherkin feature files
├── support/
│   ├── world.ts             # Custom World with Playwright
│   ├── hooks.ts             # Cucumber lifecycle hooks
│   └── steps.ts             # Step definitions
└── cucumber.js              # Configuration
```

#### **Running Tests**

```bash
# From root directory
pnpm test:cucumber

# From tests directory
cd tests
pnpm cucumber

# With visible browser
pnpm test:cucumber:headed

# Parallel execution
pnpm test:cucumber:parallel
```

#### **Writing Tests**

**Feature File Example:**
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
```

**Step Definition Example:**
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorldClass } from './world';

Given('I am on the homepage', async function(this: CustomWorldClass) {
  await this.page!.goto('http://localhost:5173');
});

When('I enter valid credentials', async function(this: CustomWorldClass) {
  // Implementation here
});
```

### Test Reports

- **HTML Report**: `cucumber-report.html`
- **JSON Report**: `cucumber-report.json`
- **Console Output**: Pretty-formatted results

## 🏛️ Architecture

### **Monorepo Benefits**

- **Shared Dependencies**: Efficient package management
- **Code Reuse**: Shared components and utilities
- **Consistent Tooling**: Unified linting, testing, and build processes
- **Simplified CI/CD**: Single repository for multiple applications

### **Technology Stack**

- **Frontend**: SvelteKit 2.37, Svelte 5, TypeScript
- **Testing**: Cucumber, Playwright
- **Package Manager**: pnpm with workspaces
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier, svelte-check

### **Workspace Configuration**

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'tests'
```

## 📦 Adding New Applications

1. **Create a new app:**
   ```bash
   cd apps
   pnpm create svelte@latest my-new-app
   cd my-new-app
   pnpm install
   ```

2. **Add scripts to root package.json:**
   ```json
   {
     "scripts": {
       "newapp:dev": "pnpm --filter my-new-app dev",
       "newapp:build": "pnpm --filter my-new-app build"
     }
   }
   ```

3. **Update workspace configuration** (if needed)

## 🔧 Configuration

### **Environment Variables**

Create `.env` files for environment-specific configuration:

```env
# .env.local
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=SvelteLab
```

### **TypeScript Configuration**

Each package has its own `tsconfig.json` with proper module resolution and path mapping.

### **Cucumber Configuration**

```javascript
// tests/cucumber.js
module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['support/*.ts'],
    format: ['@cucumber/pretty-formatter'],
    paths: ['features/*.feature'],
    parallel: 2,
    timeout: 30000
  }
};
```

## 🤝 Contributing

### **Development Guidelines**

1. **Code Style**: Follow ESLint and Prettier configurations
2. **Testing**: Write Cucumber scenarios for new features
3. **TypeScript**: Use strict type checking
4. **Commits**: Use conventional commit messages

### **Adding Features**

1. **Create feature file** in `tests/features/`
2. **Implement step definitions** in `tests/support/steps.ts`
3. **Add application code** in the appropriate app
4. **Run tests** to ensure everything works
5. **Update documentation** as needed

### **Code Quality**

```bash
# Check code quality
pnpm playground:lint
pnpm playground:check

# Format code
pnpm playground:format
```

## 📚 Resources

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [Playwright Documentation](https://playwright.dev/)
- [pnpm Documentation](https://pnpm.io/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy coding! 🎉**



