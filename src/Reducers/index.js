import {appConstants} from '../Constants.js'

import {combineReducers} from 'redux'

import {appRoute} from './appRoute.js'
import {priceMenu} from './priceMenu.js'
import {signInStatus} from './signInStatus.js'
import {rememberMeStatus} from './rememberMeStatus.js'
import {userData} from './userData.js'
import {adminData} from './admin.js'

const appReducer = combineReducers ({appRoute, priceMenu, signInStatus, userData, rememberMeStatus, adminData});

export const rootReducer = (state, action) => {
  if (action.type === appConstants.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
}