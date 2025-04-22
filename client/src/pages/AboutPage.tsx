import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { FaCertificate } from "react-icons/fa";
import { resumeData } from "@/data/resumeData";
import CodeVisualization1 from "@/assets/CodeVisualization1";

const AboutPage: React.FC = () => {
  const { summary, education, skills, certifications } = resumeData;
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string | null>(null);

  const filteredSkills = selectedSkillCategory 
    ? skills.filter(skill => skill.category === selectedSkillCategory)
    : skills;

  const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="about" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-syntax-blue">About Me</h2>
        
        {/* Background element */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none z-0">
          <CodeVisualization1 />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="md:w-1/2">
            <div className="bg-editor-bg border border-comment/30 rounded p-4 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-syntax-green">Professional Summary</h3>
              <p className="text-editor-text mb-4">
                {summary}
              </p>
            </div>
            
            <div className="bg-editor-bg border border-comment/30 rounded p-4">
              <h3 className="text-xl font-semibold mb-4 text-syntax-green">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className={index !== education.length - 1 ? "mb-4" : ""}>
                  <h4 className="font-medium text-syntax-blue">{edu.institution}</h4>
                  <p className="text-editor-text">{edu.degree}</p>
                  <p className="text-comment">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-editor-bg border border-comment/30 rounded p-4 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-syntax-green">Technical Skills</h3>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <button 
                  className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${selectedSkillCategory === null ? 'bg-syntax-blue bg-opacity-20 text-syntax-blue' : 'bg-editor-bg hover:bg-line-highlight text-comment'}`}
                  onClick={() => setSelectedSkillCategory(null)}
                >
                  All
                </button>
                {uniqueCategories.map(category => (
                  <button 
                    key={category}
                    className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${selectedSkillCategory === category ? 'bg-syntax-blue bg-opacity-20 text-syntax-blue' : 'bg-editor-bg hover:bg-line-highlight text-comment'}`}
                    onClick={() => setSelectedSkillCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-editor-text">{skill.name}</span>
                      <span className="text-comment">{skill.level}</span>
                    </div>
                    <Progress 
                      value={skill.percentage} 
                      className="h-2 bg-line-highlight"
                      indicatorClassName="bg-syntax-green"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-editor-bg border border-comment/30 rounded p-4">
              <h3 className="text-xl font-semibold mb-4 text-syntax-green">Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className={index !== certifications.length - 1 ? "mb-2" : ""}>
                  <p className="text-editor-text flex items-center">
                    <FaCertificate className="text-syntax-red mr-2" />
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
