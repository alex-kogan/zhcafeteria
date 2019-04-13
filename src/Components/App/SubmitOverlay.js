import React from 'react';

const submitOverlay = ({overlayStatus}) => {
	if (overlayStatus) {
		return (
			<div id="submitOverlay">
				<div className="f4">
					<img src='./check mark.png' alt='check mark'/>
					Submmitted Succesfuly!
				</div>
			</div>
			)
	}
	else
		return null
}

export default submitOverlay