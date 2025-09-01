# GitHub Actions Workflows

This directory contains the CI/CD workflows for the SvelteLab monorepo.

## 📋 Workflow Overview

### **1. CI (`ci.yml`)**

**Triggers:** Push to `main`/`develop`, Pull Requests
**Purpose:** Continuous Integration testing

**Jobs:**

- **Test & Lint**: Runs on Node.js 18 & 20
  - Type checking
  - Linting
  - Building
  - Cucumber tests
  - Test result artifacts
- **Security Audit**: Dependency security checks

### **2. Deploy (`deploy.yml`)**

**Triggers:** Push to `main`, Manual dispatch
**Purpose:** Production deployment

**Jobs:**

- **Deploy to Production**: Deploys to Vercel
  - Runs tests first
  - Builds application
  - Deploys to production
  - Comments on PRs

### **3. Preview Deploy (`preview.yml`)**

**Triggers:** Pull Requests, Push to `develop`
**Purpose:** Preview deployments for testing

**Jobs:**

- **Deploy Preview**: Creates preview deployments
  - Runs tests
  - Builds application
  - Deploys preview
  - Comments with preview URL

### **4. Dependency Review (`dependency-review.yml`)**

**Triggers:** Pull Requests
**Purpose:** Security vulnerability scanning

**Jobs:**

- **Dependency Review**: Checks for security issues
  - Scans dependencies
  - Fails on moderate+ severity
  - Allows specific licenses

### **5. Release (`release.yml`)**

**Triggers:** Push tags (`v*`)
**Purpose:** Automated releases

**Jobs:**

- **Create Release**: Creates GitHub releases
  - Runs tests
  - Builds application
  - Creates release
  - Uploads artifacts

## 🔧 Required Secrets

### **Vercel Deployment**

```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### **How to Get Vercel Secrets:**

1. **VERCEL_TOKEN**:

   - Go to Vercel Dashboard → Settings → Tokens
   - Create new token

2. **VERCEL_ORG_ID & VERCEL_PROJECT_ID**:
   - Run: `vercel link` in your project
   - Check `.vercel/project.json`

## 🚀 Workflow Features

### **Caching**

- **pnpm store**: Cached for faster installs
- **Node modules**: Efficient dependency management

### **Artifacts**

- **Test results**: Cucumber reports
- **Build artifacts**: Production builds
- **Screenshots**: Test failure screenshots

### **Security**

- **Dependency scanning**: Automatic vulnerability detection
- **License compliance**: Approved license checking
- **Audit logging**: Security audit trails

## 📊 Workflow Status

### **Success Criteria**

- ✅ All tests pass
- ✅ Linting passes
- ✅ Type checking passes
- ✅ Security audit passes
- ✅ Build succeeds

### **Failure Handling**

- **Test failures**: Prevents deployment
- **Security issues**: Blocks PR merge
- **Build failures**: Stops deployment pipeline

## 🔄 Workflow Triggers

| Workflow          | Push Main | Push Develop | PR  | Tags | Manual |
| ----------------- | --------- | ------------ | --- | ---- | ------ |
| CI                | ✅        | ✅           | ✅  | ❌   | ❌     |
| Deploy            | ✅        | ❌           | ❌  | ❌   | ✅     |
| Preview           | ❌        | ✅           | ✅  | ❌   | ❌     |
| Dependency Review | ❌        | ❌           | ✅  | ❌   | ❌     |
| Release           | ❌        | ❌           | ❌  | ✅   | ❌     |

## 🛠️ Customization

### **Adding New Apps**

1. Update workflow files to include new app scripts
2. Add build/test commands for new apps
3. Update deployment paths if needed

### **Changing Deployment Platform**

1. Replace Vercel actions with platform-specific actions
2. Update secrets and environment variables
3. Modify deployment commands

### **Adding New Test Types**

1. Add test commands to CI workflow
2. Update artifact uploads
3. Configure test result reporting

## 📈 Monitoring

### **Workflow Metrics**

- **Build time**: Track CI/CD performance
- **Success rate**: Monitor workflow reliability
- **Test coverage**: Track testing effectiveness

### **Notifications**

- **PR comments**: Automatic status updates
- **Deployment URLs**: Preview and production links
- **Failure alerts**: Immediate notification on failures

## 🔍 Troubleshooting

### **Common Issues**

1. **pnpm install fails**: Check lock file consistency
2. **Tests timeout**: Increase timeout in cucumber.js
3. **Deployment fails**: Verify Vercel secrets
4. **Cache issues**: Clear workflow cache

### **Debug Commands**

```bash
# Local testing
pnpm test:cucumber
pnpm playground:build

# Check dependencies
pnpm audit
pnpm playground:check
```

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [pnpm Documentation](https://pnpm.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
