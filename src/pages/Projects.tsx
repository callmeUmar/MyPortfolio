import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import ProjectAccordion from '../components/ProjectAccordion';

const projectsData = [
  {
    title: "Churn Predictor",
    shortDescription: "Production-ready ML system predicting telecom customer churn — full MLOps pipeline from data to deployment.",
    fullDescription: (
      <>
        <p>End-to-end machine learning system built on the Telco Customer dataset (7,043 customers, 21 features). The pipeline handles data validation, feature engineering, and trains an XGBoost classifier tuned with Optuna (100 trials, optimized for recall) and tracked in MLflow. Predictions are served through a FastAPI REST API with an interactive Gradio UI, containerized with Docker, and deployed via GitHub Actions → Docker Hub → Render.</p>
        <p><strong>Stack:</strong> XGBoost · scikit-learn · Optuna · MLflow · FastAPI · Gradio · Docker · GitHub Actions</p>
      </>
    ),
    githubLink: "https://github.com/callmeUmar/ChurnPrediction",
    liveLink: "https://churnprediction-1zdd.onrender.com"
  },
  {
    title: "PolyPredictor-Kit",
    shortDescription: "Local-first Polymarket analysis toolkit — AI insights, sentiment classification, and risk detection in one click. 1st Place at QuackHacks 2025.",
    fullDescription: (
      <>
        <p>A full Polymarket analysis suite built as a Chrome extension with local Python backends, designed to replace slow, inconsistent manual research with one-click insights. Open any Polymarket event, hit a button, and get a clean read on what the market is actually signaling.</p>
        <p><strong>Three core features:</strong></p>
        <ul>
          <li><strong>AI Market Insight</strong> — Pulls event and market data from Polymarket's Gamma API and uses Gemini to generate a quick breakdown of expectations, risks, and likely scenarios.</li>
          <li><strong>Emotional vs. Rational Sentiment Classifier</strong> — A custom scikit-learn model trained on labeled Polymarket comments (with Snowflake integration) that scores how noisy or composed a market is. Emotional markets pump and dump harder; rational markets behave differently.</li>
          <li><strong>Steamroller Detector</strong> — Flags markets with asymmetric risk — tiny upside vs. massive downside — using liquidity, implied probabilities, wipeout factor, and time to resolution.</li>
        </ul>
        <p><strong>Stack:</strong> Chrome extension · Python · Flask · scikit-learn · Gemini API · Polymarket Gamma API · Snowflake</p>
      </>
    ),
    githubLink: "https://github.com/raimbekalish/Poly_Predictor_Kit",
    devpostLink: "https://devpost.com/software/poly-predictor-kit"
  },
  {
    title: "PromptLock",
    shortDescription: "Budget-guaranteed context compression and smart model routing for LLM workflows. Compress. Route. Save.",
    fullDescription: (
      <>
        <p>A two-layer system that solves the two most expensive problems in LLM development: oversized context windows and overpaying for simple tasks. PromptLock guarantees your context fits within a hard token budget (2K/4K/8K/16K) and automatically routes the compressed output to the most cost-effective model for the job.</p>
        <p><strong>Two layers:</strong></p>
        <ul>
          <li><strong>Semantic Compression</strong> — Splits input into ~750-token chunks, classifies them (error, log, diff, api, config, docs), prioritizes by task mode (debug/review/build/docs), and uses bear-1 to pack everything into a hard token ceiling. Protected patterns keep critical tokens like IPs, ports, file paths, and code fences intact.</li>
          <li><strong>Intelligent Routing</strong> — Estimates complexity and routes to the right model: heavy debugging to GPT-4o or Claude 3.5 Sonnet, standard reviews to GPT-4o-mini, simple lookups to Haiku or Gemini Flash. Real-time cost estimates show savings before you send.</li>
        </ul>
        <p><strong>Results:</strong> 66% average token reduction from compression, 20–40% additional savings from routing, and up to 80% total cost reduction with no semantic loss.</p>
        <p><strong>Stack:</strong> Next.js · TypeScript · FastAPI · Python · RouteLLM · Token Company bear-1 · Arize Phoenix · MCP · Tailwind</p>
      </>
    ),
    githubLink: "https://github.com/abdirahmanbm01/nexhacks",
    liveLink: "https://promptlock-nexhacks.leanmcp.app/mcp"
  },
  {
    title: "AI Visual Novel Creator",
    shortDescription: "Generate a complete, playable Ren'Py visual novel from a story idea. 1st Place at CodeDay 2025.",
    fullDescription: (
      <>
        <p>A full AI pipeline that turns a few prompts into a finished visual novel. Tell it the narrative, genre, art style, and characters you want, and the system handles the rest — generating the script, dialogue, and scene images, then packaging everything into a Ren'Py project ready to play.</p>
        <p><strong>Pipeline:</strong></p>
        <ul>
          <li><strong>Story collection</strong> — Interactive prompts capture narrative, genre, art style, characters, and mood as structured JSON.</li>
          <li><strong>Story generation</strong> — Google Gemini 2.5 Flash produces a complete scene-by-scene story (background, characters, camera, mood, dialogue) in a structured format.</li>
          <li><strong>Script conversion</strong> — The JSON is auto-converted into a Ren'Py .rpy script with character definitions and dialogue blocks.</li>
          <li><strong>Image generation</strong> — Stability AI renders each scene at 1920×1080, 16:9, using a shared style bible to keep the look consistent across scenes.</li>
          <li><strong>Output</strong> — A drop-in Ren'Py project folder. Open it in the SDK, hit Launch, play.</li>
        </ul>
        <p><strong>Stack:</strong> Python · Google Gemini · Stability AI · Ren'Py · JSON pipelines</p>
      </>
    ),
    githubLink: "https://github.com/Vimpel-O-O/AI_Visual_Novel_Creator",
    devpostLink: "https://showcase.codeday.org/project/cmhgqspw91903j5my04z26yk6"
  },
  {
    title: "Car Price Estimator",
    shortDescription: "ML model that predicts used vehicle prices from spec data — my first end-to-end machine learning project.",
    fullDescription: (
      <>
        <p>A regression-based ML model that estimates the fair market price of a used vehicle from its core specs. Built on a Kaggle used-car dataset, the model learns the relationship between vehicle features and listing price, then serves predictions through a local Flask web app.</p>
        <p><strong>How it works:</strong></p>
        <ul>
          <li><strong>Inputs:</strong> Year, Make, Model, Engine, Title status, Accident report, Mileage, Fuel type.</li>
          <li><strong>Pipeline:</strong> Cleaned and preprocessed the raw Kaggle dataset, encoded categorical features (Make, Model, Engine, Fuel type, Title, Accident status), and trained a regression model on the resulting feature set.</li>
          <li><strong>Serving:</strong> A lightweight Flask app loads the trained model and exposes a simple form-based UI. Enter a vehicle's specs, get an estimated price back.</li>
          <li><strong>Run locally:</strong> Download from Drive, run app.py, and open the local IP address it prints to test it in the browser.</li>
        </ul>
        <p><strong>Why it matters to me:</strong> This was my first real ML project — the one where the whole loop clicked: messy raw data → cleaning → feature engineering → training → evaluation → deployment as a usable app. Every project I've built since stands on what I learned here.</p>
        <p><strong>Stack:</strong> Python · scikit-learn · Pandas · NumPy · Flask</p>
      </>
    ),
    githubLink: "https://github.com/callmeUmar/Car_Price_Estimator",
    driveLink: "https://drive.google.com/drive/folders/13AngcldziXQsCfKh6fylokz6W0F6s_6Q?usp=drive_link"
  }
];

export default function Projects() {
  return (
    <PageLayout
      title="Projects"
      subtitle="Showcasing creative engineering"
      description="Here is a collection of my past work and projects. Each piece reflects a dedication to high-quality code, intuitive design, and robust performance."
      bgText="ENGINEERING"
      statueSrc="/statue-portfolio.png"
      bgColor="#1e293b" // A dark slate blue, slightly different from Home
    >
      <section className="summary-section">
        <div className="summary-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="accordion-container">
            {projectsData.map((project, index) => (
              <ProjectAccordion
                key={index}
                title={project.title}
                shortDescription={project.shortDescription}
                fullDescription={project.fullDescription}
                githubLink={project.githubLink}
                devpostLink={project.devpostLink}
                liveLink={project.liveLink}
                driveLink={project.driveLink}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}