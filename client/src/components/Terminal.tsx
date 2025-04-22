import { useState, useRef, useEffect } from "react";
import { FaTimes, FaMinus, FaSquare } from "react-icons/fa";

interface TerminalProps {
  onCommandExecute: (command: string) => void;
}

interface CommandHistory {
  command: string;
  response: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ onCommandExecute }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  // Focus the input when the terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Auto-scroll to the bottom when history updates
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [history]);

  // Get command response
  const getCommandResponse = (cmd: string): React.ReactNode => {
    const command = cmd.toLowerCase().trim();
    
    switch (command) {
      case "about":
        return "Loading about section...";
      case "projects":
        return "Loading projects section...";
      case "experience":
        return "Loading experience section...";
      case "contact":
        return "Loading contact section...";
      case "chat":
        return "Opening AI chat assistant...";
      case "skills":
        return "Loading skills (in about section)...";
      case "home":
        return "Returning to home...";
      case "clear":
        return null;
      case "help":
        return (
          <div>
            Welcome to my interactive portfolio! Try these commands:
            <ul className="pl-4 mt-2">
              <li><span className="text-syntax-blue">about</span> - Learn about me and my background</li>
              <li><span className="text-syntax-blue">skills</span> - View my technical skills and proficiency</li>
              <li><span className="text-syntax-blue">experience</span> - See my work history and accomplishments</li>
              <li><span className="text-syntax-blue">projects</span> - Browse my featured projects</li>
              <li><span className="text-syntax-blue">contact</span> - Get in touch with me</li>
              <li><span className="text-syntax-blue">chat</span> - Open AI chat assistant</li>
              <li><span className="text-syntax-blue">clear</span> - Clear the terminal</li>
            </ul>
          </div>
        );
      default:
        return (
          <span>
            Command not found: {command}. Type <span className="text-syntax-blue">help</span> for available commands.
          </span>
        );
    }
  };

  // Process commands
  const processCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const command = input.trim();
      
      if (command.toLowerCase() === "clear") {
        // Clear the terminal
        setHistory([]);
      } else {
        // Add command to history
        const response = getCommandResponse(command);
        if (response !== null) {
          setHistory(prev => [...prev, { command, response }]);
        }
        
        // Execute command
        onCommandExecute(command.toLowerCase());
      }
      
      // Clear input
      setInput("");
    }
  };

  return (
    <div 
      className="bg-editor-bg border border-comment/30 rounded mt-8"
      onClick={focusInput}
    >
      <div className="bg-editor-bg border-b border-comment/30 p-2 flex items-center">
        <div className="w-3 h-3 rounded-full bg-syntax-red mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-syntax-green"></div>
        <div className="ml-4 text-comment">terminal</div>
        <div className="ml-auto flex gap-2">
          <FaMinus className="text-comment hover:text-editor-text cursor-pointer" />
          <FaSquare className="text-comment hover:text-editor-text cursor-pointer" />
          <FaTimes className="text-comment hover:text-editor-text cursor-pointer" />
        </div>
      </div>
      <div className="p-4">
        <div ref={terminalOutputRef} className="terminal-output mb-4">
          <div className="mb-2">
            <span className="text-syntax-green">visitor@portfolio</span>:
            <span className="text-syntax-blue">~</span>$ <span className="typewriter">help</span>
          </div>
          <div className="text-editor-text mb-4">
            Welcome to my interactive portfolio! Try these commands:
            <ul className="pl-4 mt-2">
              <li><span className="text-syntax-blue">about</span> - Learn about me and my background</li>
              <li><span className="text-syntax-blue">skills</span> - View my technical skills and proficiency</li>
              <li><span className="text-syntax-blue">experience</span> - See my work history and accomplishments</li>
              <li><span className="text-syntax-blue">projects</span> - Browse my featured projects</li>
              <li><span className="text-syntax-blue">contact</span> - Get in touch with me</li>
              <li><span className="text-syntax-blue">chat</span> - Open AI chat assistant</li>
              <li><span className="text-syntax-blue">clear</span> - Clear the terminal</li>
            </ul>
          </div>
          
          {history.map((item, index) => (
            <div key={index}>
              <div className="mb-2">
                <span className="text-syntax-green">visitor@portfolio</span>:
                <span className="text-syntax-blue">~</span>$ <span>{item.command}</span>
              </div>
              <div className="text-editor-text mb-4">{item.response}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center">
          <span className="text-syntax-green">visitor@portfolio</span>:
          <span className="text-syntax-blue">~</span>$ 
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={processCommand}
            className="bg-transparent border-none outline-none ml-2 flex-grow text-editor-text"
            placeholder="Type a command..."
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
