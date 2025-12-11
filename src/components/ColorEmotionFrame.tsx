import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, ReferenceLine } from 'recharts';

// Most frequent color terms for table
const colorTermsData = [
  { term: 'Vibrant', percentage: 17.9, count: 23833 },
  { term: 'Soft', percentage: 15.0, count: 19948 },
  { term: 'Muted', percentage: 14.1, count: 18799 },
  { term: 'Blue', percentage: 10.7, count: 14180 },
  { term: 'Red', percentage: 9.8, count: 13085 }
];

// Top color-emotion associations after FDR correction
const topAssociations = [
  { color: 'Red', emotion: 'Excited', cramersV: 0.214, adjustedP: '0.000' },
  { color: 'Multicolor', emotion: 'Excited', cramersV: 0.199, adjustedP: '0.000' },
  { color: 'Yellow', emotion: 'Excited', cramersV: 0.165, adjustedP: '0.000' },
  { color: 'Blue', emotion: 'Excited', cramersV: 0.133, adjustedP: '0.000' },
  { color: 'Red', emotion: 'Calm', cramersV: 0.129, adjustedP: '0.000' },
  { color: 'Orange', emotion: 'Excited', cramersV: 0.112, adjustedP: '0.000' }
];

// Complete color-emotion association data for scatter plot
const allColorEmotionData = [
  { color: 'Red', emotion: 'Excited', cramersV: 0.214 },
  { color: 'Red', emotion: 'Calm', cramersV: 0.129 },
  { color: 'Red', emotion: 'Happy', cramersV: 0.098 },
  { color: 'Red', emotion: 'Angry', cramersV: 0.087 },
  { color: 'Blue', emotion: 'Excited', cramersV: 0.133 },
  { color: 'Blue', emotion: 'Calm', cramersV: 0.091 },
  { color: 'Blue', emotion: 'Sad', cramersV: 0.074 },
  { color: 'Blue', emotion: 'Peaceful', cramersV: 0.068 },
  { color: 'Yellow', emotion: 'Excited', cramersV: 0.165 },
  { color: 'Yellow', emotion: 'Happy', cramersV: 0.143 },
  { color: 'Yellow', emotion: 'Energetic', cramersV: 0.089 },
  { color: 'Yellow', emotion: 'Warm', cramersV: 0.076 },
  { color: 'Green', emotion: 'Calm', cramersV: 0.104 },
  { color: 'Green', emotion: 'Peaceful', cramersV: 0.098 },
  { color: 'Green', emotion: 'Natural', cramersV: 0.082 },
  { color: 'Green', emotion: 'Serene', cramersV: 0.057 },
  { color: 'Orange', emotion: 'Excited', cramersV: 0.112 },
  { color: 'Orange', emotion: 'Energetic', cramersV: 0.095 },
  { color: 'Orange', emotion: 'Warm', cramersV: 0.083 },
  { color: 'Multicolor', emotion: 'Excited', cramersV: 0.199 },
  { color: 'Multicolor', emotion: 'Vibrant', cramersV: 0.156 },
  { color: 'Purple', emotion: 'Calm', cramersV: 0.071 },
  { color: 'Purple', emotion: 'Mysterious', cramersV: 0.063 },
  { color: 'Brown', emotion: 'Calm', cramersV: 0.042 },
  { color: 'Brown', emotion: 'Earthy', cramersV: 0.038 },
  { color: 'Gray', emotion: 'Calm', cramersV: 0.056 },
  { color: 'White', emotion: 'Peaceful', cramersV: 0.058 },
];

// Aggregate data by color for scatter plot
const colorAggregateData = Object.entries(
  allColorEmotionData.reduce((acc, item) => {
    if (!acc[item.color]) {
      acc[item.color] = { color: item.color, emotions: [], cramersVs: [] };
    }
    acc[item.color].emotions.push(item.emotion);
    acc[item.color].cramersVs.push(item.cramersV);
    return acc;
  }, {} as Record<string, { color: string; emotions: string[]; cramersVs: number[] }>)
).map(([color, data]) => ({
  color,
  emotionsLinked: data.emotions.length,
  avgCramersV: data.cramersVs.reduce((sum, v) => sum + v, 0) / data.cramersVs.length,
  emotions: data.emotions.join(', ')
}));

// Color mapping for dots
const colorMap: Record<string, string> = {
  'Red': '#C96E58',
  'Blue': '#5D9BD5',
  'Yellow': '#F4C430',
  'Green': '#5D866C',
  'Orange': '#E07B39',
  'Multicolor': '#8B4789',
  'Purple': '#9370DB',
  'Brown': '#8B7355',
  'Gray': '#808080',
  'White': '#E8E8E8'
};

