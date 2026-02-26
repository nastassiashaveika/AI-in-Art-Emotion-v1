import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

export const CulturalBiasFrame: React.FC = () => {
  const [showElliotTooltip, setShowElliotTooltip] = React.useState(false);
  const [showYuTooltip, setShowYuTooltip] = React.useState(false);
  const [showSumiTooltip, setShowSumiTooltip] = React.useState(false);
  const [showPastoureauTooltip, setShowPastoureauTooltip] = React.useState(false);
  
  // Dataset split
  const datasetSplitData = [
    { name: 'Eastern Art', value: 3132, percentage: 2.4, color: '#5D866C' },
    { name: 'Western Art', value: 129763, percentage: 97.6, color: '#C96E58' }
  ];

  // Comparison metrics
  const comparisonMetrics = [
    { metric: 'Significant associations', Eastern: 14, Western: 98 },
    { metric: 'Colors with any association', Eastern: '8/12', Western: '12/12' },
    { metric: 'Avg associations per color', Eastern: 1.8, Western: 8.2 }
  ];

  // Updated color comparison data
  const colorComparisonData = [
    { color: 'Red', Eastern: 1, Western: 10 },
    { color: 'Blue', Eastern: 0, Western: 9 },
    { color: 'Black', Eastern: 3, Western: 10 },
    { color: 'Multicolor', Eastern: 4, Western: 9 }
  ];

  // Updated Eastern styles data
  const easternStylesData = [
    { style: 'Chinese ink paintings', Calm: 89.4, Excited: 0.2, Sad: 0 },
    { style: 'Gongbi', Calm: 87.5, Excited: 0, Sad: 0 },
    { style: 'Korea', Calm: 87.4, Excited: 0.4, Sad: 0.4 },
    { style: 'Shin-hanga', Calm: 86.8, Excited: 2.6, Sad: 0.3 },
    { style: 'Ink and wash', Calm: 82.7, Excited: 4.8, Sad: 4.0 },
    { style: 'Ukiyo-e', Calm: 74.3, Excited: 9.2, Sad: 0.5 }
  ];

  // Western abstract styles data
  const westernStylesData = [
    { style: 'Tachisme', Calm: 18.9, Excited: 60.5 },
    { style: 'Neo-Pop Art', Calm: 18.7, Excited: 58.6 },
    { style: 'Fauvism', Calm: 26.9, Excited: 53.3 },
    { style: 'Pop Art', Calm: 30.9, Excited: 49.3 },
    { style: 'Abstract Expressionism', Calm: 31.3, Excited: 47.1 }
  ];

  const renderCustomLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    if (value === 0) return null;
    return (
      <text 
        x={x + width / 2} 
        y={y - 5} 
        fill="var(--text-color)" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize="12"
      >
        {value}
      </text>
    );
  };

  const barColorMap: Record<string, string> = {
    'Red': '#C96E58',
    'Blue': '#5D9BD5',
    'Black': '#888888',
  };

  const multicolorLetterColors = ['#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83', '#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83'];

  const renderBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'var(--bg-color)',
          padding: '0.5rem',
          border: '1px solid var(--text-color)',
          borderRadius: '4px',
        }}>
          <p style={{ fontWeight: 700, margin: 0 }}>
            {label === 'Multicolor' ? (
              <span>
                {'Multicolor'.split('').map((char, i) => (
                  <span key={i} style={{ color: multicolorLetterColors[i % multicolorLetterColors.length] }}>{char}</span>
                ))}
              </span>
            ) : (
              <span style={{ color: barColorMap[label] || 'var(--text-color)' }}>{label}</span>
            )}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: 'var(--text-color)', margin: 0 }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderMulticolorTick = (props: any) => {
    const { x, y, payload } = props;
    if (payload.value === 'Multicolor') {
      const text = 'Multicolor';
      const colors = ['#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83', '#C96E58', '#5D866C', '#4A6FA5', '#D4A843', '#8B5E83'];
      return (
        <g>
          {text.split('').map((char, i) => (
            <text
              key={i}
              x={x - ((text.length - 1) * 3.5) + i * 7}
              y={y + 12}
              fill={colors[i % colors.length]}
              textAnchor="middle"
              fontSize={13}
              fontWeight={500}
            >
              {char}
            </text>
          ))}
        </g>
      );
    }
    return (
      <text x={x} y={y + 12} fill={barColorMap[payload.value] || 'var(--text-color)'} textAnchor="middle" fontSize={13} fontWeight={500}>
        {payload.value}
      </text>
    );
  };

  return (
    <section 
      className="pudding-section"
      data-frame="cultural-bias"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <h3 style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
            So If Not Just Color, What Else?
          </h3>
          
          <p style={{ color: 'var(--text-color)' }}>
            The EmoArt dataset contains art from around the world. But not equally.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I categorized artworks as "Eastern" or "Western" based on their style labels. Styles originating from or primarily associated with East Asian traditions — Chinese ink painting, Ukiyo-e, Gongbi, Korean art, Shin-hanga, Sōsaku hanga, Indian art, Islamic art — were coded as Eastern. European and American movements — Impressionism, Cubism, Abstract Expressionism, Pop Art — were coded as Western.
          </p>
          
          {/* Pie Chart */}
          <div style={{ height: '250px', marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={datasetSplitData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={(entry) => `${entry.name}: ${entry.percentage}%`}
                  isAnimationActive={false}
                >
                  {datasetSplitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number, name: string) => [`${value.toLocaleString()} artworks`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
      
          
          <p style={{ color: 'var(--text-color)' }}>
            If GPT-4o learned color-emotion associations primarily from Western art, what happens when it encounters Eastern art—where colors carry completely different cultural meanings?
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            We already established red as a signal of passion in the West.{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowElliotTooltip(true)}
              onMouseLeave={() => setShowElliotTooltip(false)}
            >
              Elliot and Maier's review
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
                  opacity: showElliotTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                <a
                  href="https://deweycolorsystem.com/wp-content/uploads/2020/06/Credentials-Color-Psychology.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#5D866C",
                    textDecoration: "underline",
                  }}
                >
                  Elliot & Maier, 2014
                </a>
                {' '}— Color-emotion associations stem from both biological predispositions and repeated cultural pairing. Red is linked to arousal, passion, and danger across Western experimental literature.
              </span>
            </span>
            {' '}traces this to both biological arousal responses and centuries of learned cultural pairing. But in Chinese culture, red carries the opposite emotional register: it represents celebration, good fortune, and imperial power. It's the color of weddings and Lunar New Year, and is strictly forbidden at funerals.{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowYuTooltip(true)}
              onMouseLeave={() => setShowYuTooltip(false)}
            >
              <sup style={{ fontSize: '0.8em' }}>²</sup>
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
                  opacity: showYuTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                <a
                  href="http://cgjhsc.cgu.edu.tw/data_files/CGJ7-1-03.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#5D866C",
                    textDecoration: "underline",
                  }}
                >
                  Yu, 2014
                </a>
                {' '}— Cross-cultural analysis of color symbolism showing how the same color carries different meanings across civilizations. Documents red's association with life, celebration, and imperial power in Chinese culture through the Five Elements system.
              </span>
            </span>
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            Black follows the same pattern. In Western contexts, it suggests mourning, mystery, negativity. In Japanese calligraphy and ink painting, black carries mastery, spiritual discipline, and essential presence. The entire tradition of{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowSumiTooltip(true)}
              onMouseLeave={() => setShowSumiTooltip(false)}
            >
              sumi-e
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
                  opacity: showSumiTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                Sumi-e (ink wash painting) and Shodo (calligraphy) traditions use only black sumi ink to convey the full range of emotion, season, and atmosphere. The practice is rooted in Zen Buddhism, emphasizing spontaneity and the expression of essence over literal representation.
              </span>
            </span>
            {' '}builds worlds of emotional depth from black ink alone. As{' '}
            <span
              style={{
                position: 'relative',
                cursor: 'default',
                borderBottom: '1px dotted var(--text-color)',
              }}
              className="group"
              onMouseEnter={() => setShowPastoureauTooltip(true)}
              onMouseLeave={() => setShowPastoureauTooltip(false)}
            >
              Pastoureau
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
                  opacity: showPastoureauTooltip ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                <a
                  href="https://press.princeton.edu/books/paperback/9780691181363/blue"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#5D866C",
                    textDecoration: "underline",
                  }}
                >
                  Pastoureau, 2001
                </a>
                {' '}— <em>Blue: The History of a Color</em>. Historian of color who argues that color meanings are socially constructed, not inherent. Each culture defines, codes, and assigns value to colors through its own history and traditions.
              </span>
            </span>
            {' '}puts it, color is a social phenomenon: it is society that makes a color, defines it, and gives it meaning. If GPT-4o learned its color-emotion associations from Western training data, it would read a red Chinese painting as "excited" and black Japanese brushwork as "sad," missing the cultural scripts entirely.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            I ran the same color-emotion tests separately for Eastern and Western artworks.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            The disparity was stark:
          </p>
          
          {/* Comparison Metrics Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--text-color)' }}>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Metric</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Eastern</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Western</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMetrics.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--surface-alt)' : 'var(--panel-bg)' }}>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.metric}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--highlight-color)', fontWeight: 700 }}>{row.Eastern}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--highlight-color)', fontWeight: 700 }}>{row.Western}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            The model had learned 7 times more color-emotion patterns from Western traditions.
          </p>
          
          {/* Color Comparison Bar Chart */}
          <div style={{ height: '350px', marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={colorComparisonData}
                margin={{ top: 10, right: 16, left: 16, bottom: 16 }}
                barGap={4}
                barCategoryGap="15%"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--subtle-border)" />
                <XAxis 
                  dataKey="color" 
                  tick={renderMulticolorTick}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'var(--text-color)' }}
                  domain={[0, 11]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  label={{ value: 'Number of Associations', angle: -90, position: 'insideLeft', style: { fill: 'var(--text-color)', fontSize: 14 } }}
                />
                <Tooltip content={renderBarTooltip} />
                <Legend 
                  verticalAlign="top" 
                  align="right"
                  wrapperStyle={{ paddingBottom: '10px' }}
                  iconType="square"
                />
                <Bar 
                  dataKey="Eastern" 
                  fill="#D4A843" 
                  label={renderCustomLabel}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
                <Bar 
                  dataKey="Western" 
                  fill="#4A5568" 
                  label={renderCustomLabel}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
But the sample sizes are vastly unequal, so fewer associations are expected. The question is whether the gap is just a statistical power problem or something deeper. Take red. In Western art, red is connected to ten different emotions — a red sunset could be calm, a red splash could signal alarm. In Eastern art, red is linked to just one emotion: excitement. And weakly (V = 0.049).          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            Blue told a similar story: nine Western associations, zero Eastern.
          </p>
          
          {/* Style Breakdown */}
          <h2 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1rem' }}>
            The Specific Styles
          </h2>
          
          <p style={{ color: 'var(--text-color)' }}>
            GPT-4o's emotion labels weren't just skewed—they were flattening entire artistic traditions into a single emotion.
          </p>
          
          {/* Eastern Styles Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--text-color)' }}>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Style</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Calm</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Excited</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Sad</th>
                </tr>
              </thead>
              <tbody>
                {easternStylesData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--surface-alt)' : 'var(--panel-bg)' }}>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.style}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--highlight-color)', fontWeight: 700 }}>{row.Calm}%</td>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.Excited}%</td>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.Sad}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            Chinese ink paintings—a tradition spanning dynasties, depicting everything from serene landscapes to dynamic battles to political satire—got labeled "calm" 89.4% of the time.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            Meanwhile, Western abstract movements showed completely different patterns:
          </p>
          
          {/* Western Styles Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--text-color)' }}>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Style</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Calm</th>
                  <th className="px-6 py-3 text-left" style={{ color: 'var(--text-color)' }}>Excited</th>
                </tr>
              </thead>
              <tbody>
                {westernStylesData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--surface-alt)' : 'var(--panel-bg)' }}>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.style}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--text-color)' }}>{row.Calm}%</td>
                    <td className="px-6 py-4" style={{ color: 'var(--highlight-color)', fontWeight: 700 }}>{row.Excited}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: 'var(--text-color)' }}>
            Western abstraction got emotional diversity. Eastern tradition got "calm."
          </p>
          
          {/* Entropy */}
          <h2 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1rem' }}>
            I Calculated Entropy. The Numbers Confirmed the Pattern.
          </h2>
          
          <p style={{ color: 'var(--text-color)' }}>
            Entropy measures diversity—how spread out the emotion labels are across categories. Higher entropy means more variety; lower means everything clusters into one or two labels.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            If the model were actually reading emotional nuance in art, we'd expect entropy values somewhere around 1.5-2.0 based on what we see in Western styles like Social Realism and Surrealism.
          </p>
          
          <p style={{ color: 'var(--text-color)' }}>
            <strong>Highest entropy (most diverse):</strong>
          </p>
          
          <ul style={{ color: 'var(--text-color)', listStyleType: 'disc', paddingLeft: '2rem' }}>
            <li>Social Realism: 1.89</li>
            <li>Surrealism: 1.73</li>
            <li>Expressionism: 1.68</li>
          </ul>
          
          <p style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
            <strong>Lowest entropy (most flattened):</strong>
          </p>
          
          <ul style={{ color: 'var(--text-color)', listStyleType: 'disc', paddingLeft: '2rem' }}>
            <li> Chinese art: 0.35</li>
            <li> Gongbi: 0.38</li>
            <li> Korea: 0.41</li>
            <li> Shin-hanga: 0.57</li>
          </ul>
          
          <p style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
            An entropy of 0.35 for Chinese art means the model is essentially outputting a constant—almost always "calm."
          </p>
          
          
        </div>
      </div>
    </section>
  );
};