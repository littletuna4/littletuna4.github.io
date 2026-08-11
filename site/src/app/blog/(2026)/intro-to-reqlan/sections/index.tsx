/**
 * Barrel exports for Intro to Reqlan blog post section components.
 *
 * Functional Requirements:
 * - Re-export every numbered section component used by intro-to-reqlan/page.tsx
 * - Keep import paths stable for the page composer (s1_, s2_, s3_, s4_… through s8_)
 */

import { exportPages } from "next/dist/export/worker";

export { default as S1IntroductionSection } from "./s1_introduction";
export { default as S2LlmsAsTranspilersSection } from "./s2_llmsAsTranspilers";
export { default as S3ReqlanSection } from "./s3_reqlan";
export { default as S4SemanticProgrammingToolsetSection } from "./s4_semanticProgrammingToolset";
export { default as S8ClosingThoughtsSection } from "./s8_closingThoughts";
export { default as S9DevelopmentSection } from "./s9_development";