import { useNavigate } from 'react-router-dom';
import './styles.scss'
import Button from '@/common/components/Button';

export const CarCard = () => {
  const navigate = useNavigate()
  return (
    <div className="item-container">
      <div className="item-img">
        <img src="/images/car-2.png" alt="" />
      </div>
      <p className="item-title">Innova</p>
      <p className="item-price">Rp 500.000 / hari</p>
      <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. </p>
      <Button title="Pilih Mobil" onClick={() => navigate(`/detail/1`)} />
    </div>
  )
}
