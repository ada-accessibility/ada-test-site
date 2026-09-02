export default function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Get in touch</h2>
      {/* Tier 1 violation: input with no associated label (axe: label) */}
      <input type="email" placeholder="Work email" />
      {/* Tier 2 violation: select with no accessible name (axe: select-name) */}
      <select className="topic-select">
        <option value="">Choose a topic</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
      </select>
      {/* Tier 2 violation: invalid autocomplete token — should be "email", not "workemail" (axe: autocomplete-valid) */}
      <input type="email" className="reply-email" placeholder="Reply-to email" autoComplete="workemail" />
      <button type="submit">Send</button>
      {/* Tier 1 violation: low-contrast text, light gray on white (axe: color-contrast) */}
      <p className="fine-print">
        We'll only use your email to reply to this message.
      </p>
    </form>
  )
}
