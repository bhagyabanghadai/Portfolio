import OpenAI from "openai";
import { z } from "zod";

// Create schema for chat request validation
export const chatRequestSchema = z.object({
  message: z.string().min(1, { message: "Message is required" }),
  portfolioOwner: z.string().default("Bhagyaban Ghadai"),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

// Initialize OpenAI client with NVIDIA API configuration
const openai = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NVIDIA_API_KEY
});

// System prompt to guide the AI to respond as Bhagyaban's portfolio assistant
const getSystemPrompt = (portfolioOwner: string) => {
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

export async function generateChatResponse(chatRequest: ChatRequest): Promise<string> {
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
      max_tokens: 1024,
    });

    return completion.choices[0].message.content || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to generate AI response. Please try again later.");
  }
}