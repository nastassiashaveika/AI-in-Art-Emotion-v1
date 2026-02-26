import React from 'react';
import { VerdictCards } from './VerdictCards';

interface ArtworkCaseStudyProps {
  image: string;
  alt: string;
  caption: string;
  emoartLabel: string;
  p1: { model: string; emotion: string }[];
  p2: { model: string; emotion: string }[];
  children?: React.ReactNode;
  imageStyle?: React.CSSProperties;
}

export const ArtworkCaseStudy: React.FC<ArtworkCaseStudyProps> = ({
  image,
  alt,
  caption,
  emoartLabel,
  p1,
  p2,
  children,
  imageStyle,
}) => {
  const [activePrompt, setActivePrompt] = React.useState<'p1' | 'p2'>('p1');
  const verdicts = activePrompt === 'p1' ? p1 : p2;

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <div style={{ margin: '0 0 1rem' }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-auto"
          style={{ maxWidth: '600px', margin: '0 auto', display: 'block', ...imageStyle }}
        />
        <p style={{
          color: 'var(--muted-text)',
          marginTop: '0.5rem',
          fontSize: '0.85rem',
          textAlign: 'center',
          fontStyle: 'italic',
        }}>
          {caption}
        </p>
      </div>

      {/* Mini P1/P2 toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        marginBottom: '0.25rem',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={() => setActivePrompt('p1')}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: activePrompt === 'p1' ? 'var(--text-color)' : 'transparent',
            color: activePrompt === 'p1' ? 'var(--bg-color)' : 'var(--text-color)',
            border: '1.5px solid var(--text-color)',
            borderRadius: '3px 0 0 3px',
            cursor: 'pointer',
            fontWeight: activePrompt === 'p1' ? 700 : 400,
            fontSize: '0.75rem',
          }}
        >
          P1
        </button>
        <button
          onClick={() => setActivePrompt('p2')}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: activePrompt === 'p2' ? 'var(--text-color)' : 'transparent',
            color: activePrompt === 'p2' ? 'var(--bg-color)' : 'var(--text-color)',
            border: '1.5px solid var(--text-color)',
            borderLeft: 'none',
            borderRadius: '0 3px 3px 0',
            cursor: 'pointer',
            fontWeight: activePrompt === 'p2' ? 700 : 400,
            fontSize: '0.75rem',
          }}
        >
          P2
        </button>
        <span style={{ color: 'var(--muted-text)', fontSize: '0.7rem', marginLeft: '0.5rem' }}>
          {activePrompt === 'p1' ? 'Simple label' : '"Don\'t default to calm" + explain'}
        </span>
        <span style={{
          marginLeft: 'auto',
          fontSize: '0.7rem',
          color: 'var(--muted-text)',
          fontStyle: 'italic',
        }}>
          EmoArt: <strong style={{ color: 'var(--accent-color)' }}>{emoartLabel}</strong>
        </span>
      </div>

      <VerdictCards verdicts={verdicts} />

      {children}
    </div>
  );
};
