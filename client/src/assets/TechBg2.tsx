import React from "react";

const TechBg2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <path d="M50 50 L750 50 L750 550 L50 550 Z" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        
        <path d="M100 100 L400 100 L400 250 L100 250 Z" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M450 100 L700 100 L700 250 L450 250 Z" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M100 300 L400 300 L400 500 L100 500 Z" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M450 300 L700 300 L700 500 L450 500 Z" stroke="#43D9AD" strokeWidth="1" fill="none" />
        
        <text x="200" y="175" fontFamily="monospace" fontSize="20" fill="#E99287" opacity="0.2">{"function() {"}</text>
        <text x="550" y="175" fontFamily="monospace" fontSize="20" fill="#E99287" opacity="0.2">{"return data;"}</text>
        <text x="200" y="400" fontFamily="monospace" fontSize="20" fill="#E99287" opacity="0.2">{"if (condition) {"}</text>
        <text x="550" y="400" fontFamily="monospace" fontSize="20" fill="#E99287" opacity="0.2">{"}"}</text>
        
        <line x1="425" y1="50" x2="425" y2="550" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50" y1="275" x2="750" y2="275" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
        
        <circle cx="425" cy="275" r="10" fill="#4D5BCE" opacity="0.5" />
        <circle cx="425" cy="275" r="5" fill="#E99287" />
        
        <path d="M425 50 L425 100" stroke="#E99287" strokeWidth="1" />
        <path d="M425 250 L425 300" stroke="#E99287" strokeWidth="1" />
        <path d="M425 500 L425 550" stroke="#E99287" strokeWidth="1" />
        <path d="M50 275 L100 275" stroke="#E99287" strokeWidth="1" />
        <path d="M400 275 L450 275" stroke="#E99287" strokeWidth="1" />
        <path d="M700 275 L750 275" stroke="#E99287" strokeWidth="1" />
        
        <path d="M100 600 C200 550, 300 630, 400 580 C500 530, 600 610, 700 560" stroke="#43D9AD" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};

export default TechBg2;
