import React from 'react';
import opus110Image from 'figma:asset/6f693cd2097b2ae458aa416c10c57b36013984f6.png';
import ukiyoeImage from 'figma:asset/af5cd08612d27538a423bbedd0236fd349e8041f.png';
import midwestImage from 'figma:asset/514678c46843c3ef0dc298e89fb8ef0d3362494c.png';
import batmanInterestingImage from 'figma:asset/24565949cf7d4052c45a486125b08f279576454d.png';
import matisseImage from 'figma:asset/1019d445bf93808d50c903c92f8459ca2d583557.png';
import cabreraImage from 'figma:asset/b7515af5f6ac3e3ab57720e43e985afacb0da14f.png';
import liGonglinImage from 'figma:asset/2c33389a8a30bfdab8670126f693a17f875953ea.png';
import { VerdictCards } from './VerdictCards';
import { ModelHeatmapGrid } from './ModelHeatmapGrid';
import { PullQuote } from './PullQuote';
import { ArtworkCaseStudy } from './ArtworkCaseStudy';

export const CrossModelFrame: React.FC = () => {
  const [showMethodology, setShowMethodology] = React.useState(false);

  return (
    <section
      id="section-3"
      className="pudding-section"
      data-frame="4"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          Cross-Model Experiment
        </h2>

        <div className="space-y-4">
          

          <p style={{ color: 'var(--text-color)' }}>
            Everything I found so far came from one model. The 132,895 artworks in the EmoArt dataset were all labeled by GPT-4o. Maybe the calm bias, the cultural flattening, the positivity skew were GPT-4o problems, not AI problems.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            So, I tested other models.
          </p>

          {/* ========== LEAD CASE STUDY: SCHNEIDER ========== */}
          <p style={{ color: 'var(--text-color)' }}>
            This is Gerard Schneider's <em>Opus 110</em>, a classic Tachisme work, which was meant to be a European response to abstract expressionism. Black slashes against green, very energetic. At least, to me. I showed it to five models and got different results.
          </p>

          <div style={{
            margin: '1.5rem 0',
          }}>
            <img
              src={opus110Image}
              alt="Gerard Schneider — Opus 110"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <p style={{
              color: 'var(--muted-text)',
              marginTop: '0.75rem',
              fontSize: '0.85rem',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              Gerard Schneider, "Opus 110" (Tachisme / Lyrical Abstraction)
            </p>
          </div>

          <VerdictCards verdicts={[
            { model: 'GPT-4o', emotion: 'Calm' },
            { model: 'GPT-5.1', emotion: 'Excited' },
            { model: 'Gemini 2.5', emotion: 'Excited' },
            { model: 'Haiku 4.5', emotion: 'Annoyed' },
            { model: 'Sonnet 4.5', emotion: 'Calm' },
          ]} />

          {/* Sonnet's explanation */}
          <div style={{
            borderLeft: '3px solid #5B9EA6',
            backgroundColor: 'var(--blockquote-bg)',
            padding: '1rem 1.25rem',
            margin: '1rem 0',
            borderRadius: '0 4px 4px 0',
          }}>
            <p style={{ color: 'var(--quote-text)', fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              "The large, heavy black shape is solid and immovable, suggesting a weighty, settled presence that is completely still… The flat, unmodulated green background is emotionally neutral and uniform. The overall effect is one of stability, composure, and profound quietude."
            </p>
            <p style={{ color: 'var(--muted-text)', margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
              — Claude Sonnet 4.5's explanation
            </p>
          </div>

          <p style={{ color: 'var(--text-color)' }}>
            Profound quietude is certainly interesting and not something, I, as a human, experience when I look at the painting.
          </p>

          {/* ========== COLLAPSIBLE METHODOLOGY ========== */}
          <div style={{
            border: '1px solid var(--subtle-border)',
            borderRadius: '6px',
            marginTop: '1.5rem',
            overflow: 'hidden',
          }}>
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--panel-bg)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '1rem' }}>
                How I Tested This
              </span>
              <span style={{ color: 'var(--muted-text)', fontSize: '1.2rem', fontWeight: 400 }}>
                {showMethodology ? '−' : '+'}
              </span>
            </button>
            {showMethodology && (
              <div style={{ padding: '0.75rem 1rem 1rem', borderTop: '1px solid var(--subtle-border)' }}>
                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem' }}>
                  I selected 23 artworks from the EmoArt dataset, balancing for regional representation, style diversity, and emotional range. The selection criteria:
                </p>

                <ul style={{ color: 'var(--text-color)', listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Regional balance:</strong> 7 Eastern and 16 Western artworks. The EmoArt dataset is 97.6% Western, so even this small sample needed to reflect a meaningful Eastern presence.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Style diversity:</strong> 17 styles represented, no more than three artworks from any single movement.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Emotional range:</strong> artworks spanning high and low arousal, positive and negative valence — not just pieces that "look calm."</li>
                  <li><strong>Control groups:</strong> 6 artworks deliberately chosen as "calm controls," alongside "not calm" and "ambiguous" cases. (After running the tests, far more proved ambiguous than expected.)</li>
                </ul>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem' }}>
                  I categorized artworks as "Eastern" or "Western" — a binary I'm aware is reductive (see the positionality note below), but necessary to test whether the cultural patterns from the EmoArt analysis held across models.
                </p>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem' }}>
                  The selection process involved a Python sampling script run against the EmoArt annotations, followed by manual curation across three experimental rounds. The full process is documented in{' '}
                  <a
                    href="https://colab.research.google.com/drive/1xO14O-IsLjUXECiAzu9Y6dnB-8Dm6wcU?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
                  >
                    this Colab workbook
                  </a>.
                </p>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem' }}>
                  Five models from three companies:
                </p>
                <ul style={{ color: 'var(--text-color)', listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  <li><strong>OpenAI:</strong> GPT-4o (the original EmoArt model) and GPT-5.1</li>
                  <li><strong>Anthropic:</strong> Claude Sonnet 4.5 and Claude Haiku 4.5</li>
                  <li><strong>Google:</strong> Gemini 2.5 Flash</li>
                </ul>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem' }}>
                  Each model received the same 23 images with two prompts.
                </p>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                  <strong>Prompt 1</strong> asked for a simple label:
                </p>
                <div style={{
                  backgroundColor: 'var(--surface-alt)',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--quote-text)',
                  fontStyle: 'italic',
                }}>
                  "Please analyze this artwork and identify the primary emotion it conveys. Choose ONE emotion from this list: [Frustrated, Annoyed, Alarmed, Aroused, Excited, Happy, Glad, Contentment, Calm, Tired, Bored, Sad]. Respond with only the emotion label."
                </div>

                <p style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                  <strong>Prompt 2</strong> added an instruction and required explanation:
                </p>
                <div style={{
                  backgroundColor: 'var(--surface-alt)',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--quote-text)',
                  fontStyle: 'italic',
                }}>
                  "Analyze this artwork's emotional content. Be careful not to default to 'calm' or 'contentment' — many artworks convey intense or negative emotions. What is the PRIMARY emotion? Choose ONE: [same list]. Explain briefly why."
                </div>

                <p style={{ color: 'var(--text-color)', margin: 0 }}>
                  If the calm bias was real, Prompt 2 should reduce it. If models were thoughtfully analyzing each image, both prompts should produce similar results.
                </p>

                <div style={{
                  borderTop: '1px solid var(--subtle-border)',
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                }}>
                  <p style={{ color: 'var(--muted-text)', margin: 0, fontSize: '0.85rem', fontStyle: 'italic' }}>
                    I conducted this experiment in late 2025 as part of a capstone project with limited time and API budget. I tested five models available at the time. Newer models have since been released (yay or nay, not sure yet). Running every available model wasn't feasible, and benchmarking individual models isn't the point. The question was whether the calm bias and cultural disparity appeared across different architectures and companies. Across five models from three companies, it kinda did.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ========== HEATMAP GRID ========== */}
          <ModelHeatmapGrid />

          {/* EmoArt annotation */}
          <div style={{
            backgroundColor: 'var(--panel-bg)',
            border: '1px solid var(--subtle-border)',
            borderRadius: '4px',
            padding: '0.75rem 1rem',
            margin: '0.5rem 0 1rem',
            fontSize: '0.8rem',
            color: 'var(--muted-text)',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}>
            The EmoArt column is the dataset label from GPT-4o at scale. The GPT-4o column is what GPT-4o said when given one image individually.
          </div>

          {/* ========== THE RANGE: DUMBBELL CHART ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            The Cultural Gap
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            Every model labeled Eastern art "calm" at higher rates than Western art. But the gap varied.
          </p>

          <DumbbellChart />

          <p style={{ color: 'var(--text-color)' }}>
            Sonnet and Gemini showed the widest cultural disparity — labeling 43% of Eastern art calm, compared to 13–25% of Western art.
          </p>

          {/* ========== PROMPT SENSITIVITY ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            Do Models Reconsider?
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            When asked to explain their choices and avoid defaulting to "calm," how many labels changed?
          </p>

          <PromptSensitivityBars />

          <p style={{ color: 'var(--text-color)' }}>
            Sonnet gave identical labels for all 23 artworks across both prompts. GPT-4o, at the other extreme, changed 11 of 23 — including dropping every calm label when asked to think more carefully.
          </p>

          {/* ========== EMOTIONAL RANGE ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            Emotional Range
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            Haiku showed the widest range with 12 unique emotions, while GPT-5.1 showed the narrowest with 8. Most models settled around 9–11 emotions out of the 13 available.
          </p>

          <EmotionalRangeChart />

          {/* ========== POSITIVITY BIAS ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            The Positivity Problem Persists
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            All models still favored positive emotions; for example, Happy, Glad, Excited, Contentment appeared more frequently than negative ones (Sad, Frustrated, Annoyed, Alarmed).
          </p>

          <PositivityBiasChart />

          {/* ========== CASE STUDIES ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            Let's Zoom Into Cases
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            Before working with the models, I sat down with each piece myself, trying to figure out what I was seeing. Of course, being AI in this situation was not easy, and the choices were complicated. Some artworks felt straightforward at first. A cheerful Fauvist landscape with bright colors and playful brushwork? Happy, right? A Baroque martyrdom scene with visible suffering? Sad, obviously.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            If you clicked carefully through the heatmap, you might have noticed some interesting cases. Here they are, with what the models actually said — toggle between prompts to see how their answers changed (or didn't).
          </p>

          {/* Matisse */}
          <ArtworkCaseStudy
            image={matisseImage}
            alt="Henri Matisse — View of Collioure"
            caption='Henri Matisse, "View of Collioure" (Fauvism)'
            emoartLabel="Glad"
            p1={[
              { model: 'GPT-4o', emotion: 'Glad' },
              { model: 'GPT-5.1', emotion: 'Happy' },
              { model: 'Gemini 2.5', emotion: 'Happy' },
              { model: 'Haiku 4.5', emotion: 'Contentment' },
              { model: 'Sonnet 4.5', emotion: 'Happy' },
            ]}
            p2={[
              { model: 'GPT-4o', emotion: 'Glad' },
              { model: 'GPT-5.1', emotion: 'Glad' },
              { model: 'Gemini 2.5', emotion: 'Excited' },
              { model: 'Sonnet 4.5', emotion: 'Happy' },
            ]}
          >
            <p style={{ color: 'var(--text-color)' }}>
              The Fauvist painting isn't just "happy." It's joyful in a way that's also energetic, spontaneous, and a bit wild. Is that "Happy" or "Excited" or "Glad"? (I went with "Excited" because the brushwork felt more kinetic than peaceful, but honestly? Could've been any of those.)
            </p>
          </ArtworkCaseStudy>

          {/* Benton */}
          <ArtworkCaseStudy
            image={midwestImage}
            alt="Thomas Hart Benton — Midwest"
            caption='Thomas Hart Benton, "Midwest" (1930s Regionalism)'
            emoartLabel="Excited"
            p1={[
              { model: 'GPT-4o', emotion: 'Tired' },
              { model: 'GPT-5.1', emotion: 'Tired' },
              { model: 'Gemini 2.5', emotion: 'Tired' },
              { model: 'Haiku 4.5', emotion: 'Tired' },
              { model: 'Sonnet 4.5', emotion: 'Tired' },
            ]}
            p2={[
              { model: 'GPT-4o', emotion: 'Aroused' },
              { model: 'GPT-5.1', emotion: 'Tired' },
              { model: 'Gemini 2.5', emotion: 'Tired' },
              { model: 'Sonnet 4.5', emotion: 'Tired' },
            ]}
          >
            <p style={{ color: 'var(--text-color)' }}>
              Five out of five said "Tired." The painting shows muscular farmers harvesting wheat — physical labor, but also pride and community. The models associated visual features of manual labor with exhaustion. Meanwhile, the EmoArt dataset labeled this same painting "Excited."
            </p>
            <div style={{
              borderLeft: '3px solid #8B5E83',
              backgroundColor: 'var(--blockquote-bg)',
              padding: '1rem 1.25rem',
              margin: '0.75rem 0',
              borderRadius: '0 4px 4px 0',
            }}>
              <p style={{ color: 'var(--quote-text)', fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
                "This mural-style painting brims with arousal, in the psychological sense of heightened activation, energy, and intensity—not sexual arousal, but a state of physical and emotional stimulation."
              </p>
              <p style={{ color: 'var(--muted-text)', margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
                — GPT-4o's Prompt 2 explanation of "Aroused"
              </p>
            </div>
            <div style={{
              borderLeft: '3px solid #8B7355',
              backgroundColor: 'var(--blockquote-bg)',
              padding: '1rem 1.25rem',
              margin: '0.75rem 0',
              borderRadius: '0 4px 4px 0',
            }}>
              <p style={{ color: 'var(--quote-text)', fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
                "The figures, despite their activity, overwhelmingly convey the state of being Tired or physically exhausted by their labor. Every figure is shown in a posture that emphasizes physical strain."
              </p>
              <p style={{ color: 'var(--muted-text)', margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
                — Claude Sonnet 4.5's Prompt 2 explanation of "Tired"
              </p>
            </div>
            <p style={{ color: 'var(--text-color)' }}>
              GPT-4o was the only model that reconsidered, switching to "Aroused" in Prompt 2 — but every other model stuck with "Tired." These are workers mid-action, muscles flexed, showing pride and power. And AI sees exhaustion, because they're laborers, they must be tired.
            </p>
          </ArtworkCaseStudy>

          {/* Cabrera */}
          <ArtworkCaseStudy
            image={cabreraImage}
            alt="Miguel Cabrera — The Virgin of the Apocalypse"
            caption='Miguel Cabrera, "The Virgin of the Apocalypse" (Baroque, 1780s)'
            emoartLabel="Alarmed"
            p1={[
              { model: 'GPT-4o', emotion: 'Alarmed' },
              { model: 'GPT-5.1', emotion: 'Alarmed' },
              { model: 'Gemini 2.5', emotion: 'Excited' },
              { model: 'Haiku 4.5', emotion: 'Happy' },
              { model: 'Sonnet 4.5', emotion: 'Calm' },
            ]}
            p2={[
              { model: 'GPT-4o', emotion: 'Alarmed' },
              { model: 'GPT-5.1', emotion: 'Alarmed' },
              { model: 'Gemini 2.5', emotion: 'Excited' },
              { model: 'Sonnet 4.5', emotion: 'Calm' },
            ]}
          >
            <p style={{ color: 'var(--text-color)' }}>
              The Baroque scene depicts a virgin emerging, but in the Baroque tradition, the face conveys peaceful acceptance. It combines pain with transcendence, fear with faith. The painting attempts to describe both suffering and spiritual triumph simultaneously. So... "Sad"? "Alarmed"? "Calm"?
            </p>

            <p style={{ color: 'var(--text-color)', marginTop: '1.5rem' }}>
              AI models split on this one, too. Some said "Alarmed," some said "Excited," Haiku said "Happy," and Sonnet called it "Calm."
            </p>
            <div style={{
              borderLeft: '3px solid #5B9EA6',
              backgroundColor: 'var(--blockquote-bg)',
              padding: '1rem 1.25rem',
              margin: '0.75rem 0',
              borderRadius: '0 4px 4px 0',
            }}>
              <p style={{ color: 'var(--quote-text)', fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
                "A scene of divine tranquility and heavenly peace."
              </p>
              <p style={{ color: 'var(--muted-text)', margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
                — Claude Sonnet 4.5's explanation of "Calm"
              </p>
            </div>
          </ArtworkCaseStudy>

          {/* Jacoulet */}
          <ArtworkCaseStudy
            image={ukiyoeImage}
            alt="Paul Jacoulet — L'Attente, Celebes, Menado"
            caption='Paul Jacoulet, "L&apos;Attente, Celebes, Menado" (Ukiyo-e influenced)'
            emoartLabel="Excited"
            p1={[
              { model: 'GPT-4o', emotion: 'Excited' },
              { model: 'GPT-5.1', emotion: 'Contentment' },
              { model: 'Gemini 2.5', emotion: 'Aroused' },
              { model: 'Haiku 4.5', emotion: 'Glad' },
              { model: 'Sonnet 4.5', emotion: 'Happy' },
            ]}
            p2={[
              { model: 'GPT-4o', emotion: 'Happy' },
              { model: 'GPT-5.1', emotion: 'Aroused' },
              { model: 'Gemini 2.5', emotion: 'Aroused' },
              { model: 'Sonnet 4.5', emotion: 'Happy' },
            ]}
          >
            <p style={{ color: 'var(--text-color)' }}>
              Five models, five different answers. Interestingly, Sonnet 4.5 described this as "an Art Deco illustration depicting a figure in luxurious, ornate clothing" — misidentifying the Ukiyo-e style entirely, and still landing on a different emotion than everyone else.
            </p>
          </ArtworkCaseStudy>

          <p style={{ color: 'var(--text-color)' }}>
            I then looked at artworks that are out of my depth (I had one{' '}
            <a
              href="https://www.britannica.com/biography/Xie-He"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              Xie He
            </a>
            {' '}reading in one of my classes).
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            Chinese ink landscapes were my first crisis. I have one painting featuring mountains emerging from mist, spare brushstrokes, and ample space. Traditional Chinese aesthetics would describe this as <em>qiyun shengdong</em>, meaning "spirit resonance and life motion." But the 13-emotion list does not have this. So, I suppose, if I had to pick, I would also like "Calm."
          </p>

          {/* Li Gonglin */}
          <ArtworkCaseStudy
            image={liGonglinImage}
            alt="Attributed to Li Gonglin — Realm of the Immortals"
            caption='Attributed to Li Gonglin, "Realm of the Immortals"'
            emoartLabel="Contentment"
            imageStyle={{ objectFit: 'cover', objectPosition: 'center 60%', maxHeight: '400px' }}
            p1={[
              { model: 'GPT-4o', emotion: 'Calm' },
              { model: 'GPT-5.1', emotion: 'Calm' },
              { model: 'Gemini 2.5', emotion: 'Calm' },
              { model: 'Haiku 4.5', emotion: 'Calm' },
              { model: 'Sonnet 4.5', emotion: 'Calm' },
            ]}
            p2={[
              { model: 'GPT-4o', emotion: 'Contentment' },
              { model: 'GPT-5.1', emotion: 'Calm' },
              { model: 'Gemini 2.5', emotion: 'Calm' },
              { model: 'Sonnet 4.5', emotion: 'Calm' },
            ]}
          >
            <p style={{ color: 'var(--text-color)' }}>
              Five out of five: "Calm." Every model, every prompt. And honestly? I get it. But that's the problem — when your only available label for an entire aesthetic tradition is "Calm," the taxonomy itself is the bias.
            </p>
          </ArtworkCaseStudy>

          {/* ========== WHAT THIS MEANS ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '1.5rem' }}>
            What This Means
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            <strong>First, the calm default exists across models</strong>, though severity varies. Sonnet shows it most strongly at 30%. GPT-5.1 shows it least at 13%.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            <strong>Second, the cultural bias exists across models.</strong> Every model labeled Eastern artworks "calm" at higher rates than Western artworks. This isn't a quirk of GPT-4o's training. It appears in systems from three different companies.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            <strong>Third, prompt sensitivity varies dramatically.</strong> GPT-4o changed 11 of 23 labels when asked to reconsider — including dropping every calm label. Gemini changed 10. Sonnet changed zero. Some models reconsider when prompted. Others have priors so strong that explicit instruction makes no difference.
          </p>

          {/* ========== CALM AS "INTERESTING" ========== */}
          

          <p style={{ color: 'var(--text-color)' }}>
            I suppose when AI is confused, it responds with "calm"; it remains emotionally neutral. It views a Chinese ink landscape with an unfamiliar composition and opts for neutrality. When humans are unsure of what to say, we often say "interesting." Saying "calm" is AI's equivalent of that.
          </p>

          <div style={{ margin: '1rem 0' }}>
            <img
              src={batmanInterestingImage}
              alt="Batman saying 'Interesting' meme"
              style={{ maxWidth: '400px', display: 'block', margin: '0 auto' }}
            />
          </div>

          <PullQuote>
            When capability meets scale, nuance is the first casualty.
          </PullQuote>
        </div>
      </div>
    </section>
  );
};

/* ========== EMOTIONAL RANGE CHART ========== */
const emotionalRangeData = [
  { model: 'Haiku 4.5', unique: 12, color: '#5D866C' },
  { model: 'GPT-4o', unique: 10, color: '#5D866C' },
  { model: 'Gemini 2.5', unique: 10, color: '#5D866C' },
  { model: 'Sonnet 4.5', unique: 9, color: '#5D866C' },
  { model: 'GPT-5.1', unique: 8, color: '#5D866C' },
];

const EmotionalRangeChart: React.FC = () => {
  const maxEmotions = 13;

  return (
    <div style={{ margin: '1rem 0 1.5rem' }}>
      {emotionalRangeData.map((d) => (
        <div
          key={d.model}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.75rem',
          }}
        >
          <div style={{
            width: '100px',
            flexShrink: 0,
            fontSize: '0.8rem',
            color: 'var(--text-color)',
            fontWeight: 600,
            textAlign: 'right',
            paddingRight: '12px',
          }}>
            {d.model}
          </div>
          <div style={{
            flex: 1,
            position: 'relative',
            height: '28px',
            backgroundColor: 'var(--surface-alt)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {/* Filled bar */}
            <div style={{
              width: `${(d.unique / maxEmotions) * 100}%`,
              height: '100%',
              backgroundColor: d.color,
              borderRadius: '4px 0 0 4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '8px',
              transition: 'width 0.6s ease',
            }}>
              <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700 }}>
                {d.unique}
              </span>
            </div>
        
            <div style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '8px',
              display: 'flex',
              gap: '3px',
            }}>
              {Array.from({ length: maxEmotions - d.unique }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#D1D1CB',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{
            width: '40px',
            flexShrink: 0,
            fontSize: '0.7rem',
            color: 'var(--muted-text)',
            textAlign: 'left',
            paddingLeft: '6px',
          }}>
            / {maxEmotions}
          </div>
        </div>
      ))}
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--muted-text)',
        paddingLeft: '112px',
        marginTop: '0.25rem',
        fontStyle: 'italic',
      }}>
        Unique emotion labels used across both prompts (out of 13 available)
      </p>
    </div>
  );
};

/* ========== POSITIVITY BIAS CHART ========== */
const positivityData = [
  { model: 'Haiku 4.5', positive: 74, negative: 9, neutral: 17 },
  { model: 'Sonnet 4.5', positive: 65, negative: 4, neutral: 31 },
  { model: 'GPT-5.1', positive: 61, negative: 17, neutral: 22 },
  { model: 'Gemini 2.5', positive: 57, negative: 13, neutral: 30 },
  { model: 'GPT-4o', positive: 52, negative: 22, neutral: 26 },
];

const PositivityBiasChart: React.FC = () => {
  return (
    <div style={{ margin: '1rem 0 1.5rem' }}>
      {positivityData.map((d) => (
        <div
          key={d.model}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.6rem',
          }}
        >
          <div style={{
            width: '100px',
            flexShrink: 0,
            fontSize: '0.8rem',
            color: 'var(--text-color)',
            fontWeight: 600,
            textAlign: 'right',
            paddingRight: '12px',
          }}>
            {d.model}
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            height: '28px',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {/* Positive */}
            <div style={{
              width: `${d.positive}%`,
              backgroundColor: '#5D866C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 700 }}>
                {d.positive}%
              </span>
            </div>
            {/* Neutral/Calm */}
            <div style={{
              width: `${d.neutral}%`,
              backgroundColor: '#B8C5B0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {d.neutral >= 15 && (
                <span style={{ color: '#333', fontSize: '0.6rem', fontWeight: 600 }}>
                  {d.neutral}%
                </span>
              )}
            </div>
            {/* Negative */}
            <div style={{
              width: `${d.negative}%`,
              backgroundColor: '#C96E58',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 700 }}>
                {d.negative}%
              </span>
            </div>
          </div>
        </div>
      ))}
      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        fontSize: '0.75rem',
        color: 'var(--text-color)',
        marginTop: '0.5rem',
        paddingLeft: '100px',
        flexWrap: 'wrap',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#5D866C' }} />
          Positive (Happy, Glad, Excited, etc.)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#B8C5B0' }} />
          Neutral (Calm, Contentment)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#C96E58' }} />
          Negative (Sad, Alarmed, Tired, etc.)
        </span>
      </div>
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--muted-text)',
        paddingLeft: '100px',
        marginTop: '0.25rem',
        fontStyle: 'italic',
      }}>
        Results shown for Prompt 1
      </p>
    </div>
  );
};

/* ========== DUMBBELL CHART ========== */
const dumbbellData = [
  { model: 'Sonnet 4.5', western: 25.0, eastern: 42.9 },
  { model: 'Gemini 2.5', western: 12.5, eastern: 42.9 },
  { model: 'GPT-4o', western: 12.5, eastern: 28.6 },
  { model: 'Haiku 4.5', western: 12.5, eastern: 28.6 },
  { model: 'GPT-5.1', western: 6.2, eastern: 28.6 },
];

const DumbbellChart: React.FC = () => {
  const maxVal = 50;
  const chartWidth = 100;
  const calmControlRate = 26.1;

  return (
    <div style={{ margin: '1rem 0 1.5rem', position: 'relative' }}>
      {/* Axis labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--muted-text)', marginBottom: '0.25rem', paddingLeft: '100px' }}>
        <span>0%</span>
        <span>10%</span>
        <span>20%</span>
        <span>30%</span>
        <span>40%</span>
        <span>50%</span>
      </div>

      {dumbbellData.map((d) => {
        const leftPos = (d.western / maxVal) * chartWidth;
        const rightPos = (d.eastern / maxVal) * chartWidth;

        return (
          <div
            key={d.model}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.6rem',
            }}
          >
            <div style={{
              width: '100px',
              flexShrink: 0,
              fontSize: '0.8rem',
              color: 'var(--text-color)',
              fontWeight: 600,
              textAlign: 'right',
              paddingRight: '12px',
            }}>
              {d.model}
            </div>
            <div style={{
              flex: 1,
              position: 'relative',
              height: '24px',
              backgroundColor: 'var(--surface-alt)',
              borderRadius: '2px',
            }}>
              {/* Calm control reference line */}
              <div style={{
                position: 'absolute',
                left: `${(calmControlRate / maxVal) * 100}%`,
                top: 0,
                bottom: 0,
                width: '1px',
                borderLeft: '1.5px dashed #C96E58',
                zIndex: 1,
              }} />
              {/* Connector line */}
              <div style={{
                position: 'absolute',
                left: `${leftPos}%`,
                width: `${rightPos - leftPos}%`,
                top: '50%',
                height: '2px',
                backgroundColor: 'var(--connector-color)',
                transform: 'translateY(-50%)',
              }} />
              {/* Western dot */}
              <div style={{
                position: 'absolute',
                left: `${leftPos}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#4A5568',
                border: '2px solid white',
                zIndex: 2,
              }} />
              {/* Eastern dot */}
              <div style={{
                position: 'absolute',
                left: `${rightPos}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#D4A843',
                border: '2px solid white',
                zIndex: 2,
              }} />
              {/* Labels */}
              <span style={{
                position: 'absolute',
                left: `${leftPos}%`,
                top: '-2px',
                transform: 'translateX(-50%)',
                fontSize: '0.6rem',
                color: '#4A5568',
                fontWeight: 700,
              }}>
                {d.western}%
              </span>
              <span style={{
                position: 'absolute',
                left: `${rightPos}%`,
                bottom: '-2px',
                transform: 'translateX(-50%)',
                fontSize: '0.6rem',
                color: '#D4A843',
                fontWeight: 700,
              }}>
                {d.eastern}%
              </span>
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '1.25rem',
        fontSize: '0.75rem',
        color: 'var(--text-color)',
        marginTop: '0.5rem',
        paddingLeft: '100px',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4A5568' }} />
          Western calm %
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D4A843' }} />
          Eastern calm %
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '2px', height: '10px', borderLeft: '1.5px dashed #C96E58' }} />
          Calm controls (26%)
        </span>
      </div>
    </div>
  );
};

/* ========== PROMPT SENSITIVITY BARS ========== */
const sensitivityData = [
  { model: 'Sonnet 4.5', same: 23, changed: 0 },
  { model: 'GPT-5.1', same: 15, changed: 8 },
  { model: 'Gemini 2.5', same: 13, changed: 10 },
  { model: 'GPT-4o', same: 12, changed: 11 },
];

const PromptSensitivityBars: React.FC = () => {
  return (
    <div style={{ margin: '1rem 0 1.5rem' }}>
      {sensitivityData.map((d) => (
        <div
          key={d.model}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.6rem',
          }}
        >
          <div style={{
            width: '100px',
            flexShrink: 0,
            fontSize: '0.8rem',
            color: 'var(--text-color)',
            fontWeight: 600,
            textAlign: 'right',
            paddingRight: '12px',
          }}>
            {d.model}
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            height: '24px',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            {/* Same */}
            <div style={{
              width: `${(d.same / 23) * 100}%`,
              backgroundColor: '#5D866C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {d.same > 5 && (
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 700 }}>
                  {d.same} same
                </span>
              )}
            </div>
            {/* Changed */}
            {d.changed > 0 && (
              <div style={{
                width: `${(d.changed / 23) * 100}%`,
                backgroundColor: '#C96E58',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 700 }}>
                  {d.changed} changed
                </span>
              </div>
            )}
          </div>
          <div style={{
            width: '60px',
            flexShrink: 0,
            fontSize: '0.75rem',
            color: d.changed === 0 ? '#5D866C' : '#C96E58',
            fontWeight: 700,
            textAlign: 'right',
            paddingLeft: '8px',
          }}>
            {d.changed}/{23}
          </div>
        </div>
      ))}
      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        fontSize: '0.75rem',
        color: 'var(--text-color)',
        marginTop: '0.25rem',
        paddingLeft: '100px',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#5D866C' }} />
          Identical across prompts
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#C96E58' }} />
          Label changed
        </span>
      </div>
    </div>
  );
};