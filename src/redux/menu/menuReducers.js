//Redux
import actionsType from './menuActionsType';

const initialState = {
	menuItems: [],
	cartItems: [],
	loading: true,
	error: false,
};

const menu = (state = initialState, action) => {
	switch (action.type) {
		case actionsType.LOADED:
			return {
				...state,
				menuItems: action.payload,
				loading: false,
			};
		case actionsType.REQUESTED:
			return {
				...state,
				menuItems: state.menuItems,
				loading: true,
			};
		case actionsType.ERROR:
			return {
				...state,
				menuItems: state.menuItems,
				error: true,
			};
		case actionsType.ADD_TO_CART:
			return {
				...state,
				cartItems: [
					...state.cartItems,
					state.menuItems.find(({ id }) => id === action.payload),
				],
			};
		case actionsType.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: [
					...state.cartItems.filter(({ id }) => id !== action.payload),
				],
			};
		default:
			return state;
	}
};

export default menu;
