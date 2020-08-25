//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Component
import Spinner from 'components/Spinner';
import ItemDetails from '../components/ItemDetails';
//HOC
import withRestoService from 'components/hoc';
//Redux
import menuActions from 'redux/menu/menuActions';

class ItemPage extends Component {
	componentDidMount() {
		const { RestoService, menuRequested, menuLoaded, menuError } = this.props;

		if (this.props.menuItems.length === 0) {
			menuRequested();

			RestoService.getMenuItems()
				.then(res => menuLoaded(res))
				.catch(error => menuError());
		}
	}

	render() {
		const { menuItems, loading, match } = this.props;

		if (loading) {
			return <Spinner />;
		}

		const item = menuItems.find(
			({ id }) => Number(id) === Number(match.params.itemId),
		);

		return <ItemDetails {...item} />;
	}
}

const mapStateToProps = state => ({
	menuItems: state.menu.items,
	loading: state.menu.loading,
	error: state.menu.error,
});

const mapDispatchToProps = {
	menuLoaded: menuActions.menuLoaded,
	menuRequested: menuActions.menuRequested,
	menuError: menuActions.menuError,
};

export default withRestoService()(
	connect(mapStateToProps, mapDispatchToProps)(ItemPage),
);
