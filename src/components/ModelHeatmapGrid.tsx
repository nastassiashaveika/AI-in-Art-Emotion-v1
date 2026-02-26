import React from 'react';
import opus110Image from 'figma:asset/6f693cd2097b2ae458aa416c10c57b36013984f6.png';
import prampoliniImage from 'figma:asset/6e8fbe69d03d47b4dd829c547cf967c080eae803.png';
import kmettyImage from 'figma:asset/fbea5085849a1ca3387d2f4bce250bccd306c48b.png';
import gaboriImage from 'figma:asset/b5580726a5f8d26b7ba5cdc62eab209feb0e511d.png';
import midwestImage from 'figma:asset/514678c46843c3ef0dc298e89fb8ef0d3362494c.png';
import ukiyoeImage from 'figma:asset/af5cd08612d27538a423bbedd0236fd349e8041f.png';
import wuGuanzhongImage from 'figma:asset/e05c254c76ea74cf10e1ff7c6363c756384de776.png';
import shoteiCatsImage from 'figma:asset/ec153f0b7dbc541bf4d5e486089a62367a96c202.png';
import chinesePainting1Image from 'figma:asset/3799922c655cdeb0f96f8e196935dc3a484aa1a3.png';
import chinesePainting2Image from 'figma:asset/2774b956dceee1e7e2bd18df5ce9912237304457.png';
import chinesePainting3Image from 'figma:asset/83ab3c6b0efffc7a036d68eee1e690465629149b.png';
import chinesePainting4Image from 'figma:asset/2c33389a8a30bfdab8670126f693a17f875953ea.png';
import solomkoFTImage from 'figma:asset/224e774911d05c6b40ac0dc4cf135ee822ca7edf.png';
import lippiPortraitImage from 'figma:asset/eb500bd10e58b44d4b3def2f0d9faa94aff00fd3.png';
import guglelmiImage from 'figma:asset/0752b2a1e089a895570a977af4a2b220e5581cdf.png';
import vajdaImage from 'figma:asset/236b989289e37fc4b85e90238c81a1cb5799e98d.png';
import solomkoRainbowImage from 'figma:asset/fc9b8640044ead336eade8218c55751e83ad2dbc.png';
import lippiFuneralImage from 'figma:asset/d96c8e470670b38772ef6f2977cafb9ca412df75.png';
import villamizarImage from 'figma:asset/24178314380f5bc8f4f13aa856234a3b2bfae3fb.png';
import matisseImage from 'figma:asset/1019d445bf93808d50c903c92f8459ca2d583557.png';
import cabreraImage from 'figma:asset/b7515af5f6ac3e3ab57720e43e985afacb0da14f.png';
import napanangkaImage from 'figma:asset/edcaf27a2bafb2feadaf2252b3a812a2f23a8b68.png';
import dominguezImage from 'figma:asset/119aee791d8b244bf1056f7ca1885275e2508798.png';

const ALL_MODELS = ['GPT-4o', 'GPT-5.1', 'Gemini 2.5', 'Sonnet 4.5', 'Haiku 4.5'] as const;
const P2_MODELS = ['GPT-4o', 'GPT-5.1', 'Gemini 2.5', 'Sonnet 4.5'] as const;

type Artwork = {
  id: number;
  artist: string;
  title?: string;
  desc: string;
  image?: string;
  region: 'Eastern' | 'Western';
  emoart: string; // EmoArt dataset dominant emotion
  p1: [string, string, string, string, string]; // GPT-4o, GPT-5.1, Gemini, Sonnet, Haiku
  p2: [string, string, string, string];          // GPT-4o, GPT-5.1, Gemini, Sonnet
};

