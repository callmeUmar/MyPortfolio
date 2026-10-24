import type { Project } from './types';

const project: Project = {
  slug: 'promptlock',
  name: 'PromptLock',
  blurb: 'Budget-guaranteed context compression and smart model routing for LLM workflows. Compress. Route. Save.',
  subtitle: 'Budget-guaranteed context compression + smart model routing. Compress. Route. Save.',
  stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'RouteLLM', 'Token Company bear-1', 'Arize Phoenix', 'MCP', 'Tailwind'],
  links: {
    github: 'https://github.com/abdirahmanbm01/nexhacks',
    live: 'https://promptlock-nexhacks.leanmcp.app/mcp',
  },
  palette: ['#eed7a3', '#dfc488', '#f2e4c2'],
  category: 'Category — TBD',
  published: 'TBD',
  sections: [
    {
      heading: 'Overview',
      body: 'PromptLock is a two-layer system that guarantees your context fits within a strict token budget (2K/4K/8K/16K) and automatically routes it to the most cost-effective LLM for the job.',
      subsections: [
        {
          heading: 'Layer 1 — Semantic Compression (Budget Guarantee)',
          paragraphs: ['PromptLock ingests context (logs, code, diffs, docs) and:'],
          list: [
            'Splits it into structured chunks (~750 tokens)',
            'Classifies each chunk (error, log, diff, api, config, docs, etc.)',
            'Prioritizes content based on your selected task mode (debug/review/build/docs)',
            'Compresses using Token Company’s bear-1 API',
            'Packs output into a hard budget target: ≤ 2K / 4K / 8K / 16K tokens — always',
          ],
          closing: ['Set 4096 tokens → get ≤4096 tokens. No exceptions.'],
        },
        {
          heading: 'Layer 2 — Intelligent Routing (Cheapest-best model)',
          paragraphs: [
            'After compression, PromptLock estimates complexity and routes to the best model automatically:',
          ],
          list: [
            'Complex debugging with stack traces → GPT-4o / Claude 3.5 Sonnet',
            'Standard code review → GPT-4o-mini',
            'Simple documentation lookup → Claude Haiku / Gemini Flash',
          ],
          closing: ['It also shows cost estimates before you send, so developers can see savings instantly.'],
        },
        {
          heading: 'Key features',
          list: [
            'Budget Guarantee: output always fits the token limit you set',
            'Task-Aware Modes: debug prioritizes errors, review prioritizes diffs, docs prioritizes documentation',
            'Transparency: see exactly what was dropped + why, restore with one click',
            'Protected Patterns: never compresses critical tokens (IPs, ports, URLs, file paths, code fences, user:/assistant: markers)',
            'Cost Calculator: real-time savings estimation',
            'Observability: full tracing of compression + routing decisions in Arize Phoenix',
            'MCP Integration: use directly inside dev workflows (Claude Code / Cursor)',
          ],
        },
      ],
    },
    {
      heading: 'Problem',
      paragraphs: [
        'Every developer using LLMs runs into the same painful constraint: context windows are limited and tokens are expensive.',
        'We’ve all been there — debugging a production issue at 2 AM, pasting 500 lines of logs into an LLM, then hitting the context limit. So you truncate… and the real error was in the last 20 lines. Gone.',
        'Or you’re doing a code review, pasting an entire diff into a top-tier model and burning $0.50 in tokens for a task a smaller model could handle for $0.02.',
        'The current workflow is broken:',
      ],
      list: [
        'Naive truncation deletes the most important information',
        'Manual selection is slow and error-prone',
        'One-model-for-everything wastes money on simple tasks',
      ],
      closing: ['So we built PromptLock to solve all three at once.'],
    },
    {
      heading: 'Architecture',
      body: 'PromptLock is a full-stack system designed like a real developer platform.',
      subsections: [
        {
          heading: 'Backend (FastAPI + Python)',
          paragraphs: ['Pipeline:'],
          list: [
            'Chunker — splits input into structured ~750-token chunks',
            'Classifier — labels chunks (error/log/diff/api/config/docs) with priority scoring',
            'Packer — greedy bin-packing algorithm enforcing the strict budget invariant',
            'Renderer — produces a clean “Prompt Pack”: System + Context + Key Facts + Actions + Questions',
            'Router — complexity scoring + RouteLLM model selection + cost comparison',
          ],
        },
        {
          heading: 'Frontend (Next.js + TypeScript)',
          paragraphs: ['We built a devtools-style UI that feels fast and transparent:'],
          list: [
            'Budget selector (2K/4K/8K/16K) + mode dropdown',
            'Aggressiveness dial for compression strength',
            'Before/after token metrics',
            'Dropped-content report with restore flow',
            'Copy-ready prompt pack output',
          ],
        },
        {
          heading: 'Integrations',
          list: [
            'Token Company bear-1 — semantic compression that preserves meaning',
            'RouteLLM — intelligent routing to the optimal model',
            'Arize Phoenix — full observability for chunking/classification/packing/routing',
            'Model Context Protocol (MCP) — native IDE workflow integration',
            'LeanMCP — hosted deployment of our MCP server for instant usage',
          ],
        },
        {
          heading: 'MCP Integration (Live on LeanMCP)',
          paragraphs: [
            'PromptLock is deployed as a live MCP server on LeanMCP so developers can call it directly from IDE workflows.',
          ],
          list: [
            'MCP Endpoint: https://promptlock-nexhacks.leanmcp.app/mcp',
            'Health Check: https://promptlock-nexhacks.leanmcp.app/health',
            'Dashboard: https://ship.leanmcp.com/projects/2b4ec4c3-6f3c-4856-b12b-4a5c53435f2e',
          ],
        },
      ],
    },
    {
      heading: 'Challenges',
      subsections: [
        {
          heading: 'The budget guarantee problem',
          paragraphs: ['Guaranteeing token budgets sounds simple until edge cases appear:'],
          list: [
            'token counting must be exact',
            'prompt template overhead must be included',
            'compression ratios vary depending on content type',
            'sometimes high-priority chunks don’t fit cleanly',
          ],
          closing: [
            'We solved it with a conservative packing algorithm, reserved headroom, and post-compression validation.',
          ],
        },
        {
          heading: 'Classification accuracy',
          paragraphs: [
            'Early versions misclassified logs/config/diffs frequently. We improved this with hierarchical classification: structure → keyword signals → surrounding context patterns.',
          ],
        },
        {
          heading: 'Preserving semantic meaning',
          paragraphs: [
            'Compression can destroy important details (ports, IP addresses, file paths). We implemented protected patterns to keep critical tokens intact.',
          ],
        },
        {
          heading: 'Real-time performance',
          paragraphs: [
            'Large inputs initially took 3–5 seconds. We optimized with parallel classification, caching, streaming updates, and debounced UI handling.',
          ],
        },
      ],
    },
    {
      heading: 'Results',
      paragraphs: ['Across realistic dev inputs, PromptLock achieves:'],
      list: [
        '66% average token reduction from compression',
        '20–40% additional savings from routing',
        'Up to 80% total cost savings with zero semantic loss',
      ],
      subsections: [
        {
          heading: 'Accomplishments we’re proud of',
          list: [
            'Budget guarantee works reliably (fuzz-tested across thousands of random inputs)',
            '66% average compression without meaning loss',
            'A demo that instantly proves why task-aware compression beats truncation',
            'Full tracing in Phoenix for every decision',
            'MCP integration that makes PromptLock usable without leaving your editor',
          ],
        },
        {
          heading: 'What we learned',
          list: [
            'Token counting is harder than it looks across model ecosystems',
            'Transparency builds trust (developers want to know what got removed and why)',
            'Most dev context is noise — task-aware prioritization is the real win',
            'Routing multiplies savings beyond compression alone',
            'MCP makes LLM tooling feel native to real workflows',
          ],
        },
      ],
    },
  ],
};

export default project;
