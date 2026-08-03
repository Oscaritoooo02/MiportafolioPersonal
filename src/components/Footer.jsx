import '../styles/footer.css'

const socials = [
  { icon: '📸', href: 'https://www.instagram.com/oscarjaviersosa/', label: 'Instagram' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-name">Oscar Agurcia</p>

        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        
      </div>
    </footer>
  )
}

export default Footer
