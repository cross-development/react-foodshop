//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//Assets
import cartIcon from 'assets/shopping-cart-solid.svg';
//Router
import router from 'router';
//Style
import './AppHeader.scss';

const AppHeader = ({ cartItems }) => {
	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	return (
		<header className="header">
			<NavLink
				exact
				to={router.home}
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

const mapStateToProps = state => ({
	cartItems: state.menu.cartItems,
});

export default connect(mapStateToProps)(AppHeader);
