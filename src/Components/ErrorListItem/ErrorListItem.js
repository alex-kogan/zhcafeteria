import React from 'react';

const ErrorListItem = ({errorText}) => {
	return (
	  <dl className="f6 lh-title mv2 tl">
			<dt className="dib b dark-red">{errorText}</dt>
		</dl>
		)
}

export default ErrorListItem;