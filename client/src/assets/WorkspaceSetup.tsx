import React from "react";

const WorkspaceSetup: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <rect x="100" y="100" width="600" height="400" rx="10" stroke="#4D5BCE" strokeWidth="2" fill="none" />
        
        {/* Computer Monitor */}
        <rect x="200" y="150" width="400" height="250" rx="5" stroke="#E5E9F0" strokeWidth="2" fill="none" />
        <rect x="220" y="170" width="360" height="210" rx="2" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <rect x="350" y="400" width="100" height="10" rx="2" stroke="#E5E9F0" strokeWidth="1" fill="none" />
        <rect x="325" y="410" width="150" height="5" rx="2" stroke="#E5E9F0" strokeWidth="1" fill="none" />
        
        {/* Code on screen */}
        <text x="240" y="190" fontFamily="monospace" fontSize="10" fill="#607B96">1</text>
        <text x="240" y="210" fontFamily="monospace" fontSize="10" fill="#607B96">2</text>
        <text x="240" y="230" fontFamily="monospace" fontSize="10" fill="#607B96">3</text>
        <text x="240" y="250" fontFamily="monospace" fontSize="10" fill="#607B96">4</text>
        <text x="240" y="270" fontFamily="monospace" fontSize="10" fill="#607B96">5</text>
        
        <text x="260" y="190" fontFamily="monospace" fontSize="10" fill="#4D5BCE">public</text>
        <text x="300" y="190" fontFamily="monospace" fontSize="10" fill="#4D5BCE">class</text>
        <text x="330" y="190" fontFamily="monospace" fontSize="10" fill="#43D9AD">Developer</text>
        <text x="390" y="190" fontFamily="monospace" fontSize="10" fill="#E5E9F0">{'{'}</text>
        
        <text x="270" y="210" fontFamily="monospace" fontSize="10" fill="#607B96">// Years of experience</text>
        <text x="270" y="230" fontFamily="monospace" fontSize="10" fill="#4D5BCE">private</text>
        <text x="320" y="230" fontFamily="monospace" fontSize="10" fill="#4D5BCE">int</text>
        <text x="340" y="230" fontFamily="monospace" fontSize="10" fill="#E5E9F0">yearsOfExperience = 5;</text>
        
        <text x="270" y="250" fontFamily="monospace" fontSize="10" fill="#4D5BCE">private</text>
        <text x="320" y="250" fontFamily="monospace" fontSize="10" fill="#4D5BCE">String</text>
        <text x="360" y="250" fontFamily="monospace" fontSize="10" fill="#E5E9F0">name = "Bhagyaban";</text>
        
        <text x="260" y="270" fontFamily="monospace" fontSize="10" fill="#E5E9F0">{'}'}</text>
        
        {/* Coffee mug */}
        <ellipse cx="650" cy="350" rx="30" ry="20" stroke="#E99287" strokeWidth="1" fill="none" />
        <path d="M680 350 C690 350, 690 330, 680 330" stroke="#E99287" strokeWidth="1" fill="none" />
        <path d="M650 370 L650 330" stroke="#E99287" strokeWidth="1" strokeDasharray="2,2" />
        
        {/* Keyboard */}
        <rect x="300" y="450" width="200" height="60" rx="5" stroke="#607B96" strokeWidth="1" fill="none" />
        <line x1="320" y1="450" x2="320" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="340" y1="450" x2="340" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="360" y1="450" x2="360" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="380" y1="450" x2="380" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="400" y1="450" x2="400" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="420" y1="450" x2="420" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="440" y1="450" x2="440" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="460" y1="450" x2="460" y2="510" stroke="#607B96" strokeWidth="0.5" />
        <line x1="480" y1="450" x2="480" y2="510" stroke="#607B96" strokeWidth="0.5" />
        
        <line x1="300" y1="470" x2="500" y2="470" stroke="#607B96" strokeWidth="0.5" />
        <line x1="300" y1="490" x2="500" y2="490" stroke="#607B96" strokeWidth="0.5" />
        
        {/* Plant */}
        <rect x="150" y="350" width="30" height="40" rx="2" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M150 350 C160 330, 170 340, 180 350" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M155 350 C165 320, 175 330, 175 350" stroke="#43D9AD" strokeWidth="1" fill="none" />
        <path d="M160 350 C170 310, 180 320, 170 350" stroke="#43D9AD" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};

export default WorkspaceSetup;
