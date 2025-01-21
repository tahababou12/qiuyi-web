import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Data Science Student Partner",
      company: "Fidelity Investments",
      period: "Sept 2024 - Present",
      location: "Boston, MA",
      description: [
        "Developed a local LLM-powered chatbot using LangFlow and LangChain",
        "Built RAG model with vector databases (Pinecone, Astra)",
        "Generated document variants with 32 variations achieving 70% training accuracy"
      ]
    },
    {
      title: "AI and DS Researcher",
      company: "Questrom School of Business, Boston University",
      period: "Sept 2024 - Present",
      location: "Boston, MA",
      description: [
        "Analyzed AI-related GitHub repositories using SQL",
        "Implemented NLP and LLM-based methods for AI article classification",
        "Visualized technology companies' AI dominance trends"
      ]
    },
    {
      title: "Data Science Intern",
      company: "R&D Siyuan Quant",
      period: "Jun 2023 - Sep 2023",
      location: "Shenzhen, China",
      description: [
        "Analyzed storage factors and multi-factor models",
        "Developed month-on-month and year-on-year factor calculations",
        "Optimized calculations considering lunar leap months"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-[var(--secondary-color)] pl-4">
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <p className="text-[var(--secondary-color)]">{exp.company}</p>
            <p className="text-sm text-[var(--text-color)] mb-2">
              {exp.period} • {exp.location}
            </p>
            <ul className="list-disc list-inside text-[var(--text-color)]">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
