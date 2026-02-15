#!/usr/bin/env node
/**
 * Route Generator for Next.js App Router
 *
 * Scans the app/ directory and generates type-safe route definitions
 * with parameterized path builders.
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files and directories to exclude
const EXCLUDE_PATTERNS = [
  /^layout\.tsx?$/,
  /^template\.tsx?$/,
  /^loading\.tsx?$/,
  /^error\.tsx?$/,
  /^not-found\.tsx?$/,
  /^global-error\.tsx?$/,
  /^route\.tsx?$/,
  /^page\.tsx?$/,
  /^metadata\.tsx?$/,
  /^opengraph-image\./,
  /^icon\./,
  /^apple-icon\./,
  /^favicon\./,
  /^sitemap\./,
  /^robots\./,
];

const EXCLUDE_DIRS = [/^api$/, /^_/];

// Route groups (parentheses) should be excluded from the path
const ROUTE_GROUP_PATTERN = /^\([^)]+\)$/;

// Parallel routes (@segment) should be excluded
const PARALLEL_ROUTE_PATTERN = /^@/;

// Interception routes should be excluded
const INTERCEPTION_PATTERNS = [/^\(\.\)/, /^\(\.\.\)/, /^\(\.\.\.\)/];

interface RouteSegment {
  name: string;
  type: "static" | "dynamic" | "optional" | "catch-all" | "optional-catch-all";
  paramName?: string;
}

interface RouteDefinition {
  key: string;
  segments: RouteSegment[];
  params: Record<string, string>;
  functionName: string;
}

/**
 * Parse a directory name into a route segment
 */
function parseSegment(segment: string): RouteSegment | null {
  // Exclude route groups
  if (ROUTE_GROUP_PATTERN.test(segment)) {
    return null;
  }

  // Exclude parallel routes
  if (PARALLEL_ROUTE_PATTERN.test(segment)) {
    return null;
  }

  // Exclude interception routes
  if (INTERCEPTION_PATTERNS.some((pattern) => pattern.test(segment))) {
    return null;
  }

  // Optional catch-all: [[...slug]]
  if (segment.startsWith("[[...") && segment.endsWith("]]")) {
    const paramName = segment.slice(5, -2);
    return {
      name: segment,
      type: "optional-catch-all",
      paramName,
    };
  }

  // Catch-all: [...slug]
  if (segment.startsWith("[...") && segment.endsWith("]")) {
    const paramName = segment.slice(4, -1);
    return {
      name: segment,
      type: "catch-all",
      paramName,
    };
  }

  // Optional: [[id]]
  if (segment.startsWith("[[") && segment.endsWith("]]")) {
    const paramName = segment.slice(2, -2);
    return {
      name: segment,
      type: "optional",
      paramName,
    };
  }

  // Dynamic: [id]
  if (segment.startsWith("[") && segment.endsWith("]")) {
    const paramName = segment.slice(1, -1);
    return {
      name: segment,
      type: "dynamic",
      paramName,
    };
  }

  // Static segment
  return {
    name: segment,
    type: "static",
  };
}

/**
 * Convert route segments to a canonical route key
 */
function segmentsToKey(segments: RouteSegment[]): string {
  if (segments.length === 0) {
    return "/";
  }

  const parts = segments.map((seg) => {
    switch (seg.type) {
      case "dynamic":
        return `[${seg.paramName}]`;
      case "optional":
        return `[[${seg.paramName}]]`;
      case "catch-all":
        return `[...${seg.paramName}]`;
      case "optional-catch-all":
        return `[[...${seg.paramName}]]`;
      default:
        return seg.name;
    }
  });

  return "/" + parts.join("/");
}

/**
 * Generate a function name from route segments
 */
function segmentsToFunctionName(segments: RouteSegment[]): string {
  if (segments.length === 0) {
    return "root";
  }

  const parts = segments.map((seg) => {
    if (seg.type === "static") {
      return seg.name.replace(/[^a-z0-9]/gi, "_");
    }
    return seg.paramName || "param";
  });

  return parts.join("_").replace(/_+/g, "_").replace(/^_|_$/g, "");
}

/**
 * Extract parameters from route segments
 */
function extractParams(segments: RouteSegment[]): Record<string, string> {
  const params: Record<string, string> = {};

  for (const seg of segments) {
    if (seg.paramName) {
      switch (seg.type) {
        case "dynamic":
          params[seg.paramName] = "string";
          break;
        case "optional":
          params[seg.paramName] = "string | undefined";
          break;
        case "catch-all":
          params[seg.paramName] = "string[]";
          break;
        case "optional-catch-all":
          params[seg.paramName] = "string[] | undefined";
          break;
      }
    }
  }

  return params;
}

/**
 * Recursively scan directory for page.tsx files
 */
function scanDirectory(
  dirPath: string,
  basePath: string = "",
  routes: RouteDefinition[] = [],
): RouteDefinition[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.join(basePath, entry.name);

    // Skip excluded directories
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.some((pattern) => pattern.test(entry.name))) {
        continue;
      }

      // Recursively scan subdirectories
      scanDirectory(fullPath, relativePath, routes);
      continue;
    }

    // Process page.tsx, page.ts, and page.mdx files
    if (
      entry.name === "page.tsx" ||
      entry.name === "page.ts" ||
      entry.name === "page.mdx"
    ) {
      const routePath = basePath;
      const pathSegments = routePath
        .split(path.sep)
        .filter(Boolean)
        .map(parseSegment)
        .filter((seg): seg is RouteSegment => seg !== null);

      const key = segmentsToKey(pathSegments);
      const params = extractParams(pathSegments);
      const functionName = segmentsToFunctionName(pathSegments);

      routes.push({
        key,
        segments: pathSegments,
        params,
        functionName,
      });
    }
  }

  return routes;
}

