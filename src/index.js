//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';
import RestoServiceContext from 'components/RestoServiceContext';
//Services
import RestoService from 'services/restoAPI';
//Redux
import store from 'redux/store';
//Style
import 'index.scss';

const restoService = new RestoService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<RestoServiceContext.Provider value={restoService}>
				<Router>
					<App />
				</Router>
			</RestoServiceContext.Provider>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root'),
);
