import React from 'react'

const AdminControls = ({}) => {
	return <div className='center w-50 pb3'>
    <div className="mb3" id="userSearch">
      <input 
    		type="text"
    		id="user name search"
    		name="user name search" 
    		className="f6 f5-l input-reset bn fl black-80 bg-light-gray pa3 lh-solid br2-ns br--left-ns w-70-l w-100"
    		placeholder='Search name'
      />
    </div>
	  <p className="f6 link dim br3 ba ph3 pv2 ma2 dib dark-gray">Reset values</p>
	  <p className="f6 link dim br3 ba ph3 pv2 ma2 dib mid-gray">Exopt list</p>
	</div>
}

export default AdminControls