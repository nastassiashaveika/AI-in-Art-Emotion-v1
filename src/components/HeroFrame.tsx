import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const HeroFrame: React.FC = () => {
  return (
    <section 
      className="min-h-screen pt-16"
      data-frame="0"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      <div className="pudding-container">
        {/* Main title */}
        <h1
          className="text-center mb-12"
          style={{ 
            color: '#222222',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            fontSize: '3.5rem'
          }}
        >
          AI Sees Calm in Chaos
        </h1>

        {/* Painting */}
        <div style={{ margin: '1rem 0' }}>
          <ImageWithFallback
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg/1200px-Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg?20110610032711"
            alt="Filippo Lippi - The Funeral of St. Stephen"
            className="w-full h-auto"
          />
        </div>

        {/* Opening narrative */}
        <div className="space-y-4">
          <p style={{ color: '#222222' }}>
            This is "The Funeral of St. Stephen" by Filippo Lippi (1460), an Early Renaissance painting depicting mourners gathering around a dead man. GPT-4o looked at this painting and said: Calm. 
          </p>

          <p style={{ color: '#222222' }}>
            Not Sad. Not Grieving. Calm. And if you are curious why this matters and why a data science student finds this interesting; please keep reading this story.
          </p>
        </div>
      </div>
    </section>
  );
};
