import React, { useState, useEffect } from 'react';
import { Type } from 'lucide-react';

export const Controls: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        pointerEvents: 'auto',
      }}
    >
      {/* Font size controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          backgroundColor: '#ffffff',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #e0e0e0',
        }}
      >
        <button
          onClick={() => setFontSize(Math.max(12, fontSize - 2))}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: '#222222',
          }}
          aria-label="Decrease font size"
        >
          <Type size={16} />
          <span style={{ fontSize: '0.75rem', marginLeft: '2px' }}>−</span>
        </button>
        <span style={{ fontSize: '0.75rem', minWidth: '30px', textAlign: 'center', color: '#222222' }}>
          {fontSize}px
        </span>
        <button
          onClick={() => setFontSize(Math.min(24, fontSize + 2))}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: '#222222',
          }}
          aria-label="Increase font size"
        >
          <Type size={20} />
          <span style={{ fontSize: '0.75rem', marginLeft: '2px' }}>+</span>
        </button>
      </div>
    </div>
  );
};
