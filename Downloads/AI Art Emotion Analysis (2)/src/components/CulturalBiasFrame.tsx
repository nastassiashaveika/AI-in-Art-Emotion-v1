import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

export const CulturalBiasFrame: React.FC = () => {
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
    { style: 'China_images', Calm: 89.4, Excited: 0.2, Sad: 0 },
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
        fill="#222222" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize="12"
      >
        {value}
      </text>
    );
  };

  return (
    <section 
      className="pudding-section"
      data-frame="3"
      style={{ 
        backgroundColor: '#F5F5F0',
        minHeight: '100vh',
        padding: '0'
      }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <h2 style={{ color: '#5D866C', fontWeight: 700 }}>
            Then I Asked: What About Different Artistic Traditions?
          </h2>
          
          <p style={{ color: '#222222' }}>
            The EmoArt dataset contains art from around the world. But not equally.
          </p>

          <p style={{ color: '#222222' }}>
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
          
          <p style={{ color: '#222222' }}>
            129,763 European and American artworks. Just 3,132 from East Asian traditions. Maybe color will mean drastically different things across the globe.
          </p>
    
          
          <p style={{ color: '#222222' }}>
            This immediately raised a question: If GPT-4o learned color-emotion associations primarily from Western art, what happens when it encounters Eastern art—where colors carry completely different cultural meanings?
          </p>
          
          <p style={{ color: '#222222' }}>
            Red in Western art often means passion, danger, excitement. In Chinese art, red means celebration, luck, imperial power.
          </p>
          
          <p style={{ color: '#222222' }}>
            Black in Western contexts suggests mourning, mystery, negativity. In Japanese calligraphy, black carries strength, presence, mastery.
          </p>
          
          <p style={{ color: '#222222' }}>
            If GPT-4o learned Western associations, it would apply Western interpretations to non-Western art.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Eastern Art: 14 Associations. Western Art: 98.</strong>
          </p>
          
          <p style={{ color: '#222222' }}>
            I ran the same color-emotion tests separately for Eastern and Western artworks.
          </p>
          
          <p style={{ color: '#222222' }}>
            The disparity was stark:
          </p>
          
          {/* Comparison Metrics Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Metric</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Eastern</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Western</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMetrics.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.metric}</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.Eastern}</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.Western}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
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
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="color" 
                  tick={{ fontSize: 13, fill: '#222222', fontWeight: 500 }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  domain={[0, 11]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  label={{ value: 'Number of Associations', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                />
                <Tooltip />
                <Legend 
                  verticalAlign="top" 
                  align="right"
                  wrapperStyle={{ paddingBottom: '10px' }}
                  iconType="square"
                />
                <Bar 
                  dataKey="Eastern" 
                  fill="#A0A0A0" 
                  label={renderCustomLabel}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
                <Bar 
                  dataKey="Western" 
                  fill="#222222" 
                  label={renderCustomLabel}
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: '#222222' }}>
            Take red. In Western art, red connected to ten different emotions—the model understood contextual variation. A red sunset could be calm; a red splash could be alarmed.
          </p>
          
          <p style={{ color: '#222222' }}>
            In Eastern art, red linked to one emotion: <strong>Excited</strong>. And weakly. (V = 0.049)
          </p>
          
          <p style={{ color: '#222222' }}>
            The model essentially said: "I know how red works in the 129,000 Western pieces I've seen. These 3,000 Eastern pieces with red? Probably the same thing."
          </p>
          
          {/* Style Breakdown */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            I Looked at Specific Styles. That's When It Got Disturbing.
          </h2>
          
          <p style={{ color: '#222222' }}>
            GPT-4o's emotion labels weren't just skewed—they were flattening entire artistic traditions into a single emotion.
          </p>
          
          {/* Eastern Styles Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Style</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Calm</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Excited</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Sad</th>
                </tr>
              </thead>
              <tbody>
                {easternStylesData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.style}</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.Calm}%</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.Excited}%</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.Sad}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Chinese ink paintings—a tradition spanning dynasties, depicting everything from serene landscapes to dynamic battles to political satire—got labeled "calm" 82-89% of the time.
          </p>
          
          <p style={{ color: '#222222' }}>
            Meanwhile, Western abstract movements showed completely different patterns:
          </p>
          
          {/* Western Styles Table */}
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Style</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Calm</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Excited</th>
                </tr>
              </thead>
              <tbody>
                {westernStylesData.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.style}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.Calm}%</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.Excited}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Western abstraction got emotional diversity. Eastern tradition got "calm."
          </p>
          
          {/* Entropy */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            I Calculated Entropy. The Numbers Confirmed the Pattern.
          </h2>
          
          <p style={{ color: '#222222' }}>
            Entropy measures diversity—how spread out the emotion labels are across categories. Higher entropy means more variety; lower means everything clusters into one or two labels.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Highest entropy (most diverse):</strong>
          </p>
          
          <ul style={{ color: '#222222', listStyleType: 'disc', paddingLeft: '2rem' }}>
            <li>Social Realism: 1.89</li>
            <li>Surrealism: 1.73</li>
            <li>Expressionism: 1.68</li>
          </ul>
          
          <p style={{ color: '#222222', marginTop: '0.5rem' }}>
            <strong>Lowest entropy (most flattened):</strong>
          </p>
          
          <ul style={{ color: '#222222', listStyleType: 'disc', paddingLeft: '2rem' }}>
            <li> Chinese art: 0.35</li>
            <li> Gongbi: 0.38</li>
            <li> Korea: 0.41</li>
            <li> Shin-hanga: 0.57</li>
          </ul>
          
          <p style={{ color: '#222222', marginTop: '0.5rem' }}>
            Western movements showed 3-5x more emotional diversity than Eastern traditions.
          </p>
          
          <p style={{ color: '#222222' }}>
            This isn't a model recognizing nuance. It's a model that learned: "When you see this style, label it calm."
          </p>
        </div>
      </div>
    </section>
  );
};
