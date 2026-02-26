import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#5D866C',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s',
      }}
    />
  );
};