// ── FULL CORRECTED DATA (from spreadsheet) ──
// P1: 23 calm / 115 total (20.0%)   P2: 14 calm / 92 total (15.2%)
// Per-model P1 calm: GPT-4o 4, GPT-5.1 3, Gemini 5, Sonnet 7, Haiku 4
// GPT-4o P2 calm → 0 ("vanish entirely")  |  Sonnet: 0/23 labels change
const artworks: Artwork[] = [
  // ═══ EASTERN (7) ═══
  { id: 1, artist: 'Wu Guanzhong', title: 'The Hometown of Shakespeare',
    desc: 'Ink and wash painting. A bustling Tudor street scene, black-and-white striped buildings, colorful crowds, vibrant storefront signs. Wu merged Western abstraction with traditional Chinese brushwork.',
    image: wuGuanzhongImage, region: 'Eastern', emoart: 'Excited',
    p1: ['Excited', 'Excited', 'Excited', 'Excited', 'Glad'],
    p2: ['Excited', 'Excited', 'Frustrated', 'Excited'] },

  { id: 2, artist: 'Shotei Takahashi', title: 'Cats with Ball',
    desc: 'Shin-hanga woodblock print. Two playful kittens — one white, one black — engaged in a game with a ball and pink ribbon.',
    image: shoteiCatsImage, region: 'Eastern', emoart: 'Happy',
    p1: ['Happy', 'Happy', 'Happy', 'Happy', 'Happy'],
    p2: ['Happy', 'Happy', 'Excited', 'Happy'] },

  { id: 3, artist: 'Attr. Wang Zhenpeng (傳王振鵬)',
    desc: 'Ming dynasty (1368–1644). Ink and color on silk — branches twist across a golden aged ground.',
    image: chinesePainting1Image, region: 'Eastern', emoart: 'Contentment',
    p1: ['Calm', 'Calm', 'Calm', 'Calm', 'Calm'],
    p2: ['Tired', 'Calm', 'Calm', 'Calm'] },

  { id: 4, artist: 'Anonymous Qing court painter', title: 'Western Missionary Portrait',
    desc: 'Qing dynasty oil painting on Korean paper. A Western missionary in a red cloak and white robes, holding a wooden staff and rosary. Meant to be "Sinicized" European portraiture.',
    image: chinesePainting2Image, region: 'Eastern', emoart: 'Calm',
    p1: ['Sad', 'Sad', 'Calm', 'Calm', 'Happy'],
    p2: ['Tired', 'Tired', 'Calm', 'Calm'] },

  { id: 5, artist: 'Zheng Jin (鄭錦)', title: 'Sunset over a Distant Road',
    desc: 'Chinese painting, 117.5 × 202.5 cm. A solitary traveler with a donkey at sunset — drooping postures, muted palette, the weight of a long journey. Collection of the National Palace Museum, Taipei.',
    image: chinesePainting3Image, region: 'Eastern', emoart: 'Calm',
    p1: ['Tired', 'Tired', 'Tired', 'Sad', 'Sad'],
    p2: ['Tired', 'Tired', 'Tired', 'Sad'] },

  { id: 6, artist: 'Li Gonglin (李公麟)', title: 'Realm of the Immortals',
    desc: 'Ink on paper landscape scroll. Misty mountains, a cascading waterfall, small figures walking through drifting clouds.',
    image: chinesePainting4Image, region: 'Eastern', emoart: 'Contentment',
    p1: ['Calm', 'Calm', 'Calm', 'Calm', 'Calm'],
    p2: ['Contentment', 'Calm', 'Calm', 'Calm'] },

  { id: 7, artist: 'Paul Jacoulet', title: "L'Attente, Celebes, Menado",
    desc: 'Ukiyo-e influenced print of a woman in ornate clothing, lounging confidently with a cigarette. "The Wait" — anticipation, self-assurance, perhaps provocation.',
    image: ukiyoeImage, region: 'Eastern', emoart: 'Excited',
    p1: ['Excited', 'Contentment', 'Aroused', 'Happy', 'Glad'],
    p2: ['Happy', 'Aroused', 'Aroused', 'Happy'] },

  // ═══ WESTERN (16) ═══
  { id: 8, artist: 'Schneider', title: 'Opus 110',
    desc: 'Tachisme / Lyrical Abstraction. Michel Ragon described Schneider\'s paintings as "like an orchestra," layers of gestural force building on each other.',
    image: opus110Image, region: 'Western', emoart: 'Excited',
    p1: ['Calm', 'Excited', 'Excited', 'Calm', 'Annoyed'],
    p2: ['Annoyed', 'Alarmed', 'Calm', 'Calm'] },

  { id: 9, artist: 'Prampolini', title: 'Sirene',
    desc: 'Cubism / Italian Futurism. A fractured portrait with exaggerated, sensual features; disorienting by design.',
    image: prampoliniImage, region: 'Western', emoart: 'Excited',
    p1: ['Sad', 'Sad', 'Alarmed', 'Aroused', 'Sad'],
    p2: ['Sad', 'Annoyed', 'Aroused', 'Aroused'] },

  { id: 10, artist: 'Kmetty János', title: 'Self-Portrait',
    desc: 'Cubism. A Hungarian artist\'s unflinching self-examination. The cool green palette and fractured planes reinforce a sense of contained tension.',
    image: kmettyImage, region: 'Western', emoart: 'Tired',
    p1: ['Frustrated', 'Sad', 'Annoyed', 'Annoyed', 'Frustrated'],
    p2: ['Frustrated', 'Frustrated', 'Frustrated', 'Annoyed'] },

  { id: 11, artist: 'Sally Gabori', title: 'Dibirdibi Country',
    desc: 'Labeled "Native Art" in EmoArt. Indigenous Australian artist, Gabori, a Kaiadilt woman from Bentinck Island, began painting in her 80s. Bold, sweeping color mapping ancestral land and sea country. (Note: classifying Indigenous Australian works under "Western" replicates the same colonial framing I critique)',
    image: gaboriImage, region: 'Western', emoart: 'Excited',
    p1: ['Excited', 'Excited', 'Excited', 'Excited', 'Excited'],
    p2: ['Excited', 'Excited', 'Aroused', 'Excited'] },

  { id: 12, artist: 'Matisse', title: 'View of Collioure',
    desc: 'A Mediterranean coastal village in an explosion of vivid, joyful color: pinks, oranges, purples, blues dancing across the canvas. Classic fauvism.',
    image: matisseImage, region: 'Western', emoart: 'Glad',
    p1: ['Glad', 'Happy', 'Happy', 'Happy', 'Contentment'],
    p2: ['Glad', 'Glad', 'Excited', 'Happy'] },

  { id: 13, artist: 'Miguel Cabrera', title: 'The Virgin of the Apocalypse',
    desc: 'A dramatic baroque (1780s) scene — the Virgin ascending among angels, an archangel battling a multi-headed dragon below.',
    image: cabreraImage, region: 'Western', emoart: 'Alarmed',
    p1: ['Alarmed', 'Alarmed', 'Excited', 'Calm', 'Happy'],
    p2: ['Alarmed', 'Alarmed', 'Excited', 'Calm'] },

  { id: 14, artist: 'Makinti Napanangka', title: 'Travels of the Kungka Kutjarra',
    desc: 'Labeled "Abstract Expressionism" in EmoArt. Indigenous Australian dot painting — intense vertical strokes in yellows, oranges, reds. Rhythmic, pulsing, vibrating with heat and energy.',
    image: napanangkaImage, region: 'Western', emoart: 'Happy',
    p1: ['Happy', 'Excited', 'Excited', 'Excited', 'Alarmed'],
    p2: ['Happy', 'Excited', 'Excited', 'Excited'] },

  { id: 15, artist: 'Oscar Dominguez', title: 'Los platillos volantes',
    desc: 'Surrealistic waves spiral into vortexes, shows a tiny boat. The painting feels dark, dangerous.',
    image: dominguezImage, region: 'Western', emoart: 'Alarmed',
    p1: ['Alarmed', 'Alarmed', 'Alarmed', 'Alarmed', 'Aroused'],
    p2: ['Alarmed', 'Alarmed', 'Alarmed', 'Alarmed'] },

  { id: 16, artist: 'Benton', title: 'Midwest',
    desc: '1930s Regionalism. Muscular farmers harvesting wheat — physical labor, but also pride and community.',
    image: midwestImage, region: 'Western', emoart: 'Excited',
    p1: ['Tired', 'Tired', 'Tired', 'Tired', 'Tired'],
    p2: ['Aroused', 'Tired', 'Tired', 'Tired'] },

  { id: 17, artist: 'Ramirez Villamizar', title: 'Nido de Serpientes',
    desc: 'This is a constructivist metal sculpture of interlocking angular geometric forms.',
    image: villamizarImage, region: 'Western', emoart: 'Excited',
    p1: ['Tired', 'Tired', 'Tired', 'Tired', 'Tired'],
    p2: ['Frustrated', 'Frustrated', 'Frustrated', 'Frustrated'] },

  { id: 18, artist: 'Solomko — Forever Together',
    desc: 'Art Nouveau. Two figures in classical dress in an intimate embrace — warm golden tones, luxurious fabrics, tender affection.',
    image: solomkoFTImage, region: 'Western', emoart: 'Contentment',
    p1: ['Happy', 'Happy', 'Happy', 'Contentment', 'Aroused'],
    p2: ['Aroused', 'Happy', 'Happy', 'Contentment'] },

  { id: 19, artist: 'Filippino Lippi', title: 'Portrait of an Old Man',
    desc: 'Early Renaissance portrait. An elderly man in a white cap against deep blue. Is it contemplative gaze, deeply lined face, quiet severity?',
    image: lippiPortraitImage, region: 'Western', emoart: 'Sad',
    p1: ['Sad', 'Sad', 'Calm', 'Calm', 'Sad'],
    p2: ['Tired', 'Sad', 'Annoyed', 'Calm'] },

  { id: 20, artist: 'Guglielmi', title: 'Things of the Sea',
    desc: 'A surreal beach scene with abstract forms — shells, sand dunes, a turquoise ocean. Dreamlike, sparse, profoundly still. Surrealism.',
    image: guglelmiImage, region: 'Western', emoart: 'Contentment',
    p1: ['Calm', 'Calm', 'Calm', 'Calm', 'Calm'],
    p2: ['Bored', 'Calm', 'Bored', 'Calm'] },

  { id: 21, artist: 'Vajda Lajos', title: 'Fire-Eye',
    desc: 'A surreal figure with a flame-shaped orange head, wide staring eyes, and a prone inert body. Symbolism.',
    image: vajdaImage, region: 'Western', emoart: 'Calm',
    p1: ['Bored', 'Alarmed', 'Alarmed', 'Alarmed', 'Contentment'],
    p2: ['Annoyed', 'Annoyed', 'Alarmed', 'Alarmed'] },

  { id: 22, artist: 'Solomko — Rainbow',
    desc: 'Figures sheltering under a tree, gazing at a rainbow after a storm. Could be about hope or gentle wonder? Renaissance fresco.',
    image: solomkoRainbowImage, region: 'Western', emoart: 'Calm',
    p1: ['Contentment', 'Contentment', 'Contentment', 'Contentment', 'Calm'],
    p2: ['Glad', 'Glad', 'Excited', 'Contentment'] },

  { id: 23, artist: 'Filippo Lippi', title: 'The Funeral of St. Stephen',
    desc: 'A funeral scene — grief, reverence, community mourning. From the introduction.',
    image: lippiFuneralImage, region: 'Western', emoart: 'Calm',
    p1: ['Sad', 'Sad', 'Sad', 'Sad', 'Sad'],
    p2: ['Sad', 'Sad', 'Sad', 'Sad'] },
];

