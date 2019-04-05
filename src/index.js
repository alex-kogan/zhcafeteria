import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import 'tachyons'; 

import './index.css';
import App from './Containers/AppRouter.js';
import {rootReducer} from './Reducers';

let store;

if (process.env.REACT_APP_STAGE !== 'production'){
	const logger = createLogger();
	store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
}
else {
	store = createStore(rootReducer, applyMiddleware(thunkMiddleware));	
}

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>
				,document.getElementById('root'));

serviceWorker.unregister();
