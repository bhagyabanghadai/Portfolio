import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ExperiencePage from "@/pages/ExperiencePage";
import ContactPage from "@/pages/ContactPage";
import AIChatPage from "@/pages/AIChatPage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function Router() {
  const [location, setLocation] = useLocation();
  const [currentCommand, setCurrentCommand] = useState("");

  useEffect(() => {
    // Extract command from location
    const command = location.replace("/", "");
    setCurrentCommand(command || "home");
  }, [location]);

  const handleCommandExecute = (command: string) => {
    if (command === "home") {
      setLocation("/");
    } else if (["about", "projects", "experience", "contact", "chat"].includes(command)) {
      setLocation(`/${command}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-editor-bg text-editor-text font-code">
      <Navbar currentPath={location} />
      <div className="flex flex-grow flex-col md:flex-row">
        <Sidebar currentPath={location} onNavigate={setLocation} />
        <main className="flex-grow overflow-y-auto">
          <Switch>
            <Route path="/" component={() => <HomePage onCommandExecute={handleCommandExecute} />} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/chat" component={AIChatPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