export const ColorEmotionFrame: React.FC = () => {
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  return (
    <section 
      className="pudding-section"
      data-frame="2"
      style={{ backgroundColor: '#F5F5F0', paddingTop: '1rem' }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <h2 style={{ color: '#5D866C', fontWeight: 700 }}>
            My First Hypothesis: Maybe AI Just Reacts to Color.
          </h2>
          
          <p style={{ color: '#222222' }}>
            I wanted to test if GPT-4o was just detecting visual features and calling them emotions.
          </p>
          
          <p style={{ color: '#222222' }}>
            Color seemed like the obvious candidate. Western color psychology has strong conventions: red means passion, blue means calm, yellow means happiness.
          </p>
          
          <p style={{ color: '#222222' }}>
            I built a color lexicon covering 144 terms and searched through all 132,895 artwork descriptions.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>71.9% mentioned color</strong>—95,515 artworks. The most common terms:
          </p>
          
          {/* Color Terms Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#222222' }}>Term</th>
                  <th className="px-4 py-3 text-left" style={{ color: '#222222' }}>% of Descriptions</th>
                  <th className="px-4 py-3 text-left" style={{ color: '#222222' }}>Count</th>
                </tr>
              </thead>
              <tbody>
                {colorTermsData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-4 py-3" style={{ color: '#222222' }}>{row.term}</td>
                    <td className="px-4 py-3" style={{ color: '#222222' }}>{row.percentage}%</td>
                    <td className="px-4 py-3" style={{ color: '#222222' }}>{row.count.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Color was definitely present in the descriptions. But did it actually predict emotions?
          </p>
          
          {/* Testing Associations */}
          <p style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            I tested all 144 color-emotion pairs for statistical associations.
          </p>
          
  
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>97</strong> showed significant relationships.
          </p>
          
          <div style={{ 
            borderLeft: '4px solid #5D866C', 
            paddingLeft: '1rem', 
            marginTop: '1rem', 
            marginBottom: '1rem',
            backgroundColor: '#FAFAF8'
          }}>
            <p style={{ color: '#222222', margin: '0.5rem 0' }}>
              Quick stats refresher: <i>Cramér's V measures association strength (0 = no relationship, 1 = perfect relationship), while the p-value tells you whether the pattern could occur by random chance (p &lt; 0.05 is the standard threshold for significance).</i>
            </p>
          </div>
          
          <p style={{ color: '#222222' }}>
            But here's the thing: when you run 144 tests, some will appear "significant" just by luck. To account for this, I applied FDR (False Discovery Rate) correction—a statistical method that adjusts p-values to control how many false discoveries you're likely to have in your results.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong style={{ color: '#C96E58' }}>93 associations survived.</strong> This was real.
          </p>
          
          {/* Top Associations Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Color</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Emotion</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Cramér's V</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Adjusted p</th>
                </tr>
              </thead>
              <tbody>
                {topAssociations.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.color}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.emotion}</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.cramersV.toFixed(3)}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.adjustedP}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            The associations were statistically significant but modest in strength. A Cramér's V of 0.21 for Red is real, but it's not deterministic. Color influenced the labels, but it wasn't the whole story.
          </p>
          
          <p style={{ color: '#222222' }}>
            Something else was driving the "calm" default.
          </p>
          
          {/* Scatter Plot */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Color-Emotion Associations Visualized
          </h2>
          
          <p style={{ color: '#222222' }}>
            I looked at which colors linked to the most emotions and whether having more associations meant stronger effect sizes (higher Cramér's V).
          </p>
          
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
              >
                <XAxis 
                  type="number" 
                  dataKey="emotionsLinked" 
                  name="Number of Emotions Linked"
                  domain={[0, 6]}
                  label={{ value: 'Number of Emotions Linked', position: 'bottom', offset: 40, style: { fill: '#222222' } }}
                  tick={{ fill: '#222222' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="avgCramersV" 
                  name="Average Cramér's V"
                  domain={[0, 0.15]}
                  label={{ value: 'Average Cramér\'s V', angle: -90, position: 'insideLeft', style: { fill: '#222222', textAnchor: 'middle' } }}
                  tick={{ fill: '#222222' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div style={{ 
                          backgroundColor: 'white', 
                          padding: '0.5rem', 
                          border: '1px solid #222222',
                          borderRadius: '4px'
                        }}>
                          <p style={{ color: '#5D866C', fontWeight: 700, margin: 0 }}>{data.color}</p>
                          <p style={{ color: '#222222', margin: 0 }}>Emotions: {data.emotionsLinked}</p>
                          <p style={{ color: '#222222', margin: 0 }}>Avg Cramér's V: {data.avgCramersV.toFixed(3)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine 
                  y={0.105} 
                  stroke="#999" 
                  strokeDasharray="3 3"
                />
                <Scatter 
                  name="Colors" 
                  data={colorAggregateData}
                  isAnimationActive={false}
                  onClick={(data: any) => setSelectedColor(data.color)}
                  style={{ cursor: 'pointer' }}
                >
                  {colorAggregateData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={colorMap[entry.color] || '#222222'}
                      stroke="#222222"
                      strokeWidth={selectedColor === entry.color ? 2 : 0}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: '#808080', fontSize: 12, textAlign: 'center' }}>
            Click on a dot to see which emotions are linked to that color.
          </p>
          
          {selectedColor && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              backgroundColor: 'white',
              border: '1px solid #222222',
              borderRadius: '4px'
            }}>
              <h3 style={{ color: '#5D866C', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                {selectedColor}
              </h3>
              <p style={{ color: '#222222', margin: '0 0 0.5rem 0' }}>
                <strong>Emotions Linked:</strong> {colorAggregateData.find(d => d.color === selectedColor)?.emotions}
              </p>
              <p style={{ color: '#222222', margin: 0 }}>
                <strong>Average Cramér's V:</strong> {colorAggregateData.find(d => d.color === selectedColor)?.avgCramersV.toFixed(3)}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};