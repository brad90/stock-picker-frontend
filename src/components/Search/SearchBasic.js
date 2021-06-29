import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import STOCK_TITLES from "../../common/tickerTitle_master.js";
// import STOCK_DETAIL from "../../data/tickerDetail_master.js";
import API_URL from "../../common/apis/urls";
import axios from "axios";
import "./styles.scss";

const SearchBasic = ({ isLoading, isSearch, placeholder }) => {
	let history = useHistory();
	const stocklist = require("../../data/stockList.json");
	const [search, setSearch] = useState(null);

	// const makeSearch = (selectedTick) => {
	// 	const ticker = STOCK_DETAIL[selectedTick]["ticker"];
	// 	isLoading(true);
	// 	axios
	// 		.post(API_URL["browse"] + `search/${ticker}`, {
	// 			search: ticker,
	// 		})
	// 		.then((res) => {
	// 			res.data.companyname = STOCK_DETAIL[selectedTick]["pretty"];
	// 			history.push({
	// 				pathname: `/browse/${selectedTick}`,
	// 				state: res.data,
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// const onInputSearch = (search) => {
	// 	setSelectedSearch(search);
	// 	if (search) {
	// 		isSearch(true);
	// 		setFilteredSearch(stocklist.filter((stock) => stock["ACT Symbol"].includes(search.toUpperCase())));
	// 	} else {
	// 		isSearch(false);
	// 		setFilteredSearch([]);
	// 	}
	// };

	const onFocus = (e) => {
		e.target.setAttribute("autocomplete", "off");
	};

	// const autoSuggestedStocks = filteredSearch.map((term) => (
	// 	<li key={term} onClick={() => onSelectAuto(term)}>
	// 		<div>
	// 			<div>
	// 				<img src={require("../../assets/images/company-logos/coke.jpeg").default} style={{ width: "100%", height: "100%" }} />
	// 			</div>
	// 			{term}
	// 		</div>
	// 	</li>
	// ));

	return (
		<div>
			<input className='input' type='text' name='basicSearch' placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} onFocus={(e) => onFocus(e)} />
			<FontAwesomeIcon icon={faSearch} style={{ marginLeft: "-3rem", color: "white" }} />
		</div>
	);
};

// const AutoSuggestWrapper = styled.div`
// 	display: flex;
// 	width: 30%;
// 	justify-content: left;

// 	ul {
// 		width: 100%;
// 		background-color: white;
// 		li {
// 			padding: 0.5rem;
// 			border-bottom: 1px solid #e6e6e6;
// 			border-left: 1px solid #e6e6e6;
// 			border-right: 1px solid #e6e6e6;
// 			cursor: pointer;
// 			&:hover {
// 				background-color: #f5f5f5;
// 				color: #1652f0;
// 			}
// 		}
// 	}
// `;

// const ListItemDiv = styled.div`
// 	text-align: left;
// 	max-height: 2rem;
// 	display: flex;
// 	align-items: center;
// `;
// const ListItemIconWrapper = styled.div`
// 	overflow: hidden;
// 	border-radius: 5px;
// 	width: 2rem;
// 	height: 2rem;
// 	margin-right: 1rem;
// `;

export default SearchBasic;
