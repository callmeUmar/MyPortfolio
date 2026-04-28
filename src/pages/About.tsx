import React from 'react';
import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout
      title="About Us."
      subtitle="The minds behind the design"
      description="We believe in blending classical principles of structure and form with modern digital aesthetics. Learn more about our background and vision."
      bgText="HISTORY"
      statueSrc="/statue-about.png"
      bgColor="#2c241b"
    />
  );
}
