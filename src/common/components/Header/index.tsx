import React from 'react'
import Button from '@/common/components/Button'
import './styles.scss'

type HeaderProps = {
  includeHero?: boolean
}

const Header: React.FC<HeaderProps> = ({ includeHero = false }) => {
  return (
    <section id="hero">
      <nav className="header-nav">
        <div className="logo-bx">
          <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="34" />
          </svg>
        </div>
        <div className="quick-link">
          <a href="#our-services">Our Service</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>
      {includeHero && (
        <div className="hero-section">
          <div className="left">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              untuk sewa mobil selama 24 jam.
            </p>
            <Button title="Mulai Sewa Mobil" />
          </div>
          <div className="right">
            <img src="/images/mercedes-car.png" alt="Mercedes Car" />
            <svg width="704" height="243" viewBox="0 0 704 243" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60C0 26.8629 26.8629 0 60 0H704V243H0V60Z" />
            </svg>
          </div>
        </div>
      )}
    </section>
  )
}

export default Header;
