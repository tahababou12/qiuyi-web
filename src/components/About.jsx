import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-[var(--text-color)] mb-4">
            I'm currently pursuing my MS in Statistical Practice at Boston University, 
            with an expected graduation in January 2026. I hold a BS in Financial Engineering 
            from The Chinese University of Hong Kong, Shenzhen.
          </p>
          <p className="text-[var(--text-color)] mb-4">
            My academic journey has equipped me with a strong foundation in statistics, 
            machine learning, and computer science. I'm particularly interested in deep learning, 
            statistical modeling, and database systems.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-[var(--secondary-color)]">Boston University</h4>
            <p className="text-sm text-[var(--text-color)]">MS in Statistical Practice • 2024-2026</p>
            <p className="text-sm text-[var(--text-color)]">GPA: 4.0</p>
          </div>
          <div>
            <h4 className="text-[var(--secondary-color)]">The Chinese University of Hong Kong, Shenzhen</h4>
            <p className="text-sm text-[var(--text-color)]">BS in Financial Engineering • 2020-2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
