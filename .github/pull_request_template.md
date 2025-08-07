# Template Contribution

## 📋 Template Information
- **Template Name**: `[template-name]`
- **ZK Framework**: [e.g., Noir, Cairo, Risc0]
- **Frontend Stack**: [e.g., Vite + React + TanStack]
- **Type**: [ ] New Template [ ] Template Update [ ] Bug Fix

## 📝 Description
Provide a brief description of the changes in this template.

## 🧪 Testing Checklist
Please confirm you have tested the following:

### Template Generation
- [ ] `cza new [template-name] test-project` generates successfully
- [ ] All template variables are properly substituted
- [ ] No placeholder text (like `{{project_name}}`) remains in generated files

### Development Environment
- [ ] `mise install` completes successfully
- [ ] `hk install` sets up git hooks properly
- [ ] All development tools start without errors

### Build Process
- [ ] Project builds successfully after generation
- [ ] All scripts in `mise.toml` work correctly
- [ ] Tests pass (if included)
- [ ] Linting passes without errors

### Documentation
- [ ] README.md is complete and accurate
- [ ] Template includes proper project structure documentation
- [ ] cargo-generate.toml is properly configured

## 📋 Template Requirements
Confirm your template meets these standards:

### Structure
- [ ] Contains `cargo-generate.toml` with proper configuration
- [ ] Follows consistent project structure with existing templates
- [ ] Uses handlebars syntax for template variables (`{{project_name}}`, `{{author}}`)

### Development Stack
- [ ] Includes `mise.toml` for task management
- [ ] Includes `hk.pkl` for git hooks (if applicable)
- [ ] Includes `dprint.json` for code formatting
- [ ] Includes proper CI/CD configuration

### Quality
- [ ] Code follows best practices for the respective frameworks
- [ ] Includes appropriate dependency versions
- [ ] No security vulnerabilities in dependencies
- [ ] Reasonable bundle size and performance

## 🔗 Related Issues
Closes #[issue-number]

## 📸 Screenshots (if applicable)
Add screenshots of the generated project running.

## 🔄 Follow-up Actions
After this PR is merged:
- [ ] Create PR in [cza repo](https://github.com/sripwoud/cza) to update `cli/templates.toml`
- [ ] Update main template registry documentation
- [ ] Announce new template in discussions

## 💭 Additional Notes
Any additional context or notes for reviewers.

---

### For Reviewers
- [ ] Template generates successfully
- [ ] Code quality meets project standards  
- [ ] Documentation is complete and accurate
- [ ] Template follows established patterns
- [ ] No security concerns with dependencies