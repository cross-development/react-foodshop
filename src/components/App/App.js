//Core
import React from 'react';
import { MainPage, CartPage, ItemPage } from 'pages';
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
				<Route path={router.home} exact component={MainPage} />
				<Route path={router.cart} component={CartPage} />
				<Route path={router.menuItem} component={ItemPage} />
				<Route exact component={MainPage} />
			</Switch>
		</div>
	);
};

export default App;
