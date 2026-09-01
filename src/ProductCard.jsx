export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      {/* violation: image with no alt text (WCAG 1.1.1) */}
      <img src={image} alt="Jacket" />
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      {/* violation: link with no discernible purpose (WCAG 2.4.4) */}
      <a href="#" className="product-link" aria-label="Learn more">Click here</a>
    </div>
  )
}
