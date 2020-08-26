//Core
import React from 'react';
import { connect } from 'react-redux';
//Redux
import menuActions from 'redux/menu/menuActions';
//Style
import './CartTable.scss';

const CartTable = ({ items, removeFromCart }) => {
	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{items.map(({ title, price, url, id }) => (
					<div className="cart__item" key={id}>
						<img src={url} className="cart__item-img" alt={title}></img>
						<div className="cart__item-title">{title}</div>
						<div className="cart__item-price">{price}$</div>
						<div onClick={() => removeFromCart(id)} className="cart__close">
							&times;
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const mapStateToProps = state => ({
	items: state.menu.cartItems,
});

const mapDispatchToProps = {
	removeFromCart: menuActions.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
