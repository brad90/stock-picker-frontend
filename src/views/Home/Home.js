import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import SearchBasic from "../../components/Search/SearchBasic.js";

const Home = () => {
	const [isLoadingCompany, setIsLoadingComapany] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	return (
		<div className='home'>
			<div className='home__abovefold'>
				<div className='home__afoldleft'>
					<strong>
						<h1>Pick Stocks worth trading.</h1>
					</strong>
					<h5>Screen 1000's of stocks to find value.</h5>
					<SearchBasic isLoading={setIsLoadingComapany} isSearch={setIsSearch} placeholder='Search stocks' />
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
