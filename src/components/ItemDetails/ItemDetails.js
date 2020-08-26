//Core
import React from 'react';
//Style
import './ItemDetails.scss';

const ItemDetails = ({ title, url, category, price, onAddToCart }) => (
	<div className="item_page">
		<div className="menu__item item_block">
			<div className="menu__title">{title}</div>
			<img className="menu__img" src={url} alt={title}></img>
			<div className="menu__category">
				Category: <span>{category}</span>
			</div>
			<div className="menu__price">
				Price: <span>{price}$</span>
			</div>
			<button onClick={() => onAddToCart()} className="menu__btn">
				Add to cart
			</button>
			<span className={`menu__category_Img ${category}`}></span>
		</div>
	</div>
);

export default ItemDetails;