/**
 * Collapse multiple blog post routes into a single /blog/[slug] dynamic route.
 * Keeps /blog index, replaces /blog/foo, /blog/bar, etc. with one param'd route.
 */
function collapseBlogPostRoutes(routes: RouteDefinition[]): RouteDefinition[] {
  const blogIndex = routes.find((r) => r.key === "/blog");
  const blogPosts = routes.filter(
    (r) => r.key.startsWith("/blog/") && r.key !== "/blog"
  );
  const other = routes.filter(
    (r) => r.key !== "/blog" && !r.key.startsWith("/blog/")
  );

  if (blogPosts.length === 0) {
    return routes;
  }

  const blogSlugRoute: RouteDefinition = {
    key: "/blog/[slug]",
    segments: [
      { name: "blog", type: "static" },
      { name: "[slug]", type: "dynamic", paramName: "slug" },
    ],
    params: { slug: "string" },
    functionName: "blog_slug",
  };

  return [...other, ...(blogIndex ? [blogIndex] : []), blogSlugRoute];
}

/**
 * Generate TypeScript type for route parameters
 */
function generateParamType(params: Record<string, string>): string {
  if (Object.keys(params).length === 0) {
    return "Record<string, never>";
  }

  const entries = Object.entries(params)
    .map(([key, type]) => `  ${key}: ${type};`)
    .join("\n");

  return `{\n${entries}\n}`;
}

/**
 * Generate builder function for a route
 */
function generateBuilderFunction(route: RouteDefinition): string {
  const { functionName, segments, params } = route;

  if (Object.keys(params).length === 0) {
    return `export const ${functionName} = () => \`${route.key}\`;`;
  }

  const paramType = generateParamType(params);
  const pathParts: string[] = [];

  for (const seg of segments) {
    switch (seg.type) {
      case "static":
        pathParts.push(seg.name);
        break;
      case "dynamic":
        pathParts.push(`\${p.${seg.paramName}}`);
        break;
      case "optional":
        pathParts.push(`\${p.${seg.paramName} ?? ""}`);
        break;
      case "catch-all":
        pathParts.push(`\${p.${seg.paramName}.join("/")}`);
        break;
      case "optional-catch-all":
        pathParts.push(`\${p.${seg.paramName}?.join("/") ?? ""}`);
        break;
    }
  }

  const pathString = "/" + pathParts.join("/");

  return `export const ${functionName} = (p: ${paramType}) => \`${pathString}\`;`;
}

/**
 * Generate buildPath case statement for a route
 */
function generateBuildPathCase(route: RouteDefinition): string {
  const { key, functionName, params } = route;

  if (Object.keys(params).length === 0) {
    return `    case "${key}":\n      return ${functionName}();`;
  }

  return `    case "${key}":\n      return ${functionName}(params as RouteParams["${key}"]);`;
}

/**
 * Generate the routes.ts file content
 */
function generateRoutesFile(routes: RouteDefinition[]): string {
  // Sort routes by key for deterministic output
  routes.sort((a, b) => a.key.localeCompare(b.key));

  // Generate RouteKey union type
  const routeKeys = routes.map((r) => `  "${r.key}"`).join(" |\n");

  // Generate RouteParams type
  const routeParams = routes
    .map((r) => {
      const paramType = generateParamType(r.params);
      return `  "${r.key}": ${paramType};`;
    })
    .join("\n");

  // Generate builder functions
  const builders = routes.map(generateBuilderFunction).join("\n\n");

  // Generate routes object
  const routesObjectEntries = routes
    .map((r) => `  ${r.functionName},`)
    .join("\n");

  // Generate buildPath helper
  const buildPathHelper = `export function buildPath<K extends RouteKey>(
  route: K,
  params: RouteParams[K]
): string {
  switch (route) {
${routes.map(generateBuildPathCase).join("\n")}
    default:
      const _exhaustive: never = route;
      return _exhaustive;
  }
}`;

  return `/**
 * Auto-generated route definitions
 * 
 * This file is generated by scripts/gen_routes.ts
 * Do not edit manually. Run "pnpm gen:routes" to regenerate.
 * 
 * Generated at: ${new Date().toISOString()}
 */

export type RouteKey =
${routeKeys};

export type RouteParams = {
${routeParams}
};

${builders}

export const routes = {
${routesObjectEntries}
} as const;

${buildPathHelper}
`;
}

/**
 * Main execution
 */
function main() {
  const appDir = path.join(__dirname, "..",'src', "app" );
  const outputFile = path.join(__dirname, "..", 'src', "lib", "routes.ts");

  if (!fs.existsSync(appDir)) {
    console.error(`Error: App directory not found at ${appDir}`);
    process.exit(1);
  }

  console.log(`Scanning ${appDir} for routes...`);

  let routes = scanDirectory(appDir);
  routes = collapseBlogPostRoutes(routes);
  console.log(`Found ${routes.length} routes`);

  const content = generateRoutesFile(routes);

  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write file
  fs.writeFileSync(outputFile, content, "utf-8");
  console.log(`Generated ${outputFile}`);

  // Verify the file was written correctly
  if (!fs.existsSync(outputFile)) {
    console.error(`Error: Failed to write ${outputFile}`);
    process.exit(1);
  }
}

main();
