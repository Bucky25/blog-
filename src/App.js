import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blog from './pages/blogs';
import SignUp from './pages/signup';
import Footer from './pages/Footer';

function App() {
return (
	<div className="app">
		
		<Router>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/about' component={About} />
			<Route path='/events' component={Events} />
			<Route path='/annual' component={AnnualReport} />
			<Route path='/team' component={Teams} />
			<Route path='/blog' component={Blog} />
			<Route path='/sign-up' component={SignUp} />
		</Switch>
		</Router>
		<Footer/>
	</div>
);
}

export default App;
