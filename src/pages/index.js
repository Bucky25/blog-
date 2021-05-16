import React from 'react';
import './index.css'
import Body from './Body'

const Home = () => {
return (
    <>
    {/* navbar */}
	<div className="nav">
	    <h1>Navbar</h1>
	</div>
    {/* Body */}
    <div>
        <Body /> 
    </div>
    {/* Footer */}
    <div>
        <h1>Footer</h1>
    </div>
    </>
);
};

export default Home;
