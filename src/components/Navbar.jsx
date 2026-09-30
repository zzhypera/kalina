import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/community', 'Community'],
  ['/heritage', 'Heritage'],
  ['/language', 'Language & Knowledge'],
  ['/today', 'Today'],
  ['/digital-heritage', 'Digital Heritage'],
  ['/sources', 'Sources']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span className="brand-mark">K</span>
        <span>Kalinga<span className="brand-accent">.</span></span>
      </Link>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}