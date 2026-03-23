import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

console.log("Testing lesson page...");
await page.goto("http://localhost:3000/learn/phase/1/lesson/1-1");
await page.waitForLoadState("networkidle");

console.log("✓ Page loaded");

// Check for theory content
const title = await page.locator("text=Alphabet").first();
if (await title.isVisible()) {
  console.log("✓ Lesson theory content visible");
} else {
  console.log("⚠ Theory content not visible");
}

// Check for phase and lesson navigation
const breadcrumb = await page.locator("text=Phase 1").first();
if (await breadcrumb.isVisible()) {
  console.log("✓ Phase indicator visible");
}

// Screenshot
await page.screenshot({ path: "/tmp/lesson-screenshot.png" });
console.log("✓ Screenshot saved");

await browser.close();
console.log("✓ Test complete!");
