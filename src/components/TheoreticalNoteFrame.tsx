import React from 'react';
import { PullQuote } from './PullQuote';

const lippiUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg/1200px-Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg?20110610032711';

/* ── Tooltip component for inline definitions ── */
const Tooltip: React.FC<{ label: string; text: string }> = ({ label, text }) => {
  const [show, setShow] = React.useState(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(!show)}
    >
      <span style={{
        borderBottom: '1px dotted var(--accent-color)',
        cursor: 'help',
        color: 'var(--accent-color)',
      }}>
        {label}
      </span>
      {show && (
        <span style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--text-color)',
          color: 'var(--bg-color)',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          lineHeight: 1.45,
          width: '280px',
          zIndex: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          marginBottom: '6px',
          pointerEvents: 'none',
        }}>
          {text}
        </span>
      )}
    </span>
  );
};

export const TheoreticalNoteFrame: React.FC = () => {
  const [showTechnical, setShowTechnical] = React.useState(true);
  const [pipelineStep, setPipelineStep] = React.useState(0);

  return (
    <section
      id="section-4"
      className="pudding-section"
      data-frame="2"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          Why It Happens
        </h2>

        <div className="space-y-4">
          {/* ========== BARRETT'S THEORY ========== */}

          <p style={{ color: 'var(--text-color)' }}>
            To understand what's happening, I needed to understand what emotions actually are.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            The commonsense view, the one from Disney's <em>Inside Out</em>, assumes emotions are discrete universal categories that exist inside us. In this world, emotions are like chemical elements. They exist whether or not we have words for them.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            But psychologist{' '}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5736315/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              Lisa Feldman Barrett argues
            </a>
            {' '}that emotions aren't detected; they're constructed through inference, context, and prior experience.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            There's no universal "sadness face" that every human recognizes identically.{' '}
            <em>
              <a href="https://www.psychologytoday.com/us/basics/schadenfreude" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                Schadenfreude
              </a>
            </em>
            {' '}exists in German but has no direct English equivalent.{' '}
            <em>
              <a href="https://en.wikipedia.org/wiki/Amae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                Amae
              </a>
            </em>
            , a Japanese concept of pleasurable dependence, has no Western parallel. If emotions are culturally constructed categories, then a taxonomy of 12 English-language emotion words is itself a cultural artifact.
          </p>

          <PullQuote>
            If emotions are culturally constructed categories, then an AI trained on one culture's constructions will misapply them to another's.
          </PullQuote>

          {/* ========== VLM ARCHITECTURE — TECHNICAL NOTE ========== */}
          <div style={{
            backgroundColor: 'var(--surface-color)',
            border: '1px solid var(--surface-border)',
            borderRadius: '6px',
            marginTop: '2rem',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
            }}>
              <span style={{ color: 'var(--highlight-color)', fontWeight: 700, fontSize: '1rem' }}>
                Technical Note: How Vision-Language Models Process Images
              </span>
              <button
                onClick={() => setShowTechnical(!showTechnical)}
                style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--muted-text)',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  color: 'var(--muted-text)',
                }}
              >
                {showTechnical ? 'Collapse' : 'Expand'}
              </button>
            </div>

            {showTechnical && (
              <div style={{ padding: '0 1rem 1.25rem' }}>

                {/* ===== 5-TAB INTERACTIVE ===== */}
                <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
                  Follow the Lippi funeral painting through the pipeline:
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['Full painting', 'Grid overlay', 'Patches → vectors', 'Language model', 'Output'].map((label, i) => (
                    <button
                      key={label}
                      onClick={() => setPipelineStep(i)}
                      style={{
                        flex: 1,
                        padding: '0.35rem 0.25rem',
                        backgroundColor: pipelineStep === i ? 'var(--text-color)' : 'transparent',
                        color: pipelineStep === i ? 'var(--bg-color)' : 'var(--text-color)',
                        border: '1px solid var(--text-color)',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '0.6rem',
                        fontWeight: pipelineStep === i ? 700 : 400,
                      }}
                    >
                      {i + 1}. {label}
                    </button>
                  ))}
                </div>

                <div style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '200px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  {pipelineStep === 0 && (
                    <img
                      src={lippiUrl}
                      alt="Full painting"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  )}
                  {pipelineStep === 1 && (
                    <div style={{ position: 'relative', width: '100%' }}>
                      <img src={lippiUrl} alt="Grid overlay" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.7 }} />
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        {Array.from({ length: 15 }, (_, i) => (
                          <line key={`v-${i}`} x1={`${((i + 1) / 16) * 100}%`} y1="0" x2={`${((i + 1) / 16) * 100}%`} y2="100%" stroke="#5B9EA6" strokeWidth="0.5" opacity="0.8" />
                        ))}
                        {Array.from({ length: 11 }, (_, i) => (
                          <line key={`h-${i}`} x1="0" y1={`${((i + 1) / 12) * 100}%`} x2="100%" y2={`${((i + 1) / 12) * 100}%`} stroke="#5B9EA6" strokeWidth="0.5" opacity="0.8" />
                        ))}
                      </svg>
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#5B9EA6',
                        padding: '4px 8px',
                        borderRadius: '3px',
                        fontSize: '0.65rem',
                      }}>
                        196 patches × 768 dimensions = the model's entire first impression of this painting.
                      </div>
                    </div>
                  )}
                  {pipelineStep === 2 && (
                    <div style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '3px', justifyContent: 'center' }}>
                      {Array.from({ length: 64 }, (_, i) => {
                        const colors = ['#8B7355', '#A0926E', '#5D6D8E', '#C96E58', '#8BB174', '#D4A843', '#666', '#888'];
                        return (
                          <div
                            key={i}
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: colors[i % colors.length],
                              opacity: 0.8,
                            }}
                          />
                        );
                      })}
                    </div>
                  )}
                  {pipelineStep === 3 && (
                    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap', maxWidth: '60px' }}>
                          {Array.from({ length: 12 }, (_, i) => (
                            <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5B9EA6', opacity: 0.6 }} />
                          ))}
                        </div>
                        <span style={{ color: '#888', fontSize: '1.2rem' }}>→</span>
                        <div style={{
                          border: '2px solid #5B9EA6',
                          borderRadius: '6px',
                          padding: '0.75rem 1.25rem',
                          color: '#F5F5F0',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                        }}>
                          Language Model
                        </div>
                        <span style={{ color: '#888', fontSize: '1.2rem' }}>→</span>
                        <span style={{ color: '#F5F5F0', fontSize: '1rem', fontWeight: 700 }}>???</span>
                      </div>
                    </div>
                  )}
                  {pipelineStep === 4 && (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                      {/* Probability distribution using EmoArt labels */}
                      <div style={{ maxWidth: '300px', margin: '0 auto 1rem' }}>
                        {[
                          { label: 'Calm', pct: 14, color: '#C96E58' },
                          { label: 'Melancholy', pct: 9, color: '#D4A843' },
                          { label: 'Mysterious', pct: 7, color: '#8B7355' },
                          { label: 'Sad', pct: 6, color: '#5D6D8E' },
                          { label: 'Lonely', pct: 5, color: '#4A5568' },
                          { label: 'Scared', pct: 3, color: '#4A5568' },
                        ].map((item) => (
                          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
                            <span style={{ color: '#aaa', fontSize: '0.7rem', width: '70px', textAlign: 'right' }}>{item.label}</span>
                            <div style={{ flex: 1, height: '14px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{ width: `${(item.pct / 14) * 100}%`, height: '100%', backgroundColor: item.color, borderRadius: '2px' }} />
                            </div>
                            <span style={{ color: '#888', fontSize: '0.65rem', width: '28px' }}>{item.pct}%</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ color: '#5B9EA6', fontSize: '2rem', fontWeight: 700 }}>
                        → Calm.
                      </div>
                      <div style={{ color: '#888', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                        Not recognition. Probability.
                      </div>
                      <div style={{ color: '#666', fontSize: '0.6rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Illustrative probabilities; actual model logits are not publicly available.
                      </div>
                    </div>
                  )}
                </div>

                {/* ===== THE PIPELINE HAS NO EMOTION MODULE ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  <strong>The pipeline has no emotion recognition module. It never did.</strong>
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Vision-language models like GPT-4o don't classify emotions; they predict tokens. The distinction matters more than it sounds.
                </p>

                {/* ===== FROM PIXELS TO VECTORS ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  From pixels to vectors
                </h4>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  A Vision Transformer (ViT) processes an image by dividing it into a fixed grid of non-overlapping patches, typically 196 patches of 16×16 pixels each. Each patch is flattened and multiplied by a{' '}
                  <Tooltip
                    label="learned weight matrix"
                    text="Each 16×16 patch is multiplied by a weight matrix the model learned during training, transforming raw pixel values into a 768-number representation that captures features the model found useful. This multiplication happens across all patches simultaneously in one efficient operation."
                  />
                  , transforming raw pixel values into a 768-number representation. A positional embedding is added to each patch vector so the model can track where in the image each patch came from. A special placeholder called the{' '}
                  <Tooltip
                    label="CLS token"
                    text="A placeholder prepended to the sequence with no visual content of its own. Through attention, it aggregates information from all 196 patches. By the end of the encoder, this token's state is used as the single vector representing the whole image."
                  />
                  {' '}is prepended to the sequence, bringing the total to 197 tokens.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  This sequence passes through 12 to 24 transformer encoder layers. Each layer applies two operations in sequence:
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <strong>Multi-head self-attention</strong>: every patch computes attention weights over all other patches simultaneously. With 12 attention heads running in parallel, the model tracks multiple relationships at once: color similarity, spatial proximity, compositional grouping. Early layers attend locally, with a patch noticing its immediate neighbors. Deeper layers develop global patterns, connecting a figure on the left to a gesture across the painting.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  <strong>Feed-forward networks</strong>: each patch vector is independently expanded and compressed through a nonlinear transformation, allowing the model to extract more complex features at each depth.
                </p>

                {/* VISUAL: Attention heatmap overlay */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '0.5rem',
                }}>
                  <img src={lippiUrl} alt="Attention heatmap overlay" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.5 }} />
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <defs>
                      <radialGradient id="att1" cx="35%" cy="40%" r="18%"><stop offset="0%" stopColor="#C96E58" stopOpacity="0.7" /><stop offset="100%" stopColor="#C96E58" stopOpacity="0" /></radialGradient>
                      <radialGradient id="att2" cx="55%" cy="35%" r="15%"><stop offset="0%" stopColor="#C96E58" stopOpacity="0.6" /><stop offset="100%" stopColor="#C96E58" stopOpacity="0" /></radialGradient>
                      <radialGradient id="att3" cx="70%" cy="50%" r="12%"><stop offset="0%" stopColor="#C96E58" stopOpacity="0.5" /><stop offset="100%" stopColor="#C96E58" stopOpacity="0" /></radialGradient>
                      <radialGradient id="att4" cx="20%" cy="60%" r="14%"><stop offset="0%" stopColor="#5D866C" stopOpacity="0.4" /><stop offset="100%" stopColor="#5D866C" stopOpacity="0" /></radialGradient>
                      <radialGradient id="att5" cx="85%" cy="30%" r="10%"><stop offset="0%" stopColor="#5D866C" stopOpacity="0.3" /><stop offset="100%" stopColor="#5D866C" stopOpacity="0" /></radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#att1)" />
                    <rect width="100%" height="100%" fill="url(#att2)" />
                    <rect width="100%" height="100%" fill="url(#att3)" />
                    <rect width="100%" height="100%" fill="url(#att4)" />
                    <rect width="100%" height="100%" fill="url(#att5)" />
                  </svg>
                </div>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>
                  Simulated attention weights: the CLS token aggregates across all 196 patches, with higher weights on visually salient regions.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  After all layers, the CLS token's final state is a single vector, a compressed summary of the entire image. This is what gets passed forward. At this point the model has a rich representation of visual surface features: texture, color distribution, compositional structure. It does not have a representation of narrative, cultural context, or the fact that this is a 15th-century Christian martyrdom scene.
                </p>

                {/* ===== CLIP ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  From vectors to language: how CLIP connects vision to words
                </h4>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The ViT encoder produces vectors, but vectors meaningful relative to what? On its own, a vision encoder has no connection to language. <strong>
                  <a href="https://arxiv.org/abs/2103.00020" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                    CLIP
                  </a>
                  </strong> (Radford et al., 2021) is what creates that connection: it trains the vision encoder jointly with a text encoder so that images and their descriptions end up geometrically close in the same mathematical space.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Both encoders project their outputs into a shared space, a list of numbers of identical length where geometric distance means semantic similarity. An image of a stormy sea and the caption "turbulent, dark, unsettled" should land near each other. An image of a Chinese ink landscape and the same caption should land far apart, unless the training data never taught the model what Chinese ink landscapes mean emotionally. In that case, it lands wherever the surface visual features place it.
                </p>

                {/* VISUAL: Two-encoder diagram */}
                <div style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {/* Image encoder side */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#5B9EA6', fontSize: '0.7rem', marginBottom: '0.5rem', fontWeight: 600 }}>IMAGE ENCODER (ViT)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                        {['painting with soft blue tones', 'dark atmospheric composition', 'vibrant expressive brushwork'].map((label, i) => (
                          <div key={i} style={{
                            backgroundColor: 'rgba(91,158,166,0.15)',
                            border: '1px solid #5B9EA6',
                            borderRadius: '3px',
                            padding: '4px 10px',
                            fontSize: '0.65rem',
                            color: '#5B9EA6',
                          }}>
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrows converging */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#888', fontSize: '1rem' }}>→</span>
                      <div style={{
                        border: '2px solid #D4A843',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.55rem',
                        color: '#D4A843',
                        textAlign: 'center',
                        fontWeight: 700,
                      }}>
                        Shared Space
                      </div>
                      <span style={{ color: '#888', fontSize: '1rem' }}>←</span>
                    </div>

                    {/* Text encoder side */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#C96E58', fontSize: '0.7rem', marginBottom: '0.5rem', fontWeight: 600 }}>TEXT ENCODER</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                        {['"soft blue tones"', '"dark atmospheric"', '"vibrant brushwork"'].map((label, i) => (
                          <div key={i} style={{
                            backgroundColor: 'rgba(201,110,88,0.15)',
                            border: '1px solid #C96E58',
                            borderRadius: '3px',
                            padding: '4px 10px',
                            fontSize: '0.65rem',
                            color: '#C96E58',
                            fontStyle: 'italic',
                          }}>
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.75rem', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>
                  CLIP's two encoders converge into a shared embedding space. Training captions describe appearances: descriptive, surface-level, culturally unanchored.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Training works like this: show the model a batch of image-caption pairs, 32,768 at once in CLIP's case. For each image, there is exactly one correct caption. The model learns to match them by pulling correct pairs closer together and pushing all wrong pairs apart. With 32,768 images and captions in a single batch, there are roughly one billion possible wrong pairings the model has to learn to reject. This is what makes CLIP's representations generalizable. It is also where cultural bias enters at the foundation.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  What the model learns: which visual patterns statistically co-occur with which words across 400 million examples. Internet image captions describe appearances. "Dark room." "Soft palette." "Vibrant colors." They almost never contain culturally grounded emotional interpretation, and when they do, it reflects Western art-historical vocabulary.{' '}
                  <a
                    href="https://openfuture.eu/note/seeing-like-an-algorithm-a-closer-look-at-laion-5b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
                  >
                    Multiple audits of LAION-5B
                  </a>
                  , the dataset most commonly used for VLM pre-training, found significant skew toward Western subjects, English-language descriptions, and content from a small number of countries. The dataset was assembled by scraping the publicly indexed web, which inherits the web's own demographic and linguistic imbalances. For Chinese ink painting, the representational gap is not marginal; it's near-total.
                </p>

                {/* ===== SigLIP ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  SigLIP: a better encoder that doesn't fix the problem
                </h4>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Gemini uses{' '}
                  <a href="https://arxiv.org/abs/2303.15343" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                    <strong>SigLIP</strong>
                  </a>
                  {' '}(Zhai et al., 2023) rather than CLIP. The key difference is in how training works: CLIP compares every image against every other caption in the batch simultaneously, which makes training quality dependent on batch size. SigLIP replaces this with a simpler question: for each individual image-caption pair, is this a match or not? Yes or no, independently, without ranking against everything else in the batch. This makes training more stable and allows more multilingual data to be included.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The practical difference: Gemini's encoder was trained on more linguistically diverse data than CLIP. In this experiment, it still showed the same cultural bias pattern, labeling 42.9% of Eastern artworks "calm" compared to 12.5% of Western ones. A better encoder trained on more languages does not fix a problem rooted in caption vocabulary, training data composition, and the emotion taxonomy itself.
                </p>

                {/* ===== THE PROJECTION BOTTLENECK ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  The projection bottleneck
                </h4>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The vision encoder and the language model speak different mathematical languages. Between them sits a <strong>projection layer</strong>: a small neural network that translates the vision encoder's output into a format the language model can read. Think of it as a translator sitting between two people who don't share a vocabulary.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The translated visual tokens are then slotted into the same sequence as the text tokens from the prompt. From this point on, the language model treats them identically: it doesn't know which tokens came from the image and which came from the prompt. It just processes the whole sequence together.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Here's the problem: in most architectures, the vision encoder is <strong>frozen</strong> during this process. It was trained to match images to captions (via CLIP or SigLIP), and it is never updated to better serve the language model's interpretive needs. The projection layer can only translate what the vision encoder already captured. If the encoder never learned to distinguish a Chinese mourning scene from a calm landscape, that information simply isn't in the signal. The projection layer has nothing to work with, and the language model never gets the chance to interpret what it never received.
                </p>

                {/* VISUAL: Frozen encoder → projection → LM diagram */}
                <div style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '4px',
                  padding: '1.25rem 1rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', flexWrap: 'wrap' }}>
                    {/* Frozen vision encoder */}
                    <div style={{
                      border: '2px solid #5B9EA6',
                      borderRadius: '6px',
                      padding: '0.6rem 0.75rem',
                      textAlign: 'center',
                      position: 'relative',
                    }}>
                      <div style={{ color: '#5B9EA6', fontSize: '0.7rem', fontWeight: 700 }}>Vision Encoder</div>
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        backgroundColor: '#C96E58',
                        color: '#fff',
                        fontSize: '0.5rem',
                        fontWeight: 700,
                        padding: '1px 4px',
                        borderRadius: '2px',
                      }}>
                        FROZEN
                      </div>
                    </div>

                    {/* Arrow with label */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0.25rem' }}>
                      <span style={{ color: '#888', fontSize: '0.55rem', marginBottom: '2px' }}>surface features</span>
                      <span style={{ color: '#888', fontSize: '1rem' }}>→</span>
                      <span style={{ color: '#888', fontSize: '0.55rem', marginTop: '2px' }}>preserved</span>
                    </div>

                    {/* Projection layer */}
                    <div style={{
                      border: '2px dashed #D4A843',
                      borderRadius: '6px',
                      padding: '0.6rem 0.75rem',
                      textAlign: 'center',
                    }}>
                      <div style={{ color: '#D4A843', fontSize: '0.7rem', fontWeight: 700 }}>Projection</div>
                      <div style={{ color: '#888', fontSize: '0.5rem' }}>(translator)</div>
                    </div>

                    {/* Arrow with label */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0.25rem' }}>
                      <span style={{ color: '#888', fontSize: '0.55rem', marginBottom: '2px' }}>cultural meaning</span>
                      <span style={{ color: '#888', fontSize: '1rem' }}>→</span>
                      <span style={{ color: '#C96E58', fontSize: '0.55rem', marginTop: '2px', fontWeight: 600 }}>not recoverable</span>
                    </div>

                    {/* Language model */}
                    <div style={{
                      border: '2px solid #5B9EA6',
                      borderRadius: '6px',
                      padding: '0.6rem 0.75rem',
                      textAlign: 'center',
                    }}>
                      <div style={{ color: '#5B9EA6', fontSize: '0.7rem', fontWeight: 700 }}>Language Model</div>
                    </div>
                  </div>
                </div>

                {/* ===== TOKEN PREDICTION ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Token prediction, not emotion recognition
                </h4>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Once visual tokens enter the language model, the mechanism is identical to text generation: <strong>autoregressive next-token prediction</strong>.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The model produces a probability distribution over its entire vocabulary, 32,000 or more tokens. The highest-probability token is selected and appended; the process repeats for each subsequent word.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  "Calm" does not win because the model recognized calm. It wins because visual patterns similar to this painting were most frequently followed by the word "calm" in training data. The model has no emotion module, no cultural knowledge lookup, no interpretive framework. It has learned that certain surface features (low contrast, muted palette, sparse composition) statistically co-occur with "calm." When it encounters a Chinese ink painting, those features activate, and the distribution peaks accordingly.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  Temperature, top-k, and top-p sampling affect how confidently the model commits to its top prediction. They do not affect which cultural associations the model has learned.
                </p>

                {/* ===== THREE ARCHITECTURES, SAME BIAS ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <h4 style={{ color: 'var(--accent-color)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Three architectures, same bias
                </h4>

                {/* VISUAL: Three-column results table with Western calm % */}
                <div className="overflow-x-auto" style={{ marginBottom: '0.5rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--text-color)' }}>
                        <th style={{ padding: '0.5rem', textAlign: 'left', color: 'var(--text-color)' }}></th>
                        <th style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>GPT-4o</th>
                        <th style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>Gemini 2.5</th>
                        <th style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>Claude Sonnet 4.5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--subtle-border)' }}>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', fontWeight: 600 }}>Vision system</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>CLIP-based</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>SigLIP</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>Undisclosed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--subtle-border)' }}>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', fontWeight: 600 }}>Training data</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>English-centric internet captions</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>More multilingual</td>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', textAlign: 'center' }}>Undisclosed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--subtle-border)' }}>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', fontWeight: 600 }}>Eastern calm %</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--highlight-color)', fontWeight: 700 }}>28.6%</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--highlight-color)', fontWeight: 700 }}>42.9%</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--highlight-color)', fontWeight: 700 }}>42.9%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem', color: 'var(--text-color)', fontWeight: 600 }}>Western calm %</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>12.5%</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>12.5%</td>
                        <td style={{ padding: '0.5rem', textAlign: 'center', color: 'var(--text-color)' }}>25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem', marginTop: '1rem' }}>
                  Gemini, with the most multilingual encoder, showed <em>higher</em> Eastern calm rates than GPT-4o, not lower. This is counterintuitive if you assume the problem is the encoder. It is consistent with the argument that the problem is deeper: training data composition, caption vocabulary, and the emotion taxonomy itself. The 12-label schema (Calm, Excited, Sad, Happy) is a Western psychological artifact. No encoder improvement changes what categories are available at the output.
                </p>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  The bias compounds across every layer: training images → captions → embedding space → projection → token prediction. Swapping the encoder doesn't touch most of that pipeline.
                </p>

                {/* ===== TRAINING DATA PROBLEM ===== */}
                <div style={{ borderTop: '1px solid var(--subtle-border)', margin: '1.5rem 0' }} />
                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  The training data problem:
                </p>

                {/* EmoArt */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginBottom: '0.25rem' }}>
                    {Array.from({ length: 100 }, (_, i) => (
                      <div
                        key={`emo-${i}`}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: i < 98 ? '#4A5568' : '#D4A843',
                        }}
                      />
                    ))}
                  </div>
                  <p style={{ color: 'var(--muted-text)', fontSize: '0.75rem', margin: 0 }}>
                    EmoArt training data: <span style={{ color: '#4A5568', fontWeight: 700 }}>97.6% Western</span>, <span style={{ color: '#D4A843', fontWeight: 700 }}>2.4% Eastern</span>
                  </p>
                </div>

                {/* LAION */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginBottom: '0.25rem' }}>
                    {Array.from({ length: 100 }, (_, i) => (
                      <div
                        key={`laion-${i}`}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: i < 55 ? '#4A5568' : (i < 80 ? '#8B7355' : '#D4A843'),
                        }}
                      />
                    ))}
                  </div>
                  <p style={{ color: 'var(--muted-text)', fontSize: '0.75rem', margin: 0 }}>
                    LAION-5B (common VLM training data): <span style={{ color: '#4A5568', fontWeight: 700 }}>~55% White</span>, English-centric captions
                  </p>
                </div>

                <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', marginTop: '1rem' }}>
                  The bias isn't in one place. It's at every layer: the training images, the captions describing them, the emotion taxonomy categorizing them, and the language model predicting labels from all of the above.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
