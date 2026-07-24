import socials from '../data/socials';

export default function SocialsBar() {
  return (
    <aside className="sidebar">
      <nav className="social-links">
        {socials.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-prefix">&gt;</span> {name.toLowerCase()}
          </a>
        ))}
      </nav>
    </aside>
  );
}
