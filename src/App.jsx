import Header from './Header.jsx'
import ProductCard from './ProductCard.jsx'
import ContactForm from './ContactForm.jsx'
import NewsletterSignup from './NewsletterSignup.jsx'

const PRODUCTS = [
  { name: 'Trail Jacket', price: '$129', image: '/jacket.svg' },
  { name: 'Hiking Boots', price: '$89', image: '/boots.svg' },
  { name: 'Camp Mug', price: '$18', image: '/mug.svg' },
]

export default function App() {
  return (
    <div className="page">
      <Header />

      <h1>New Arrivals</h1>
      {/* violation: heading level skipped, h1 straight to h3 (WCAG 1.3.1) */}
      <h2 className="section-label">Outdoor gear for every trail</h2>

      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>

      {/* violation: page content not contained by a landmark (axe: region, landmark-one-main) */}
      <ContactForm />
      <NewsletterSignup />
    </div>
  )
}
