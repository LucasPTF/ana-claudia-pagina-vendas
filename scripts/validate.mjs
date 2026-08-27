import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", ".next", ".vercel", "node_modules"]);
const requiredRoutes = ["a1", "a2", "a3", "obrigado"];
const forbidden = [String.fromCodePoint(0x2013), String.fromCodePoint(0x2014)];
const textExtensions = new Set([".css", ".json", ".md", ".mjs", ".ts", ".tsx"]);

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];

  for (const entry of entries) {
    if (ignored.has(entry)) continue;
    const filePath = path.join(directory, entry);
    const info = await stat(filePath);
    if (info.isDirectory()) files.push(...(await walk(filePath)));
    else files.push(filePath);
  }

  return files;
}

for (const route of requiredRoutes) {
  const routeFile = path.join(root, "app", route, "page.tsx");
  await stat(routeFile);
}

const sourceFiles = (await walk(root)).filter((file) => textExtensions.has(path.extname(file)));
const violations = [];

for (const file of sourceFiles) {
  const content = await readFile(file, "utf8");
  for (const character of forbidden) {
    if (content.includes(character)) violations.push(path.relative(root, file));
  }
}

if (violations.length > 0) {
  throw new Error(`Caracteres proibidos encontrados em: ${[...new Set(violations)].join(", ")}`);
}

for (const route of ["a1", "a2", "a3"]) {
  const content = await readFile(path.join(root, "app", route, "page.tsx"), "utf8");
  if (!content.includes("SalesPage") || !content.includes(`heroes.${route}`)) {
    throw new Error(`A rota ${route} não usa a arquitetura compartilhada esperada.`);
  }
}

console.log(`Validação concluída. ${sourceFiles.length} arquivos verificados e 4 rotas confirmadas.`);
