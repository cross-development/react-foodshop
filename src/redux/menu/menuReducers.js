//Core
import { combineReducers } from 'redux';
//Redux
import actionsType from './menuActionsType';

const items = (state = [], action) => {
	switch (action.type) {
		case actionsType.FETCH:
			return action.payload;
		default:
			return state;
	}
};

const isLoading = (state = false, action) => {
	switch (action.type) {
		case actionsType.LOADING:
			return !state;
		default:
			return state;
	}
};

const hasError = (state = false, action) => {
	switch (action.type) {
		case actionsType.ERROR:
			return true;
		default:
			return state;
	}
};

export default combineReducers({
	items,
	isLoading,
	hasError,
});
