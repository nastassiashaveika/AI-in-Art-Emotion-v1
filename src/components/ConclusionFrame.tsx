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

        <div className="space-y-2">

          <p style={{ color: 'var(--text-color)' }}>
            I should be transparent about something.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I used AI to help me write this. Claude, the same model that labeled 22 of 23 artworks identically across both prompts, the one that looked at violent black slashes on green and said "profound quietude," has been open in another tab this entire time.
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            I'm applying Western emotion categories to non-Western art, then judging AI for making the same category errors I'm making. My "ground truth" labels reflect my own training and blind spots, however much I tried to learn from other traditions. Twenty-three artworks can't represent global artistic diversity. My "Eastern" category lumps together Chinese, Japanese, and Ukiyo-e traditions that have distinct histories. If I had more specific prompts, more culturally grounded taxonomies, or annotators from each tradition, the results might look different. We cannot step outside the systems we're in. But we can at least be honest about them.
          </p>

          {/* ========== AI IS ALREADY CURATING CULTURE ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '0.5rem' }}>
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
          <p style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
            The "calm" label on a Chinese painting might seem harmless. But biased classification systems have a track record, and it's not good.
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
            .
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            The stakes with art labeling and false debt notices are obviously different. But the mechanism is the same: a system trained on incomplete data applies confident classifications to people and cultures it doesn't understand, and those classifications become infrastructure.
          </p>

          {/* ========== THE SAFETY GAP ========== */}
          <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, marginTop: '0.5rem' }}>
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
            , a rebrand widely read as a shift to AI national advantage rhetoric.
          </p>

          {/* ========== MEME + DATA ORIENTALISM + CLOSING ========== */}
          <p style={{ color: 'var(--text-color)', marginTop: '0.5rem' }}>
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
            Dan Kotliar calls this {' '}
            <a
              href="https://philpapers.org/rec/KOTDOO"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              Data Orientalism
            </a>
            : the algorithmic construction of the non-Western other, built from Western frameworks and sold back as objective truth. GPT-4o was trained on Western emotion categories, applied them to Chinese art, and the resulting labels are now proposed as training data for therapeutic AI systems. The loop closes.
          </p>

          {/* ========== CLOSING ========== */}
          <div style={{
            marginTop: '0.5rem',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--subtle-border)',
          }}>
            <p style={{ color: 'var(--text-color)' }}>
              This project is not a verdict on AI or on any specific model.
            </p>

            

            <p style={{
              color: 'var(--text-color)',
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}>
              The most honest thing I can offer is an invitation to treat these systems less as oracles and more as mirrors, and to ask, every time we wire them into culture, whose patterns we are about to encode.
            </p>
          </div>

          {/* ========== REFERENCES ========== */}
          <div id="section-references" style={{ marginTop: '0.5rem', paddingBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-color)', fontWeight: 700 }}>
              References + Fun Reads
            </h3>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-color)', lineHeight: 1.5 }} className="space-y-2">
              <div>
                Artnet News. (2026). British Museum removes AI-generated promotional images after backlash.{' '}
                <a href="https://news.artnet.com/art-world/british-museum-ai-backlash-2742244" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>news.artnet.com</a>
              </div>

              <div>
                Barrett, L. F. (2017). Categories and their role in the science of emotion. <em>Psychological Inquiry</em>, 28(1), 20–26.{' '}
                <a href="https://doi.org/10.1080/1047840X.2017.1261581" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>doi:10.1080/1047840X.2017.1261581</a>
              </div>

              <div>
                Birhane, A., Prabhu, V. U., &amp; Kahembwe, E. (2021). Multimodal datasets: Misogyny, pornography, and malignant stereotypes. <em>arXiv</em>:2110.01963.{' '}
                <a href="https://arxiv.org/abs/2110.01963" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>arxiv.org/abs/2110.01963</a>
              </div>

              <div>
                Blinderman, I. (n.d.). How to make dope shit part 2: Visualization. <em>The Pudding</em>.{' '}
                <a href="https://pudding.cool/process/how-to-make-dope-shit-part-2/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>pudding.cool</a>
              </div>

              <div>
                Cleveland Museum of Art. (n.d.). ArtLens "Express Yourself" interactive.{' '}
                <a href="https://www.clevelandart.org/artlens-exhibition" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>clevelandart.org/artlens-exhibition</a>
              </div>

              <div>
                CNN. (2026). Anthropic overhauls responsible scaling policy.{' '}
                <a href="https://www.cnn.com/2026/02/25/tech/anthropic-safety-policy-change" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>cnn.com</a>
              </div>

              <div>
                CNN. (n.d.). EU's iBorderCtrl AI lie detector.{' '}
                <a href="https://www.cnn.com/travel/article/ai-lie-detector-eu-airports-scli-intl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>cnn.com</a>
              </div>

              <div>
                Cohen, J. (1988). <em>Statistical power analysis for the behavioral sciences</em> (2nd ed.). Lawrence Erlbaum Associates.
              </div>

              <div>
                Creati.ai. (2026). OpenAI removes "safely" from mission statement.{' '}
                <a href="https://creati.ai/ai-news/2026-02-23/openai-removes-safely-mission-statement-for-profit-restructuring/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>creati.ai</a>
              </div>

              <div>
                D'Ignazio, C., &amp; Klein, L. F. (2020). <em>Data feminism</em>. MIT Press.{' '}
                <a href="https://data-feminism.mitpress.mit.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>data-feminism.mitpress.mit.edu</a>
              </div>

              <div>
                Deep Ensemble Art Style Recognition. (2024). arXiv:2405.11675.{' '}
                <a href="https://arxiv.org/abs/2405.11675" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>arxiv.org/abs/2405.11675</a>
              </div>

              <div>
                Dewey Color System. (n.d.). Color psychology.{' '}
                <a href="https://www.deweycolorsystem.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>deweycolorsystem.com</a>
              </div>

              <div>
                Elliot, A. J., &amp; Maier, M. A. (2014). Color-in-context theory. <em>Advances in Experimental Social Psychology</em>, 45, 61–125.
              </div>

              <div>
                EmoArt-130k Dataset. (2025). EmoArt: A multidimensional dataset for emotion-aware artistic generation [Dataset &amp; paper]. Hugging Face / ACM MM '25.{' '}
                <a href="https://huggingface.co/datasets/printblue/EmoArt-130k" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>huggingface.co/datasets/printblue/EmoArt-130k</a>
                {' · Paper: '}
                <a href="https://arxiv.org/abs/2506.03652" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>arxiv.org/abs/2506.03652</a>
              </div>

              <div>
                EU Law Enforcement. (n.d.). Dutch childcare benefits scandal.{' '}
                <a href="https://eulawenforcement.com/?p=7941" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>eulawenforcement.com</a>
              </div>

              <div>
                Google DeepMind. (2025). Submission to UK AI Safety Institute.{' '}
                <a href="https://deepmind.google/public-policy/ai-summit-policies/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>deepmind.google</a>
              </div>

              <div>
                Google Arts &amp; Culture Experiments. (n.d.). Art Palette.{' '}
                <a href="https://artsexperiments.withgoogle.com/artpalette/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>artsexperiments.withgoogle.com/artpalette</a>
              </div>

              <div>
                Kotliar, D. (2020). Data orientalism: On the algorithmic construction of the non-Western other. <em>Theory and Society</em>, 49(5), 919–939.{' '}
                <a href="https://philpapers.org/rec/KOTDOO" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>philpapers.org</a>
              </div>

              <div>
                Metropolitan Museum of Art. (n.d.). Open Access Collection.{' '}
                <a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>metmuseum.org/open-access</a>
              </div>

              <div>
                Murray, S. (2017). <em>Interactive data visualization for the web</em> (2nd ed.). O'Reilly Media.{' '}
                <a href="https://www.oreilly.com/library/view/interactive-data-visualization/9781491921296/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>oreilly.com</a>
              </div>

              <div>
                NBER. (2025). Cultural heritage and economic development (Working Paper w33976).{' '}
                <a href="https://www.nber.org/system/files/working_papers/w33976/w33976.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>nber.org/w33976</a>
              </div>

              <div>
                Nigam, S. (n.d.). Artwork classification using ML [GitHub repository].{' '}
                <a href="https://github.com/ShashwatNigam99/Artwork-Classification-Using-ML" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>github.com/ShashwatNigam99/Artwork-Classification-Using-ML</a>
              </div>

              <div>
                Pastoureau, M. (2001). <em>Blue: The history of a color</em>. Princeton University Press.
              </div>

              <div>
                Pudding, The. (n.d.). Resources.{' '}
                <a href="https://pudding.cool/resources/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>pudding.cool/resources</a>
              </div>

              <div>
                Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., Sastry, G., Askell, A., Mishkin, P., Clark, J., Krueger, G., &amp; Sutskever, I. (2021). Learning transferable visual models from natural language supervision (CLIP). <em>Proceedings of the 38th International Conference on Machine Learning (ICML)</em>, 8748–8763.
              </div>

              <div>
                Russell, J. A. (1980). A circumplex model of affect. <em>Journal of Personality and Social Psychology</em>, 39(6), 1161–1178.
              </div>

              <div>
                Schuhmann, C., et al. (2022). LAION-5B: An open large-scale dataset for training next generation image-text models. <em>Advances in Neural Information Processing Systems</em>, 35, 25278–25294.
              </div>

              <div>
                Scientific Reports. (2025). Enhanced automated art curation with modified CNN. <em>Nature</em>.{' '}
                <a href="https://www.nature.com/articles/s41598-025-91671-z" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>nature.com/articles/s41598-025-91671-z</a>
              </div>

              <div>
                Stanford HAI. (2025). AI Action Summit in Paris.{' '}
                <a href="https://hai.stanford.edu/news/ai-action-summit-in-paris-highlights-a-shifting-policy-landscape" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>hai.stanford.edu</a>
              </div>

              <div>
                TIME. (2026, February). Anthropic drops flagship safety pledge.{' '}
                <a href="https://time.com/7380854/exclusive-anthropic-drops-flagship-safety-pledge/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>time.com</a>
              </div>

              <div>
                WikiArt. (n.d.). Visual art encyclopedia.{' '}
                <a href="https://www.wikiart.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>wikiart.org</a>
              </div>

              <div>
                Xie He. (5th century). <em>Liufa</em> [Six Principles of Painting, 六法]. Classical Chinese painting theory establishing <em>qiyun shengdong</em> (spirit resonance) as primary aesthetic principle.
              </div>

              <div>
                Yu, H. (2014). Cross-cultural analysis of color symbolism in ancient civilizations.
              </div>

              <div>
                Zhai, X., Mustafa, B., Kolesnikov, A., &amp; Beyer, L. (2023). Sigmoid loss for language image pre-training (SigLIP). <em>Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)</em>, 11975–11986.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};