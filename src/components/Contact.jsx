import '../styles/contact.css'
import Reveal from './Reveal.jsx'

const contactInfo = [
  {
    icon: '✉️',
    label: 'Correo',
    value: 'oscaragurcia37@gmail.com',
    href: 'https://mail.google.com/mail/u/0/',
  },
  {
    icon: '💼',
    label: 'Instagram',
    value: '@oscarjaviersosa',
    href: 'https://www.instagram.com/oscarjaviersosa/',
  },
  {
    icon: '📱',
    label: 'Teléfono',
    value: '+504 9925-2654',
    href: 'tel:+50400000000',
  },
]

function Contact() {
  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Estas son las formas en las que puedes encontrarme.
          </p>
        </Reveal>

        <div className="contact-grid">
          {contactInfo.map((item) => (
            <Reveal key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
