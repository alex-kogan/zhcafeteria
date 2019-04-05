import React from 'react';

import NavigationLink from '../../Containers/NavigationLink.js';
import ErrorListItem from '../ErrorListItem/ErrorListItem.js'

import './SignInPage.css'

const SignInPage = ({signInErrors,
										onSignInClick, onRememberMe}) => {
  let signInData = {
    email: '',
    password: ''
  }
  return (
    <div id='signIn'>
  			<div className="w-90 dark-gray mw6 center relative cover bg-top mt2 shadow-5">
		      <div id="overlay" className="absolute absolute--fill bg-white o-70 z-unset"></div>
			      <div className="relative pa4 pa5-m">
			        <h1 className="tracked ma0 mb4 pv3">Sign In</h1>
			        <div>
			          <div className="mb3" id="emailInput">
			            <label className="db f6 black-80 ttu ph2 mb2">E-Mail</label>
			            <input 
		            		type="text"
		            		id="email-address"
		            		name="email" 
		            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-dark-gray hover-bg-mid-gray hover-light-gray outline-0 bn br-pill"
			            />
			          </div>
			          <div className="mb4" id="passwordInput">
			            <label className="db f6 black-80 ttu ph2 mb2">Password</label>
			            <input 
				            type="password"
				            id="password"
				            name="password"
				            className="input-reset db w-100 mw-100 white b pv2 ph3 bg-dark-gray hover-bg-mid-gray hover-light-gray outline-0 bn br-pill"/>
			          </div>
			          <div id="inputButton">
			            <input className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-red hover-bg-red bn br-pill mb2"
		                type="submit"
			              value="Sign in"
				            onClick={ () => {
				            	signInData.email = document.getElementById('email-address').value;
			                signInData.password = document.getElementById('password').value;
			                document.getElementById('password').value='';
				            	onSignInClick(signInData)
				            	}
				            }
			            />
			          </div>
			          <label className="pa0 ma0 lh-copy f5 pointer">
				          <input type="checkbox"
			              id='rememberMeBox'
			              onChange={onRememberMe}
			              /> Remember me
	              </label>
			        </div>
			        <div className="tc b f6 mt4 o-70 pa2 i">
			          New Member? <NavigationLink className='Register' address='Register' color='dark-gray'/>
			        </div>
		          <div id='signInErrors' className='pa2 pa3-ns'>
			          {
		          		signInErrors.map( (errorItem,index) => {
			          		return <ErrorListItem errorText={errorItem} key={index}/>
			          	})
		          	}	
		          </div>
			      </div>
			    </div>
    </div>
  );
}

export default SignInPage;