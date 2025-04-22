import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FaRobot, FaUser, FaSpinner } from "react-icons/fa";
import TechBg1 from "@/assets/TechBg1";

// Define message type for chat
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIChatPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Bhagyaban's AI assistant. How can I help you today? You can ask me about his skills, experience, projects, or education.",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage: ChatMessage = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await apiRequest("POST", "/api/chat", {
        message: userMessage.content,
        portfolioOwner: "Bhagyaban Ghadai"
      });
      
      const data = await response.json() as { response: string };
      
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Format time for messages
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="ai-chat" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-syntax-blue">AI Assistant</h2>
        
        {/* Background element */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none z-0">
          <TechBg1 />
        </div>
        
        <div className="relative z-10">
          <Card className="bg-editor-bg border border-comment/30 rounded-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-editor-bg border-b border-comment/30 p-4">
                <div className="flex items-center space-x-2">
                  <FaRobot className="text-syntax-green text-xl" />
                  <h3 className="text-lg font-medium text-editor-text">Bhagyaban's AI Assistant</h3>
                </div>
                <p className="text-comment text-sm mt-1">
                  Ask me anything about Bhagyaban's skills, experience, projects, or education.
                </p>
              </div>
              
              <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`flex max-w-[80%] ${
                        message.role === "user" 
                          ? "bg-syntax-blue bg-opacity-20 ml-auto" 
                          : "bg-editor-bg border border-comment/30"
                      } rounded-lg p-3`}
                    >
                      <div className={`mr-2 mt-1 ${message.role === "user" ? "order-2 ml-2" : ""}`}>
                        {message.role === "user" 
                          ? <FaUser className="text-syntax-blue" /> 
                          : <FaRobot className="text-syntax-green" />
                        }
                      </div>
                      <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                        <div className="text-editor-text whitespace-pre-wrap">{message.content}</div>
                        <div className="text-xs text-comment mt-1">{formatTime(message.timestamp)}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-editor-bg border border-comment/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <FaRobot className="text-syntax-green mr-2" />
                        <FaSpinner className="animate-spin text-comment" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="bg-editor-bg border-t border-comment/30 p-4">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-editor-bg border border-comment/30 text-editor-text focus:border-syntax-blue"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    className="bg-syntax-blue hover:bg-opacity-80 text-editor-text transition-colors duration-200"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? <FaSpinner className="animate-spin" /> : "Send"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChatPage;