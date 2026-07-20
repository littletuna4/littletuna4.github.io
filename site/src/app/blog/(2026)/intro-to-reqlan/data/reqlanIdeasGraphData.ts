/**
 * Functional Requirements:
 * - Define Reqlan blog post concept nodes and relational edges for graph visualization
 * - Group nodes into five categories: language, data format, tool, concept, practice
 * - Provide category styling aligned with THEME_SYSTEM.md palette semantics
 * - Support light and dark mode color pairs per node category
 */

export interface ReqlanIdeasGraphEdgeDefinition {
  source: string;
  target: string;
}

export interface ReqlanIdeasGraphCategorySettings {
  color: {
    light: string;
    dark: string;
  };
  size: number;
}

export interface ReqlanIdeasGraphNodeDefinition {
  id: string;
  label: string;
  category: ReqlanIdeasGraphCategorySettings;
}

export const reqlanIdeasGraphCategoryInfo: Record<
  string,
  ReqlanIdeasGraphCategorySettings
> = {
  language: {
    size: 10,
    color: { light: '#1e3a5f', dark: '#4a90e2' },
  },
  dataFormat: {
    size: 8,
    color: { light: '#059669', dark: '#10b981' },
  },
  tool: {
    size: 7,
    color: { light: '#0891b2', dark: '#06b6d4' },
  },
  concept: {
    size: 8,
    color: { light: '#7c3aed', dark: '#8b5cf6' },
  },
  practice: {
    size: 7,
    color: { light: '#ea580c', dark: '#f97316' },
  },
} as const;

export const reqlanIdeasGraphNodes: ReqlanIdeasGraphNodeDefinition[] = [
  // language — grammar and core primitives
  { id: 'reqlan', label: 'Reqlan', category: reqlanIdeasGraphCategoryInfo.language },
  { id: 'ideas', label: 'Ideas', category: reqlanIdeasGraphCategoryInfo.language },
  { id: 'attributes', label: 'Attributes', category: reqlanIdeasGraphCategoryInfo.language },
  { id: 'references', label: 'References', category: reqlanIdeasGraphCategoryInfo.language },

  // data format — serialization and storage (removed generic formats)
  { id: 'requirements-graph', label: 'Requirements Graph', category: reqlanIdeasGraphCategoryInfo.dataFormat },
  { id: 'rq-files', label: '.rq Files', category: reqlanIdeasGraphCategoryInfo.dataFormat },

  // tool — execution and validation (removed speculative roadmap items)
  { id: 'ide-extension', label: 'IDE Extension', category: reqlanIdeasGraphCategoryInfo.tool },
  { id: 'lsp-integration', label: 'LSP', category: reqlanIdeasGraphCategoryInfo.tool },
  { id: 'static-analysis', label: 'Static Analysis', category: reqlanIdeasGraphCategoryInfo.tool },
  { id: 'lean-verification', label: 'Lean (Validation Benchmark)', category: reqlanIdeasGraphCategoryInfo.tool },

  // concept — architectural imperatives (removed analogies and personas)
  { id: 'abstraction-trajectory', label: 'Abstraction Trajectory', category: reqlanIdeasGraphCategoryInfo.concept },
  { id: 'llm-transpilers', label: 'LLMs as Transpilers', category: reqlanIdeasGraphCategoryInfo.concept },
  { id: 'non-determinism', label: 'Non-determinism', category: reqlanIdeasGraphCategoryInfo.concept },
  { id: 'verification-pattern', label: 'LLM Success Enabled by incremental Verification', category: reqlanIdeasGraphCategoryInfo.concept },
  { id: 'semantic-programming', label: 'Semantic Programming', category: reqlanIdeasGraphCategoryInfo.concept },

  // practice — operational directives (removed symptom nodes like todo-sprawl)
  { id: 'agent-specification', label: 'Agent Specification', category: reqlanIdeasGraphCategoryInfo.practice },
  { id: 'context-curation', label: 'Context Curation', category: reqlanIdeasGraphCategoryInfo.practice },
  { id: 'decomposition', label: 'Decomposition', category: reqlanIdeasGraphCategoryInfo.practice },
  { id: 'continuous-verification', label: 'Continuous Verification', category: reqlanIdeasGraphCategoryInfo.practice },
];

export const reqlanIdeasGraphEdges: ReqlanIdeasGraphEdgeDefinition[] = [
  // Causal Chain: Problem -> Paradigm -> Practice -> Implementation
  { source: 'abstraction-trajectory', target: 'llm-transpilers' },
  { source: 'llm-transpilers', target: 'non-determinism' },
  { source: 'non-determinism', target: 'verification-pattern' },
  { source: 'lean-verification', target: 'verification-pattern' },
  { source: 'verification-pattern', target: 'semantic-programming' },
  
  // Practice Flow: Paradigm drives specific engineering behaviors
  { source: 'semantic-programming', target: 'continuous-verification' },
  { source: 'semantic-programming', target: 'agent-specification' },
  { source: 'context-curation', target: 'agent-specification' },
  { source: 'decomposition', target: 'agent-specification' },

  // Structural Flow: Practices necessitate specific data formats
  { source: 'agent-specification', target: 'requirements-graph' },
  { source: 'continuous-verification', target: 'requirements-graph' },
  { source: 'requirements-graph', target: 'rq-files' },

  // Language Flow: Formats encode the domain language
  { source: 'rq-files', target: 'reqlan' },
  { source: 'reqlan', target: 'ideas' },
  { source: 'reqlan', target: 'attributes' },
  { source: 'reqlan', target: 'references' },

  // Tool Flow: Tooling interfaces with language for validation
  { source: 'ide-extension', target: 'lsp-integration' },
  { source: 'lsp-integration', target: 'reqlan' },
  { source: 'lsp-integration', target: 'static-analysis' },
  { source: 'static-analysis', target: 'continuous-verification' },
];