import { useState, useEffect } from "react";
import Terminal from "@/components/Terminal";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { downloadResume } from "@/lib/utils";
import TechBg1 from "@/assets/TechBg1";

interface HomePageProps {
  onCommandExecute: (command: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCommandExecute }) => {
  const [lineNumbers] = useState<number[]>(Array.from({ length: 15 }, (_, i) => i + 1));
  const [showTypewriterEffect, setShowTypewriterEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriterEffect(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="code-editor max-w-4xl mx-auto">
        {/* Abstract tech background as a subtle overlay */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-10 z-0">
          <TechBg1 />
        </div>

        {/* Line numbers and main content */}
        <div className="flex relative z-10">
          <div className="hidden md:block text-right pr-4 text-comment select-none w-12">
            {lineNumbers.map(num => (
              <div key={num}>{num}</div>
            ))}
          </div>
          <div className="flex-grow">
            <div><span className="text-syntax-blue">import</span> <span className="text-syntax-red">React</span> <span className="text-syntax-blue">from</span> <span className="text-editor-text">'react'</span>;</div>
            <div className="h-6"></div>
            <div><span className="text-comment">// Main developer profile component</span></div>
            <div><span className="text-syntax-blue">const</span> <span className="text-syntax-green">Profile</span> <span className="text-editor-text">=</span> <span className="text-syntax-blue">() =&gt;</span> <span className="text-editor-text">{'{'}</span></div>
            <div className="pl-8"><span className="text-syntax-blue">return</span> <span className="text-editor-text">(</span></div>
            <div className="pl-12"><span className="text-editor-text">&lt;</span><span className="text-syntax-red">div</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-16"><span className="text-editor-text">&lt;</span><span className="text-syntax-red">h1</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-20 text-2xl md:text-4xl font-semibold">
              {showTypewriterEffect ? (
                <Typewriter 
                  text="Bhagyaban Ghadai" 
                  className="text-syntax-green"
                />
              ) : (
                <span className="text-syntax-green">Bhagyaban Ghadai</span>
              )}
            </div>
            <div className="pl-16"><span className="text-editor-text">&lt;/</span><span className="text-syntax-red">h1</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-16"><span className="text-editor-text">&lt;</span><span className="text-syntax-red">p</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-20"><span className="text-xl text-syntax-blue">Java Full Stack Developer</span></div>
            <div className="pl-16"><span className="text-editor-text">&lt;/</span><span className="text-syntax-red">p</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-12"><span className="text-editor-text">&lt;/</span><span className="text-syntax-red">div</span><span className="text-editor-text">&gt;</span></div>
            <div className="pl-8"><span className="text-editor-text">);</span></div>
            <div><span className="text-editor-text">{'}'};</span></div>
            <div className="h-6"></div>
            <div><span className="text-syntax-blue">export</span> <span className="text-syntax-blue">default</span> <span className="text-syntax-green">Profile</span>;</div>
          </div>
        </div>

        {/* Terminal section */}
        <Terminal onCommandExecute={onCommandExecute} />

        {/* Download Resume Button */}
        <div className="mt-8 flex justify-center">
          <Button 
            className="bg-syntax-blue hover:bg-opacity-80 text-editor-text py-2 px-4 rounded-md flex items-center transition-colors duration-200"
            onClick={downloadResume}
          >
            <FaDownload className="mr-2" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
