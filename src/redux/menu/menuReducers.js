//Redux
import actionsType from './menuActionsType';

const initialState = {
	items: [],
	loading: true,
	error: false,
};

const menu = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case actionsType.LOADED:
			return {
				items: action.payload,
				loading: false,
				error: false,
			};
		case actionsType.REQUESTED:
			return {
				items: state.items,
				loading: true,
				error: false,
			};
		case actionsType.ERROR:
			return {
				items: state.items,
				loading: true,
				error: true,
			};
		default:
			return state;
	}
};

export default menu;
