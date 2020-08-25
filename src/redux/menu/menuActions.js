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

export default {
	menuLoaded,
	menuRequested,
	menuError,
};
