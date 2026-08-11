/**
 * Render intro-to-reqlan blog PNGs colocated with the post
 * (same layout as other posts: images next to page.tsx / metadata.ts).
 *
 * - Ed mascot: ed.svg → ed-128.png, ed-256.png, ed.png
 *   Sharp/librsvg does not honor CSS `transform-box: fill-box` / `transform-origin`,
 *   so path transforms are baked into absolute coordinates before rasterizing.
 * - Logo: logo.png → logo-128.png, logo-256.png (keeps logo.png as 512 source)
 *
 * Usage: pnpm generate-ed-mascot-pngs
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const introToReqlanBlogPostDirectoryPath = path.join(
  __dirname,
  "../src/app/blog/(2026)/intro-to-reqlan",
);

/** @type {ReadonlyArray<{ sizePixels: number; outputFileName: string }>} */
const introToReqlanBlogPostEdMascotPngOutputSizes = [
  { sizePixels: 128, outputFileName: "ed-128.png" },
  { sizePixels: 256, outputFileName: "ed-256.png" },
  { sizePixels: 512, outputFileName: "ed.png" },
];

/** @type {ReadonlyArray<{ sizePixels: number; outputFileName: string }>} */
const introToReqlanBlogPostLogoPngOutputSizes = [
  { sizePixels: 128, outputFileName: "logo-128.png" },
  { sizePixels: 256, outputFileName: "logo-256.png" },
];

/**
 * @typedef {{ a: number; b: number; c: number; d: number; e: number; f: number }} SvgAffineMatrix
 */

/**
 * @param {string} transformAttributeValue
 * @returns {SvgAffineMatrix}
 */
function parseIntroToReqlanEdMascotSvgMatrixTransform(transformAttributeValue) {
  const matrixMatch = transformAttributeValue.match(/matrix\(([^)]+)\)/);
  if (!matrixMatch) {
    throw new Error(
      `Unsupported SVG transform (expected matrix(...)): ${transformAttributeValue}`,
    );
  }
  const [a, b, c, d, e, f] = matrixMatch[1].split(/[\s,]+/).map(Number);
  return { a, b, c, d, e, f };
}

/**
 * @param {SvgAffineMatrix} leftMatrix
 * @param {SvgAffineMatrix} rightMatrix
 * @returns {SvgAffineMatrix}
 */
function multiplyIntroToReqlanEdMascotSvgAffineMatrices(leftMatrix, rightMatrix) {
  return {
    a: leftMatrix.a * rightMatrix.a + leftMatrix.c * rightMatrix.b,
    b: leftMatrix.b * rightMatrix.a + leftMatrix.d * rightMatrix.b,
    c: leftMatrix.a * rightMatrix.c + leftMatrix.c * rightMatrix.d,
    d: leftMatrix.b * rightMatrix.c + leftMatrix.d * rightMatrix.d,
    e: leftMatrix.a * rightMatrix.e + leftMatrix.c * rightMatrix.f + leftMatrix.e,
    f: leftMatrix.b * rightMatrix.e + leftMatrix.d * rightMatrix.f + leftMatrix.f,
  };
}

/**
 * @param {number} translateX
 * @param {number} translateY
 * @returns {SvgAffineMatrix}
 */
function createIntroToReqlanEdMascotSvgTranslateMatrix(translateX, translateY) {
  return { a: 1, b: 0, c: 0, d: 1, e: translateX, f: translateY };
}

/**
 * @param {SvgAffineMatrix} matrix
 * @param {number} x
 * @param {number} y
 * @returns {[number, number]}
 */
function applyIntroToReqlanEdMascotSvgAffineMatrix(matrix, x, y) {
  return [
    matrix.a * x + matrix.c * y + matrix.e,
    matrix.b * x + matrix.d * y + matrix.f,
  ];
}

/**
 * @param {string} pathData
 * @returns {Array<[number, number]>}
 */
