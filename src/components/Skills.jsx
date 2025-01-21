import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "Java", "SQL", "R", "JavaScript", "MATLAB"]
    },
    {
      title: "Machine Learning Frameworks",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain"]
    },
    {
      title: "Web & Big Data",
      skills: ["Next.js", "AWS", "Apache Spark", "Flink", "Hadoop"]
    },
    {
      title: "Recommendation Systems",
      skills: ["CF", "DeepFM", "Swing", "item2vec", "two-tower", "PinSAGE", "TDM", "GBDT"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
