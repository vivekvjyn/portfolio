import { useRef, useEffect } from 'react';

const sortOptions = [
  { value: 'a-z', label: 'A → Z' },
  { value: 'z-a', label: 'Z → A' },
];

export default function SortDropdown({ sort, setSort, isOpen, setIsOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="sort-dropdown" ref={ref}>
      <button className="sort-btn" onClick={() => setIsOpen(!isOpen)}>
        {sortOptions.find((o) => o.value === sort).label}
      </button>
      {isOpen && (
        <div className="sort-menu">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`sort-option ${sort === option.value ? 'active' : ''}`}
              onClick={() => { setSort(option.value); setIsOpen(false); }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
