import { copyFileSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.GITHUB_PAGES === "true") {
  const src = path.join(__dirname, "..", "redirect.html");
  const destDir = path.join(__dirname, "..", "docs", ".vitepress", "dist");
  const dest = path.join(destDir, "index.html");

  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });

  copyFileSync(src, dest);
  console.log("✅ Redirect file copied to build output.");
} else {
  console.log("ℹ️ Skipping redirect copy — not GitHub Pages build.");
}
