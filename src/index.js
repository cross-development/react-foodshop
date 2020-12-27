//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import App from 'components/App';
import ErrorBoundary from 'components/ErrorBoundary';
import RestoServiceContext from 'components/RestoServiceContext';
//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';
//Services
import RestoService from 'services/restoAPI';
//Style
import 'index.css';

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
