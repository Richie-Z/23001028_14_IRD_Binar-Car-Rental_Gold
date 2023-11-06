import './styles.scss'

export default function OurService() {
  const serviceList: string[] = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam',
    'Sewa Mobil Lepas Kunci di Bali 24 Jam',
    'Sewa Mobil Jangka Panjang Bulanan',
    'Gratis Antar - Jemput Mobil di Bandara',
    'Layanan Airport Transfer / Drop In Out'
  ]

  return (
    <section id="our-services">
      <div className="left">
        <svg id="green-circle" width="133" height="133" viewBox="0 0 133 133" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="66.5" cy="66.5" r="66.5" fill="#92D094" />
        </svg>
        <svg id="red-circle" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="12.5" fill="#FA2C5A" />
        </svg>
        <img src="/images/happy-girl.png" alt="" />
        <svg id="yellow-circle" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#F9CC00" />
        </svg>
      </div>
      <div className="right">
        <div className="title-bx">
          <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
        </div>
        <div className="service-list">
          {serviceList.map((val, index) => (
            <p key={index}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                  <path d="M17.3333 8L9.99996 15.3333L6.66663 12" stroke="#0D28A6" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </span>
              {val}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
