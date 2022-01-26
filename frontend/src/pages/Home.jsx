import React, { useState, useEffect, useContext } from "react";
import HomeContent from "../components/HomeContent/HomeContent";
import { Loader } from "rsuite";
import ProfileContext from "../context/ProfileContext";

const Home = () => {
	const profileContext = useContext(ProfileContext);
	const { getProfileData } = profileContext;

	const loaderStyle = {
		height: "800px",
		width: "100% ",
		margin: "auto",
		padding: "200px",
		backgroundColor: "grey",
	};

	const [loading, setLoading] = useState(true);

	const instance = (
		<div id="loaderInverseWrapper" style={loaderStyle}>
			<Loader inverse center content="loading..." />
		</div>
	);

	function contentLoaded() {
		setLoading(false);
		console.log("load ho gya");
	}

	setTimeout(() => setLoading(false), 1000);

	useEffect(() => {
		getProfileData();
	});

	return (
		<div>
			<div style={{ display: loading ? "block" : "none" }}>{instance} </div>
			<div style={{ display: loading ? "none" : "block" }}>
				<HomeContent />
			</div>
			{/* style={{display: loading ? "none" : "block"}};  */}
		</div>
	);
};

export default Home;
