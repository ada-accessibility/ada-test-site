export default function NewsletterSignup() {
  return (
    <section className="newsletter" aria-label="Newsletter Signup">
      <h2>Stay in the loop</h2>

      {/* Tier 1 violation: icon-only link with no accessible name (axe: link-name) */}
      <a href="#faq" className="faq-expand" aria-label="Learn more">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16l-6-6h12z" />
        </svg>
      </a>

      {/* Tier 2 violation: invalid autocomplete token — should be "name", not "fullname" (axe: autocomplete-valid) */}
      <input type="text" className="full-name-input" placeholder="Full name" autoComplete="fullname" />

      {/* Tier 2 violation: custom checkbox missing required aria-checked (axe: aria-required-attr) */}
      <div role="checkbox" aria-checked="false" className="consent-toggle" tabIndex={0}>
        I agree to receive emails
      </div>

      {/* Tier 2 violation: iframe with no title (axe: frame-title) */}
      <iframe className="promo-video" src="https://example.com/promo" title="Promo video" />
    </section>
  )
}
