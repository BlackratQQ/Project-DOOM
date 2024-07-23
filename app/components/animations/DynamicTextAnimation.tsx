import React from "react";

interface DynamicTextAnimationProps {
  text: string;
  className?: string;
}

const DynamicTextAnimation: React.FC<DynamicTextAnimationProps> = ({
  text,
  className,
}) => {
  // Použití textu jako klíče zde způsobí, že React při změně textu
  // vytvoří novou instanci komponenty a restartuje tak všechny animace.
  return (
    <div key={text} className={className}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          padding: "0 4px",
          overflow: "hidden",
        }}
      >
        <div className="background backgroundAnimation"></div>
        <div className="text textAnimation">{text}</div>
      </div>
    </div>
  );
};

export default DynamicTextAnimation;
