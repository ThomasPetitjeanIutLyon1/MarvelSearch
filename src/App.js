import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './Search';
import DetailPage from './screens/DetailPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={({ history }) => <Search history={history} />} />
					<Route exact path="/detail/:id" render={({ history }) => <DetailPage history={history} />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
