import socials from '../data/socials';

export default function SocialsBar() {
  return (
    <aside className="sidebar">
      <nav className="social-links">
        {socials.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={name}
          >
            <img src={icon} alt={name} width="24" height="24" />
          </a>
        ))}
      </nav>
    </aside>
  );
}
