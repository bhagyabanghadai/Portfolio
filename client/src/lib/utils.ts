import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

export function getRandomDelay(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export const downloadResume = () => {
  // Create a link to download the resume PDF
  const link = document.createElement('a');
  link.href = '/api/resume/download';
  link.download = 'Bhagyaban_Ghadai_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Skill level to percentage mapping
export const skillLevelToPercentage = (level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'): number => {
  switch (level) {
    case 'Beginner':
      return 25;
    case 'Intermediate':
      return 50;
    case 'Advanced':
      return 75;
    case 'Expert':
      return 95;
    default:
      return 0;
  }
};

// Generate line numbers for code editor
export const generateLineNumbers = (count: number): number[] => {
  return Array.from({ length: count }, (_, i) => i + 1);
};
