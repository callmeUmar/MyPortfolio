import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Blogs() {
  return (
    <PageLayout
      title="Our Thoughts."
      subtitle="Insights, ideas, and stories"
      description="Read our latest articles on design trends, engineering practices, and the philosophy of building great digital experiences."
      bgText="JOURNAL"
      statueSrc="/statue-blogs.png"
      bgColor="#2d1b2e"
    />
  );
}
