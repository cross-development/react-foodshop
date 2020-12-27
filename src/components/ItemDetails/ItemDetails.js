//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './ItemDetails.module.css';

const ItemDetails = ({ title, url, category, price, onAddToCart }) => (
	<div className={styles.item_page}>
		<div className={{ ...styles.menu__item, ...styles.item_block }}>
			<div className={styles.menu__title}>{title}</div>

			<img className={styles.menu__img} src={url} alt={title} />

			<div className={styles.menu__category}>
				Category: <span>{category}</span>
			</div>

			<div className={styles.menu__price}>
				Price: <span>{price}$</span>
			</div>

			<button onClick={onAddToCart} className={styles.menu__btn}>
				Add to cart
			</button>

			<span
				className={{
					...styles.menu__category_Img,
					...styles.menu__category_Img_`${category}`,
				}}
			></span>
		</div>
	</div>
);
// styles.menu__category_Img
ItemDetails.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	onAddToCart: PropTypes.func.isRequired,
};

export default ItemDetails;
