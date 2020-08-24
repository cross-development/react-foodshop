//Redux
import actionsType from './menuActionsType';

const fetchMenu = newMenu => ({
	type: actionsType.FETCH,
	payload: [...newMenu],
});

const setLoading = () => ({
	type: actionsType.LOADING,
});

const setError = () => ({
	type: actionsType.ERROR,
});

export default {
	fetchMenu,
	setLoading,
	setError,
};
