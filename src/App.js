import { useState } from 'react';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import SocialsBar from './components/SocialsBar';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <>
      <ParticleBackground />
      <div className="journal-container">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'timeline' && <Timeline />}
        {activeTab === 'portfolio' && <Portfolio />}
        <SocialsBar />
      </div>
    </>
  );
}
