import React from "react";

const TechBg3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <path d="M200 100 L600 100 L600 500 L200 500 Z" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        
        <circle cx="400" cy="300" r="150" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <circle cx="400" cy="300" r="100" stroke="#E99287" strokeWidth="1" fill="none" />
        <circle cx="400" cy="300" r="50" stroke="#607B96" strokeWidth="1" fill="none" />
        
        <line x1="100" y1="300" x2="700" y2="300" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="400" y1="0" x2="400" y2="600" stroke="#607B96" strokeWidth="1" strokeDasharray="5,5" />
        
        <path d="M250 50 C300 30, 350 70, 400 50 C450 30, 500 70, 550 50" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        <path d="M250 550 C300 530, 350 570, 400 550 C450 530, 500 570, 550 550" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        
        <path d="M200 200 L300 200 L300 250 L250 250 L250 350 L200 350 Z" stroke="#E99287" strokeWidth="1" fill="none" />
        <path d="M600 200 L500 200 L500 250 L550 250 L550 350 L600 350 Z" stroke="#E99287" strokeWidth="1" fill="none" />
        <path d="M200 400 L300 400 L300 350 L250 350 L250 250 L200 250 Z" stroke="#E99287" strokeWidth="1" fill="none" />
        <path d="M600 400 L500 400 L500 350 L550 350 L550 250 L600 250 Z" stroke="#E99287" strokeWidth="1" fill="none" />
        
        <text x="350" y="300" fontFamily="monospace" fontSize="20" fill="#43D9AD" opacity="0.3">{"{ contact }"}</text>
      </g>
    </svg>
  );
};

export default TechBg3;
