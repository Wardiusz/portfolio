export default function NavDots({ slides, activeIndex, onSelect, visible }) {
  return (
    <nav className={`nav-dots fadeIn${visible ? ' visible' : ''}`}>
      {slides.map((slide, i) => (
        <div
          key={slide}
          className={`nav-dot-item${activeIndex === i ? ' active' : ''}`}
          onClick={() => onSelect(i)}
        >
          <div className={`nav-dot${activeIndex === i ? ' active' : ''}`} />
          <span className="nav-label">{slide}</span>
        </div>
      ))}
    </nav>
  );
}
