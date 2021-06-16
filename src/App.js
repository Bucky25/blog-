import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blogs';
import Login from './pages/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
return (
	<div className="app">
		<Router>
		<Navbar />
			<Route path='/' exact component={Home} />
			<Route path='/about' component={About} />
			<Route path='/blog' component={Blog} />
			<Route path='/login' component={Login} />
		<Footer />
		</Router>
	</div>
);
}

export default App;
