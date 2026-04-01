import React, { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const percent = (scrollTop / trackLength) * 100;
      setProgress(Math.min(100, Math.max(0, percent)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'rgba(93, 134, 108, 0.1)',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          height: '100%',
          backgroundColor: '#5D866C',
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
};
