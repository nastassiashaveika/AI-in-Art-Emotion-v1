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

const multicolorGradientColors = ['#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83', '#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83'];

const MulticolorText = ({ style = {} }: { style?: React.CSSProperties }) => (
  <span style={{ ...style }}>
    {'Multicolor'.split('').map((char, i) => (
      <span key={i} style={{ color: multicolorGradientColors[i % multicolorGradientColors.length] }}>{char}</span>
    ))}
  </span>
);

const ColorName = ({ color, style = {} }: { color: string; style?: React.CSSProperties }) => {
  if (color === 'Multicolor') return <MulticolorText style={style} />;
  return <span style={{ color: colorMap[color] || 'var(--text-color)', ...style }}>{color}</span>;
};

const renderCustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.color === 'Multicolor') {
    const segments = multicolorGradientColors.slice(0, 5);
    const angleStep = 360 / segments.length;
    return (
      <g>
        <defs>
          <clipPath id="multicolor-clip">
            <circle cx={cx} cy={cy} r={8} />
          </clipPath>
        </defs>
        {segments.map((segColor, i) => {
          const startAngle = (i * angleStep - 90) * (Math.PI / 180);
          const endAngle = ((i + 1) * angleStep - 90) * (Math.PI / 180);
          const x1 = cx + 12 * Math.cos(startAngle);
          const y1 = cy + 12 * Math.sin(startAngle);
          const x2 = cx + 12 * Math.cos(endAngle);
          const y2 = cy + 12 * Math.sin(endAngle);
          return (
            <path
              key={i}
              d={`M${cx},${cy} L${x1},${y1} A12,12 0 0,1 ${x2},${y2} Z`}
              fill={segColor}
              stroke="var(--text-color)"
              strokeWidth={0.5}
              clipPath="url(#multicolor-clip)"
            />
          );
        })}
        <circle cx={cx} cy={cy} r={8} fill="none" stroke="var(--text-color)" strokeWidth={1} />
      </g>
    );
  }
  return (
    <circle
      cx={cx}
      cy={cy}
      r={8}
      fill={colorMap[payload.color] || 'var(--text-color)'}
      stroke="var(--text-color)"
      strokeWidth={1}
    />
  );
};

