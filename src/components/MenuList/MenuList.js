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
		const { RestoService, fetchMenu, setLoading, setError } = this.props;

		setLoading();

		RestoService.getMenuItems()
			.then(res => fetchMenu(res))
			.catch(error => setError())
			.finally(setLoading);
	}

	render() {
		const { menuItems, isLoading, hasError } = this.props;

		if (hasError) {
			return <Error />;
		}

		if (isLoading) {
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
	isLoading: state.menu.isLoading,
	hasError: state.menu.hasError,
});

const mapDispatchToProps = {
	fetchMenu: menuActions.fetchMenu,
	setLoading: menuActions.setLoading,
	setError: menuActions.setError,
};

export default withRestoService()(
	connect(mapStateToProps, mapDispatchToProps)(MenuList),
);
