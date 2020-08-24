//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Assets
import cartIcon from 'assets/shopping-cart-solid.svg';
//Router
import router from 'router';
//Style
import './AppHeader.scss';

const AppHeader = ({ total }) => {
	return (
		<header className="header">
			<NavLink
				exact
				to={router.menu}
				className="header__link"
				activeClassName="header__link-active"
			>
				Menu
			</NavLink>

			<NavLink
				to={router.cart}
				className="header__link"
				activeClassName="header__link-active"
			>
				<img className="header__cart" src={cartIcon} alt="cart"></img>
				Total {total} $
			</NavLink>
		</header>
	);
};

export default AppHeader;
