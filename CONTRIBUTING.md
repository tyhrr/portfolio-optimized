# Contributing to Alan Salva Portfolio

Thank you for your interest in contributing to my personal portfolio! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the [GitHub Issues](https://github.com/tyhrr/alan-salva-portfolio/issues) page
- Search existing issues before creating new ones
- Provide clear, detailed descriptions
- Include steps to reproduce bugs
- Add screenshots or screen recordings when helpful

### Suggesting Enhancements
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Provide use cases and examples
- Consider implementation complexity

### Code Contributions

#### Before You Start
1. Fork the repository
2. Create a new branch from `main`
3. Use descriptive branch names (e.g., `feature/new-project-card`, `fix/mobile-navigation`)

#### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/alan-salva-portfolio.git
cd alan-salva-portfolio

# Create a new branch
git checkout -b feature/your-feature-name

# Start development server
python -m http.server 8000
```

#### Code Style Guidelines

##### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain consistent indentation (2 spaces)
- Add comments for complex sections

```html
<!-- Good -->
<section class="hero-section" aria-labelledby="hero-title">
  <h1 id="hero-title" class="hero__title">Welcome</h1>
</section>

<!-- Avoid -->
<div class="hero">
  <h1>Welcome</h1>
</div>
```

##### CSS
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Mobile-first approach for responsive design
- Group related properties together

```css
/* Good - BEM naming */
.hero-section {
  padding: var(--section-padding);
}

.hero__title {
  font-size: var(--font-size-4xl);
  color: var(--color-primary);
}

.hero__title--highlighted {
  background: var(--color-primary-light);
}

/* Avoid - Non-semantic naming */
.hero {
  padding: 80px 0;
}

.big-title {
  font-size: 2.5rem;
}
```

##### JavaScript
- Use ES6+ features (classes, arrow functions, template literals)
- Add JSDoc comments for functions
- Handle errors gracefully
- Use meaningful variable names

```javascript
// Good
class ProjectManager {
  /**
   * Loads more projects from the data source
   * @param {number} count - Number of projects to load
   * @returns {Promise<void>}
   */
  async loadMoreProjects(count = 3) {
    try {
      const projects = await this.fetchProjects(count);
      this.renderProjects(projects);
    } catch (error) {
      console.error('Failed to load projects:', error);
      this.showErrorMessage();
    }
  }
}

// Avoid
function loadProjects() {
  // No error handling, unclear purpose
  const data = getData();
  showData(data);
}
```

#### Accessibility Requirements
- Maintain WCAG 2.1 AA compliance
- Test with screen readers
- Ensure proper keyboard navigation
- Maintain color contrast ratios
- Add focus indicators

#### Performance Considerations
- Optimize images before adding them
- Minimize HTTP requests
- Use efficient CSS selectors
- Implement lazy loading where appropriate
- Test on slow connections

### Testing Your Changes

#### Manual Testing Checklist
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify cross-browser compatibility
- [ ] Check accessibility with screen readers
- [ ] Test keyboard navigation
- [ ] Validate HTML markup
- [ ] Test language switching functionality
- [ ] Verify all links work correctly

#### Browser Testing
Test your changes on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Submitting Changes

#### Pull Request Process
1. Ensure your branch is up to date with `main`
2. Run tests and verify everything works
3. Create a clear, descriptive pull request
4. Reference any related issues
5. Wait for review and feedback

#### Pull Request Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Verified accessibility
- [ ] All links work correctly

## Screenshots
Include screenshots of visual changes.

## Additional Notes
Any additional context or considerations.
```

## 🎨 Design Guidelines

### Color Palette
- Primary: `#FF6B00` (Orange)
- Primary Hover: `#FF8C42`
- Background: `#1a1a1a` (Dark)
- Text: `#ffffff` (White)
- Secondary Text: `rgba(255, 255, 255, 0.8)`

### Typography
- Font Family: Poppins
- Heading Hierarchy: H1 → H2 → H3
- Line Height: 1.6 for body text
- Font Weights: 300, 400, 500, 600, 700

### Spacing
- Use consistent spacing scale
- Base unit: 1rem (16px)
- Scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🌍 Internationalization (i18n)

### Adding New Languages
1. Add language code to `languageNames` object
2. Add translations to `translations` object
3. Update language switcher logic
4. Test all translated content

### Translation Guidelines
- Keep translations contextually appropriate
- Maintain consistent tone and voice
- Consider cultural differences
- Test UI layout with longer/shorter text

## 📝 Documentation

### Code Comments
- Comment complex logic
- Explain "why" not just "what"
- Keep comments up to date
- Use JSDoc for functions

### README Updates
- Update README.md for new features
- Add screenshots for visual changes
- Update installation instructions if needed
- Keep feature list current

## 🚀 Deployment

### Pre-deployment Checklist
- [ ] All tests pass
- [ ] Code is minified and optimized
- [ ] Images are compressed
- [ ] No console errors
- [ ] Accessibility validated
- [ ] Performance optimized

## 🐛 Bug Report Template

When reporting bugs, please include:

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- Browser: [e.g., Chrome 96]
- Device: [e.g., iPhone 12]
- Screen size: [e.g., 375x667]

**Screenshots**
Add screenshots to help explain the problem.
```

## 💡 Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature.

**Problem/Need**
What problem does this solve or what need does it fulfill?

**Proposed Solution**
How you envision this feature working.

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context, screenshots, or examples.
```

## 📞 Getting Help

If you need help or have questions:
- Create an issue with the "question" label
- Email: alangabrielsalva@gmail.com
- Check existing documentation and issues first

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub repository contributors
- Special thanks in commit messages

Thank you for contributing to making this portfolio better! 🎉
