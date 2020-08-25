//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Router
import router from 'router';
//Style
import './MenuListItem.scss';

const MenuListItem = ({ menuItem }) => {
	const { id, title, price, url, category } = menuItem;

	return (
		<li className="menu__item">
			<Link to={`${router.menu}/${id}`} className="menu__link">
				<p className="menu__title">{title}</p>
				<img className="menu__img" src={url} alt={title}></img>
				<p className="menu__category">
					Category: <span>{category}</span>
				</p>
				<p className="menu__price">
					Price: <span>{price}$</span>
				</p>
				<button className="menu__btn">Add to cart</button>
				<span className={`menu__category_Img ${category}`}></span>
			</Link>
		</li>
	);
};

export default MenuListItem;
