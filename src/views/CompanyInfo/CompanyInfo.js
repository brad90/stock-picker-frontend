import React, { useEffect, useState } from "react";
import API_URLS from "../../common/apis/urls";

import axios from "axios";

const ComapanyInfo = (props) => {
	const [ticker, setTicker] = useState(null);
	const [companyInfo, setCompanyInfo] = useState({});

	useEffect(() => {
		setTicker(props.match.params.ticker);
		callAPI(props.match.params.ticker);
	}, []);

	const callAPI = async (ticker) => {
		try {
			const response = await axios.post("http://localhost:9000/companyinfo", {
				ticker: ticker,
			});
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return <div>hello</div>;
};

export default ComapanyInfo;