function extractIntroToReqlanEdMascotSvgAbsolutePathCoordinates(pathData) {
  const pathTokens =
    pathData.match(/[MLCZmlcz]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
  /** @type {Array<[number, number]>} */
  const coordinates = [];
  let tokenIndex = 0;
  while (tokenIndex < pathTokens.length) {
    const token = pathTokens[tokenIndex];
    if (/^[MLCZmlcz]$/i.test(token)) {
      tokenIndex += 1;
      continue;
    }
    coordinates.push([
      Number(token),
      Number(pathTokens[tokenIndex + 1]),
    ]);
    tokenIndex += 2;
  }
  return coordinates;
}

/**
 * @param {Array<[number, number]>} coordinates
 * @returns {{ centerX: number; centerY: number }}
 */
function computeIntroToReqlanEdMascotSvgPathBoundingBoxCenter(coordinates) {
  let minimumX = Infinity;
  let minimumY = Infinity;
  let maximumX = -Infinity;
  let maximumY = -Infinity;
  for (const [x, y] of coordinates) {
    minimumX = Math.min(minimumX, x);
    minimumY = Math.min(minimumY, y);
    maximumX = Math.max(maximumX, x);
    maximumY = Math.max(maximumY, y);
  }
  return {
    centerX: (minimumX + maximumX) / 2,
    centerY: (minimumY + maximumY) / 2,
  };
}

/**
 * @param {string} pathData
 * @param {SvgAffineMatrix} matrix
 * @returns {string}
 */
function transformIntroToReqlanEdMascotSvgAbsolutePathData(pathData, matrix) {
  const pathTokens =
    pathData.match(/[MLCZmlcz]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
  /** @type {Array<string | number>} */
  const transformedTokens = [];
  let tokenIndex = 0;
  let currentCommand = null;
  while (tokenIndex < pathTokens.length) {
    const token = pathTokens[tokenIndex];
    if (/^[MLCZmlcz]$/.test(token)) {
      currentCommand = token;
      transformedTokens.push(token);
      tokenIndex += 1;
      continue;
    }
    if (currentCommand !== null && /[mlc]/.test(currentCommand)) {
      throw new Error(
        `Relative SVG path command "${currentCommand}" is not supported when baking Ed transforms`,
      );
    }
    const [transformedX, transformedY] = applyIntroToReqlanEdMascotSvgAffineMatrix(
      matrix,
      Number(token),
      Number(pathTokens[tokenIndex + 1]),
    );
    transformedTokens.push(
      Number(transformedX.toFixed(3)),
      Number(transformedY.toFixed(3)),
    );
    tokenIndex += 2;
  }
  return transformedTokens.join(" ");
}

/**
 * Bake path `transform` matrices into absolute `d` coordinates so librsvg/sharp
 * can rasterize without CSS `transform-box` / `transform-origin` support.
 *
 * @param {string} svgSourceText
 * @returns {string}
 */
function bakeIntroToReqlanEdMascotSvgPathTransformsForLibrsvg(svgSourceText) {
  return svgSourceText.replace(/<path\b([^>]*)>/gs, (fullMatch, pathAttributes) => {
    const transformMatch = pathAttributes.match(/\btransform="([^"]+)"/);
    if (!transformMatch) {
      return fullMatch;
    }

    const pathDataMatch = pathAttributes.match(/\bd="([^"]+)"/);
    if (!pathDataMatch) {
      return fullMatch;
    }

    let affineMatrix = parseIntroToReqlanEdMascotSvgMatrixTransform(
      transformMatch[1],
    );
    const styleMatch = pathAttributes.match(/\bstyle="([^"]*)"/);
    const styleAttributeValue = styleMatch?.[1] ?? "";

    // Browsers apply transform-origin against the fill bounding box; librsvg does not.
    if (/transform-box\s*:\s*fill-box/.test(styleAttributeValue)) {
      const boundingBoxCenter = computeIntroToReqlanEdMascotSvgPathBoundingBoxCenter(
        extractIntroToReqlanEdMascotSvgAbsolutePathCoordinates(pathDataMatch[1]),
      );
      affineMatrix = multiplyIntroToReqlanEdMascotSvgAffineMatrices(
        createIntroToReqlanEdMascotSvgTranslateMatrix(
          boundingBoxCenter.centerX,
          boundingBoxCenter.centerY,
        ),
        multiplyIntroToReqlanEdMascotSvgAffineMatrices(
          affineMatrix,
          createIntroToReqlanEdMascotSvgTranslateMatrix(
            -boundingBoxCenter.centerX,
            -boundingBoxCenter.centerY,
          ),
        ),
      );
    }

    const bakedPathData = transformIntroToReqlanEdMascotSvgAbsolutePathData(
      pathDataMatch[1],
      affineMatrix,
    );

    let updatedPathAttributes = pathAttributes
      .replace(/\bd="[^"]+"/, `d="${bakedPathData}"`)
      .replace(/\s*transform="[^"]+"/, "");

    if (styleMatch) {
      const cleanedStyleAttributeValue = styleAttributeValue
        .replace(/transform-box\s*:\s*[^;]+;?/g, "")
        .replace(/transform-origin\s*:\s*[^;]+;?/g, "")
        .replace(/;\s*;/g, ";")
        .replace(/^;|;$/g, "")
        .trim();
      updatedPathAttributes = cleanedStyleAttributeValue
        ? updatedPathAttributes.replace(
            /\bstyle="[^"]*"/,
            `style="${cleanedStyleAttributeValue}"`,
          )
        : updatedPathAttributes.replace(/\s*style="[^"]*"/, "");
    }

    return `<path${updatedPathAttributes}>`;
  });
}

/**
 * @param {Buffer} sourceImageBuffer
 * @param {ReadonlyArray<{ sizePixels: number; outputFileName: string }>} pngOutputSizes
 */
async function writeIntroToReqlanBlogPostPngSizeVariants(
  sourceImageBuffer,
  pngOutputSizes,
) {
  for (const { sizePixels, outputFileName } of pngOutputSizes) {
    const pngOutputPath = path.join(
      introToReqlanBlogPostDirectoryPath,
      outputFileName,
    );

    await sharp(sourceImageBuffer)
      .resize(sizePixels, sizePixels)
      .png()
      .toFile(pngOutputPath);

    console.log(`Wrote ${outputFileName} (${sizePixels}x${sizePixels})`);
  }
}

async function generateIntroToReqlanBlogPostPngs() {
  const introToReqlanBlogPostEdMascotSvgSourceText = fs.readFileSync(
    path.join(introToReqlanBlogPostDirectoryPath, "ed.svg"),
    "utf8",
  );
  const introToReqlanBlogPostEdMascotSvgBufferForLibrsvg = Buffer.from(
    bakeIntroToReqlanEdMascotSvgPathTransformsForLibrsvg(
      introToReqlanBlogPostEdMascotSvgSourceText,
    ),
    "utf8",
  );
  const introToReqlanBlogPostLogoPngBuffer = fs.readFileSync(
    path.join(introToReqlanBlogPostDirectoryPath, "logo.png"),
  );

  await writeIntroToReqlanBlogPostPngSizeVariants(
    introToReqlanBlogPostEdMascotSvgBufferForLibrsvg,
    introToReqlanBlogPostEdMascotPngOutputSizes,
  );
  await writeIntroToReqlanBlogPostPngSizeVariants(
    introToReqlanBlogPostLogoPngBuffer,
    introToReqlanBlogPostLogoPngOutputSizes,
  );
}

generateIntroToReqlanBlogPostPngs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
