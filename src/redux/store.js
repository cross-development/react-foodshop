//Core
import { createStore, combineReducers } from 'redux';
//Redux
import menuReducer from './menu/menuReducers';

const rootReducer = combineReducers({
	menu: menuReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
