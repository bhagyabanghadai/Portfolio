import React from "react";

const CodeVisualization1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <rect x="50" y="50" width="500" height="300" rx="5" stroke="#43D9AD" strokeWidth="1" fill="none" />
        
        <text x="70" y="80" fontFamily="monospace" fontSize="14" fill="#607B96">1</text>
        <text x="70" y="110" fontFamily="monospace" fontSize="14" fill="#607B96">2</text>
        <text x="70" y="140" fontFamily="monospace" fontSize="14" fill="#607B96">3</text>
        <text x="70" y="170" fontFamily="monospace" fontSize="14" fill="#607B96">4</text>
        <text x="70" y="200" fontFamily="monospace" fontSize="14" fill="#607B96">5</text>
        <text x="70" y="230" fontFamily="monospace" fontSize="14" fill="#607B96">6</text>
        <text x="70" y="260" fontFamily="monospace" fontSize="14" fill="#607B96">7</text>
        <text x="70" y="290" fontFamily="monospace" fontSize="14" fill="#607B96">8</text>
        <text x="70" y="320" fontFamily="monospace" fontSize="14" fill="#607B96">9</text>
        
        <text x="100" y="80" fontFamily="monospace" fontSize="14" fill="#4D5BCE">import</text>
        <text x="160" y="80" fontFamily="monospace" fontSize="14" fill="#E5E9F0">java.util.*;</text>
        
        <text x="100" y="110" fontFamily="monospace" fontSize="14" fill="#4D5BCE">public</text>
        <text x="160" y="110" fontFamily="monospace" fontSize="14" fill="#4D5BCE">class</text>
        <text x="210" y="110" fontFamily="monospace" fontSize="14" fill="#43D9AD">NeatCodeAI</text>
        <text x="310" y="110" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'{'}</text>
        
        <text x="120" y="140" fontFamily="monospace" fontSize="14" fill="#4D5BCE">private</text>
        <text x="180" y="140" fontFamily="monospace" fontSize="14" fill="#4D5BCE">final</text>
        <text x="230" y="140" fontFamily="monospace" fontSize="14" fill="#E5E9F0">Scanner scanner;</text>
        
        <text x="120" y="170" fontFamily="monospace" fontSize="14" fill="#4D5BCE">public</text>
        <text x="180" y="170" fontFamily="monospace" fontSize="14" fill="#43D9AD">NeatCodeAI</text>
        <text x="280" y="170" fontFamily="monospace" fontSize="14" fill="#E5E9F0">() {'{'}</text>
        
        <text x="140" y="200" fontFamily="monospace" fontSize="14" fill="#E5E9F0">this.scanner = </text>
        <text x="270" y="200" fontFamily="monospace" fontSize="14" fill="#4D5BCE">new</text>
        <text x="300" y="200" fontFamily="monospace" fontSize="14" fill="#E5E9F0">Scanner(System.in);</text>
        
        <text x="120" y="230" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'}'}</text>
        
        <text x="120" y="260" fontFamily="monospace" fontSize="14" fill="#4D5BCE">public</text>
        <text x="180" y="260" fontFamily="monospace" fontSize="14" fill="#4D5BCE">void</text>
        <text x="220" y="260" fontFamily="monospace" fontSize="14" fill="#E99287">analyzeCode</text>
        <text x="320" y="260" fontFamily="monospace" fontSize="14" fill="#E5E9F0">(String code) {'{'}</text>
        
        <text x="140" y="290" fontFamily="monospace" fontSize="14" fill="#607B96">// Code analysis logic</text>
        
        <text x="120" y="320" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'}'}</text>
        
        <rect x="100" y="255" width="400" height="20" fill="#011627" fillOpacity="0.3" />
      </g>
    </svg>
  );
};

export default CodeVisualization1;
