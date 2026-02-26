import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'section-0', title: 'Introduction' },
  { id: 'section-1', title: 'What the Data Shows' },
  { id: 'section-2', title: 'Color and Culture' },
  { id: 'section-3', title: 'Cross-Model Experiment' },
  { id: 'section-4', title: 'Why It Happens' },
  { id: 'section-5', title: 'So What' },
  { id: 'section-references', title: 'References' },
];

export const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-0');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 500,
        maxWidth: '200px',
        pointerEvents: 'auto',
      }}
      className="hidden lg:block"
    >
      <div style={{ borderLeft: '2px solid rgba(93, 134, 108, 0.2)', paddingLeft: '1rem' }}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={activeSection === section.id ? 'text-primary' : 'text-muted-foreground'}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '0.5rem 0',
              background: 'none',
              border: 'none',
              fontWeight: activeSection === section.id ? 700 : 400,
              fontSize: '0.875rem',
              transition: 'color 0.2s',
              cursor: 'pointer',
            }}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};