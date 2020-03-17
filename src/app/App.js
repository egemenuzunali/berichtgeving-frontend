import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Home from '../pages/Home';
import Form from '../pages/Form';
import SignIn from '../pages/SignIn';

function App() {
	return (
		<Router>
			<PageLayout>
				<Switch>
					<Route path="/signin" component={SignIn} exact />
					<Route path="/" component={Home} exact />
					<Route path="/form" component={Form} exact />
				</Switch>
			</PageLayout>
		</Router>
	);
}

export default App;
