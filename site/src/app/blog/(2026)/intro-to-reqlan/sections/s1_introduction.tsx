/**
 * Introduction section for the Intro to Reqlan blog post.
 *
 * Functional Requirements:
 * - Render opening framing paragraph, “What's going on?”, and “Where its going.”
 * - Include the SemanticIntent → DesiredOutcome Mermaid flowchart
 * - Use theme typography tokens within the blog prose container
 * - Remain fully responsive within the blog layout container
 */

import React from "react";
import { MermaidDiagramWithModal } from "@/components/ui/MermaidDiagramWithModal";

const introToReqlanBlogPostAbstractionTrajectoryMermaidSource = `flowchart TD
SemanticIntent --> FunctionsAndAbstractions --> MachineInstructions --> DesiredOutcome`;

export default function S1IntroductionSection(): React.JSX.Element {
  return (
    <section className="space-y-4">
      <p>
        Hi there, thanks for stumbling across this weeks instalment of &ldquo;some
        LLM enabled ramblings of questionable quality about a half baked little
        technical project I&apos;ve gone a bit manic on lately&rdquo;.
      </p>

      <h2>What&apos;s going on?</h2>
      <p>
        You might have noticed that the world is changing really fast at the
        moment. Doubly so, if you dabble in computer use. Code is
        unprecedentedly accessible and cheap to write, and as a consequence, an
        unprecedented volume is being generated. Projects are getting more
        capable, but larger and more challenging to comprehend and reason about.
        I think there&apos;s some understated irony here, because programming and
        software engineering are the very domains that provide the tools to
        handle large, complex informational assets.
      </p>

      <h2>Where its going.</h2>
      <p>
        Despite the feverish murmurings of an AI new-world, our path as it
        relates to software looks to me as a sensible (albeit exciting)
        continuation of the trends we&apos;ve always seen in the technological
        landscape and computer development over time.
      </p>
      <p>
        The software story has been one of incremental abstraction since its
        inception.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Engineers once wrote raw machine code.</li>
        <li>Then came higher-level languages with functions and abstractions.</li>
        <li>
          Now we&apos;re expressing semantic intent in (close-to) natural
          language.
        </li>
      </ul>
      <p>
        Each step along this path has seen previous tools obsolete as we develop
        trust in an automated wrapper. Punch cards gave way to assemblers, which
        gave way to compilers. If the software truism &ldquo;code is read far
        more than it is written&rdquo; is truly timeless, than please tell me
        about all the machine code you&apos;ve been reading.
      </p>
      <MermaidDiagramWithModal
        source={introToReqlanBlogPostAbstractionTrajectoryMermaidSource}
      />
      <p>
        What software has and does do well is provide tools that repeatably
        execute scriptable tasks. For those tasks to be performant, explainable,
        on-target and ultimately useful in the face of complexity, engineering
        effort is required make the right simplifications and build the right
        abstractions (whether they be in described in functional code; or a
        spec).
      </p>
    </section>
  );
}
