import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import britishMuseumImage from 'figma:asset/0b5354162bea13f2c0e62abb93cbee475a17424c.png';
import aiAlignmentMeme from 'figma:asset/87e601050d115526739a79deb1e1094a64b59840.png';

export const ConclusionFrame: React.FC = () => {
  return (
    <section
      id="section-5"
      className="pudding-section"
      data-frame="conclusion"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          So What
        </h2>

        <div className="space-y-4">

          <p style={{ color: 'var(--text-color)' }}>
            I should be transparent about something.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I used AI to help me write this. Claude, the same model that labeled 22 of 23 artworks identically across both prompts, the one that looked at violent black slashes on green and said "profound quietude," has been open in another tab this entire time.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I'm applying Western emotion categories to non-Western art, then judging AI for making the same category errors I'm making. My "ground truth" labels reflect my own training and blind spots, however much I tried to learn from other traditions. Twenty-three artworks can't represent global artistic diversity. My "Eastern" category lumps together Chinese, Japanese, and Ukiyo-e traditions that have distinct histories spanning centuries. If I had more specific prompts, more culturally grounded taxonomies, or annotators from each tradition, the results might look different. We cannot step outside the systems we're in. But we can at least be honest about them.
          </p>

          {/* ========== AI IS ALREADY CURATING CULTURE ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '2rem' }}>
            AI Is Already Curating Culture
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            These systems are already deployed in institutions that billions of people trust.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            The Cleveland Museum of Art's ArtLens{' '}
            <a
              href="https://www.clevelandart.org/artlens-exhibition"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              "Express Yourself" interactive
            </a>
            {' '}uses facial-recognition software to sort visitors' expressions into fixed emotion labels — happy, surprised, fearful — precisely the kind of facial-emotion mapping that Lisa Feldman Barrett's research calls into question.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            In January 2026, the British Museum posted AI-generated promotional images of a young woman in "traditional" East Asian and Mexican-style clothing contemplating Aztec artifacts. After a wave of criticism, the posts were{' '}
            <a
              href="https://news.artnet.com/art-world/british-museum-ai-backlash-2742244"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              deleted within hours
            </a>.
          </p>

          {/* British Museum AI image */}
          <div style={{ margin: '1.5rem 0' }}>
            <div style={{
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              <ImageWithFallback
                src={britishMuseumImage}
                alt="AI-generated promotional image from the British Museum showing a young woman in traditional East Asian clothing"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
            </div>
            <p style={{
              color: 'var(--muted-text)',
              marginTop: '0.5rem',
              fontSize: '0.75rem',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              One of the AI-generated images posted by the British Museum, January 2026.{' '}
              <a
                href="https://news.artnet.com/art-world/british-museum-ai-backlash-2742244"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-color)', textDecoration: 'underline', fontSize: '0.75rem' }}
              >
                Source: Artnet News
              </a>
            </p>
          </div>

          {/* ========== CLASSIFICATION HAS CONSEQUENCES ========== */}
          <p style={{ color: 'var(--text-color)', marginTop: '2rem' }}>
            The calm label on a Chinese painting might seem harmless. But biased classification systems have a track record, and it's not good.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            In the Netherlands, a discriminatory risk-classification algorithm used by the tax authority{' '}
            <a
              href="https://eulawenforcement.com/?p=7941"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              flagged families with non-Dutch or dual nationality as 'high risk'
            </a>
            {' '}for childcare benefits fraud, wrongly accusing some 26,000 families and helping to trigger the resignation of the entire Dutch cabinet in 2021.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            The EU's iBorderCtrl project spent {'\u20AC'}4.5 million piloting an emotion-recognition 'lie detector' for border crossings, built on a deception-detection model{' '}
            <a
              href="https://www.cnn.com/travel/article/ai-lie-detector-eu-airports-scli-intl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              trained on just 32 (mostly European male) participants
            </a>
            —exactly the kind of design that experts warn is likely to misclassify trauma survivors and racialised travellers as suspicious.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I'm not saying labeling art "calm" is the same as issuing false debt notices. The stakes are obviously different. But the mechanism is the same: a system trained on incomplete data applies confident classifications to people and cultures it doesn't understand, and those classifications become infrastructure.
          </p>

          {/* ========== THE SAFETY GAP ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '2rem' }}>
            The Safety Gap
          </h3>

          <p style={{ color: 'var(--text-color)' }}>
            I am writing this on February 25, 2026. Yesterday, on Feb 24, Anthropic overhauled its Responsible Scaling Policy and{' '}
            <a
              href="https://www.cnn.com/2026/02/25/tech/anthropic-safety-policy-change"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              dropped its flagship pledge
            </a>
            {' '}never to train or deploy models whose risks it could not mitigate in advance. The earlier policy had promised to pause scaling if model capabilities outstripped Anthropic's ability to ensure safety; that categorical commitment is now gone. As Chief Science Officer Jared Kaplan{' '}
            <a
              href="https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              told TIME
            </a>
            , "We felt that it wouldn't actually help anyone for us to stop training AI models… if competitors are blazing ahead."
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            OpenAI has also quietly edited safety out of its formal mission language: recent analyses of its filings show that the word 'safely'{' '}
            <a
              href="https://creati.ai/ai-news/2026-02-23/openai-removes-safely-mission-statement-for-profit-restructuring/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              disappears from its mission statement after 2023
            </a>
            , even as the company has dissolved or folded several safety and alignment teams into more product-focused units. Google DeepMind's{' '}
            <a
              href="https://deepmind.google/public-policy/ai-summit-policies/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              submissions to the UK government
            </a>
            {' '}now foreground evaluations for 'extreme risks' such as biosecurity, cybersecurity, and autonomous replication and adaptation, aligning safety work with a narrow set of catastrophic scenarios. And the UK-launched 'AI Safety Summit' has already reappeared in Paris as the{' '}
            <a
              href="https://hai.stanford.edu/news/ai-action-summit-in-paris-highlights-a-shifting-policy-landscape"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              'AI Action Summit'
            </a>
            , a rebrand widely read as a shift from safety-first rhetoric to a focus on AI opportunity and national advantage.
          </p>

          {/* ========== MEME + DATA ORIENTALISM + CLOSING ========== */}
          <p style={{ color: 'var(--text-color)', marginTop: '2rem' }}>
            If you ever checked my LinkedIn, or somehow found this work through my LinkedIn, you probably have seen this meme I posted in January, as a part of one of my cover letters for job applications. It did not age well.
          </p>

          <div style={{ margin: '1.5rem 0' }}>
            <div style={{
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              <ImageWithFallback
                src={aiAlignmentMeme}
                alt="AI alignment chart meme with AI company logos"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>

          <p style={{ color: 'var(--text-color)' }}>
            Dan Kotliar calls this "{' '}
            <a
              href="https://philpapers.org/rec/KOTDOO"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              Data Orientalism
            </a>
            ": the algorithmic construction of the non-Western other, built from Western frameworks and sold back as objective truth. GPT-4o was trained on Western emotion categories, applied them to Chinese art, and the resulting labels are now proposed as training data for therapeutic AI systems. The loop closes.
          </p>

          {/* ========== CLOSING ========== */}
          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--subtle-border)',
          }}>
            <p style={{ color: 'var(--text-color)' }}>
              This project is not a verdict on AI or on any specific model.
            </p>

            <p style={{ color: 'var(--text-color)', marginTop: '1rem' }}>
              It is a case study in how cultural bias gets laundered into "neutral" infrastructure—and how easy it is to miss that laundering when the output feels aesthetically pleasing or therapeutically useful.
            </p>

            <p style={{
              color: 'var(--text-color)',
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}>
              The most honest thing I can offer is not a solution, but an invitation: to treat these systems less as oracles and more as mirrors, and to ask, every time we wire them into culture, whose patterns we are about to encode.
            </p>
          </div>

          {/* ========== REFERENCES ========== */}
          <div id="section-references" style={{ marginTop: '3rem', paddingBottom: '6rem' }}>
            <h3 style={{ color: 'var(--accent-color)', fontWeight: 700 }}>
              References
            </h3>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-color)' }} className="space-y-4">
              <p>
                Artnet News (2026). British Museum AI backlash:{' '}
                <a href="https://news.artnet.com/art-world/british-museum-ai-backlash-2742244" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  news.artnet.com
                </a>
              </p>

              <p>
                Barrett, L. F. (2017). The theory of constructed emotion:{' '}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5736315/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  PMC5736315
                </a>
              </p>

              <p>
                Cleveland Museum of Art. ArtLens Exhibition:{' '}
                <a href="https://www.clevelandart.org/artlens-exhibition" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  clevelandart.org/artlens-exhibition
                </a>
              </p>

              <p>
                CNN (2026). Anthropic safety policy change:{' '}
                <a href="https://www.cnn.com/2026/02/25/tech/anthropic-safety-policy-change" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  cnn.com
                </a>
              </p>

              <p>
                CNN. iBorderCtrl AI lie detector:{' '}
                <a href="https://www.cnn.com/travel/article/ai-lie-detector-eu-airports-scli-intl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  cnn.com
                </a>
              </p>

              <p>
                Creati.ai (2026). OpenAI removes 'safely' from mission statement:{' '}
                <a href="https://creati.ai/ai-news/2026-02-23/openai-removes-safely-mission-statement-for-profit-restructuring/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  creati.ai
                </a>
              </p>

              <p>
                D'Ignazio, C. & Klein, L. F. (2020). <em>Data Feminism</em>:{' '}
                <a href="https://data-feminism.mitpress.mit.edu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  data-feminism.mitpress.mit.edu
                </a>
              </p>

              <p>
                Dewey Color System. Color Psychology:{' '}
                <a href="https://deweycolorsystem.com/wp-content/uploads/2020/06/Credentials-Color-Psychology.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  deweycolorsystem.com
                </a>
              </p>

              <p>
                EmoArt-130k Dataset:{' '}
                <a href="https://huggingface.co/datasets/printblue/EmoArt-130k" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  huggingface.co/datasets/printblue/EmoArt-130k
                </a>
              </p>

              <p>
                EU Law Enforcement. Dutch childcare benefits scandal:{' '}
                <a href="https://eulawenforcement.com/?p=7941" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  eulawenforcement.com
                </a>
              </p>

              <p>
                Google DeepMind. AI Summit Policies:{' '}
                <a href="https://deepmind.google/public-policy/ai-summit-policies/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  deepmind.google
                </a>
              </p>

              <p>
                Kotliar, D. Data Orientalism:{' '}
                <a href="https://philpapers.org/rec/KOTDOO" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  philpapers.org
                </a>
              </p>

              <p>
                Russell, J. A. (1980). A circumplex model of affect. <em>Journal of Personality and Social Psychology</em>, 39(6), 1161–1178.
              </p>

              <p>
                Stanford HAI (2025). AI Action Summit in Paris:{' '}
                <a href="https://hai.stanford.edu/news/ai-action-summit-in-paris-highlights-a-shifting-policy-landscape" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  hai.stanford.edu
                </a>
              </p>

              <p>
                TIME (2026). Anthropic drops flagship safety pledge:{' '}
                <a href="https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  time.com
                </a>
              </p>

              <p>
                Xie He (5th century). Six Principles of Painting (Liufa, 六法). Classical Chinese painting theory establishing <em>qiyun shengdong</em> (spirit resonance) as primary aesthetic principle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
