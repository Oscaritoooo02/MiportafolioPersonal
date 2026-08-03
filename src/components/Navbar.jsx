import { useState } from 'react'
import '../styles/navbar.css'

// Enlaces del menú. Cada "to" corresponde al id de una sección en App.jsx
const links = [
  { label: 'Inicio', to: '#inicio' },
  { label: 'Sobre mí', to: '#sobre-mi' },
  { label: 'Mi historia', to: '#mi-historia' },
  { label: 'Datos curiosos', to: '#datos-curiosos' },
  { label: 'Galería', to: '#galeria' },
  { label: 'Contacto', to: '#contacto' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          Mi<span>Espacio</span>
        </a>

        {/* Enlaces para pantallas grandes */}
        <nav className="navbar-links">
          {links.map((link) => (
            <a key={link.to} href={link.to}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.to} href={link.to} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
