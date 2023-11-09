import './syles.scss'

export const CarInformationCard = () => {
  return (
    <div className="detail-right">
      <div className="detail-img">
        <img src="/images/car-2.png" alt="" />
      </div>
      <p className="detail-title">Innova</p>

      <div className="detail-person">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5 10.5004V9.50043C11.4997 9.05729 11.3522 8.62682 11.0807 8.27659C10.8092 7.92636 10.4291 7.67621 10 7.56543"
            stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H2.5C1.96957 7.5 1.46086 7.71071 1.08579 8.08579C0.710714 8.46086 0.5 8.96957 0.5 9.5V10.5"
            stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M8 1.56543C8.43021 1.67558 8.81152 1.92578 9.08382 2.27658C9.35612 2.62739 9.50392 3.05884 9.50392 3.50293C9.50392 3.94701 9.35612 4.37847 9.08382 4.72927C8.81152 5.08008 8.43021 5.33028 8 5.44043"
            stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z"
            stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>6-8 Orang</span>
      </div>
      <div className="detail-price">
        <p className="detail-title">Total</p>
        <p className="detail-title">Rp 500.000</p>
      </div>
    </div>
  )
}

