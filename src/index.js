import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';
import Home from './client-redux/Home';
import * as serviceWorker from './serviceWorker';

const render = ()=>{
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Route path='/' component={Home} />
			</Router>
		</Provider>, 
		document.getElementById('root')
	);
}
render()
store.subscribe(render)
serviceWorker.unregister();
