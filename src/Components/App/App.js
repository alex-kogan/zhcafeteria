import React from 'react';

import Navigation from '../../Containers/Navigation';
import PriceMenu from '../PriceMenu/PriceMenu';
import TotalPrice from '../../Containers/TotalPrice';
import SignInPage from '../../Containers/SignInPage';
import RegisterPage from '../../Containers/RegisterPage';
import AdminPage from '../../Containers/AdminPage';

import SubmitOverlay from './SubmitOverlay'

import './App.css';

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
	      	<SubmitOverlay overlayStatus={overlayStatus}/>
		      <PriceMenu/>
		      <TotalPrice/>
	      </div>;
	    default:
	      return <div>
	      	<img className='w-25' src='./const.jpg' alt='under construction'/>
	      </div>;
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
