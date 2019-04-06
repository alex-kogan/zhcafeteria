import React from 'react';
import './TotalPrice.css'

const TotalPrice = ({totalPrice, submitPrice, resetPrice}) => {
  return (
    <div>
      <h1> {totalPrice} CHF </h1>
      <div>
        <p className="priceButton f4 dim br-pill ph3 pv2 mb2 white bg-green"
           onClick={submitPrice}
        >Submit</p>
      </div>
      <div className="pt4">
        <p className="priceButton f4 dim br-pill ph3 pv2 mb2 white bg-dark-red"
          onClick={resetPrice}
        >Clear</p>
      </div>
    </div>
  )
}

export default TotalPrice;