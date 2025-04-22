import { useState } from "react";
import { Link } from "wouter";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes, FaRobot } from "react-icons/fa";

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: "/", icon: <FaHome className="mr-2" />, label: "_home.js" },
    { path: "/about", icon: <FaUser className="mr-2" />, label: "_about.js" },
    { path: "/projects", icon: <FaCode className="mr-2" />, label: "_projects.js" },
    { path: "/experience", icon: <FaBriefcase className="mr-2" />, label: "_experience.js" },
    { path: "/contact", icon: <FaEnvelope className="mr-2" />, label: "_contact.js" },
    { path: "/chat", icon: <FaRobot className="mr-2" />, label: "_ai_chat.js" },
  ];

  const isActive = (path: string) => {
    return currentPath === path ? "active" : "";
  };

  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Bhagyaban_Ghadai_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="border-b border-comment/30 flex flex-col md:flex-row">
      <div className="flex items-center p-4 border-r border-comment/30">
        <span className="text-syntax-blue">bhagyaban</span>
        <span className="text-syntax-green">@dev</span>
        <span className="text-editor-text">:</span>
        <span className="text-syntax-red">~</span>
        <span className="text-editor-text">$</span>
        
        {/* Mobile menu button */}
        <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-grow md:flex-row flex-col justify-between`}>
        <ul className="flex flex-col md:flex-row text-comment whitespace-nowrap">
          {navItems.map((item) => (
            <li 
              key={item.path}
              className={`group border-b md:border-b-0 md:border-r border-comment/30 px-6 py-4 transition-colors duration-200 cursor-pointer hover:text-syntax-blue hover:bg-line-highlight flex items-center ${isActive(item.path)}`}
            >
              <Link href={item.path} onClick={() => setMobileMenuOpen(false)}>
                <a className="flex items-center w-full">
                  {item.icon} {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t md:border-t-0 md:border-l border-comment/30 flex items-center justify-center md:justify-start px-6 py-4 text-comment">
          <a 
            href="https://github.com/bhagyabanghadai" 
            className="hover:text-syntax-green transition-colors ml-4"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/bhagyabanghadai" 
            className="hover:text-syntax-blue transition-colors ml-4"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <button 
            className="hover:text-syntax-red transition-colors ml-4"
            onClick={downloadResume}
            aria-label="Download Resume"
          >
            <FaDownload />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
