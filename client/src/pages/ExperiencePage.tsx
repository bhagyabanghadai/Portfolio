import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { resumeData } from "@/data/resumeData";
import WorkspaceSetup from "@/assets/WorkspaceSetup";

const ExperiencePage: React.FC = () => {
  const { experience } = resumeData;
  const [expandedItems, setExpandedItems] = useState<string[]>([experience[0].company]);

  const toggleItem = (company: string) => {
    setExpandedItems(prev => 
      prev.includes(company) 
        ? prev.filter(item => item !== company) 
        : [...prev, company]
    );
  };

  return (
    <section id="experience" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-syntax-blue">Work Experience</h2>
        
        {/* Background element */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none z-0">
          <WorkspaceSetup />
        </div>
        
        <div className="relative border-l-2 border-comment/50 pl-8 ml-4">
          {experience.map((job, index) => (
            <div key={index} className={`mb-10 relative experience-item ${index === experience.length - 1 ? 'mb-0' : ''}`}>
              <div className="absolute w-4 h-4 bg-syntax-blue rounded-full -left-10 top-1 shadow"></div>
              <Card className="bg-editor-bg border border-comment/30">
                <CardContent className="p-0">
                  <Accordion
                    type="single"
                    collapsible
                    value={expandedItems.includes(job.company) ? job.company : ""}
                    onValueChange={() => toggleItem(job.company)}
                  >
                    <AccordionItem value={job.company} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-col md:flex-row justify-between w-full text-left">
                          <h3 className="text-xl font-semibold text-syntax-green">{job.title}</h3>
                          <div className="text-comment">{job.period}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pt-0 pb-4">
                        <div className="mb-4">
                          <span className="text-syntax-blue">{job.company}</span> | {job.location}
                        </div>
                        <ul className="list-disc pl-5 text-editor-text space-y-2">
                          {job.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex}>{responsibility}</li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="text-xs bg-editor-bg border border-comment/30 text-comment px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
