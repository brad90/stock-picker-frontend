import React, { useState, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import SearchBasic from "../../components/Search/SearchBasic.js";
import API_URL from "../../common/apis/urls";
import STOCK_TITLES from "../../data/tickerTitle_master.js";
import STOCK_DETAIL from "../../data/tickerDetail_master.js";
import axios from "axios";
import "./styles.scss";

const Home = () => {
	const history = useHistory();
	const [invalidSearch, setInvalidSearch] = useState(false);
	const stocklist = require("../../data/stockList.json");

	// const handleSearch = useCallback(() => {
	// 	makeSearch(search);
	// }, [search]);
	const handleSearch = (search) => {
		makeSearch(search);
	};

	const makeSearch = (search) => {
		const stock = stocklist.filter((stock) => stock.name.toLowerCase().includes(search));

		if (stock.length) {
			axios
				.post(API_URL["browse"] + `search/${stock[0].symbol}`, {
					search: stock[0],
				})
				.then((res) => {
					history.push({
						pathname: `/browse/${stock[0]}`,
						state: res.data,
					});
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			setInvalidSearch(true);
		}
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

		// 	<div className='home'>
		// 		{!isLoadingCompany && (
		// 			<div>
		// 				<strong>
		// 					<h1>
		// 						Pick stocks
		// 						<br /> worth trading.
		// 					</h1>
		// 				</strong>
		// 				<br />
		// 				<h5>
		// 					Screen 1000's of stocks and analysis stocks easily. <br />
		// 					Start searching and start stock picking today
		// 				</h5>
		// 				<SearchBasic isLoading={setIsLoadingComapany} isSearch={setIsSearch} />
		// 				<br />

		// 				{/* {!isSearch && (
		// 					<span>
		// 						<p>OR</p>
		// 						<Link to='/browse/stocks/filter'>
		// 							<FilterOption>
		// 								Start filtering stocks
		// 								<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem", color: "#1652f0" }} />
		// 							</FilterOption>
		// 						</Link>
		// 					</span>
		// 				)} */}
		// 			</div>
		// 		)}

		// 		{isLoadingCompany && (
		// 			<LoadingSection>
		// 				<span>
		// 					<h3 style={{ fontWeight: "700" }}>Fetching Data...</h3>
		// 					<BarLoader height={4} width={400} css={override} loading={true} color='silver' />
		// 				</span>
		// 			</LoadingSection>
		// 		)}
		// 	</div>
		// </>
	);
};

// const override = css`
// 	display: block;
// 	margin: 0 auto;
// `;

// const AboveTheFold = styled.div`
//   width: 100%;
//   height: 100%;
//   display: block;
//   padding-top: 12rem
//   justify-content: center;
// `;

// const FoldDivContainer = styled.div`
// 	width: 100%;
// 	display: block;
// 	text-align: left;
// 	padding-top: 12rem;
// `;

// const FilterOption = styled.a`
// 	color: #1652f0;
// 	font-weight: 700;
// 	padding: 2rem 0rem;
// `;

// const LoadingSection = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	span {
// 		text-align: center;
// 	}

// 	h3 {
// 		margin-bottom: 2rem;
// 	}
// `;

export default Home;
