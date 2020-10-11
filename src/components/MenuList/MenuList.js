//Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import Error from '../Error';
import Spinner from '../Spinner';
import MenuListItem from '../MenuListItem';
//HOC
import withRestoService from '../hoc';
//Redux
import menuActions from 'redux/menu/menuActions';
//Style
import './MenuList.scss';

const MenuList = props => {
	const {
		error,
		loading,
		menuItems,
		menuError,
		menuLoaded,
		addedToCart,
		RestoService,
		menuRequested,
	} = props;

	useEffect(() => {
		menuRequested();

		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
			.catch(error => menuError());
	}, [menuRequested, RestoService, menuLoaded, menuError]);

	if (error) return <Error />;

	if (loading) return <Spinner />;

	return (
		<ul className="menu__list">
			{menuItems.map(menuItem => (
				<MenuListItem
					key={menuItem.id}
					menuItem={menuItem}
					onAddToCart={() => addedToCart(menuItem.id)}
				/>
			))}
		</ul>
	);
};

MenuList.propTypes = {
	error: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	menuItems: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			category: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	menuError: PropTypes.func.isRequired,
	menuLoaded: PropTypes.func.isRequired,
	addedToCart: PropTypes.func.isRequired,
	menuRequested: PropTypes.func.isRequired,
	RestoService: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	error: state.menu.error,
	loading: state.menu.loading,
	menuItems: state.menu.menuItems,
});

const mapDispatchToProps = {
	menuError: menuActions.menuError,
	menuLoaded: menuActions.menuLoaded,
	addedToCart: menuActions.addedToCart,
	menuRequested: menuActions.menuRequested,
};

export default withRestoService()(
	connect(mapStateToProps, mapDispatchToProps)(MenuList),
);
