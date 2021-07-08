import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/Home.js";
import ComapanyInfo from "./views/CompanyInfo/CompanyInfo.js";
// import StocksFilter from "./containers/StocksFilter.js";

function App() {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/browse/company/:ticker/profile' render={(props) => <ComapanyInfo {...props} />} />
		</Switch>
	);
}

export default App;
