import React from 'react';

const emotionColorMap: Record<string, string> = {
  'Calm': '#5B9EA6',
  'Excited': '#C96E58',
  'Happy': '#D4A843',
  'Glad': '#E2C44F',
  'Contentment': '#8BB174',
  'Tired': '#8B7355',
  'Sad': '#5D6D8E',
  'Frustrated': '#A0522D',
  'Annoyed': '#CD853F',
  'Alarmed': '#B22222',
  'Aroused': '#8B5E83',
  'Bored': '#808080',
};

interface VerdictCardsProps {
  verdicts: { model: string; emotion: string }[];
}

export const VerdictCards: React.FC<VerdictCardsProps> = ({ verdicts }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${verdicts.length}, 1fr)`,
      gap: '0.5rem',
      margin: '1.5rem 0',
    }}>
      {verdicts.map((v) => {
        const isUnknown = v.emotion === '?';
        const color = isUnknown ? '#AAAAAA' : (emotionColorMap[v.emotion] || 'var(--text-color)');
        return (
          <div
            key={v.model}
            style={{
              backgroundColor: isUnknown ? 'var(--surface-alt)' : 'var(--panel-bg)',
              borderWidth: '2px',
              borderColor: isUnknown ? 'var(--surface-border)' : color,
              borderStyle: isUnknown ? 'dashed' : 'solid',
              borderRadius: '6px',
              padding: '0.75rem 0.5rem',
              textAlign: 'center',
            }}
          >
            <div style={{
              fontSize: '0.7rem',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}>
              {v.model}
            </div>
            <div style={{
              fontSize: isUnknown ? '1.3rem' : '1.1rem',
              fontWeight: 700,
              color,
            }}>
              {v.emotion}
            </div>
          </div>
        );
      })}
    </div>
  );
};