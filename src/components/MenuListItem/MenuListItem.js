//Core
import React from 'react';
//Style
import './MenuListItem.scss';

const MenuListItem = ({ menuItem }) => {
	const { title, price, url, category } = menuItem;

	return (
		<li className="menu__item">
			<p className="menu__title">{title}</p>
			<img className="menu__img" src={url} alt={title}></img>
			<p className="menu__category">
				Category: <span>{category}</span>
			</p>
			<p className="menu__price">
				Price: <span>{price}$</span>
			</p>
			<button className="menu__btn">Add to cart</button>
		</li>
	);
};

export default MenuListItem;
