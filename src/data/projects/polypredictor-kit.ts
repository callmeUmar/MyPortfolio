import type { Project } from './types';

const project: Project = {
  slug: 'polypredictor-kit',
  name: 'PolyPredictor-Kit',
  blurb: 'Local-first Polymarket analysis toolkit — AI insights, sentiment classification, and risk detection in one click. 1st place, QuackHacks 2025.',
  subtitle: 'A Chrome extension that replaces manual Polymarket research with one-click insight.',
  stack: ['Chrome Extension', 'Python', 'Flask', 'scikit-learn', 'Gemini API', 'Polymarket Gamma API', 'Snowflake'],
  links: {
    github: 'https://github.com/raimbekalish/Poly_Predictor_Kit',
    devpost: 'https://devpost.com/software/poly-predictor-kit',
  },
  palette: ['#e6d5f7', '#f3cde0', '#d8e3fa'],
  category: 'Category — TBD',
  published: 'TBD',
  sections: [
    {
      heading: 'Overview',
      body: 'Poly Predictor Kit is a Chrome extension that helps people make sense of Polymarket events without leaving the page. It combines three tools: an AI market insight powered by Gemini, a machine-learning model that measures how much of an event’s discussion is driven by emotion, and a risk detector that flags lopsided “steamroller” trades. It gives context, probability interpretation and risks, not financial advice.',
    },
    {
      heading: 'Problem',
      body: 'Prediction market prices show what traders believe, but not why, or how fragile a position is. Comment sections mix real reasoning with hype and spam, so it’s hard to tell whether a market is moving on information or emotion. And some trades look safe because they sit at very high probability, while hiding a payoff where one loss wipes out many small wins. Casual traders rarely have the tools to see either of these.',
    },
    {
      heading: 'Architecture',
      body: 'The Chrome extension sends the current event to a Python Flask backend. The backend pulls event and market data from Polymarket’s Gamma API and sends a structured summary to Gemini, which returns a plain-language insight covering context, probability interpretation and risks. For sentiment, a TF-IDF plus logistic regression classifier, trained on real Polymarket comments, labels each comment as emotional, rational or spam, and rolls them up into a verdict like “this event looks 67% emotional.” The model is trained and retrained continuously with Snowflake’s Snowpark ML and served with scikit-learn and joblib. The steamroller detector compares a market’s probability, upside and downside, and flags trades where one loss would erase roughly a dozen wins.',
    },
    {
      heading: 'Challenges',
      body: 'One of our biggest challenges was collecting and labeling Polymarket comments to train a reliable sentiment classifier. Many comments contained sarcasm, slang, or emotional language mixed with legitimate reasoning, making classification difficult. We improved performance through data cleaning, manual labeling, and iterative model training. Another challenge was defining accurate thresholds for steamroller trades without generating excessive false positives. We also worked on integrating Snowflake’s retraining pipeline with our Flask backend and refining Gemini’s prompts to produce neutral, informative insights rather than financial recommendations.',
    },
    {
      heading: 'Results',
      body: 'We successfully shipped a fully functional Chrome extension integrating all three tools with live Polymarket data. Our sentiment classifier was trained on over 2,500 labeled comments, achieving 84% classification accuracy and a 0.81 macro F1 score on held-out test data. We tested the extension across 50+ Polymarket events, validating sentiment predictions, AI-generated insights, and steamroller risk detection. We also implemented an automated retraining pipeline using Snowflake Snowpark ML, allowing the classifier to improve as new data becomes available.',
    },
  ],
};

export default project;
