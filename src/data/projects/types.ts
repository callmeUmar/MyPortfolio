/** Content order: paragraphs, then the bulleted list, then closing paragraphs. URLs become links. */
export type ProjectSubsection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  closing?: string[];
};

export type ProjectSection = {
  heading: string;
  /** A single paragraph. Use `paragraphs` instead when there is more than one. */
  body?: string;
  paragraphs?: string[];
  /** Rendered as a bulleted list after the paragraphs. */
  list?: string[];
  /** Paragraphs rendered after the list. */
  closing?: string[];
  /** Rendered as h3s; they nest under this section in the table of contents. */
  subsections?: ProjectSubsection[];
  placeholder?: boolean;
};

export type ProjectLinks = {
  github?: string;
  live?: string;
  devpost?: string;
  drive?: string;
};

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  subtitle: string;
  stack: string[];
  links: ProjectLinks;
  palette: [string, string, string];
  category: string;
  published: string;
  sections: ProjectSection[];
};

export const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Placeholder — replace with the real content.]';
