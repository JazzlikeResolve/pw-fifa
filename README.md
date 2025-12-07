This is a website that is continously changing, if the test suite or tests are not passing it is due to the updates they have made. 

PW-Fifa - Playwright Test Automation for FIFA Website
https://www.fifa.com/en

A comprehensive test automation suite for the FIFA website using Playwright and TypeScript.

📋 Project Overview
This project contains automated end-to-end tests for fifa.com, verifying critical functionality including page titles, logo visibility, navigation structure, and user interface elements.

🚀 Features
✅ Title Verification - Validates page title matches expected value

🖼️ Logo Testing - Checks FIFA logo visibility and attributes

🔗 Navigation Validation - Verifies all main navigation links are present and correct

🍪 Cookie Handling - Automatically accepts cookie consent dialogs

🎯 Pop-up Management - Handles modal pop-ups intelligently

📊 Comprehensive Reporting - Generates detailed HTML test reports

🛠️ Tech Stack
Playwright - Modern web testing framework

TypeScript - Type-safe JavaScript

Node.js - Runtime environment

GitHub Actions - CI/CD pipeline

📁 Project Structure
text
PW-Fifa/
├── tests/                 # Test specifications
│   └── example.spec.ts   # Main test file
├── src/                  # Source code and utilities
├── .github/              # GitHub Actions workflows
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
⚡ Quick Start
Prerequisites
Node.js 16+

npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/JazzlikeResolve/pw-fifa.git
cd pw-fifa
Install dependencies

bash
npm install
Install Playwright browsers

bash
npx playwright install
🧪 Running Tests
Available Scripts
Command	Description
npm test	Run all tests in headless mode
npm run test:headed	Run tests with visible browser
npm run test:chrome	Run tests only in Chrome
npm run test:firefox	Run tests only in Firefox
npm run test:webkit	Run tests only in Safari
npm run test:debug	Run tests in debug mode
npm run test:ui	Open Playwright UI mode
npm run test:report	Generate HTML test report
npm run show-report	Open the last generated report
npm run codegen	Generate tests by recording interactions
Example Test Run
bash
# Run all tests
npm test

# Run tests with visible browser for debugging
npm run test:headed

# Generate and view test report
npm run test:report
npm run show-report
📝 Test Cases
1. Page Title Verification
Navigates to FIFA homepage

Accepts cookie consent

Handles pop-up modals

Verifies page title matches "FIFA | The Home of Football"

2. Logo Visibility Test
Checks FIFA logo is visible

Validates logo attributes (title, alt text)

Ensures proper image rendering

3. Navigation Links Validation
Verifies all main navigation links are present

Compares actual links against expected list

Handles special characters and formatting

🔧 Configuration
Playwright Config
The project uses a comprehensive Playwright configuration (playwright.config.ts) with:

Multi-browser support (Chromium, Firefox, WebKit)

HTML reporting

Trace collection on first retry

Parallel test execution

Environment Setup
Key dependencies in package.json:

@playwright/test - Core testing framework

typescript - TypeScript support

@types/node - Node.js type definitions

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📊 Test Reports
After test execution, detailed reports are available in:

HTML Report: playwright-report/ - Visual test results

Test Results: test-results/ - Raw test data and traces

View reports with: npm run show-report

🐛 Troubleshooting
Common Issues
Tests failing due to pop-ups:

The test suite includes built-in pop-up handling

Manual intervention may be needed for new pop-up types

Browser installation issues:

bash
npx playwright install --force
Slow test execution:

Reduce parallelism in playwright.config.ts

Increase timeouts for slower environments

📄 License
This project is licensed under the ISC License - see the LICENSE file for details.

🙏 Acknowledgments
Playwright team for the excellent testing framework

FIFA for the test target website

Contributors and testers
