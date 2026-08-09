// Playwright configuration
// Add browser, timeout, and reporter settings here
// Override locally with env vars, e.g. set HEADLESS=false to watch the browser
module.exports = {
    headless: process.env.HEADLESS ? process.env.HEADLESS !== 'false' : true,
    browser: process.env.BROWSER || 'chromium'
};
