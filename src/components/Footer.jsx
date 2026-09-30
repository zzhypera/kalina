import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">Digital Kalinga</p>
        <h3>Kalinga · Cordillera</h3>
        <p>A student digital heritage prototype documenting culture with care, context, and respect.</p>
      </div>
      <div className="footer-links">
        <Link to="/sources">Sources & Acknowledgments</Link>
        <span>© 2026–2027</span>
      </div>
    </footer>
  )
}