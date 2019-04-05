import React from 'react';
import './PriceCard.css'

const PriceCard = ({value, color, onPlusClick, onMinusClick}) => {
  return (
    <div className='pt3'>
      <div className='br-pill ba bw1 flex justify-around center ph2 pv3 priceCard'>
        <div className={`f5 b br-100 ba bw2 vertical-align circle ${color}`}
          onClick = {() => onMinusClick(value)}>
          -
        </div>
        <div className='f5 vertical-align b price'>
          {value} CHF
        </div>      
        <div className={`f5 b br-100 ba bw2 vertical-align circle ${color}`}
          onClick = {() => onPlusClick(value)}>
          +
        </div>
      </div>
    </div>
  )
}

export default PriceCard;