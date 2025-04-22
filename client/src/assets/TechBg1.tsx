import React from "react";

const TechBg1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <path d="M100 100 L700 100 L700 500 L100 500 Z" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        <path d="M150 150 L650 150 L650 450 L150 450 Z" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M200 200 L600 200 L600 400 L200 400 Z" stroke="#E99287" strokeWidth="1" fill="none" />
        
        <circle cx="100" cy="100" r="5" fill="#4D5BCE" />
        <circle cx="700" cy="100" r="5" fill="#4D5BCE" />
        <circle cx="700" cy="500" r="5" fill="#4D5BCE" />
        <circle cx="100" cy="500" r="5" fill="#4D5BCE" />
        
        <line x1="100" y1="100" x2="150" y2="150" stroke="#607B96" strokeWidth="1" />
        <line x1="700" y1="100" x2="650" y2="150" stroke="#607B96" strokeWidth="1" />
        <line x1="700" y1="500" x2="650" y2="450" stroke="#607B96" strokeWidth="1" />
        <line x1="100" y1="500" x2="150" y2="450" stroke="#607B96" strokeWidth="1" />
        
        <path d="M300 50 C400 30, 500 70, 600 50" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        <path d="M300 550 C400 530, 500 570, 600 550" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        <path d="M50 300 C30 400, 70 500, 50 600" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M750 300 C730 400, 770 500, 750 600" stroke="#43D9AD" strokeWidth="1" fill="none" />
        
        <text x="250" y="300" fontFamily="monospace" fontSize="40" fill="#4D5BCE" opacity="0.2">{'<code>'}</text>
        <text x="450" y="300" fontFamily="monospace" fontSize="40" fill="#43D9AD" opacity="0.2">{'</code>'}</text>
        
        <path d="M400 100 L400 500" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M100 300 L700 300" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
      </g>
    </svg>
  );
};

export default TechBg1;
