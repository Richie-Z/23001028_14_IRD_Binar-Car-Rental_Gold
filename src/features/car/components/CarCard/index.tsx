import './styles.scss'

const CarCard = () => {
  return (
    <div className="item-container">
      <div className="item-img">
        <img src="/images/car-2.png" alt="" />
      </div>
      <p className="item-title">Innova</p>
      <p className="item-price">Rp 500.000 / hari</p>
      <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. </p>
      <button className="btn">Pilih Mobil</button>
    </div>
  )
}

export default CarCard;
