import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Home.js";
// import ComapanyInfo from "./views/CompanyInfo/CompanyInfo.js";
// import StocksFilter from "./containers/StocksFilter.js";

function App() {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			{/* <Route path='/browse/stocks/filter' component={StocksFilter} exact /> */}
			{/* <Route path='/browse/:searchTicker' component={ComapanyInfo} /> */}
		</Switch>
	);
}

export default App;
