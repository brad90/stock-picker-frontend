import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const SearchBasic = ({ placeholder, handleSearch }) => {
	const [search, setSearch] = useState(null);

	const onSearch = () => {
		handleSearch(search.toLowerCase());
	};

	const onFocus = (e) => {
		e.target.setAttribute("autocomplete", "off");
	};

	return (
		<div>
			<input className='input' type='text' name='basicSearch' placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} onFocus={(e) => onFocus(e)} />
			<a onClick={() => onSearch()}>
				<FontAwesomeIcon icon={faSearch} style={{ marginLeft: "-3rem", color: "white" }} />
			</a>
		</div>
	);
};

export default SearchBasic;
