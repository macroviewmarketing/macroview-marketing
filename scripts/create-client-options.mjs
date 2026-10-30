import { readFile, writeFile, mkdir } from "node:fs/promises";
const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const privateEntry = html.replace("<head>", '<head>\n    <meta name="robots" content="noindex, nofollow, noarchive" />').replace('<title>Macroview | Organic Content &amp; Ad Creative</title>', '<title>Macroview | Client Options</title>').replace('<title>Macroview | Organic Content & Ad Creative</title>', '<title>Macroview | Client Options</title>');
await mkdir(new URL("../dist/client-options/", import.meta.url), { recursive: true });
await writeFile(new URL("../dist/client-options/index.html", import.meta.url), privateEntry);
