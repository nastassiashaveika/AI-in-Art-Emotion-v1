import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ConclusionFrame: React.FC = () => {
  return (
    <section 
      className="pudding-section"
      data-frame="6"
      style={{ 
        backgroundColor: '#F5F5F0'
      }}
    >
      <div className="pudding-container">
        <div className="space-y-4">
          <h2 style={{ color: '#5D866C', fontWeight: 700 }}>
            This Is What Cultural Flattening Looks Like.
          </h2>
          
          <p style={{ color: '#222222' }}>
            Both of these Chinese paintings were labeled "Calm."
          </p>
          
          <p style={{ color: '#222222' }}>
            One depicts conflict. One depicts tranquility. The model saw the style and defaulted to its safest prediction.
          </p>

          {/* Two images side by side */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '1rem',
            marginBottom: '1rem',
            marginTop: '1rem'
          }}>
            <div>
              <ImageWithFallback 
                src="https://image.digitalarchives.tw/ImageCache/00/0f/09/ac.jpg" 
                alt="A colonial missionary" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  border: '1px solid #222222'
                }}
              />
              <p style={{ 
                color: '#222222', 
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "Calm"
              </p>
            </div>
            <div>
              <ImageWithFallback 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAiwQZDOidGMNu5TAzCh0oZUWG45-nEkET723lHQRbnq5gK47o" 
                alt="An exhausted traveler" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  border: '1px solid #222222'
                }}
              />
              <p style={{ 
                color: '#222222', 
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                "Calm"
              </p>
            </div>
          </div>

          <p style={{ color: '#222222' }}>
            GPT-4o, like most large language models, was trained predominantly on Western text and cultural references. When it generates art descriptions and emotion labels, it applies Western frameworks by default:
          </p>
          
          <ul style={{ color: '#222222', listStyleType: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Red means passion (Western), not celebration (Chinese)</li>
            <li>Black suggests mourning (Western), not mastery (Japanese)</li>
            <li>Sparse composition means emptiness (Western), not philosophical space (East Asian)</li>
          </ul>
          
          <p style={{ color: '#222222', marginTop: '1rem' }}>
            With only 2.4% Eastern examples in training, the model doesn't have enough data to learn different associations. So it does what neural networks do when uncertain: it picks the safest, most common answer.
          </p>
          
          <p style={{ color: '#222222' }}>
            For Eastern art, that answer is "calm."
          </p>
          
          {/* Why This Matters */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            AI Is Already Curating Culture.
          </h2>
          
          <p style={{ color: '#222222' }}>
            This isn't an abstract research problem.
          </p>
          
          <p style={{ color: '#222222' }}>
            Museum recommendation systems use emotion labels to surface artworks. Digital archives rely on these classifications for search. The EmoArt paper explicitly proposes using this data for art therapy.
          </p>
          
          <p style={{ color: '#222222' }}>
            Imagine searching "exciting Asian art" and getting no results—because the AI labeled everything "calm."
          </p>
          
          <p style={{ color: '#222222' }}>
            Imagine an art therapy system that can recommend "calming Western landscapes" with nuance, but treats all of Chinese painting as interchangeable.
          </p>
          
          <p style={{ color: '#222222' }}>
            Imagine a child discovering art through an AI-curated museum app, learning implicitly that Western art has emotional range while Eastern art is just... peaceful.
          </p>
          
          <p style={{ color: '#222222' }}>
            We're not seeing better cultural understanding. We're seeing cultural flattening at scale.
          </p>
          
          {/* Conclusion */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '1rem' }}>
            Pattern-Matching Is Not Understanding.
          </h2>
          
          <p style={{ color: '#222222' }}>
            When GPT-4o labels a funeral scene "calm," it's not misreading the emotion. It's not even trying to read emotion. It's pattern-matching: "This image looks like images I've seen described as calm before."
          </p>
          
          <p style={{ color: '#222222' }}>
            The problem isn't that the model is wrong. The problem is that the patterns it learned encode cultural bias—and when we deploy these systems, we encode that bias into cultural infrastructure.
          </p>
          
          <p style={{ color: '#222222', marginTop: '1rem' }}>
            This is what happens when we mistake pattern-matching for understanding.
          </p>
          
          {/* References Section */}
          <h2 style={{ color: '#5D866C', fontWeight: 700, marginTop: '2rem' }}>
            References
          </h2>
          
          <p style={{ color: '#222222' }}>
            EmoArt-130k Dataset:{' '}
            <a href="https://huggingface.co/datasets/printblue/EmoArt-130k" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>
              https://huggingface.co/datasets/printblue/EmoArt-130k
            </a>
          </p>
          
          <p style={{ color: '#222222' }}>
            Barrett (2017):{' '}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5736315/" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>
              https://pmc.ncbi.nlm.nih.gov/articles/PMC5736315/
            </a>
          </p>
          
          <p style={{ color: '#222222' }}>
            Russell (2003):{' '}
            <a href="https://psycnet.apa.org/doiLanding?doi=10.1037%2F0033-295X.110.1.145" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>
              https://psycnet.apa.org/doiLanding?doi=10.1037%2F0033-295X.110.1.145
            </a>
          </p>
          
          <p style={{ color: '#222222', marginBottom: '150px' }}>
            Data Feminism:{' '}
            <a href="https://data-feminism.mitpress.mit.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#5D866C', textDecoration: 'underline' }}>
              https://data-feminism.mitpress.mit.edu/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};