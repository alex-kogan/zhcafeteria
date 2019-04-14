import React from 'react';
import NavigationLink from '../../Containers/NavigationLink.js';

const Navigation = ({appRoute, userData, onSignOutClick}) => {
  
  const adminSection = (isAdmin) => {
    if (isAdmin) {
      return <NavigationLink address='Admin'/> 
    }
    return
  }

  const navBody = (appRoute) => {
    switch (appRoute){
      case 'Sign In':
        return <NavigationLink address='Register' />
      case 'Register':
        return <NavigationLink address='Sign In' />
      default:
        return <div className="dt-l w-100">
                  <h3 className="db dtc-l v-mid near-white w-100 w-25-l tc tl-l mb2 mb0-l">
                    Hello {userData.firstName}
                  </h3>
                  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <NavigationLink address='Home'/>
                    <NavigationLink address='My Stats'/>
                    <NavigationLink address='About'/>
                    {adminSection(userData.admin)}
                    <p className='link dim light-gray f6 f5-l dib'
                      title='Sing out'
                      onClick={() => onSignOutClick()}
                    >
                      Sign out
                    </p>
                  </div>
        </div>
    }
  }

  return (
    <nav className="bg-black-90 db dt-l w-100 border-box pa2 ph5-l shadow-5 mb4">
      {navBody(appRoute)}
    </nav>
  )
}

export default Navigation;