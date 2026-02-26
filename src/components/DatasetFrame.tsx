import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

// All 12 emotions with updated data
const emotionDistributionData = [
  { emotion: 'Calm', percentage: 55.95, count: 74350, color: '#5D866C' },
  { emotion: 'Excited', percentage: 15.5, count: 20595, color: '#C96E58' },
  { emotion: 'Contentment', percentage: 15.35, count: 20406, color: '#8FA396' },
  { emotion: 'Sad', percentage: 4.38, count: 5827, color: '#D88B7A' },
  { emotion: 'Alarmed', percentage: 4.07, count: 5407, color: '#B8A396' },
  { emotion: 'Happy', percentage: 2.01, count: 2671, color: '#C9A68F' },
  { emotion: 'Frustrated', percentage: 1.23, count: 1635, color: '#A39680' },
  { emotion: 'Annoyed', percentage: 0.72, count: 957, color: '#96896C' },
  { emotion: 'Aroused', percentage: 0.42, count: 558, color: '#8B7D68' },
  { emotion: 'Bored', percentage: 0.23, count: 306, color: '#7F7464' },
  { emotion: 'Tired', percentage: 0.09, count: 120, color: '#736A60' },
  { emotion: 'Glad', percentage: 0.05, count: 63, color: '#CCCCCC' }
];

const valenceData = [
  { name: 'Positive', value: 87.9, color: '#5D866C' },
  { name: 'Negative', value: 12.1, color: '#C96E58' }
];

const arousalData = [
  { name: 'Low Arousal', value: 76.4, color: '#5D866C' },
  { name: 'High Arousal', value: 23.6, color: '#C96E58' }
];

