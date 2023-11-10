import { useState, FC } from 'react'
import Button from '@/common/components/Button'
import './styles.scss'
import { Link, useNavigate } from 'react-router-dom'

type HeaderProps = {
  includeHero?: boolean
  includeBtn?: boolean
}

const Header: FC<HeaderProps> = ({ includeHero = false, includeBtn = true }) => {
  const navigate = useNavigate()
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const toggleNav = () => {
    document.body.classList.toggle('overlay')
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      {isNavOpen && (
        <div className="mobile-nav">
          <div className='title'>
            <h5>BCR</h5>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleNav}>
              <path d="M18 6L6 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='quick-link'>
            <a href="#our-services">Our Service</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      )}
      <section id="hero">
        <nav className="header-nav">
          <Link className="logo-bx" to="/">
            <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="34" />
            </svg>
          </Link>
          <div className="quick-link">
            <a href="#our-services">Our Service</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="hamburger" onClick={toggleNav}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12H21" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
              {includeBtn && (
                <Button title="Mulai Sewa Mobil" onClick={() => navigate('/search')} />
              )}
            </div>
            <div className="right">
              <img src="/images/mercedes-car.png" alt="Mercedes Car" />
              <svg viewBox="0 0 704 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 60C0 26.8629 26.8629 0 60 0H704V243H0V60Z" />
              </svg>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Header;
