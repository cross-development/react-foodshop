//Core
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
//Router
import router from 'router';
//Assets
import cartIcon from 'assets/shopping-cart-solid.svg';
//Style
import styles from './AppHeader.module.css';

const AppHeader = ({ cartItems }) => {
	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	return (
		<header className={styles.header}>
			<NavLink
				exact
				to={router.home}
				className={styles.header__link}
				activeClassName={styles.header__link_active}
			>
				Menu
			</NavLink>

			<NavLink
				to={router.cart}
				className={styles.header__link}
				activeClassName={styles.header__link_active}
			>
				<img className={styles.header__cart} src={cartIcon} alt="cart"></img>
				Total {total} $
			</NavLink>
		</header>
	);
};

AppHeader.propTypes = {
	cartItems: PropTypes.array,
};

AppHeader.defaultProps = {
	cartItems: [],
};

const mapStateToProps = state => ({
	cartItems: state.menu.cartItems,
});

export default connect(mapStateToProps)(AppHeader);
