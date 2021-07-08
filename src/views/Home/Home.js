import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchBasic from "../../components/Search/SearchBasic.js";

import "./styles.scss";

const Home = () => {
	const stocklist = require("../../data/stockList.json");
	const history = useHistory();
	const [invalidSearch, setInvalidSearch] = useState(false);

	const handleSearch = (search) => {
		let stockFound = stocklist.filter((stock) => stock.symbol === search.toUpperCase());
		stockFound ? history.push(`/browse/company/${search.toUpperCase()}/profile`, { ticker: search }) : setInvalidSearch(true);
	};

	return (
		<div className='home'>
			<div className='home__abovefold'>
				<div className='home__afoldleft'>
					<strong>
						<h1>Pick Stocks worth trading.</h1>
					</strong>
					<h5>Screen 1000's of stocks to find value.</h5>
					{invalidSearch && <p>Could not find this stock. Are you sure it is correct?</p>}
					<SearchBasic placeholder='Search stocks' handleSearch={handleSearch} />
				</div>
				<div className='home__afoldright'>Somethign else</div>
			</div>
		</div>
	);
};

export default Home;
