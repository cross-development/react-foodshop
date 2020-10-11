//Core
import React from 'react';
import { MainPage, CartPage, ItemPage } from 'pages';
import { Route, Switch } from 'react-router-dom';
//Components
import AppHeader from '../AppHeader';
//Router
import router from 'router';

const App = () => (
	<>
		<AppHeader />

		<Switch>
			<Route path={router.home} exact component={MainPage} />
			<Route path={router.cart} component={CartPage} />
			<Route path={router.menuItem} component={ItemPage} />
			<Route exact component={MainPage} />
		</Switch>
	</>
);

export default App;
