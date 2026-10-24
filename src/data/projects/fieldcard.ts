import type { Project } from './types';

const project: Project = {
  slug: 'fieldcard',
  name: 'FieldCard',
  blurb: 'Fieldcard is an AI purchasing agent for trade businesses.',
  subtitle: 'An AI purchasing agent for trade businesses, built at DubHacks ‘26.',
  stack: ['FastAPI', 'Gemini', 'MongoDB Atlas', 'Next.js', 'Render', 'Photon 2.0'],
  links: {
    live: 'https://fieldcard.us',
  },
  palette: ['#d9ead6', '#c9e4de', '#eef3d8'],
  category: 'Project',
  published: '2026',
  sections: [
    {
      heading: 'Overview',
      body: 'Fieldcard is an AI purchasing agent for trade businesses. A field worker texts what they need for a job, and Fieldcard issues a single-use Visa card locked to that job, that store, that amount and a four-hour window. Every purchase is tied to a job the moment it happens, so owners see live job costs instead of piecing them together from receipts weeks later. We built it in about 36 hours at DubHacks ‘26 as a team of three, entering Visa’s “Reimagine Shopping” track.',
    },
    {
      heading: 'Problem',
      body: 'Plumbing, HVAC and electrical companies often hand their crews a shared company card. Receipts get lost, purchases never get assigned to a job, and owners find out long after the fact which jobs lost money. Existing corporate card tools budget by person or department, need an app, and leave job costing as manual work. As AI agents start making purchases on people’s behalf, there’s a second gap: someone has to make sure the agent can’t spend outside the rules.',
    },
    {
      heading: 'Architecture',
      body: 'A FastAPI backend on Render receives requests and runs a Gemini agent with tool calls. The agent only interprets the message (which job, which store, how much); a plain-code policy engine decides whether the purchase is allowed, checking the job budget, the worker’s limit and the store category. Approved requests get a single-use card scoped to one merchant category, amount and expiry, and over-limit requests go to the owner for a YES or NO by text. Every purchase writes a SHA-256-hashed intent receipt recording what was asked, how it was interpreted, who approved it and the card’s rules. MongoDB Atlas stores jobs, cards, transactions and activity, and a Next.js dashboard at fieldcard.us polls the backend to show budgets and activity live. Text messaging runs through Photon 2.0, and a guardrail layer refuses harmful requests and redacts personal data before and after Gemini runs.',
    },
    {
      heading: 'Challenges',
      body: 'The venue Wi-Fi blocked MongoDB’s port and tunneling ports, so we tested through ngrok and moved the backend to Render early. Gemini’s free tier hit rate limits during testing, a model we started on was retired mid-hackathon, and one key type we generated wasn’t accepted by the API; we added model fallback and retry limits. Our first VEYZL safety audit failed 12 of 19 probes, partly because our endpoint expected a different request field than VEYZL sent, so the model never actually ran. Fixing that exposed real gaps in refusals and PII handling, which we closed with deterministic guardrails and output redaction. Coordinating three people on one repo overnight also caused merge conflicts and an accidental overwrite of main, which we recovered from and prevented with branch protection.',
    },
    {
      heading: 'Results',
      body: 'We shipped a working product: the agent issues scoped cards, the policy engine enforces budgets and store rules, wrong-store purchases are declined, owner approvals work, and every step appears live on the dashboard at fieldcard.us. The backend has an automated test suite covering the policy engine, the agent flows and the safety probes. The safety layer refuses harmful and prompt-injection requests and never exposes full card numbers or personal data. Photon sending works in both directions, but routing inbound texts into the agent was the one piece we didn’t finish before judging, so we demoed the full flow through the dashboard and API.',
    },
  ],
};

export default project;
