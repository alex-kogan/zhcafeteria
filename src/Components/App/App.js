import React from 'react';

import Navigation from '../../Containers/Navigation';
import PriceMenu from '../PriceMenu/PriceMenu';
import TotalPrice from '../../Containers/TotalPrice';
import SignInPage from '../../Containers/SignInPage';
import RegisterPage from '../../Containers/RegisterPage';

import './App.css';

const App = ({appRoute}) => {
  
  const appBody = (appRoute) => {
	  switch (appRoute) {
	    case 'Sign In':
	      return <SignInPage/>;
	    case 'Register':
	  	  return <RegisterPage/>;
	    case 'Home':
	      return <div>
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
