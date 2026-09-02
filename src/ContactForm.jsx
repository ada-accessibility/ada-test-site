export default function ContactForm() {
  return (
    <form className="contact-form" aria-label="Contact form">
      <h2>Get in touch</h2>
      {/* violation: input with no associated label (WCAG 1.3.1 / 4.1.2) */}
      <input type="email" placeholder="Work email" aria-label="Work email" />
      <input type="text" placeholder="Message" />
      {/* violation: select with no accessible name (WCAG 4.1.2, axe: select-name) — not a Tier 1 rule */}
      <select>
        <option value="">Country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </select>
      <button type="submit">Send</button>
      {/* violation: low-contrast text, light gray on white (WCAG 1.4.3) */}
      <p className="fine-print">
        We'll only use your email to reply to this message.
      </p>
    </form>
  )
}