export const ColorEmotionFrame: React.FC = () => {
  const [showCramersVTooltip, setShowCramersVTooltip] = React.useState(false);
  const [showFDRTooltip, setShowFDRTooltip] = React.useState(false);
  
  return (
    <section 
      id="section-2"
      className="pudding-section"
      data-frame="color-hypothesis"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        {/* Section header */}
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          Color and Culture
        </h2>
        
        <div className="space-y-4">
          <h3 style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
            Hypothesis 1: Maybe AI Just Reacts to Color
          </h3>
          
          <p style={{ color: 'var(--text-color)' }}>
            I wanted to test if GPT-4o was just detecting visual features and calling them emotions.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            Color seemed like the obvious candidate. Western color psychology has strong conventions: red means passion, blue means calm, yellow means happiness (
            <a
              href="https://deweycolorsystem.com/wp-content/uploads/2020/06/Credentials-Color-Psychology.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              Dewey Color System
            </a>
            ).
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            I built a color lexicon covering 144 terms and searched through all 132,895 artwork descriptions.
          </p>

          <p style={{ color: 'var(--text-color)', fontSize: '0.85rem', fontStyle: 'italic' }}>
            All data, code, and analysis for this project are available on{' '}
            <a
              href="https://github.com/nastassiashaveika/AI-in-Art-Emotion-v1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              GitHub
            </a>
            . For questions or feedback, reach me at{' '}
            <a
              href="mailto:shaveika@uni.minerva.edu"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              shaveika@uni.minerva.edu
            </a>
            .
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong style={{ color: 'var(--highlight-color)' }}>71.9% mentioned color</strong>—95,515 artworks. The most common terms:
          </p>
          
          {/* Color Terms Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--text-color)' }}>
                  <th className="px-4 py-3 text-left" style={{ color: 'var(--text-color)' }}>Term</th>
                  <th className="px-4 py-3 text-left" style={{ color: 'var(--text-color)' }}>% of Descriptions</th>
                  <th className="px-4 py-3 text-left" style={{ color: 'var(--text-color)' }}>Count</th>
                </tr>
              </thead>
              <tbody>
                {colorTermsData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--surface-alt)' : 'var(--panel-bg)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--text-color)', fontWeight: 700 }}>{row.term}</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-color)' }}>{row.percentage}%</td>
                    <td className="px-4 py-3" style={{ color: 'var(--text-color)' }}>{row.count.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            Color was definitely present in the descriptions. But did it actually predict emotions?
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            I tested all 144 color-emotion pairs for statistical association using{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowCramersVTooltip(true)}
              onMouseLeave={() => setShowCramersVTooltip(false)}
            >
              Cramér's V
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
                  opacity: showCramersVTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                Cramér's V is derived from the chi-square statistic: it takes the chi-square value, divides by the sample size and the number of categories, and takes the square root. This rescales the result to a 0–1 range so you can compare effect sizes across tests with different sample sizes.
              </span>
            </span>
            , which measures how strongly two categorical variables are linked — 0 means no relationship, 1 means a perfect one. 97 pairs showed significant associations (p &lt; 0.05).
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            But running 144 tests creates a problem: at that volume, some results will look significant purely by chance. After applying{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowFDRTooltip(true)}
              onMouseLeave={() => setShowFDRTooltip(false)}
            >
              FDR correction
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
                  width: '320px',
                  marginBottom: '0.25rem',
                  opacity: showFDRTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                When you run one statistical test at the 5% (typical p-value check) significance threshold, there's a 5% chance of a false positive — you see a pattern that isn't really there. Run 144 tests, and you'd expect about 7 false positives just by luck. FDR correction accounts for this. It takes all 144 p-values, ranks them from most to least significant, and adjusts each one based on its rank. The strongest results barely change. The borderline ones get penalized. If an association still passes after correction, you can be more confident it's real and not just a side effect of running lots of tests.
              </span>
            </span>
            {' '}to filter out likely false positives, 93 associations held.
          </p>
          
          {/* Top Associations Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--text-color)' }}>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Color</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Emotion</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Cramér's V</th>
                </tr>
              </thead>
              <tbody>
                {topAssociations.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--surface-alt)' : 'var(--panel-bg)' }}>
                    <td className="px-6 py-4">
                      <ColorName color={row.color} />
                    </td>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.emotion}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--highlight-color)', fontWeight: 700 }}>{row.cramersV.toFixed(3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            The associations were statistically significant but modest in strength. A Cramér's V of 0.21 for Red is real, but it's not deterministic. Color influenced the labels, but it wasn't the whole story.
          </p>
          
          {/* Scatter Plot */}
          
          <p style={{ color: 'var(--text-color)' }}>
            I mapped each color by how many emotions it was linked to and how strong those links were. Most colors clustered in the bottom-left: linked to one or two emotions with weak effect sizes. Multicolor was the outlier, linked to only two emotions but with the strongest average association (V = 0.177). Overall, the effect sizes are small by conventional standards (
            <a
              href="https://utstat.toronto.edu/~brunner/oldclass/378f16/readings/CohenPower.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-color)",
                textDecoration: "underline",
              }}
            >
              Cohen's
            </a>
            {' '}benchmarks put 0.1 as "small" and 0.3 as "medium"). Color matters, but it's not doing the heavy lifting.
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
                  label={{ value: 'Number of Emotions Linked', position: 'bottom', offset: 40, style: { fill: 'var(--text-color)' } }}
                  tick={{ fill: 'var(--text-color)' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="avgCramersV" 
                  name="Average Cramér's V"
                  domain={[0, 0.15]}
                  label={{ value: 'Average Cramér\'s V', angle: -90, position: 'insideLeft', style: { fill: 'var(--text-color)', textAnchor: 'middle' } }}
                  tick={{ fill: 'var(--text-color)' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div style={{ 
                          backgroundColor: 'var(--bg-color)', 
                          padding: '0.5rem', 
                          border: '1px solid var(--text-color)',
                          borderRadius: '4px'
                        }}>
                          <p style={{ fontWeight: 700, margin: 0 }}>
                            <ColorName color={data.color} style={{ fontWeight: 700 }} />
                          </p>
                          <p style={{ color: 'var(--text-color)', margin: 0 }}>Emotions: {data.emotionsLinked}</p>
                          <p style={{ color: 'var(--text-color)', margin: 0 }}>Avg Cramér's V: {data.avgCramersV.toFixed(3)}</p>
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
                  shape={renderCustomDot}
                >
                  {colorAggregateData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={colorMap[entry.color] || 'var(--text-color)'}
                      stroke="var(--text-color)"
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};