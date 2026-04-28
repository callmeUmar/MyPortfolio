import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

const experiences = [
  {
    role: "AI Researcher (RL & Post-Training)",
    company: "Algoverse",
    location: "Remote",
    date: "Sep. 2025 – Present",
    description: "Researching reinforcement learning and post-training techniques that make models genuinely reliable instead of just benchmark-friendly. Improved model stability and performance by 15–25% through systematic optimization, built evaluation frameworks and benchmarking pipelines that measure generalization and consistency across tasks, and cut output variance by 20% through structured fine-tuning and iterative experimentation."
  },
  {
    role: "AI Design & Data Storytelling Extern",
    company: "Canva",
    location: "Remote",
    date: "Nov. 2025 – Dec. 2025",
    description: "Selected for Canva's remote externship at the intersection of AI tooling and visual communication. Built modular AI content pipelines that increased output throughput by 45% and reduced inconsistencies by 30%, designed structured data schemas that improved dataset quality and cross-team experimentation efficiency by 35%, and streamlined data workflows so iteration was faster and model outputs more reliable."
  },
  {
    role: "Software Engineer Intern",
    company: "Kentush Micro-credit",
    location: "Kyrgyzstan",
    date: "Mar. 2024 – Jun. 2024",
    description: "Developed an ML credit-risk model that prevented 500+ high-risk loan approvals and cut classification errors by 40% — every wrong call was real money saved. Reduced API latency from 4.5s to 1.8s and improved inference speed by 52% through pipeline optimization, keeping the system smooth even under peak traffic, and tightened overall performance through cleaner data processing and tighter model integration."
  },
  {
    role: "Software Engineer (Part-Time)",
    company: "International University of Kyrgyzstan",
    location: "Kyrgyzstan",
    date: "Jun. 2023 – Mar. 2024",
    description: "Built a real-time attendance system used daily by 200+ users on a FastAPI event-driven backend. Implemented role-based authentication and optimized SQL queries to cut admin workload by 30%, and integrated the system with RFID hardware to automate 95% of attendance tracking — turning a daily manual chore into a hands-off, real-time process."
  }
];

export default function Experience() {
  return (
    <PageLayout
      title="Experience."
      subtitle="Years of building and learning"
      description="My professional journey spans multiple roles and projects, where I've led development teams, architected scalable systems, and continuously refined my technical expertise."
      bgText="HISTORY"
      statueSrc="/statue-experience.png"
      bgColor="#2c2724"
    >
      <section className="summary-section">
        <div className="summary-content" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <div className="experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', color: '#fff', margin: '0 0 0.5rem 0' }}>{exp.role}</h3>
                    <div style={{ fontSize: '1.1rem', color: 'var(--gold)', fontWeight: 500 }}>
                      {exp.company} <span style={{ color: '#666', margin: '0 0.5rem' }}>·</span> <span style={{ color: '#aaa' }}>{exp.location}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#888', whiteSpace: 'nowrap', marginTop: '0.25rem' }}>
                    {exp.date}
                  </div>
                </div>
                <p style={{ color: '#ccc', lineHeight: '1.8', margin: 0 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}