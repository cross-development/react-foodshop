//Core
import React from 'react';
//Components
import RestoServiceContext from '../RestoServiceContext';

const withRestoService = () => WrappedComponent => {
	return props => (
		<RestoServiceContext.Consumer>
			{RestoService => (
				<WrappedComponent {...props} RestoService={RestoService} />
			)}
		</RestoServiceContext.Consumer>
	);
};

export default withRestoService;
