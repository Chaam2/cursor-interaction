import React from 'react';

function EffectElement({ children, setIsHovered }) {
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

export default EffectElement;
