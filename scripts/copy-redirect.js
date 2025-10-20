import { copyFileSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Only run for GitHub Pages builds
if (process.env.GITHUB_PAGES === "true") {

  const distDir = path.join(__dirname, "..", "docs", ".vitepress", "dist");

  // Ensure the dist folder exists
  if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

  // 1️⃣ index.html redirect
  const indexHtml = path.join(distDir, "index.html");
  copyFileSync(path.join(__dirname, "..", "redirect.html"), indexHtml);

  // 2️⃣ 404.html redirect (handles all other old subpages)
  const html404 = path.join(distDir, "404.html");

  const redirectScript = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="robots" content="noindex">
  <script>
    (function() {
      // Ensure path starts without /Hydra-Guide
      const path = location.pathname
        .replace(/^\\/Hydra-Guide(\\/)?/, "/") // remove /Hydra-Guide and optional trailing slash
        .replace(/\\/index\\.html$/, "/");     // normalize index.html

      const newUrl = "https://docs.galinhaman.com" + path + location.search + location.hash;
      location.replace(newUrl);
    })();
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`;

  // Write 404.html
  writeFileSync(html404, redirectScript);

  console.log("Redirects created for GitHub Pages (index.html + 404.html)");

} else {
  console.log("ℹSkipping redirect copy: not GitHub Pages build.");
}
