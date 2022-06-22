import React from 'react';
import "./App.css";

import { 
	BrowserRouter, Routes, Route 
} from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Detail from "./components/pages/Detail";

function App() {
  	return (
    	// <div className="App">
      	// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 		className="App-link"
		// 		href="https://reactjs.org"
		// 		target="_blank"
		// 		rel="noopener noreferrer" >
		// 			Learn React
		// 		</a>
      	// 	</header>
    	// </div>
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category" element={<Category />} />
					<Route path="/detail/:categoryName" element={<Detail />} />
				</Routes>
			</div>
		</BrowserRouter>
  	);
}

export default App;
