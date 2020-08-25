//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import MenuListItem from '../MenuListItem';
import Spinner from '../Spinner';
import Error from '../Error';
//HOC
import withRestoService from '../hoc';
//Redux
import menuActions from 'redux/menu/menuActions';
//Style
import './MenuList.scss';

class MenuList extends Component {
	componentDidMount() {
		const { RestoService, menuLoaded, menuError, menuRequested } = this.props;

		menuRequested();

		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
			.catch(error => menuError());
	}

	render() {
		const { menuItems, loading, error } = this.props;

		if (error) {
			return <Error />;
		}

		if (loading) {
			return <Spinner />;
		}

		return (
			<ul className="menu__list">
				{menuItems.map(menuItem => (
					<MenuListItem key={menuItem.id} menuItem={menuItem} />
				))}
			</ul>
		);
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
	connect(mapStateToProps, mapDispatchToProps)(MenuList),
);
