//Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Component
import Spinner from 'components/Spinner';
import ItemDetails from 'components/ItemDetails';
//HOC
import withRestoService from 'components/hoc';
//Redux
import menuActions from 'redux/menu/menuActions';

const ItemPage = props => {
	const {
		match,
		loading,
		menuError,
		menuItems,
		menuLoaded,
		addedToCart,
		RestoService,
		menuRequested,
	} = props;

	useEffect(() => {
		if (menuItems.length === 0) {
			menuRequested();

			RestoService.getMenuItems()
				.then(res => menuLoaded(res))
				.catch(error => menuError());
		}
	}, [menuRequested, RestoService, menuItems, menuLoaded, menuError]);

	if (loading) return <Spinner />;

	const item = menuItems.find(
		({ id }) => Number(id) === Number(match.params.itemId),
	);

	return <ItemDetails {...item} onAddToCart={() => addedToCart(item.id)} />;
};

ItemPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	menuError: PropTypes.func.isRequired,
	menuLoaded: PropTypes.func.isRequired,
	addedToCart: PropTypes.func.isRequired,
	menuRequested: PropTypes.func.isRequired,
	RestoService: PropTypes.object.isRequired,
	menuItems: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			category: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	match: PropTypes.objectOf(PropTypes.any).isRequired,
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
	connect(mapStateToProps, mapDispatchToProps)(ItemPage),
);
