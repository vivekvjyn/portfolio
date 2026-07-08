import { useState, useEffect } from 'react';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import SocialsBar from './components/SocialsBar';
import Header from './components/Header';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="journal-container">
      <button className="dark-toggle" onClick={() => setDark(!dark)} title="Toggle dark mode" />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'timeline' && <Timeline />}
      {activeTab === 'portfolio' && <Portfolio />}
      <SocialsBar />
    </div>
  );
}
