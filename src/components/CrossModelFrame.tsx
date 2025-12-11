import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import opus110Image from 'figma:asset/6f693cd2097b2ae458aa416c10c57b36013984f6.png';
import ukiyoeImage from 'figma:asset/af5cd08612d27538a423bbedd0236fd349e8041f.png';
import midwestImage from 'figma:asset/142f30ebc4a9c416dad1c6a9d67befadab20a450.png';

export const CrossModelFrame: React.FC = () => {
  // Calm epidemic data
  const calmEpidemicData = [
    { model: 'Sonnet 4.5', percentage: 31.8 },
    { model: 'Gemini 2.5', percentage: 22.7 },
    { model: 'Haiku 4.5', percentage: 18.2 },
    { model: 'GPT-4o', percentage: 18.2 },
    { model: 'GPT-5.1', percentage: 13.6 }
  ];

  // GPT-4o cultural comparison data (simplified for visualization)
  const gpt4oCulturalData = [
    { emotion: 'Calm', Western: 12, Eastern: 29 },
    { emotion: 'Excited', Western: 15, Eastern: 14 },
    { emotion: 'Sad', Western: 10, Eastern: 14 },
    { emotion: 'Alarmed', Western: 12, Eastern: 14 },
    { emotion: 'Contentment', Western: 10, Eastern: 14 },
    { emotion: 'Frustrated', Western: 8, Eastern: 0 },
    { emotion: 'Happy', Western: 8, Eastern: 0 },
    { emotion: 'Tired', Western: 8, Eastern: 14 },
    { emotion: 'Annoyed', Western: 7, Eastern: 0 },
    { emotion: 'Aroused', Western: 5, Eastern: 0 }
  ];

  // Cultural bias table data
  const culturalBiasTable = [
    { model: 'Claude Sonnet 4.5', eastern: '43%', western: '25%' },
    { model: 'Gemini 2.5 Flash', eastern: '43%', western: '12%' },
    { model: 'Claude Haiku 4.5', eastern: '29%', western: '12%' },
    { model: 'GPT-4o', eastern: '29%', western: '12%' },
    { model: 'GPT-5.1', eastern: '29%', western: '6%' }
  ];

  // Prompt sensitivity data
  const promptSensitivityData = [
    { model: 'GPT-5.1', prompt1: 3, prompt2: 0 },
    { model: 'GPT-4o', prompt1: 4, prompt2: 2 },
    { model: 'Gemini', prompt1: 5, prompt2: 5 },
    { model: 'Sonnet', prompt1: 7, prompt2: 7 }
  ];

  // Where models agree table
  const bentonLabels = [
    { model: 'GPT-4o', prompt1: 'Tired', prompt2: 'Aroused' },
    { model: 'GPT-5.1', prompt1: 'Tired', prompt2: 'Tired' },
    { model: 'Gemini 2.5 Flash', prompt1: 'Tired', prompt2: 'Tired' },
    { model: 'Claude Sonnet 4.5', prompt1: 'Tired', prompt2: 'Tired' }
  ];

  // Where models disagree table
  const jacouletLabels = [
    { model: 'GPT-4o', prompt1: 'Excited', prompt2: 'Happy' },
    { model: 'GPT-5.1', prompt1: 'Contentment', prompt2: 'Aroused' },
    { model: 'Gemini 2.5 Flash', prompt1: 'Aroused', prompt2: 'Aroused' },
    { model: 'Claude Sonnet 4.5', prompt1: 'Happy', prompt2: 'Happy' }
  ];

  // Abstract art problem table
  const abstractLabels = [
    { model: 'GPT-4o', prompt1: 'Calm', prompt2: 'Annoyed' },
    { model: 'GPT-5.1', prompt1: 'Excited', prompt2: 'Alarmed' },
    { model: 'Gemini 2.5 Flash', prompt1: 'Excited', prompt2: 'Calm' },
    { model: 'Claude Sonnet 4.5', prompt1: 'Calm', prompt2: 'Calm' }
  ];

  return (
    <section 
      className="pudding-section"
      data-frame="5"
      style={{ backgroundColor: '#F5F5F0', paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <h2 style={{ color: '#5D866C', fontWeight: 700 }}>
            Is This Just a GPT-4o Problem?
          </h2>
          
          <p style={{ color: '#222222' }}>
            Everything I found so far came from one model. The 132,895 artworks in the EmoArt dataset were all labeled by GPT-4o. Maybe the calm bias, the cultural flattening, the positivity skew were GPT-4o problems, not AI problems.
          </p>
          
          <p style={{ color: '#222222' }}>
            I needed to test other models.
          </p>
          
          {/* Building the Test Dataset */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Building the Test Dataset
          </h2>
          
          <p style={{ color: '#222222' }}>
            I couldn't run 132,895 images through five different models. Instead, I built a smaller sample designed to stress-test AI emotion recognition.
          </p>
          
          <p style={{ color: '#222222' }}>
            When creating the dataset, I wanted it to challenge AI's assumptions about emotion, include both Eastern and Western art (which is a questionable metric, given the <a href="https://data-feminism.mitpress.mit.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>"rethinking binaries" data feminism principle</a>), and have some "obviously calm" and "definitely not calm" images.
          </p>
          
          <p style={{ color: '#222222' }}>
            I wrote a Python script that sampled artworks from the EmoArt annotations file. I had three experimental samples to see what the algorithm kept picking, then manually selected the final 23 artworks based on three criteria:
          </p>
          
          <ul style={{ color: '#222222', listStyleType: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Regional balance:</strong> At least five traditionally Eastern and ten Western artworks. The EmoArt dataset drastically skews Western, so this small sample needed to reflect that imbalance.</li>
            <li><strong>Style diversity:</strong> No more than three artworks from the same art movement.</li>
            <li><strong>Emotional range:</strong> The script prioritized artworks that spanned high-arousal and low-arousal, as well as positive and negative valence.</li>
          </ul>
          
          <p style={{ color: '#222222', marginTop: '1rem' }}>
            The final dataset consisted of 16 Western artworks (13 styles) and 7 Eastern artworks (4 styles), broken into "Calm Control," "Not Calm Western," "Not Calm Eastern," and "Ambiguous" cases. Although after actually running the tests, many more proved to be ambiguous than I expected.
          </p>
          
          <p style={{ color: '#222222' }}>
            Only <strong style={{ color: '#C96E58' }}>6 out of the 23</strong> (26%) were deliberately selected as "Calm Control."
          </p>
          
          {/* The Experiment */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            The Experiment
          </h2>
          
          <p style={{ color: '#222222' }}>
            I tested five models from three different companies:
          </p>
          
          <ul style={{ color: '#222222', listStyleType: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>OpenAI:</strong> GPT-4o (the original EmoArt model) and GPT-5.1 (newer version)</li>
            <li><strong>Anthropic:</strong> Claude Sonnet 4.5 and Claude Haiku 4.5</li>
            <li><strong>Google:</strong> Gemini 2.5 Flash</li>
          </ul>
          
          <p style={{ color: '#222222', marginTop: '1rem' }}>
            Each model received the same 23 images with two different prompts.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Prompt 1</strong> asked for a simple label: "Please analyze this artwork and identify the primary emotion it conveys. Choose ONE emotion from this list: [Frustrated, Annoyed, Alarmed, Aroused, Excited, Happy, Glad, Contentment, Calm, Tired, Bored, Sad]. Respond with only the emotion label."
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Prompt 2</strong> added an instruction and required explanation: "Analyze this artwork's emotional content. Be careful not to default to 'calm' or 'contentment' because many artworks convey intense or negative emotions. What is the PRIMARY emotion? Choose ONE: [same list]. Explain briefly why."
          </p>
          
          <p style={{ color: '#222222' }}>
            If the calm bias was real and consistent, Prompt 2 should reduce it. If models were thoughtfully analyzing each image, both prompts should produce similar results.
          </p>
          
          {/* The Calm Problem Persists */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            The Calm Problem Persists
          </h2>
          
          <p style={{ color: '#222222' }}>
            The bar chart below shows what percentage of artworks each model labeled "calm" when given Prompt 1. The red dashed line marks 26%, representing the actual proportion of "Calm Control" artworks in my sample.
          </p>
          
          <div style={{ height: '350px', marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={calmEpidemicData}
                margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="model" 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  domain={[0, 35]}
                  label={{ value: 'Percentage labeled "Calm"', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Calm %']} />
                <ReferenceLine 
                  y={26} 
                  stroke="#C96E58" 
                  strokeDasharray="5 5"
                  label={{ value: 'Expected rate (26%)', position: 'right', fill: '#C96E58', fontSize: 12 }}
                />
                <Bar 
                  dataKey="percentage" 
                  fill="#5D866C" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: '#222222' }}>
            Claude Sonnet 4.5 called <strong style={{ color: '#C96E58' }}>32%</strong> of artworks "calm," meaning one in three elicited the same emotion. This wasn't just a Claude problem. Gemini labeled 23% as calm. Haiku and GPT-4o both landed at 18%. Only GPT-5.1, at 13%, came in below the expected rate.
          </p>
          
          <p style={{ color: '#222222' }}>
            I suppose when AI is confused, it responds with "calm"; it remains emotionally neutral. It views a Chinese ink landscape with an unfamiliar composition and opts for neutrality. When humans are unsure of what to say, we often say "interesting." Saying "calm" is AI's equivalent of that.
          </p>
          
          {/* Cultural Patterns */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Cultural Patterns Across Models
          </h2>
          
          <p style={{ color: '#222222' }}>
            I also ran the first prompt through GPT-4o, just like the original EmoArt dataset did, and got two interesting results. First, for some reason, the model was way more diverse with emotions it listed now, although my prompt was still straightforward. Second, Western artworks got labeled with 10 different emotions in relatively even distribution. Eastern artworks? Only six emotion categories, with "Calm" representing 29% of classifications.
          </p>
          
          <div style={{ height: '350px', marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={gpt4oCulturalData}
                margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="emotion" 
                  tick={{ fontSize: 11, fill: '#222222' }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  domain={[0, 35]}
                  label={{ value: 'Percentage', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                />
                <Tooltip />
                <Legend 
                  verticalAlign="top" 
                  align="right"
                  wrapperStyle={{ paddingBottom: '10px' }}
                />
                <Bar 
                  dataKey="Western" 
                  name="Western Art"
                  fill="#5D866C" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
                <Bar 
                  dataKey="Eastern" 
                  name="Eastern Art"
                  fill="#C96E58" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: '#222222' }}>
            This pattern appeared across all five models. The table below shows the percentage of artworks labeled "calm" broken down by region.
          </p>
          
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Model</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Eastern Calm (n=7)</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Western Calm (n=16)</th>
                </tr>
              </thead>
              <tbody>
                {culturalBiasTable.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.model}</td>
                    <td className="px-6 py-4" style={{ color: '#C96E58', fontWeight: 700 }}>{row.eastern}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.western}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Every model labeled Eastern artworks "calm" at higher rates than Western artworks. The gap was largest for Sonnet and Gemini, where Eastern art received "calm" labels more than three times as often as Western art.
          </p>
          
          {/* Prompt Sensitivity */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Do Models Change Their Answer When Asked to Explain?
          </h2>
          
          <p style={{ color: '#222222' }}>
            This isn't traditional crowdsourcing. It's more like asking the same person the same question in two different ways and seeing if their story changes.
          </p>
          
          <div style={{ height: '350px', marginTop: '1rem', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={promptSensitivityData}
                margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="model" 
                  tick={{ fontSize: 12, fill: '#222222' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#222222' }}
                  domain={[0, 8]}
                  label={{ value: 'Number of "Calm" Labels', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                />
                <Tooltip />
                <Legend 
                  verticalAlign="top" 
                  align="right"
                  wrapperStyle={{ paddingBottom: '10px' }}
                />
                <Bar 
                  dataKey="prompt1" 
                  name="Prompt 1"
                  fill="#5D866C" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
                <Bar 
                  dataKey="prompt2" 
                  name="Prompt 2"
                  fill="#C96E58" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <p style={{ color: '#222222' }}>
            The OpenAI models responded to the instruction. GPT-5.1 went from 3 "calm" labels to zero. GPT-4o dropped from 4 to 2. When I asked GPT-4o to explain, the distribution shifted: "Calm" disappeared, "Alarmed" increased, "Frustrated" appeared more often, and the overall range became more negative-leaning.
          </p>
          
          <p style={{ color: '#222222' }}>
            It's as if forcing GPT-4o to justify its choices made it realize: "Wait, this painting ISN'T calm. Look at those aggressive brushstrokes, that jarring color palette."
          </p>
          
          <p style={{ color: '#222222' }}>
            The explanation prompt worked as a reality check. Prompting could be part of the issue, and explanations do not guarantee accuracy, but they do seem to push certain models toward more considered responses.
          </p>
          
          <p style={{ color: '#222222' }}>
            Gemini and Sonnet did not respond to the instruction at all. Sonnet gave the same emotions for each artwork with both prompts. Identical labels for 22 of 23 artworks. Either impressively consistent or worryingly stubborn.
          </p>
          
          {/* Where Models Agree */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Where Models Agree
          </h2>
          
          <p style={{ color: '#222222' }}>
            Some artworks produced near-unanimous responses across all five models.
          </p>
          
          <div style={{ margin: '1rem 0' }}>
            <img
              src={midwestImage}
              alt="Thomas Hart Benton - Midwest"
              className="w-full h-auto"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
            />
            <p style={{ 
              color: '#222222', 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Thomas Hart Benton, "Midwest" (1930s Regionalism)
            </p>
          </div>
          
          <p style={{ color: '#222222' }}>
            This painting shows muscular workers harvesting crops. Dynamic figures. Flexed muscles. The composition celebrates American labor's strength and resilience during the Great Depression.
          </p>
          
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Model</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 1</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 2</th>
                </tr>
              </thead>
              <tbody>
                {bentonLabels.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.model}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt1}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Four AI models said "Tired" for both prompts. GPT-4o changed its answer to "Aroused" when asked to explain.
          </p>
          
          <p style={{ color: '#222222' }}>
            The EmoArt ground truth label was "Excited." These are workers mid-action, muscles flexed, showing pride and power. And AI sees exhaustion. Because they're laborers, they must be tired.
          </p>
          
          <p style={{ color: '#222222' }}>
            The models appear to have learned an association between images of physical labor and the emotion "tired," regardless of what the composition actually conveys.
          </p>
          
          {/* Where Models Disagree */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Where Models Disagree
          </h2>
          
          <p style={{ color: '#222222' }}>
            Other artworks split the models completely.
          </p>
          
          <div style={{ margin: '1rem 0' }}>
            <img
              src={ukiyoeImage}
              alt="Paul Jacoulet - L'Attente, Celebes, Menado"
              className="w-full h-auto"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
            />
            <p style={{ 
              color: '#222222', 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Paul Jacoulet, "L&apos;Attente, Celebes, Menado" (Ukiyo-e influenced)
            </p>
          </div>
          
          <p style={{ color: '#222222' }}>
            This image features a woman in ornate traditional clothing. The title means "The Wait." Five models produced five different answers.
          </p>
          
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Model</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 1</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 2</th>
                </tr>
              </thead>
              <tbody>
                {jacouletLabels.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.model}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt1}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            Gemini went with "Aroused," which feels like a misread of the composition. The Claude models played it safe with positive labels.
          </p>
          
          <p style={{ color: '#222222' }}>
            None of them engaged with what the image actually depicts: a woman waiting. The emotion is anticipation, patience, perhaps longing. But that wasn't on the list, so every model guessed differently.
          </p>
          
          {/* Abstract Art Problem */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            The Abstract Art Problem
          </h2>
          
          <div style={{ margin: '1rem 0' }}>
            <img
              src={opus110Image}
              alt="Gerard Schneider - Opus 110"
              className="w-full h-auto"
              style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
            />
            <p style={{ 
              color: '#222222', 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Gerard Schneider, "Opus 110" (Tachisme/Lyrical Abstraction)
            </p>
          </div>
          
          <p style={{ color: '#222222' }}>
            Violent black slashes against lime green. Aggressive drips and splatters. Pure gestural energy. This is about as "frustrated" or "angry" as abstract painting gets. The emotion is in the act of painting, in the violent application of paint.
          </p>
          
          <div className="overflow-x-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F5F5F0', borderBottom: '2px solid #222222' }}>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Model</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 1</th>
                  <th className="px-6 py-3 text-left" style={{ color: '#222222' }}>Prompt 2</th>
                </tr>
              </thead>
              <tbody>
                {abstractLabels.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.model}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt1}</td>
                    <td className="px-6 py-4" style={{ color: '#222222' }}>{row.prompt2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p style={{ color: '#222222' }}>
            GPT-4o said "Calm" initially, then changed to "Annoyed" when asked to explain. Sonnet looked at aggressive black slashes and violent splatters and said "Calm." Twice. Even after being explicitly told not to default to calm.
          </p>
          
          <p style={{ color: '#222222' }}>
            This happens because AI is trying to read emotion from depicted subjects: faces, bodies, scenes. Abstract art doesn't have subjects. The emotion is in brushwork, in gesture, in the physical act of mark-making. AI trained on figurative art fundamentally cannot recognize this mode of expression.
          </p>
          
          {/* Reflection */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Reflection
          </h2>
          
          <p style={{ color: '#222222' }}>
            This project is quite ironic because I am using AI to help me critique AI and write this analysis. We cannot step out of the systems we are in, but we can be transparent about this.
          </p>
          
          <p style={{ color: '#222222' }}>
            The sample itself has severe limitations. Twenty-three artworks cannot represent global artistic diversity. My "Eastern vs Western" binary flattens enormous cultural variation; Japanese, Chinese, and Aboriginal Australian art traditions have virtually nothing in common except all being labeled "non-Western."
          </p>
          
          <p style={{ color: '#222222' }}>
            And there's a deeper problem with this entire project. I'm applying Western emotion categories to non-Western art, then judging AI for making the same category errors I'm making. My ground truth labels reflect my own Western art history training, despite my attempts to learn from other traditions through scholarly research. I'm measuring how often AI agrees with me, a person with specific cultural positioning and inevitable blind spots.
          </p>
          
          <p style={{ color: '#222222' }}>
            I also only tested two prompts. What if I'd been more specific: "Identify the emotion conveyed through brushwork" or "Considering this is traditional Chinese painting, what emotion does it express?" How prompt-sensitive are these biases? Can better prompting reduce cultural misinterpretation, or would it just shift which errors the models make?
          </p>
          
          {/* Conclusion */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            What This Means
          </h2>
          
          <p style={{ color: '#222222' }}>
            The cross-model test confirmed three things.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>First, the calm default exists across models</strong>, though severity varies. Sonnet shows it most strongly at 32%. GPT-5.1 shows it least at 13%.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Second, the cultural bias exists across models.</strong> Every model labeled Eastern artworks "calm" at higher rates than Western artworks. This isn't a quirk of GPT-4o's training. It appears in systems from three different companies.
          </p>
          
          <p style={{ color: '#222222' }}>
            <strong>Third, prompt sensitivity varies by model.</strong> The OpenAI models can be partially corrected through explicit instruction. Sonnet and Gemini cannot. They ignore the prompt and return the same labels regardless.
          </p>
          
          <p style={{ color: '#222222' }}>
            If AI systematically misinterprets non-Western art, and museums deploy these systems for tagging, recommendations, accessibility descriptions, or art therapy, we're building digital infrastructure that reinforces cultural stereotypes. Imagine searching "exciting Eastern art" and getting no results because AI labeled everything "calm." It's a justice issue affecting how art circulates, who discovers it, and whose cultural expressions get valued or erased.
          </p>
        </div>
      </div>
    </section>
  );
};