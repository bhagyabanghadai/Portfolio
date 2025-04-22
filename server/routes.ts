import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { generateChatResponse, chatRequestSchema } from "./ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real implementation, we would send an email here
      // For now, just return success
      console.log("Contact form submission:", { name, email, message });
      
      res.status(200).json({ message: "Message received! Thank you for contacting me." });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.resolve(process.cwd(), "attached_assets", "Bhagyaban_Ghadai_Resume.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.download(resumePath, "Bhagyaban_Ghadai_Resume.pdf");
      } else {
        res.status(404).json({ message: "Resume file not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to download resume. Please try again later." });
    }
  });

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      // Validate request body
      const result = chatRequestSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid request",
          errors: result.error.format() 
        });
      }
      
      // Generate AI response
      const response = await generateChatResponse(result.data);
      
      res.status(200).json({ response });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      res.status(500).json({ 
        message: "Failed to generate AI response. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
