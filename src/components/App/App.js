//Core
import React from 'react';
import { MainPage, CartPage } from 'pages';
import { Route, Switch } from 'react-router-dom';
//Components
import AppHeader from '../AppHeader';
//Router
import router from 'router';
//Style
import './App.scss';

const App = () => {
	return (
		<div className="app">
			<AppHeader total={50} />

			<Switch>
				<Route path={router.menu} exact component={MainPage} />
				<Route path={router.cart} component={CartPage} />
				<Route exact component={MainPage} />
			</Switch>
		</div>
	);
};

export default App;
