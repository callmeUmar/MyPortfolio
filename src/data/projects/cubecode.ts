import type { Project } from './types';

const project: Project = {
  slug: 'cubecode',
  name: 'CubeCode',
  blurb: 'A LeetCode-style practice site for the Rubik’s cube, where every puzzle and solution is machine-verified.',
  subtitle: 'Practice problems for the Rubik’s cube, where nothing is trusted from memory.',
  stack: ['TypeScript', 'React', 'three.js', 'Web Workers'],
  links: {},
  palette: ['#cfe8e3', '#a9c9e0', '#e3d9f0'],
  category: 'Project',
  published: '2026',
  sections: [
    {
      heading: 'Overview',
      paragraphs: [
        'CubeCode turns the Rubik’s cube into a set of practice problems, the way LeetCode does for algorithms. You pick a problem, look at a goal picture, and turn a virtual 3D cube until it matches. Your moves are counted and timed, and afterwards you can compare your sequence with a reference solution.',
        'The site has 60 problems across six kinds, from warm-ups to full solves, plus a Mix mode that generates fresh puzzles on demand. There’s no login and no backend; progress lives in the browser.',
      ],
      subsections: [
        {
          heading: 'Six kinds of problem',
          paragraphs: [
            'Most problems are played: match a goal, solve several cubes at once, or take one cube through a chain of stages. Others are answered without turning anything: predict which picture a sequence makes, decide whether a position is reachable at all, or work out how many repeats of a sequence bring the cube back to solved.',
          ],
        },
      ],
    },
    {
      heading: 'Problem',
      paragraphs: [
        'Cube tutorials teach you to memorize algorithms. They rarely ask you to think: to decompose a goal into steps, to predict what a sequence does before you do it, or to tell an impossible position from a hard one. I wanted a place to practice those skills the way you practice coding problems.',
      ],
      subsections: [
        {
          heading: 'Why correctness was the hard part',
          paragraphs: [
            'A practice site is only useful if its answers are right. Cube algorithms are usually typed from memory, and a single wrong letter silently turns one pattern into another. I set one rule for the project: no move sequence is trusted because someone remembered it. Everything has to be proven by code.',
          ],
        },
      ],
    },
    {
      heading: 'Architecture',
      paragraphs: [
        'The project is split into layers that only depend downward. A pure TypeScript engine knows nothing about the UI; a 3x3 toolkit sits on top of it; problems and Mix use both; and React, three.js and storage sit at the top.',
      ],
      subsections: [
        {
          heading: 'The engine',
          paragraphs: [
            'A cube state is 54 stickers. The engine applies moves, inverts and simplifies sequences, compares states against partial goals (masks of stickers that count), and runs an exhaustive search for the shortest solution up to a depth cap.',
          ],
        },
        {
          heading: 'Problems as data',
          paragraphs: [
            'Each problem is one plain data file. Adding one means writing a file and listing it; no other code changes. Every start, goal and reference records its provenance: typed from memory and how it was checked, produced by the solver or the search, or built by a seeded script.',
          ],
        },
        {
          heading: 'Validation',
          paragraphs: [
            'A validator checks every problem on every test run: the reference actually solves the start, references of 7 moves or fewer are proven shortest by exhaustive search, named patterns pass a written description of what the pattern looks like, and “impossible” claims agree with a reachability checker built on the cube’s parity and orientation rules. Every rule has a test with a deliberately broken problem that must fail.',
          ],
        },
        {
          heading: 'The solver',
          paragraphs: [
            'Full solutions come from Kociemba’s two-phase algorithm (the cubejs package). Preparing it freezes the page for about a second, so in the browser it runs in a Web Worker and is only loaded the first time Mix needs it.',
          ],
        },
      ],
    },
    {
      heading: 'Challenges',
      subsections: [
        {
          heading: 'Building starts that prove something',
          paragraphs: [
            'The obvious way to make a problem about a named algorithm is to play the algorithm backwards. But that proves nothing: any sequence played backwards then forwards returns to solved. Instead, I describe what has happened to the pieces (which ones cycle, twist or flip), build the start from that description, and then require the remembered algorithm to solve it.',
          ],
        },
        {
          heading: 'Counting repeats two independent ways',
          paragraphs: [
            'For cycle problems, one function repeats the sequence until the cube is solved again. A second, sharing no code, reads off which pieces trade places in loops and takes the least common multiple. Tests require them to agree on 500 seeded sequences and 40 random cubes. The first gives the answer; the second writes the explanation shown to the user.',
          ],
        },
        {
          heading: 'Defining a move',
          paragraphs: [
            '“How many moves?” turned out to need one precise definition used everywhere: the counter, move limits, best-known scores and the difficulty rule all share it, including for several cubes and multi-stage problems.',
          ],
        },
      ],
    },
    {
      heading: 'Results',
      list: [
        '60 validated problems across six kinds and nine skill tags, from Easy to Hard.',
        'Every reference solution is machine-checked; those of 7 moves or fewer are proven optimal.',
        'Mix generates Easy and Medium puzzles with a proven minimum move count, and Hard puzzles drawn uniformly from all reachable positions.',
        'Nothing is random at runtime except Mix: every generated problem comes from a recorded seed, and tests rebuild each one from its recipe.',
        'Storage sits behind five interfaces, so swapping localStorage for a backend is a one-line change.',
      ],
    },
  ],
};

export default project;
