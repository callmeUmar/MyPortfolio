import type { Project } from './types';

const project: Project = {
  slug: 'ai-visual-novel-creator',
  name: 'AI Visual Novel Creator',
  blurb: "Generate a complete, playable Ren'Py visual novel from a story idea. 1st place, CodeDay 2025.",
  subtitle: 'Create your own visual novel using AI for story and image generation.',
  stack: ['Python', 'Google Gemini', 'Stability AI', "Ren'Py", 'JSON pipelines'],
  links: {
    github: 'https://github.com/Vimpel-O-O/AI_Visual_Novel_Creator',
    devpost: 'https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6',
  },
  palette: ['#fbd7d0', '#f5c9dd', '#fde8d0'],
  category: 'Category — TBD',
  published: 'TBD',
  sections: [
    {
      heading: 'Overview',
      body: "A full AI pipeline that turns a few prompts into a finished visual novel. Tell it the narrative, genre, art style, and characters you want, and the system handles the rest — generating the script, dialogue, and scene images, then packaging everything into a Ren'Py project ready to play.",
      subsections: [
        {
          heading: 'Team and experience',
          paragraphs: [
            'Our group has mixed experience levels. A few members have prior experience with Python programming and AI APIs, while others are new to both game development and Ren’Py. This project was our first time combining visual novel scripting with generative AI tools. We learned to integrate APIs (Gemini for story generation and Stability AI for image creation), structure a Ren’Py project, and manage code collaboration across multiple scripts. Overall, it was a learning-focused project where everyone contributed to both coding and creative decisions.',
          ],
        },
      ],
    },
    {
      heading: 'Problem',
      body: "Creating a visual novel from scratch requires multiple skills, including storytelling, programming, character design, and digital art. For beginners, the process can be time-consuming and technically challenging, especially when working with game engines like Ren'Py. Existing tools often require users to create scripts, dialogue, and visual assets separately. We wanted to simplify this process by building an AI-powered system that allows anyone to turn a creative idea into a playable visual novel without extensive programming or artistic experience.",
    },
    {
      heading: 'Architecture',
      body: "Story collection: interactive prompts capture narrative, genre, art style, characters, and mood as structured JSON. Story generation: Google Gemini 2.5 Flash produces a complete scene-by-scene story (background, characters, camera, mood, dialogue) in a structured format. Script conversion: the JSON is auto-converted into a Ren'Py .rpy script with character definitions and dialogue blocks. Image generation: Stability AI renders each scene at 1920×1080, 16:9, using a shared style bible to keep the look consistent across scenes. Output: a drop-in Ren'Py project folder — open it in the SDK, hit Launch, play.",
    },
    {
      heading: 'Challenges',
      paragraphs: [
        'One of our biggest challenges was integrating multiple systems — connecting Ren’Py with external APIs like Gemini and Stability AI while keeping the game flow stable. Managing asynchronous image generation during the loading and gameplay phases required careful pipeline logic to ensure the next scenes were ready before the player reached them.',
        'We also ran into issues with AI prompt consistency, such as maintaining character appearance across scenes and ensuring the generated story stayed coherent and simple. Another challenge was handling image resolution and scaling in Ren’Py, since different aspect ratios sometimes caused layout problems.',
        'Finally, collaboration itself was a challenge — dividing tasks among six people, keeping the code organized, and managing API keys and dependencies across machines took planning and communication.',
      ],
    },
    {
      heading: 'Results',
      body: "We successfully developed a working AI-powered pipeline that transforms user prompts into playable Ren'Py visual novels. The system integrates Google Gemini 2.5 Flash for story and dialogue generation with Stability AI for scene illustrations, automatically converting the generated content into a structured Ren'Py project. Our prototype demonstrated the ability to generate complete stories, character dialogue, and visual assets with minimal manual intervention. We also gained hands-on experience with generative AI, API integration, Python automation, and collaborative software development, demonstrating how AI can make game creation more accessible to beginners.",
    },
  ],
};

export default project;
