import React from 'react';

export const AcknowledgementsFrame: React.FC = () => {
  return (
    <section
      id="section-acknowledgements"
      className="pudding-section"
      data-frame="acknowledgements"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="pudding-container">
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
          Acknowledgements
        </h2>

        <div className="space-y-4">
          <p style={{ color: 'var(--text-color)' }}>
            This project has a lot more left in it. The obvious next steps: video, sculpture, photography, non-European-language caption datasets, actual cultural annotators from the traditions being studied. If you know someone who might want to fund that work, genuinely, please reach out:{' '}
            <a
              href="mailto:shaveika@uni.minerva.edu"
              style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
            >
              shaveika@uni.minerva.edu
            </a>
            .
          </p>

          <p style={{ color: 'var(--text-color)' }}>
            Huge thank you to my advisor Professor Scott Wisor. Thanks to my second reader Professor Mark Sheskin. Thanks to my digital humanities crowd: Caya, Gisele, Miriam, Alvaro, My, Ian and Professor Robert Karl. This project would not exist without the EmoArt dataset, which I then spent several months critiquing. Thanks to my friends and family who listened and provided invaluable feedback. I shall stop now cause I can list countless names.
          </p>
        </div>
      </div>
    </section>
  );
};
