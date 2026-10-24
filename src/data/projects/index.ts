import cubecode from './cubecode';
import fieldcard from './fieldcard';
import polypredictorKit from './polypredictor-kit';
import promptlock from './promptlock';
import aiVisualNovelCreator from './ai-visual-novel-creator';
import type { Project } from './types';

export * from './types';

export const PROJECTS: Project[] = [
  cubecode,
  fieldcard,
  polypredictorKit,
  promptlock,
  aiVisualNovelCreator,
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
