export default function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Get in touch</h2>
      {/* Tier 1 violation: label isn't programmatically associated — no htmlFor/id match (axe: label) */}
      <label>Work email</label>
      <input type="email" className="work-email-input" />
      {/* Tier 2 violation: select with no accessible name (axe: select-name) */}
      <select className="topic-select">
        <option value="">Choose a topic</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
      </select>
      {/* Tier 2 violation: invalid ARIA attribute value — aria-invalid must be true/false/grammar/spelling, not "yes" (axe: aria-valid-attr-value) */}
      <input type="email" className="reply-email" placeholder="Reply-to email" aria-invalid="yes" />
      <button type="submit">Send</button>
      {/* Tier 1 violation: low-contrast text, light gray on white (axe: color-contrast) */}
      <p className="fine-print">
        We'll only use your email to reply to this message.
      </p>
    </form>
  )
}
