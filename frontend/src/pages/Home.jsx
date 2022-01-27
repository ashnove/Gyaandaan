import React, { useState, useEffect, useContext } from "react";
import HomeContent from "../components/HomeContent/HomeContent";
import { Loader } from "rsuite";
import ProfileContext from "../context/ProfileContext";

const Home = () => {
	const profileContext = useContext(ProfileContext);
	const { getProfileData } = profileContext;

	const loaderStyle = {
		position: "fixed",
		zIindex: "999",
		height: "2em",
		width: "10em",
		overflow: "show",
		margin: "auto",
		top: "0",
		left: "0",
		bottom: "0",
		right: "0",
		size: "100"
		// opacity: "0.5",
		// backgroundColor: "#2c3e50",
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
