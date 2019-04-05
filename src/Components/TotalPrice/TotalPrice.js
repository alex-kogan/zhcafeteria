import React from 'react';

const TotalPrice = ({totalPrice, submitPrice, resetPrice}) => {
  return (
    <div>
      <h1> {totalPrice} CHF </h1>
      <div>
        <a className="f4 link dim br-pill ph3 pv2 mb2 white bg-green" href="#0"
           onClick={submitPrice}
        >Submit</a>
      </div>
      <div className="pt4">
        <a className="f4 link dim br-pill ph3 pv2 mb2 white bg-dark-red" href="#0"
          onClick={resetPrice}
        >Clear</a>
      </div>
    </div>
  )
}

export default TotalPrice;