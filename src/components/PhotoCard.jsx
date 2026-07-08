import { useState } from 'react';

export default function PhotoCard({ imageSrc, height }) {
  const [rotation] = useState(() => {
    const min = -8;
    const max = 8;
    return Math.random() * (max - min) + min;
  });

  return (
    <div className="photo-card" style={{ rotate: `${rotation}deg`, minHeight: `${height}rem` }}>
      <img
        src={imageSrc}
        alt=""
        className="photo"
        style={{ width: '100%', height: `${height}rem` }}
      />
    </div>
  );
}
