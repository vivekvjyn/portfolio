export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="journal-header">
      <h1>Vivek Vijayan</h1>
      <nav className="nav-buttons">
        <button
          className={`nav-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button
          className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio
        </button>
        <a href="/resume.pdf" download className="nav-btn resume-btn">Resume</a>
      </nav>
    </header>
  );
}
