import React from 'react';
import './NavigationLink.css'

const NavigationLink = ({color='light-gray', address, onLinkClick}) => {
  return (
        <p className={`link dim ${color} f6 f5-l dib mr3 mr4-l`}
        title={address}
        onClick={() => {onLinkClick(address)}}>
          {address}
        </p>
  )
}

export default NavigationLink;