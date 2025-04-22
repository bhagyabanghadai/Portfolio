import React from "react";

const CodeVisualization2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.8">
        <rect x="50" y="50" width="500" height="300" rx="5" stroke="#4D5BCE" strokeWidth="1" fill="none" />
        
        <text x="70" y="80" fontFamily="monospace" fontSize="14" fill="#607B96">1</text>
        <text x="70" y="110" fontFamily="monospace" fontSize="14" fill="#607B96">2</text>
        <text x="70" y="140" fontFamily="monospace" fontSize="14" fill="#607B96">3</text>
        <text x="70" y="170" fontFamily="monospace" fontSize="14" fill="#607B96">4</text>
        <text x="70" y="200" fontFamily="monospace" fontSize="14" fill="#607B96">5</text>
        <text x="70" y="230" fontFamily="monospace" fontSize="14" fill="#607B96">6</text>
        <text x="70" y="260" fontFamily="monospace" fontSize="14" fill="#607B96">7</text>
        <text x="70" y="290" fontFamily="monospace" fontSize="14" fill="#607B96">8</text>
        <text x="70" y="320" fontFamily="monospace" fontSize="14" fill="#607B96">9</text>
        
        <text x="100" y="80" fontFamily="monospace" fontSize="14" fill="#4D5BCE">package</text>
        <text x="170" y="80" fontFamily="monospace" fontSize="14" fill="#E5E9F0">com.reprise.app;</text>
        
        <text x="100" y="110" fontFamily="monospace" fontSize="14" fill="#4D5BCE">import</text>
        <text x="170" y="110" fontFamily="monospace" fontSize="14" fill="#E5E9F0">org.springframework.boot.SpringApplication;</text>
        
        <text x="100" y="140" fontFamily="monospace" fontSize="14" fill="#4D5BCE">import</text>
        <text x="170" y="140" fontFamily="monospace" fontSize="14" fill="#E5E9F0">org.springframework.boot.autoconfigure.SpringBootApplication;</text>
        
        <text x="100" y="170" fontFamily="monospace" fontSize="14" fill="#4D5BCE">@SpringBootApplication</text>
        <text x="100" y="200" fontFamily="monospace" fontSize="14" fill="#4D5BCE">public</text>
        <text x="160" y="200" fontFamily="monospace" fontSize="14" fill="#4D5BCE">class</text>
        <text x="210" y="200" fontFamily="monospace" fontSize="14" fill="#43D9AD">RepriseApplication</text>
        <text x="360" y="200" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'{'}</text>
        
        <text x="120" y="230" fontFamily="monospace" fontSize="14" fill="#4D5BCE">public</text>
        <text x="180" y="230" fontFamily="monospace" fontSize="14" fill="#4D5BCE">static</text>
        <text x="240" y="230" fontFamily="monospace" fontSize="14" fill="#4D5BCE">void</text>
        <text x="280" y="230" fontFamily="monospace" fontSize="14" fill="#E99287">main</text>
        <text x="330" y="230" fontFamily="monospace" fontSize="14" fill="#E5E9F0">(String[] args) {'{'}</text>
        
        <text x="140" y="260" fontFamily="monospace" fontSize="14" fill="#E5E9F0">SpringApplication.</text>
        <text x="300" y="260" fontFamily="monospace" fontSize="14" fill="#E99287">run</text>
        <text x="330" y="260" fontFamily="monospace" fontSize="14" fill="#E5E9F0">(RepriseApplication.class, args);</text>
        
        <text x="120" y="290" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'}'}</text>
        
        <text x="100" y="320" fontFamily="monospace" fontSize="14" fill="#E5E9F0">{'}'}</text>
        
        <rect x="100" y="255" width="400" height="20" fill="#011627" fillOpacity="0.3" />
      </g>
    </svg>
  );
};

export default CodeVisualization2;
