import { useNavigate } from 'react-router-dom';
import './styles.scss'
import Button from '@/common/components/Button';
import { CarType } from '../..';
import React from 'react';
import formatRupiah from '@/common/utils/formatRupiah';

export const CarCard: React.FC<{ car: CarType }> = ({ car }) => {
  const navigate = useNavigate()
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={car.image} alt="" />
      </div>
      <p className="item-title">{car.name}</p>
      <p className="item-price">{formatRupiah(car.price)}</p>
      <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. </p>
      <Button title="Pilih Mobil" onClick={() => navigate(`/detail/${car.id}`)} />
    </div>
  )
}
