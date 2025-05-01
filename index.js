// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import path from "path";
import fs from "fs";

// server/ai.ts
import OpenAI from "openai";
import { z } from "zod";
var chatRequestSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
  portfolioOwner: z.string().default("Bhagyaban Ghadai")
});
var openai = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NVIDIA_API_KEY
});
var getSystemPrompt = (portfolioOwner) => {
  return `You are an AI assistant for ${portfolioOwner}'s portfolio website. 
  Your purpose is to answer questions about ${portfolioOwner}'s background, skills, experience, projects, and education.
  
  Here's information about ${portfolioOwner} that you should use to answer questions:
  
  - ${portfolioOwner} is a Java Full Stack Developer with 5+ years of experience
  - Has expertise in Java, Spring Boot, React.js, and AWS
  - Worked at companies like Ernst & Young LLP, Xpheno Technologies, and Datapro Information Technology
  - Created projects like Neat Code AI (an AI-powered code review assistant) and Reprise App (AI-Powered Strength Training Platform)
  - Has a Master's in Computer Science from University of South Dakota (Aug 2023 - May 2025)
  - Has a Bachelor of Technology in Computer Science from Jawaharlal Nehru Technological University (Jul 2017 - Jul 2021)
  - Has certifications including Oracle Certified Professional: Java SE 17 Developer and AWS Certified Solutions Architect
  - Skills include Java, Spring Boot, Microservices, RESTful APIs, React.js, AWS, Docker, MySQL, and more
  
  Be helpful, professional, and concise in your responses. If you don't know the answer to a question, acknowledge that.
  Always remember you are representing ${portfolioOwner} and should maintain a professional tone.`;
};
async function generateChatResponse(chatRequest) {
  try {
    const { message, portfolioOwner } = chatRequest;
    const completion = await openai.chat.completions.create({
      model: "meta/llama3-70b-instruct",
      messages: [
        {
          role: "system",
          content: getSystemPrompt(portfolioOwner)
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 1024
    });
    return completion.choices[0].message.content || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to generate AI response. Please try again later.");
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      console.log("Contact form submission:", { name, email, message });
      res.status(200).json({ message: "Message received! Thank you for contacting me." });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });
  app2.get("/api/resume/download", (req, res) => {
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
  app2.post("/api/chat", async (req, res) => {
    try {
      const result = chatRequestSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid request",
          errors: result.error.format()
        });
      }
      const response = await generateChatResponse(result.data);
      res.status(200).json({ response });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      res.status(500).json({
        message: "Failed to generate AI response. Please try again later."
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var repoName = "portfolio";
var vite_config_default = defineConfig({
  base: `/${repoName}/`,
  // 👈 Required for GitHub Pages to load correctly
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist"),
    // 👈 Use plain 'dist' for GitHub Pages
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
