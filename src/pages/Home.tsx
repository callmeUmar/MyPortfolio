import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <PageLayout
      title="Home"
      subtitle="Deeper look of who I am"
      description="Welcome to my corner of the internet. If you're here, you're probably interested in me, my work, or my application — and that already means a lot. Feel free to wander. Stay as long as you'd like. And if you have anything to say, my email is always open."
      bgText="PIXEL MINIMAL"
      statueSrc="/statue-home.png"
      bgColor="#212121"
    >
      <section className="summary-section">
        <h2 className="summary-title">About Me</h2>
        <div className="summary-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: '1.8' }}>
          <p>I'm a Machine Learning and Backend Engineer building production-grade systems for real-time data processing, probabilistic modeling, and decision pipelines. I have hands-on experience deploying PyTorch models, designing FastAPI microservices, and optimizing low-latency pipelines for scalable inference. My focus is on high-impact systems that turn raw data into reliable, measurable outcomes — the kind of work where the engineering around the model matters as much as the model itself.</p>
          <p>Currently, I'm a CS student at Bellevue College, an AI Researcher at Algoverse working on reinforcement learning and post-training, and a builder who's shipped end-to-end ML projects, won a few hackathons, and spent enough late nights debugging production services to know what holds up and what doesn't.</p>
          <p>Beyond the technical side, a few things shape how I work.</p>
          <p>I was raised with a strong sense of justice, and out of that grew something I really care about: honesty. I don't just appreciate it — I love it. The direct version of anything is almost always more useful than the polished one, and I try to give it back the same way I want to receive it.</p>
          <p>I love working with people who take responsibility seriously, especially the ones who go a little too hard at the work — the ones who care more than they technically need to. Those are my favorite people to build with, and they're usually the ones I learn the most from.</p>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}