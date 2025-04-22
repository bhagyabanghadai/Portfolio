import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { resumeData } from "@/data/resumeData";
import { cn } from "@/lib/utils";
import TechBg2 from "@/assets/TechBg2";

const ProjectsPage: React.FC = () => {
  const { projects } = resumeData;
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Get all unique technologies from all projects
  const allTechnologies = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      allTechnologies.add(tech);
    });
  });

  const filteredProjects = selectedTechnology 
    ? projects.filter(project => project.technologies.includes(selectedTechnology))
    : projects;

  const handleOpenProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  // Generate background color for technology badges
  const getTechBadgeClass = (tech: string) => {
    switch (tech) {
      case 'Java':
      case 'Spring Boot':
      case 'Microservices':
        return 'bg-syntax-blue bg-opacity-20 text-syntax-blue';
      case 'AI':
      case 'MySQL':
      case 'Backend Development':
        return 'bg-syntax-green bg-opacity-20 text-syntax-green';
      case 'Security':
      case 'OWASP':
      case 'Performance Optimization':
        return 'bg-syntax-red bg-opacity-20 text-syntax-red';
      default:
        return 'bg-comment bg-opacity-20 text-comment';
    }
  };

  return (
    <section id="projects" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-syntax-blue">Projects</h2>
        
        {/* Background element */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none z-0">
          <TechBg2 />
        </div>
        
        <div className="mb-6 relative z-10">
          <div className="flex gap-2 mb-4 flex-wrap">
            <button 
              className={`${selectedTechnology === null ? 'bg-syntax-blue bg-opacity-20 text-syntax-blue' : 'bg-editor-bg hover:bg-line-highlight text-comment'} px-3 py-1 rounded-md text-sm transition-colors duration-200`}
              onClick={() => setSelectedTechnology(null)}
            >
              All
            </button>
            {Array.from(allTechnologies).map((tech) => (
              <button 
                key={tech}
                className={`${selectedTechnology === tech ? 'bg-syntax-blue bg-opacity-20 text-syntax-blue' : 'bg-editor-bg hover:bg-line-highlight text-comment'} px-3 py-1 rounded-md text-sm transition-colors duration-200`}
                onClick={() => setSelectedTechnology(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-editor-bg border border-comment/30 rounded-lg overflow-hidden hover:border-syntax-blue transition-colors duration-200 group"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                {/* Use project.image if available */}
                <div className="w-full h-full bg-editor-bg flex items-center justify-center">
                  {project.title === "Neat Code AI" ? (
                    <CodeVisualization1 className="opacity-30 object-cover object-center" />
                  ) : (
                    <CodeVisualization2 className="opacity-30 object-cover object-center" />
                  )}
                </div>
                <div className="absolute inset-0 bg-editor-bg bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button 
                    className="bg-syntax-blue text-editor-text"
                    onClick={() => handleOpenProjectDetails(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-syntax-green">{project.title}</h3>
                  <span className="text-xs text-comment bg-editor-bg px-2 py-1 rounded">{project.period}</span>
                </div>
                <p className="text-editor-text mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={cn("text-xs px-2 py-1 rounded", getTechBadgeClass(tech))}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={handleCloseProjectDetails}>
          {selectedProject && (
            <DialogContent className="bg-editor-bg border border-comment/30 text-editor-text max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-syntax-green">{selectedProject.title}</DialogTitle>
                <div className="text-sm text-comment">{selectedProject.period}</div>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="text-syntax-blue font-medium mb-2">Description</h4>
                {selectedProject.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="mb-2 text-editor-text">{detail}</p>
                ))}
                
                <h4 className="text-syntax-blue font-medium mt-4 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={cn("text-xs px-2 py-1 rounded", getTechBadgeClass(tech))}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-syntax-blue font-medium mt-4 mb-2">Skills Gained</h4>
                <ul className="list-disc pl-5 text-editor-text">
                  {selectedProject.skillsGained.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

// Import these components here to avoid circular dependencies
import CodeVisualization1 from "@/assets/CodeVisualization1";
import CodeVisualization2 from "@/assets/CodeVisualization2";

export default ProjectsPage;