export const DatasetFrame: React.FC = () => {
  const [showEDATooltip, setShowEDATooltip] = React.useState(false);
  const [showChiSquareTooltip, setShowChiSquareTooltip] = React.useState(false);
  
  return (
    <section 
      id="section-1"
      className="pudding-section"
      data-frame="1"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        {/* Section header */}
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          What the Data Shows
        </h2>
        
        <div className="space-y-4">
          <p style={{ color: 'var(--text-color)' }}>
            Last summer, I wanted to build a machine learning model to classify art styles. While searching for datasets, I discovered{" "}
            <a
              href="https://huggingface.co/datasets/printblue/EmoArt-130k"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-color)",
                textDecoration: "underline",
              }}
            >
              EmoArt
            </a>
            . Released in 2025, it contains 135,895 artworks across 56 art styles, each labeled by GPT-4o with one of 12 emotions: Frustrated, Annoyed, Alarmed, Aroused, Excited, Happy, Glad, Contentment, Calm, Tired, Bored, Sad. The researchers published it to train AI models to generate art for therapy.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            After a quick{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowEDATooltip(true)}
              onMouseLeave={() => setShowEDATooltip(false)}
            >
              EDA
              <span
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#222222',
                  color: '#F5F5F0',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '2px',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  marginBottom: '0.25rem',
                  opacity: showEDATooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                }}
                className="group-hover:opacity-100"
              >
                Exploratory Data Analysis
              </span>
            </span>
            , here's what I found:
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong style={{ color: 'var(--highlight-color)' }}>55.95%</strong> of all art was labeled "Calm."
          </p>
          
          {/* All 12 Emotions Chart */}
          <div style={{ height: '400px', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={emotionDistributionData}
                margin={{ top: 10, right: 10, left: 40, bottom: 10 }}
              >
                <XAxis 
                  dataKey="emotion" 
                  tick={{ fontSize: 11, fill: 'var(--text-color)', fontWeight: 500 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'var(--text-color)' }}
                  domain={[0, 60]}
                  ticks={[0, 10, 20, 30, 40, 50, 60]}
                  label={{ value: 'Percentage of Artworks', angle: -90, position: 'center', style: { fill: 'var(--text-color)', fontSize: 14, textAnchor: 'middle' } }}
                />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [
                    `${value}% (${props.payload.count.toLocaleString()} artworks)`
                  ]}
                />
                <Bar 
                  dataKey="percentage" 
                  fill="#5D866C"
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                >
                  {emotionDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong style={{ color: 'var(--highlight-color)' }}>74,350</strong> paintings. One emotion.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            Naturally, I got curious. Maybe "calm" really is the most common emotion in art? What if art is meant to bring peace? Perhaps I was seeing a pattern that wasn't there?
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            I ran a{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowChiSquareTooltip(true)}
              onMouseLeave={() => setShowChiSquareTooltip(false)}
            >
              chi-square test
              <span
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#222222',
                  color: '#F5F5F0',
                  padding: '0.5rem',
                  borderRadius: '2px',
                  fontSize: '0.875rem',
                  whiteSpace: 'normal',
                  width: '300px',
                  marginBottom: '0.25rem',
                  opacity: showChiSquareTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                Intuitively, the test asks: could this happen by accident? If we shuffled emotion labels randomly, we wouldn't get one emotion dominating more than half the dataset.
              </span>
            </span>
            {' '}– a statistical measure that determines whether observed patterns differ significantly from what we'd expect by chance alone – and got an extreme result.
          </p>
          
          <div className="text-center py-4 border-l-4" style={{ borderColor: '#5D866C', paddingLeft: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
            <div className="space-y-2">
              <div style={{ color: 'var(--highlight-color)', fontWeight: 700, fontSize: '1.5rem' }}>
                χ² = 449,027.7
              </div>
              <div style={{ color: 'var(--highlight-color)', fontWeight: 700, fontSize: '1.2rem' }}>
                p &lt; 0.001
              </div>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            To put that in perspective, a value above 20 is usually considered significant. This pattern is statistically impossible to explain by chance. Something systematic was happening.
          </p>
          
          {/* Valence and Arousal */}
          <p style={{ color: 'var(--text-color)' }}>
            The dataset also maps the 12 emotions onto two psychological dimensions — positive/negative (valence) and high/low energy (arousal), this is the distribution:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 pudding-chart" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            {/* Valence Distribution */}
            <div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={valenceData} 
                    margin={{ top: 10, right: 15, left: 15, bottom: 5 }}
                    isAnimationActive={false}
                  >
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-color)' }} />
                    <YAxis tick={{ fontSize: 12, fill: 'var(--text-color)' }} domain={[0, 100]} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                      {valenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p style={{ color: 'var(--text-color)', marginTop: '0.5rem', textAlign: 'center' }}>
                Valence Distribution
              </p>
            </div>

            {/* Arousal Distribution */}
            <div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={arousalData} 
                    margin={{ top: 10, right: 15, left: 15, bottom: 5 }}
                    isAnimationActive={false}
                  >
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-color)' }} />
                    <YAxis tick={{ fontSize: 12, fill: 'var(--text-color)' }} domain={[0, 100]} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                      {arousalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p style={{ color: 'var(--text-color)', marginTop: '0.5rem', textAlign: 'center' }}>
                Arousal Distribution
              </p>
            </div>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong style={{ color: 'var(--highlight-color)' }}>87.9% positive valence.</strong> For every artwork tagged with a negative emotion, <strong style={{ color: 'var(--highlight-color)' }}>7.29</strong> were tagged as positive.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong style={{ color: 'var(--highlight-color)' }}>76.4% low arousal.</strong> Three-quarters of all art was labeled as low-energy.
          </p>
          
          
          
          
          
          <p style={{ color: 'var(--text-color)' }}>
            "Calm" is exactly positive valence, low arousal — not too happy or too sad.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            We don't know, and cannot say anything about misclassifying grief as happiness, I do, however, have a feeling that, in ambiguous cases, "calm" works as the most common prediction.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            What is AI actually doing when it "reads" emotion in art?
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            The rest of this story tries to answer that.
          </p>
        </div>
      </div>
    </section>
  );
};
