import { useState } from 'react';
import { FaChevronDown, FaFolderOpen, FaFileCode, FaCog } from 'react-icons/fa';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface FolderSection {
  title: string;
  items: {
    name: string;
    path: string;
    color: string;
  }[];
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const [sections, setSections] = useState<FolderSection[]>([
    {
      title: 'personal_info',
      items: [
        { name: 'bio.js', path: '/about', color: 'text-syntax-green' },
        { name: 'interests.js', path: '/about', color: 'text-syntax-green' },
        { name: 'education.js', path: '/about', color: 'text-syntax-green' },
      ],
      isOpen: true
    },
    {
      title: 'professional',
      items: [
        { name: 'experience.js', path: '/experience', color: 'text-syntax-green' },
        { name: 'skills.js', path: '/about', color: 'text-syntax-green' },
        { name: 'certifications.js', path: '/about', color: 'text-syntax-green' },
      ],
      isOpen: true
    },
    {
      title: 'projects',
      items: [
        { name: 'neat_code_ai.js', path: '/projects', color: 'text-syntax-red' },
        { name: 'reprise_app.js', path: '/projects', color: 'text-syntax-red' },
      ],
      isOpen: true
    },
    {
      title: 'contact',
      items: [
        { name: 'contact_form.js', path: '/contact', color: 'text-syntax-green' },
        { name: 'social_links.js', path: '/contact', color: 'text-syntax-green' },
      ],
      isOpen: true
    },
    {
      title: 'interactive',
      items: [
        { name: 'ai_assistant.js', path: '/chat', color: 'text-syntax-blue' },
      ],
      isOpen: true
    },
  ]);

  const toggleSection = (index: number) => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      newSections[index] = {
        ...newSections[index],
        isOpen: !newSections[index].isOpen
      };
      return newSections;
    });
  };

  const handleNavigate = (path: string) => {
    onNavigate(path);
  };

  return (
    <aside className="w-full md:w-64 border-r border-comment/30 flex flex-col">
      <div className="p-4 border-b border-comment/30 text-comment flex items-center">
        <FaFolderOpen className="mr-2" /> SECTIONS
      </div>
      <ul className="text-comment flex-grow overflow-y-auto">
        {sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <li 
              className="border-b border-comment/10 px-4 py-3 hover:bg-line-highlight cursor-pointer transition-colors duration-200 flex items-center"
              onClick={() => toggleSection(sectionIndex)}
            >
              <FaChevronDown className={`mr-2 text-xs transform ${section.isOpen ? 'rotate-0' : '-rotate-90'} transition-transform duration-200`} />
              <FaFolderOpen className="text-syntax-blue mr-2" /> {section.title}
            </li>
            {section.isOpen && section.items.map((item, itemIndex) => (
              <li 
                key={`${section.title}-${itemIndex}`}
                className="border-b border-comment/10 pl-8 px-4 py-2 hover:bg-line-highlight cursor-pointer transition-colors duration-200 text-editor-text flex items-center"
                onClick={() => handleNavigate(item.path)}
              >
                <FaFileCode className={`mr-2 ${item.color}`} /> {item.name}
              </li>
            ))}
          </div>
        ))}
      </ul>
      <div className="p-4 border-t border-comment/30 text-comment flex items-center">
        <FaCog className="mr-2" /> SETTINGS
      </div>
    </aside>
  );
};

export default Sidebar;
