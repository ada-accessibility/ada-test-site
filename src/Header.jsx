export default function Header() {
  return (
    <header className="header">
      <span className="logo">Acme Outfitters</span>
      {/* violation: icon-only button, no accessible name (WCAG 4.1.2) */}
      <button className="menu-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
        </svg>
      </button>
    </header>
  )
}
