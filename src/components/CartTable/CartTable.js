//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import menuActions from 'redux/menu/menuActions';
//Style
import styles from './CartTable.module.css';

const CartTable = ({ items = [], removeFromCart }) => (
	<>
		<div className={styles.cart__title}>Ваш заказ:</div>

		<div className={styles.cart__list}>
			{items.map(({ title, price, url, id }) => (
				<div className={styles.cart__item} key={id}>
					<img src={url} className={styles.cart__item_img} alt={title} />

					<div className={styles.cart__item_title}>{title}</div>

					<div className={styles.cart__item_price}>{price}$</div>

					<div
						onClick={() => removeFromCart(id)}
						className={styles.cart__close}
					>
						&times;
					</div>
				</div>
			))}
		</div>
	</>
);

CartTable.propTypes = {
	items: PropTypes.array,
	removeFromCart: PropTypes.func.isRequired,
};

CartTable.defaultTypes = {
	items: [],
};

const mapStateToProps = state => ({
	items: state.menu.cartItems,
});

const mapDispatchToProps = {
	removeFromCart: menuActions.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
