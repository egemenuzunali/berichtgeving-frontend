import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Home from '../pages/Home';

function App() {
	return (
		<Router>
			<PageLayout>
				<Switch>
					<Route path="/" component={Home} exact />
				</Switch>
			</PageLayout>
		</Router>
	);
}

export default App;
