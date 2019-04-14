import React from 'react';

import './RegisterPage.css'
import ErrorListItem from '../ErrorListItem/ErrorListItem.js'

const 	RegisterPage = ({signInErrors,
												onRegisterClick}) => {
  let registerData = {
    name: '',
    email: '',
    password: ''
  }
  return (
    <div id='register'>
  			<div className="w-90 dark-gray mw6 center relative cover bg-top mt2 shadow-5">
		      <div id="overlay" className="absolute absolute--fill bg-white o-70 z-unset"></div>
			      <div className="relative pa4 pa5-m">
			        <h1 className="tracked ma0 mb4 pv3">Register</h1>
			        <div>
			          <div className="mb3" id="registerEmail">
			            <label className="db f6 black-80 ttu ph2 mb2">Email</label>
			            <input 
		            		type="text"
		            		id="email-address"
		            		name="email" 
		            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-dark-gray hover-bg-mid-gray hover-light-gray outline-0 bn br-pill"
			            />
			          </div>
			          <div className="mb3" id="registerPassword">
			            <label className="db f6 black-80 ttu ph2 mb2">Password</label>
			            <input 
				            type="password"
				            id="password"
				            name="password"
				            placeholder="Between 6 and 10 charchters, 0-9, a-z, A-Z"
				            className="input-reset db w-100 mw-100 white b pv2 ph3 bg-dark-gray hover-bg-mid-gray hover-light-gray outline-0 bn br-pill"/>
			          </div>
			          <div className="mb4" id="registerPasswordSecond">
			            <label className="db f6 black-80 ttu ph2 mb2">Re-type password</label>
			            <input 
				            type="password"
				            id="passwordSecond"
				            name="passwordSecond"
				            className="input-reset db w-100 mw-100 white b pv2 ph3 bg-dark-gray hover-bg-mid-gray hover-light-gray outline-0 bn br-pill"/>
			          </div>			          
			          <div id="registerButton" className='pb4'>
			            <input className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-red hover-bg-red bn br-pill mb2"
		                type="submit"
			              value="Register"
			              onClick = { () => {
				            	registerData.email = document.getElementById('email-address').value;
			                registerData.password = document.getElementById('password').value;
			                registerData.passwordSecond = document.getElementById('passwordSecond').value;
			              	onRegisterClick(registerData)
			              	}
			              }
			            />
			          </div>
			          <div id='registerErrors' className='pa2 pa3-ns'>
			          {
		          		signInErrors.map( (errorItem,index) => {
			          		return <ErrorListItem errorText={errorItem} key={index}/>
			          	})
		          	}	
			          </div>
			        </div>
			      </div>
			    </div>
    </div>
  );
}

export default 	RegisterPage;