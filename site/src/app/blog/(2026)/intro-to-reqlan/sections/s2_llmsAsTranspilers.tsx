/**
 * LLMs-as-transpilers section for the Intro to Reqlan blog post.
 *
 * Functional Requirements:
 * - Argue that prompting an LLM is incremental transpilation of natural language
 * - Present LLM quirks vs conventional compilers in a numbered characteristics table
 * - Merge adjacent rows that share a mitigation via rowspan (testing¹, incrementality², “just nice”)
 * - Style table cells with full-opacity border-border horizontal and vertical rules for readable grid lines
 * - Footnote mitigations: comprehensive testing (¹) and incrementality (²)
 * - Link AI-led Erdős / Lean verification as the sequential-verification thesis
 * - Argue atomic requirements enable LLM self-testing against semantic requirements
 * - Use theme typography / border tokens and shared themed link classes; remain fully responsive
 */

import React from "react";
import { introToReqlanBlogPostThemedLinkClassName } from "./introToReqlanBlogPostThemedLinkClassName";

type IntroToReqlanBlogPostLlmsAsTranspilersQuirkTableRow = {
  readonly rowNumber: number;
  readonly problemOrCharacteristic: React.ReactNode;
  readonly mitigationRowSpan?: number;
  readonly mitigation?: React.ReactNode;
};

const introToReqlanBlogPostLlmsAsTranspilersQuirkTableRows: ReadonlyArray<IntroToReqlanBlogPostLlmsAsTranspilersQuirkTableRow> =
  [
    {
      rowNumber: 1,
      problemOrCharacteristic: (
        <>
          Non-deterministic and potentially <em>silently</em> incorrect
        </>
      ),
      mitigationRowSpan: 3,
      mitigation: (
        <>
          <strong>Integration with comprehensive testing</strong>
          <sup>1</sup>
        </>
      ),
    },
    {
      rowNumber: 2,
      problemOrCharacteristic: (
        <>
          Cooperative to a fault — won&apos;t reliably error when given faulty
          inputs
        </>
      ),
    },
    {
      rowNumber: 3,
      problemOrCharacteristic: <>Sensitive to input quality</>,
    },
    {
      rowNumber: 4,
      problemOrCharacteristic: (
        <>Sensitive to batch/job size due to context mechanics</>
      ),
      mitigationRowSpan: 2,
      mitigation: (
        <>
          <strong>Incrementality</strong>
          <sup>2</sup>
        </>
      ),
    },
    {
      rowNumber: 5,
      problemOrCharacteristic: (
        <>Expensive to run at scale, or completely on each deployment</>
      ),
    },
    {
      rowNumber: 6,
      problemOrCharacteristic: <>General-purpose</>,
      mitigationRowSpan: 4,
      mitigation: <>That&apos;s just nice</>,
    },
    {
      rowNumber: 7,
      problemOrCharacteristic: <>Resilient to human input imperfection</>,
    },
    {
      rowNumber: 8,
      problemOrCharacteristic: <>Unfussy when it comes to syntax</>,
    },
    {
      rowNumber: 9,
      problemOrCharacteristic: (
        <>The compiler can help support in the development its own inputs.</>
      ),
    },
  ];

export default function S2LlmsAsTranspilersSection(): React.JSX.Element {
  return (
    <section className="space-y-4">
      <h2>LLMs as Transpilers</h2>
      <p>
        With those assertions in mind, I think it is natural to consider the act
        of writing an application by prompting an LLM as incrementally{" "}
        <strong>transpiling natural language</strong> into another target
        language. Of course though, performing transpilation with LLMs has quirks
        because (unlike most compiled languages) they are:
      </p>

      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full border-collapse border border-border text-sm sm:text-base">
          <thead>
            <tr className="bg-background-secondary">
              <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                #
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                Problem / Characteristic
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                Mitigation
              </th>
            </tr>
          </thead>
          <tbody>
            {introToReqlanBlogPostLlmsAsTranspilersQuirkTableRows.map(
              (quirkTableRow) => (
                <tr key={quirkTableRow.rowNumber}>
                  <td className="border border-border px-3 py-2 font-medium align-top">
                    {quirkTableRow.rowNumber}
                  </td>
                  <td className="border border-border px-3 py-2 text-foreground-secondary align-top">
                    {quirkTableRow.problemOrCharacteristic}
                  </td>
                  {quirkTableRow.mitigation !== undefined &&
                    quirkTableRow.mitigationRowSpan !== undefined && (
                      <td
                        className="border border-border px-3 py-2 text-foreground-secondary align-middle"
                        rowSpan={quirkTableRow.mitigationRowSpan}
                      >
                        {quirkTableRow.mitigation}
                      </td>
                    )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>

      <ol className="list-none space-y-2 pl-0 text-sm text-foreground-secondary sm:text-base">
        <li>
          <sup>1</sup> <i>These issues are addressed through integration with
          comprehensive testing.</i>
        </li>
        <li>
          <sup>2</sup> <i>Incrementality addresses this by limiting work to affected
          portions, although previously considered dependencies may still need to
          be resolved. A dependency graph can address this remaining issue.</i>
        </li>
      </ol>

      <p>
        Most of the time, the satisfaction of semantic equivalence doesn&apos;t
        require perfect determinism, and upfront certainty, especially when paired
        with strong testing and verification feedback loops.
      </p>
      <p>
        This has considerable implications for code review and long-term
        maintainability. With sufficiently specific prompts and well designed
        harnesses, its getting clear that we can reasonably trust LLMs to
        consistently add value to the definition, implementation and verification
        of logical systems.
      </p>
      <p>
        In fact, in just the last few months there have been some verifiable{" "}
        <a
          href="https://physicsworld.com/a/ai-led-solutions-of-erdos-problems-spark-debate-over-the-future-of-mathematics/"
          className={introToReqlanBlogPostThemedLinkClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          AI-led solutions of Erdős problems
        </a>
        . What I find particularly interesting and actionable about this
        demonstration, is that the proofs are verified using LEAN (a functional
        programming language used by mathematicians to support proof
        verification). Providing an LLM access to lean provides it the grounding
        required to work through a complex problem. By checking that the steps of
        reasoning in a proposed proof are valid, an LLM&apos;s weaknesses can be
        substantially mitigated. AI is undoubtedly going to make mathematical
        research interesting in coming years thanks to LEAN - my thesis here is
        that the same pattern of sequential verification against firm
        requirements can be used for general logic building problems if a harness
        or system organises them appropriately.
      </p>
      <p>
        Additionally, I believe by making the requirements suitably atomic, LLMs
        are poised to test themselves against semantic requirements; and make
        productive change.
      </p>
    </section>
  );
}
