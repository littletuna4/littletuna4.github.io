/**
 * Reqlan introduction section for the Intro to Reqlan blog post.
 *
 * Functional Requirements:
 * - Introduce the Reqlan open-source toolset and the semantic-requirements workflow it supports
 * - Summarize language, CLI, and extension capabilities
 * - Link ontology.rq, reqlan.com, and VS Code / Cursor install deeplinks
 * - List near-term next steps for the project
 * - Use theme typography tokens and introToReqlanBlogPostThemedLinkClassName; remain fully responsive
 */

import React from "react";
import { introToReqlanBlogPostThemedLinkClassName } from "./introToReqlanBlogPostThemedLinkClassName";

const introToReqlanBlogPostReqlanWebsiteHref = "https://reqlan.com";
const introToReqlanBlogPostOntologyRqGithubHref =
  "https://github.com/littletuna4/reqlan/blob/main/reqlan%20rq/language/ontology.rq";
const introToReqlanBlogPostVsCodeExtensionDeeplinkHref =
  "vscode:extension/reqlan.reqlan-extension";
const introToReqlanBlogPostCursorExtensionDeeplinkHref =
  "cursor:extension/reqlan.reqlan-extension";

export default function S3ReqlanSection(): React.JSX.Element {
  return (
    <section className="space-y-4">
      <h2>reqlan</h2>
      <p>
        I thank you for reading this far as so, as, up to this point I&apos;ve
        been parroting some stale foundational ideas. However, when considered
        together, a new workflow emerges, and I&apos;ve been contributing on an
        open source toolset,{" "}
        <a
          href={introToReqlanBlogPostReqlanWebsiteHref}
          className={introToReqlanBlogPostThemedLinkClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          reqlan
        </a>{" "}
        that support it.
      </p>

      <p>The workflow:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Write a graph of semantic requirements</li>
        <li>Store as text in repository</li>
        <li>
          Store requirements as atomic ideas
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>with tracked status</li>
            <li>
              With close integration to implementation, tests and related
              interfaces.
            </li>
          </ul>
        </li>
        <li>Use an LLM to implement and maintain alignment with the graph</li>
        <li>Integration of documentation and build specification</li>
      </ul>

      <p>The tool:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Reqlan language
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Token efficient, minimal and ergonomic.</li>
            <li>
              Focus on supporting rich cross referencing across a code base.
            </li>
          </ul>
        </li>
        <li>
          Reqlan CLI
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              Offering parsing, export, and context driven semantic search
              functionality.
            </li>
          </ul>
        </li>
        <li>
          Reqlan Extension
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Exposing a user interface for the cli functionality.</li>
            <li>Language support and syntax features</li>
          </ul>
        </li>
      </ul>

      <p>
        The tool supports context efficient prompting via a maintainable semantic
        graph. It attempts to ground the unbounded support offered by an agent;
        with best parts of demonstrated rigorous engineering practice.
      </p>
      <p>
        The project has been developed alongside and using reqlan and forms it
        own case study. For more technical detail on the concepts in the
        project, I&apos;d encourage you to start by reviewing the{" "}
        <a
          href={introToReqlanBlogPostOntologyRqGithubHref}
          className={introToReqlanBlogPostThemedLinkClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          ontology.rq
        </a>{" "}
        file in the repo.
      </p>
      <p>
        It can be installed in{" "}
        <a
          href={introToReqlanBlogPostVsCodeExtensionDeeplinkHref}
          className={introToReqlanBlogPostThemedLinkClassName}
        >
          vscode
        </a>
        ,{" "}
        <a
          href={introToReqlanBlogPostCursorExtensionDeeplinkHref}
          className={introToReqlanBlogPostThemedLinkClassName}
        >
          cursor
        </a>
      </p>

      <h3>Next steps</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          improved support and rigour in the language grammar — continuous
          improvement
        </li>
        <li>
          More ide functionality
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              improved search experience
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>indexing ideas against embeddings</li>
              </ul>
            </li>
            <li>more functions</li>
          </ul>
        </li>
        <li>
          Verification of a lot of assumptions (this is very vibe coded)
        </li>
        <li>port the parsing to rust</li>
        <li>improved search</li>
        <li>reqlan cloud</li>
      </ul>
    </section>
  );
}
