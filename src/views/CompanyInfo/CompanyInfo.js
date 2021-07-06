import React, { useEffect, useState } from "react";
import API_URLS from "../../common/apis/urls";

import axios from "axios";

const ComapanyInfo = ({ ticker }) => {
	const [company, setCompany] = useState(null);
	const [companyInfo, setCompanyInfo] = useState({});

	useEffect(() => {
		callAPI(ticker);
	}, []);

	const callAPI = async (ticker) => {
		try {
			const response = await axios.get("http://localhost:9000/companyInfo");
			setCompany(ticker);
			setCompanyInfo(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return <div>hello</div>;
};

export default ComapanyInfo;
