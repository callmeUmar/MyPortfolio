export type Project = {
  id: string;
  title: string;
  blurb: string;
  highlight?: string;
  links: { demo?: string; repo?: string; more?: string };
  images?: string[];
};

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/umar-turdumambetov-6160ba368/",
  github: "https://github.com/1hewarr10r",
  cv: `${import.meta.env.BASE_URL}Umar_Turdumambetov_Resume.pdf`,
  carPriceDrive:
    "https://drive.google.com/drive/folders/13AngcldziXQsCfKh6fylokz6W0F6s_6Q?usp=drive_link",
};

const IMG = (folder: string, file: string) =>
  `${import.meta.env.BASE_URL}projects/${folder}/${file}`;

export const PROJECTS: Project[] = [
  {
    id: "polypredictor-kit",
    title: "PolyPredictor-Kit",
    blurb: "🥇 QuackHacks 2025 Polymarket Track winner — PolyPredictor-Kit",
    links: {
      repo: "https://github.com/raimbekalish/Poly_Predictor_Kit",
      demo: "https://devpost.com/software/poly-predictor-kit",
    },
    highlight:
      "1st place on the QuackHacks 2025 Polymarket track. This toolkit automates real Polymarket analysis end-to-end. It includes: " +
      "• AI Market Insight – Fetches all event + market data from Polymarket’s Gamma API and uses Gemini to generate a clean, human-readable breakdown of expectations, risks, and scenarios. " +
      "• Emotional vs Rational Classifier – A custom sklearn model trained on real Polymarket comments, integrated with Snowflake, to show whether sentiment is emotional or rational. " +
      "• Steamroller Detector – Identifies asymmetric 'steamroller' markets using liquidity, implied probabilities, wipeout factor, and risk structure. " +
      "Built as a Chrome extension with local Flask services across ports 5000/5001/5002, combining Gamma API, Gemini API, custom ML models, and automated scraping. The goal is to eliminate manual scraping and slow UI, giving instant clean insights.",
    images: [IMG("PolyPredictor-Kit", 'PolyPredictor-kit.jpg'),
    IMG("PolyPredictor-Kit", 'PolyPredictor-kit2.jpg')
    ],
  },

  {
    id: "prompt-lock",
    title: "PromptLock",
    blurb: "Budget-Guaranteed Context Compression + Smart Model Routing",
    highlight:
      "PromptLock ensures your prompts always fit within a strict token limit (2K / 4K / 8K / 16K) while automatically routing them to the most cost-effective LLM for the task. Instead of truncating important context or overpaying for large models, PromptLock semantically compresses logs, code, diffs, and docs, prioritizes what matters for your task, and guarantees the result fits your budget. After compression, it intelligently selects the best model—so simple tasks stay cheap and complex ones stay accurate. The result: fewer lost errors, faster workflows, and up to 80% lower LLM costs—with zero manual prompt tuning.",
    links: {
      repo: "https://github.com/abdirahmanbm01/nexhacks",
      demo: "https://devpost.com/software/promptlock?ref_content=my-projects-tab&ref_feature=my_projects",
    },
    images: [],
  },

  {
    id: "visual-novel-creator",
    title: "Visual Novel Creator",
    blurb:
      "🥇CodeDay 2025 winner — AI Visual Novel Creator",
    highlight:
      "An end-to-end AI visual novel generator built with Gemini, Stability AI, and Ren’Py. The system creates full narratives, character art, and scene images automatically, then compiles them into Ren'Py scripts with transitions, scaling logic, and preloaded assets. This taught our team how to combine AI pipelines with a real game engine.",
    links: {
      repo: "https://github.com/Vimpel-O-O/AI_Visual_Novel_Creator",
      demo: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6",
    },
    images: [
      IMG("VisualNovelCreator", "1.jpg"),
      IMG("VisualNovelCreator", "2.jpg"),
      IMG("VisualNovelCreator", "3.jpg"),
      IMG("VisualNovelCreator", "4.jpg")
    ],
  },

  {
    id: "car-estimator",
    title: "Car Price Estimator",
    blurb:
      "ML model that estimates car value based on attributes like year, mileage, and make.",
    highlight: "This project is an ML model that predicts used-car prices using a Kaggle dataset. I built a full pipeline with data cleaning, feature engineering (encoding brands, mileage scaling, year normalization), and trained multiple regression models to compare performance. The final model produces reliable price estimates using key attributes like year, mileage, make, condition, and engine details. The system also includes an interactive interface for testing predictions.",
    links: { more: "https://github.com/1hewarr10r/Car_Price_Estimator" },
    images: [
      IMG("CarPriceEstimator", "1.jpg"),
      IMG("CarPriceEstimator", "2.jpg"),
      IMG("CarPriceEstimator", "3.jpg"),
    ],
  },
];
