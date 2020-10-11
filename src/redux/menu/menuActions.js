//Redux
import actionsType from './menuActionsType';

const menuLoaded = newMenu => ({
	type: actionsType.LOADED,
	payload: newMenu,
});

const menuRequested = () => ({
	type: actionsType.REQUESTED,
});

const menuError = () => ({
	type: actionsType.ERROR,
});

const addedToCart = id => ({
	type: actionsType.ADD_TO_CART,
	payload: id,
});

const removeFromCart = id => ({
	type: actionsType.REMOVE_FROM_CART,
	payload: id,
});

export default {
	menuError,
	menuLoaded,
	addedToCart,
	menuRequested,
	removeFromCart,
};
