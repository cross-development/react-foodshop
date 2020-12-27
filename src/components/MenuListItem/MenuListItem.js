//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Router
import router from 'router';
//Style
import styles from './MenuListItem.module.css';

const MenuListItem = ({ menuItem = {}, onAddToCart }) => {
	const { id, title, price, url, category } = menuItem;

	return (
		<li className={styles.menu__item}>
			<Link to={`${router.menu}/${id}`} className={styles.menu__link}>
				<p className={styles.menu__title}>{title}</p>
				<img className={styles.menu__img} src={url} alt={title}></img>
				<p className={styles.menu__category}>
					Category: <span>{category}</span>
				</p>
				<p className={styles.menu__price}>
					Price: <span>{price}$</span>
				</p>
			</Link>

			<button onClick={() => onAddToCart()} className={styles.menu__btn}>
				Add to cart
			</button>
			<span className={styles.menu__category_Img`${category}`}></span>
		</li>
	);
};

MenuListItem.propTypes = {
	menuItem: PropTypes.object,
	onAddToCart: PropTypes.func.isRequired,
};

MenuListItem.defaultProps = {
	menuItem: {},
};

export default MenuListItem;
