import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Chinese Text Sentiment Analysis",
      description: "Built a BERT-based sentiment analysis model for Weibo comments with web crawling and data preprocessing",
      technologies: ["BERT", "Selenium", "BeautifulSoup", "PyTorch"],
      metrics: ["0.78 validation accuracy", "0.72 cosine similarity"]
    },
    {
      title: "FedLF 2",
      description: "Implemented Layer-wise Fair Federated Learning algorithm for electric vehicle charging stations",
      technologies: ["PyTorch", "Federated Learning", "Distributed Systems"],
      metrics: ["Optimized dynamic distribution", "Enhanced efficiency"]
    },
    {
      title: "COVID-19 Mortality Analysis",
      description: "Analyzed factors affecting COVID-19 mortality using multiple regression models",
      technologies: ["R", "Statistical Modeling", "Data Analysis"],
      metrics: ["9 different models", "AIC evaluation"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-[var(--text-color)] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="text-sm text-[var(--secondary-color)]">
              {project.metrics.map((metric, i) => (
                <li key={i}>• {metric}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
