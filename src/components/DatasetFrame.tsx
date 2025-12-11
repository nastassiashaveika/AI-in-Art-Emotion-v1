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
  return (
    <section 
      className="pudding-section"
      data-frame="1"
      style={{ backgroundColor: '#F5F5F0', paddingTop: '0.5rem', paddingBottom: '1rem' }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <p style={{ color: '#222222' }}>
            This summer, I wanted to build a machine learning algorithm to differentiate art styles, and came across the{' '}
            <a 
              href="https://huggingface.co/datasets/printblue/EmoArt-130k" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#5D866C', textDecoration: 'underline' }}
            >
              EmoArt
            </a>{' '}
            dataset.
          </p>
          
          <p style={{ color: '#222222' }}>
            The researchers released the annotated set of 135,895 artworks in 2025 to train an AI model to produce paintings for art therapy. Each of the artworks was annotated with one main emotion. There were twelve possible: Frustrated, Annoyed, Alarmed, Aroused, Excited, Happy, Glad, Contentment, Calm, Tired, Bored, Sad.
          </p>
          
          <p style={{ color: '#222222' }}>
            After a quick EDA, here's what I found:
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
                  tick={{ fontSize: 11, fill: '#222222', fontWeight: 500 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  domain={[0, 60]}
                  ticks={[0, 10, 20, 30, 40, 50, 60]}
                  label={{ value: 'Percentage of Artworks', angle: -90, position: 'center', style: { fill: '#222222', fontSize: 14, textAnchor: 'middle' } }}
                />
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [
                    `${value}% (${props.payload.count.toLocaleString()} artworks)`, 
                    'Percentage'
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
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>55.95%</strong> of all art was labeled "Calm."
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>74,350</strong> paintings. One emotion.
          </p>
          
          <p style={{ color: '#222222' }}>
            Naturally, I got curious. Maybe "calm" really is the most common emotion in art? What if art is meant to bring peace? Perhaps, I was seeing a pattern that wasn't there?
          </p>
          
          <p style={{ color: '#222222' }}>
            I ran a chi-square test—a statistical measure that determines if observed patterns differ significantly from what we'd expect by luck alone.
          </p>
          
          <div className="text-center py-4 border-l-4" style={{ borderColor: '#5D866C', paddingLeft: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
            <div className="space-y-2">
              <div style={{ color: '#C96E58', fontWeight: 700, fontSize: '1.5rem' }}>
                χ² = 449,027.7
              </div>
              <div style={{ color: '#C96E58', fontWeight: 700, fontSize: '1.2rem' }}>
                p &lt; 0.001
              </div>
            </div>
          </div>
          
          <p style={{ color: '#222222' }}>
            Mine was <strong style={{ color: '#C96E58' }}>449,028</strong>. To put that in perspective: a chi-square value above 20 is usually considered significant. 
          </p>
          
          <p style={{ color: '#222222' }}>
            This pattern is statistically impossible to explain by chance. Something systematic was happening.
          </p>
          
          {/* Understanding Emotion Framework */}
          
          <p style={{ color: '#222222' }}>
            Before blaming the AI, I needed to understand how humans process emotions in art and what emotions are.
          </p>
          
          <p style={{ color: '#222222' }}>
            The commonsense view of emotion, the one from Disney's <i>Inside Out</i>, assumes emotions are discrete universal categories that exist inside us: anger, sadness, joy, fear, disgust. In this world, emotions are kind of like chemical elements. They exist whether or not we have words for them.
          </p>
          
          <p style={{ color: '#222222' }}>
            But this view has been challenged. Psychologist <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5736315/" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>Lisa Feldman Barrett argues</a> that emotions are categories that we construct, not categories that exist independently. "Emotions that belong in art" is an artificial based on human judgment.
          </p>

          <p style={{ color: '#222222' }}>
            <a href="https://psycnet.apa.org/doiLanding?doi=10.1037%2F0033-295X.110.1.145" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>Core affect</a> is essentially how we feel at any point defined by two dimensions. <strong>Valence</strong> captures whether you feel positive or negative. <strong>Arousal</strong> captures whether that feeling comes with high or low energy. You experience core affect at all times.
          </p>
          
          {/* Valence and Arousal */}
          <p style={{ color: '#222222' }}>
            Looking at valence and arousal stats, and the bias gets clearer.
          </p>
          
          <p style={{ color: '#222222' }}>
            If GPT-4o were just picking "calm" randomly when confused, we'd expect some balance between positive and negative emotions. Instead:
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
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#222222' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#222222' }} domain={[0, 100]} />
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
              <p style={{ color: '#222222', marginTop: '0.5rem', textAlign: 'center' }}>
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
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#222222' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#222222' }} domain={[0, 100]} />
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
              <p style={{ color: '#222222', marginTop: '0.5rem', textAlign: 'center' }}>
                Arousal Distribution
              </p>
            </div>
          </div>
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>87.9% positive valence.</strong> For every artwork tagged with a negative emotion, <strong style={{ color: '#C96E58' }}>7.29</strong> were tagged as positive.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>76.4% low arousal.</strong> Three-quarters of all art was labeled as low-energy.
          </p>
          
          <p style={{ color: '#222222' }}>
            This explained the funeral. GPT-4o wasn't just seeing everything as positive—it was seeing everything as calm specifically. Low arousal, positive valence. The safest possible answer.
          </p>
          
          
          <p style={{ color: '#222222' }}>
            Emotion words, like "calm," "sad," "excited," and "angry", are discrete categories that humans invented to communicate about core affect. They are cultural constructs. Different languages carve up emotional space differently. The German word <i><a href="https://www.psychologytoday.com/us/basics/schadenfreude" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>Schadenfreude</a></i> (pleasure at another's misfortune) or Japanese <i><a href="https://en.wikipedia.org/wiki/Amae" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>amae</a></i> (pleasurable dependence on another person) have no single English equivalent. 
          </p>
          
          <p style={{ color: '#222222' }}>
            When humans label art with emotion words, we're doing something complex: translating a visual experience into a discrete category, filtered through cultural knowledge about what emotions "belong" in certain contexts. When GPT-4o does it, it just looks at the training data since it does not have a valence/arousal detector. It's pattern-matching: "This looks like images I've seen described with 'calm' before." The core affect dimensions emerge from these patterns, but they're not built into the architecture.
          </p>
          
          <p style={{ color: '#222222' }}>
            A funeral scene? We know that means grief, because we've learned the cultural script. A bright landscape? Probably joy. We're not detecting emotion. We're constructing it.
          </p>
        </div>
      </div>
    </section>
  );
};