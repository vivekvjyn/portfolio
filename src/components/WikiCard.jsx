import { useState, useEffect } from 'react';

export default function WikiCard({ searchTerm }) {
  const [wikiData, setWikiData] = useState({ text: '', image: '', loading: true });

  useEffect(() => {
    if (!searchTerm) {
      setWikiData({ text: '', image: '', loading: false });
      return;
    }

    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&exintro=1&explaintext=1&exchars=250&piprop=original&titles=${encodeURIComponent(searchTerm)}&origin=*`;

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'VivekVijayanPortfolio/1.0 (https://vivekvjyn.xyz; contact@vivekvjyn.xyz)',
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        const pages = data.query?.pages;
        if (pages) {
          const page = pages[Object.keys(pages)[0]];
          setWikiData({
            text: page.extract || 'No entry found.',
            image: page.original?.source || '',
            loading: false,
          });
        } else {
          setWikiData({ text: 'Error fetching Wikipedia info.', image: '', loading: false });
        }
      })
      .catch(() => {
        setWikiData({ text: 'Could not load background info.', image: '', loading: false });
      });
  }, [searchTerm]);

  if (!searchTerm) return null;

  return (
    <div className="wiki-card">
      <div className="wiki-badge">{searchTerm.toUpperCase()}</div>
      {wikiData.loading ? (
        <p className="wiki-loading">Loading facts...</p>
      ) : (
        <>
          {wikiData.image && (
            <img src={wikiData.image} alt={searchTerm} className="wiki-image" />
          )}
          <p>{wikiData.text}</p>
        </>
      )}
    </div>
  );
}