const CALM_COLOR = '#5B9EA6';
const NOT_CALM_COLOR = '#E8DDD3';

export const ModelHeatmapGrid: React.FC = () => {
  const [activePrompt, setActivePrompt] = React.useState<'p1' | 'p2'>('p1');
  const [expandedArtwork, setExpandedArtwork] = React.useState<number | null>(null);
  const [selectedCell, setSelectedCell] = React.useState<{ artworkId: number; modelIdx: number } | null>(null);
  const [hoveredCell, setHoveredCell] = React.useState<{ artworkId: number; modelIdx: number } | null>(null);

  const models = activePrompt === 'p1' ? ALL_MODELS : P2_MODELS;

  const easternArtworks = artworks.filter(a => a.region === 'Eastern');
  const westernArtworks = artworks.filter(a => a.region === 'Western');

  const getLabel = (artwork: Artwork, modelIdx: number): string => {
    return activePrompt === 'p1' ? artwork.p1[modelIdx] : artwork.p2[modelIdx];
  };

  const getCalmCount = () => {
    let count = 0;
    const total = artworks.length * models.length;
    artworks.forEach(a => {
      models.forEach((_, idx) => {
        if (getLabel(a, idx) === 'Calm') count++;
      });
    });
    return { count, total };
  };

  const { count: calmCount, total: calmTotal } = getCalmCount();

  const handleCellClick = (artworkId: number, modelIdx: number) => {
    if (selectedCell?.artworkId === artworkId && selectedCell?.modelIdx === modelIdx) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ artworkId, modelIdx });
    }
  };

  const handleArtworkClick = (artworkId: number) => {
    setExpandedArtwork(expandedArtwork === artworkId ? null : artworkId);
  };

  const renderCell = (artwork: Artwork, modelIdx: number) => {
    const label = getLabel(artwork, modelIdx);
    const isCalm = label === 'Calm';
    const bgColor = isCalm ? CALM_COLOR : NOT_CALM_COLOR;
    const isHovered = hoveredCell?.artworkId === artwork.id && hoveredCell?.modelIdx === modelIdx;
    const isSelected = selectedCell?.artworkId === artwork.id && selectedCell?.modelIdx === modelIdx;

    return (
      <td
        key={`${artwork.id}-${modelIdx}`}
        style={{
          backgroundColor: isSelected ? (isCalm ? '#4A8B93' : '#D5C8BB') : bgColor,
          position: 'relative',
          cursor: 'pointer',
          padding: 0,
          border: '1.5px solid #F5F5F0',
          transition: 'background-color 0.15s',
        }}
        onClick={() => handleCellClick(artwork.id, modelIdx)}
        onMouseEnter={() => setHoveredCell({ artworkId: artwork.id, modelIdx })}
        onMouseLeave={() => setHoveredCell(null)}
      >
        <div style={{
          width: '100%',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {isSelected && (
            <span style={{
              fontSize: '0.55rem',
              fontWeight: 700,
              color: isCalm ? 'white' : '#222222',
              textAlign: 'center',
              lineHeight: 1.1,
              padding: '0 2px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}>
              {label}
            </span>
          )}
        </div>
        {/* Hover tooltip */}
        {isHovered && !isSelected && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#222222',
              color: '#F5F5F0',
              padding: '0.4rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: '4px',
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontSize: '0.65rem', color: '#999' }}>{models[modelIdx]}</div>
            <div>{artwork.artist}</div>
            <div style={{ fontSize: '0.65rem', color: '#aaa', marginTop: '2px' }}>Click to reveal</div>
          </div>
        )}
        {/* Selected tooltip */}
        {isSelected && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#222222',
              color: '#F5F5F0',
              padding: '0.4rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              zIndex: 50,
              marginBottom: '4px',
              pointerEvents: 'none',
            }}
          >
            <div style={{ fontSize: '0.65rem', color: '#999' }}>{models[modelIdx]}</div>
            <div>{artwork.artist}</div>
            <div style={{
              color: isCalm ? CALM_COLOR : '#D4A843',
              fontWeight: 700,
              marginTop: '2px',
            }}>
              {label}
            </div>
          </div>
        )}
      </td>
    );
  };

  const renderExpandedRow = (artwork: Artwork) => {
    if (expandedArtwork !== artwork.id) return null;

    return (
      <tr key={`expanded-${artwork.id}`}>
        <td
          colSpan={models.length + 2}
          style={{
            padding: '0.75rem',
            backgroundColor: 'var(--panel-bg)',
            borderBottom: '1px solid var(--subtle-border)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            {artwork.image && (
              <img
                src={artwork.image}
                alt={artwork.artist}
                style={{
                  maxWidth: '100px',
                  maxHeight: '130px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '3px',
                  flexShrink: 0,
                  border: '1px solid var(--subtle-border)',
                }}
              />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-color)', fontWeight: 600 }}>
                {artwork.artist}
                {artwork.title && (
                  <span style={{ fontWeight: 400, fontStyle: 'italic' }}> — {artwork.title}</span>
                )}
              </div>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.8rem', margin: '0.25rem 0 0', lineHeight: 1.4 }}>
                {artwork.desc}
              </p>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  const renderGroup = (label: string, group: Artwork[], borderColor: string) => [
      <tbody key={`header-${label}`}>
        <tr>
          <td
            colSpan={models.length + 2}
            style={{
              backgroundColor: borderColor,
              color: 'white',
              padding: '3px 8px',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
            }}
          >
            {label} ({group.length})
          </td>
        </tr>
      </tbody>,
      ...group.map((artwork) => (
        <tbody key={artwork.id}>
          <tr>
            <td
              style={{
                padding: '3px 6px',
                fontSize: '0.65rem',
                color: expandedArtwork === artwork.id ? '#5D866C' : 'var(--text-color)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '120px',
                backgroundColor: expandedArtwork === artwork.id ? '#F0F5F1' : 'var(--bg-color)',
                borderBottom: expandedArtwork === artwork.id ? 'none' : '1px solid var(--subtle-border)',
                cursor: 'pointer',
                fontWeight: expandedArtwork === artwork.id ? 600 : 400,
                transition: 'all 0.15s',
              }}
              onClick={() => handleArtworkClick(artwork.id)}
              title={`${artwork.artist}${artwork.title ? ' — ' + artwork.title : ''}: click to expand`}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.5rem',
                  color: 'var(--muted-text)',
                  transform: expandedArtwork === artwork.id ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.15s',
                }}>
                  ▶
                </span>
                {artwork.artist}
              </span>
            </td>
            <td
              style={{
                padding: '3px 6px',
                fontSize: '0.6rem',
                color: '#666',
                fontStyle: 'italic',
                textAlign: 'center',
                backgroundColor: 'var(--panel-bg)',
                borderBottom: '1px solid var(--subtle-border)',
                width: '80px',
              }}
            >
              {artwork.emoart}
            </td>
            {models.map((_, idx) => renderCell(artwork, idx))}
          </tr>
          {expandedArtwork === artwork.id && renderExpandedRow(artwork)}
        </tbody>
      )),
    ];

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3 style={{ color: 'var(--accent-color)', fontWeight: 700 }}>
        The Full Picture
      </h3>

      <p style={{ color: 'var(--text-color)' }}>
        Every cell is one judgment. <span style={{ color: CALM_COLOR, fontWeight: 700 }}>Teal</span> = calm. <span style={{ color: '#8B7355', fontWeight: 700 }}>Sand</span> = not calm. Click a cell to reveal the actual label. Click an artwork name to see more.
      </p>

      {/* Prompt Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', margin: '1rem 0 0.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => { setActivePrompt('p1'); setSelectedCell(null); }}
          style={{
            padding: '0.4rem 1.25rem',
            backgroundColor: activePrompt === 'p1' ? 'var(--text-color)' : 'transparent',
            color: activePrompt === 'p1' ? 'var(--bg-color)' : 'var(--text-color)',
            border: '1.5px solid var(--text-color)',
            borderRadius: '4px 0 0 4px',
            cursor: 'pointer',
            fontWeight: activePrompt === 'p1' ? 700 : 400,
          }}
        >
          Prompt 1
        </button>
        <button
          onClick={() => { setActivePrompt('p2'); setSelectedCell(null); }}
          style={{
            padding: '0.4rem 1.25rem',
            backgroundColor: activePrompt === 'p2' ? 'var(--text-color)' : 'transparent',
            color: activePrompt === 'p2' ? 'var(--bg-color)' : 'var(--text-color)',
            border: '1.5px solid var(--text-color)',
            borderLeft: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer',
            fontWeight: activePrompt === 'p2' ? 700 : 400,
          }}
        >
          Prompt 2
        </button>
        <span style={{ color: 'var(--muted-text)', fontSize: '0.8rem', marginLeft: '0.75rem' }}>
          {activePrompt === 'p1' ? 'Simple label request' : '"Don\'t default to calm" + explain — no Haiku data'}
        </span>
      </div>

      {/* Calm counter */}
      <div style={{ fontSize: '0.85rem', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
        <span style={{
          display: 'inline-block',
          width: '11px',
          height: '11px',
          backgroundColor: CALM_COLOR,
          borderRadius: '2px',
          marginRight: '4px',
          verticalAlign: 'middle',
        }} />
        Calm cells: <strong style={{ color: '#C96E58' }}>{calmCount}</strong> / {calmTotal}
        {' '}({((calmCount / calmTotal) * 100).toFixed(1)}%)
      </div>

      {/* Grid */}
      <div className="overflow-x-auto" style={{ marginBottom: '0.75rem' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{
                padding: '4px 6px',
                textAlign: 'left',
                fontSize: '0.7rem',
                color: 'var(--text-color)',
                backgroundColor: 'var(--bg-color)',
                borderBottom: '2px solid var(--text-color)',
                width: '130px',
              }}>
                Artwork
              </th>
              <th style={{
                padding: '4px 6px',
                textAlign: 'center',
                fontSize: '0.7rem',
                color: 'var(--text-color)',
                backgroundColor: 'var(--bg-color)',
                borderBottom: '2px solid var(--text-color)',
                width: '80px',
              }}>
                EmoArt
              </th>
              {models.map(model => (
                <th
                  key={model}
                  style={{
                    padding: '4px 2px',
                    textAlign: 'center',
                    fontSize: '0.65rem',
                    color: 'var(--text-color)',
                    backgroundColor: 'var(--bg-color)',
                    borderBottom: '2px solid var(--text-color)',
                    fontWeight: 700,
                  }}
                >
                  {model}
                </th>
              ))}
            </tr>
          </thead>
          {renderGroup('Eastern Art', easternArtworks, '#5D866C')}
          {renderGroup('Western Art', westernArtworks, '#C96E58')}
        </table>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-color)', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '11px', height: '11px', backgroundColor: CALM_COLOR, borderRadius: '2px' }} />
          Calm
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ display: 'inline-block', width: '11px', height: '11px', backgroundColor: NOT_CALM_COLOR, borderRadius: '2px' }} />
          Not calm (click to reveal)
        </span>
      </div>

      <p style={{ color: 'var(--text-color)' }}>
        The pattern is immediate. Toggle to Prompt 2 and watch: GPT-4o's calm cells vanish entirely — from four to zero. Sonnet's labels don't change at all.
      </p>
    </div>
  );
};