export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      {/* Tier 1 violation: image with no alt text (axe: image-alt) */}
      <img src={image} />
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      {/* Tier 1 violation: icon-only link, no accessible name (axe: link-name) */}
      <a href="#" className="product-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>
  )
}
