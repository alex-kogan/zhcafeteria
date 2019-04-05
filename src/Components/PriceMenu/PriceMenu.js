import React from 'react';

import PriceCard from '../../Containers/PriceChanges.js';

const PriceMenu = () => {
  return (
		<div>
	    <PriceCard value={5} color={'dark-blue'}/>
	    <PriceCard value={1} color={'blue'}/>
	    <PriceCard value={0.5} color={'light-blue'}/>
	    <PriceCard value={0.1} color={'lightest-blue'}/>
	  </div>
  )
}

export default PriceMenu;