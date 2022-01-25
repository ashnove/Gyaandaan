import { useState } from "react";
import ProfileContext from "./ProfileContext";
import axios from "axios";
import userData from "../data/userData";

const ProfileState = (props) => {
	const host = "http://localhost:8080/gydn";
	const [ProfileData, setProfileData] = useState(userData);

	const getProfileData = async () => {
		const json = await axios.post(`${host}/getUser`);
		setProfileData(json);
	};

	return (
		<ProfileContext.Provider value={{ ProfileData, setProfileData }}>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default ProfileState;
