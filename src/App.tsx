import React from 'react';
import { ScrollProvider } from './components/ScrollProvider';
import { ProgressBar } from './components/ProgressBar';
import { Controls } from './components/Controls';
import { TableOfContents } from './components/TableOfContents';
import { HeroFrame } from './components/HeroFrame';
import { DatasetFrame } from './components/DatasetFrame';
import { ColorEmotionFrame } from './components/ColorEmotionFrame';
import { CulturalBiasFrame } from './components/CulturalBiasFrame';
import { CrossModelFrame } from './components/CrossModelFrame';
import { TheoreticalNoteFrame } from './components/TheoreticalNoteFrame';
import { ConclusionFrame } from './components/ConclusionFrame';

export default function App() {
  return (
    <ScrollProvider>
      <ProgressBar />
      <Controls />
      <TableOfContents />
      <div className="w-full">
        <HeroFrame />
        <DatasetFrame />
        <ColorEmotionFrame />
        <CulturalBiasFrame />
        <CrossModelFrame />
        <TheoreticalNoteFrame />
        <ConclusionFrame />
      </div>
    </ScrollProvider>
  );
}