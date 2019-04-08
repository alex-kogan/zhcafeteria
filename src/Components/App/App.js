import React from 'react';

import Navigation from '../../Containers/Navigation';
import PriceMenu from '../PriceMenu/PriceMenu';
import TotalPrice from '../../Containers/TotalPrice';
import SignInPage from '../../Containers/SignInPage';
import RegisterPage from '../../Containers/RegisterPage';
import AdminPage from '../../Containers/AdminPage';

import './App.css';

const submitOverlay = (overlayStatus) => {
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
		return
}

const App = ({appRoute, overlayStatus,onLoad, onAdminLoad}) => {
  
  const appBody = (appRoute) => {
	  switch (appRoute) {
	    case 'Sign In':
	    	onLoad()
	      return <SignInPage/>;
	    case 'Register':
	  	  return <RegisterPage/>;
	    case 'Admin':
	    	onAdminLoad()
	  	  return <AdminPage/>;  
	    case 'Home':
	      return <div>
	      	{submitOverlay(overlayStatus)}
		      <PriceMenu/>
		      <TotalPrice/>
	      </div>;
	    default:
	      return <div></div>;
	  }
	}

  return (
    <div className="Main">
      <Navigation/>
      {appBody(appRoute)}
    </div>
  );
}

export default App;
