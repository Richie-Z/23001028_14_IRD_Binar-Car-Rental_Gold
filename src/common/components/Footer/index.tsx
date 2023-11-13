import './styles.scss'

export default function Footer() {
  return (
    <footer>
      <div className="information">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="link">
        <a href="#our-services">Our Service</a>
        <a href="#why-us">Why Us</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="connect">
        <p>Connect with us</p>
        <div className="icons">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" />
            <path
              d="M21 7.66663H18.5C17.395 7.66663 16.3352 8.10561 15.5538 8.88701C14.7724 9.66842 14.3334 10.7282 14.3334 11.8333V14.3333H11.8334V17.6666H14.3334V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9108 11.244C18.0671 11.0878 18.279 11 18.5 11H21V7.66663Z"
              stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6" />
            <path d="M20.1667 7.66675H11.8334C9.53223 7.66675 7.66675 9.53223 7.66675 11.8334V20.1667C7.66675 22.4679 9.53223 24.3334 11.8334 24.3334H20.1667C22.4679 24.3334 24.3334 22.4679 24.3334 20.1667V11.8334C24.3334 9.53223 22.4679 7.66675 20.1667 7.66675Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.3333 15.475C19.4361 16.1685 19.3176 16.8769 18.9947 17.4992C18.6718 18.1215 18.1609 18.6262 17.5346 18.9414C16.9083 19.2566 16.1986 19.3663 15.5064 19.2549C14.8142 19.1436 14.1747 18.8167 13.679 18.321C13.1832 17.8252 12.8564 17.1857 12.745 16.4935C12.6336 15.8013 12.7433 15.0916 13.0585 14.4653C13.3737 13.8391 13.8784 13.3281 14.5007 13.0052C15.1231 12.6823 15.8314 12.5638 16.5249 12.6667C17.2324 12.7716 17.8873 13.1012 18.393 13.6069C18.8987 14.1126 19.2283 14.7676 19.3333 15.475Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5833 11.4167H20.5916" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6" />
            <path d="M25.1666 8.50008C24.3686 9.06298 23.485 9.4935 22.5499 9.77508C22.048 9.198 21.381 8.78899 20.6391 8.60335C19.8972 8.41771 19.1162 8.46441 18.4017 8.73712C17.6871 9.00984 17.0736 9.49541 16.6441 10.1282C16.2145 10.7609 15.9897 11.5104 15.9999 12.2751V13.1084C14.5354 13.1464 13.0843 12.8216 11.7758 12.163C10.4672 11.5043 9.34185 10.5323 8.49992 9.33341C8.49992 9.33341 5.16659 16.8334 12.6666 20.1667C10.9504 21.3317 8.90588 21.9159 6.83325 21.8334C14.3333 26.0001 23.4999 21.8334 23.4999 12.2501C23.4991 12.018 23.4768 11.7864 23.4333 11.5584C24.2838 10.7197 24.8839 9.66067 25.1666 8.50008V8.50008Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6" />
            <path d="M9.33341 9.33325H22.6667C23.5834 9.33325 24.3334 10.0833 24.3334 10.9999V20.9999C24.3334 21.9166 23.5834 22.6666 22.6667 22.6666H9.33341C8.41675 22.6666 7.66675 21.9166 7.66675 20.9999V10.9999C7.66675 10.0833 8.41675 9.33325 9.33341 9.33325Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.3334 11L16.0001 16.8333L7.66675 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0D28A6" />
            <path d="M19.3333 15.1667V11.8334M23.5 7.66675H8.5V21.0001H12.6667V24.3334L16 21.0001H20.1667L23.5 17.6667V7.66675ZM15.1667 15.1667V11.8334V15.1667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright Binar 2022</p>
        <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="34" />
        </svg>
      </div>
    </footer>
  )
}

