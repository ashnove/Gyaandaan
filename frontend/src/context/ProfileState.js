import { useState } from "react";
import ProfileContext from "./ProfileContext";
import axios from "axios";
import userData from "../data/userData";

const ProfileState = (props) => {
	const host = "http://localhost:8080/gydn";
	const [ProfileData, setProfileData] = useState({
		username: "",
		firstname: "",
		email: "",
		lastname: "",
		isAvailable: false,
		sessions: 0,
		type: 1,
	});

	const getProfileData = async () => {
		const json = await axios.post(`${host}/getUser?username=${localStorage.getItem("username")}`);
		// console.log(json.data);
		setProfileData({
			username: json.data.username,
			firstname: json.data.firstname,
			email: json.data.email,
			lastname: json.data.lastname,
			isAvailable: json.data.available,
			sessions: json.data.sessions,
			type: json.data.type,
		});
	};
	const setAvailability = async (available) => {
		const json = await axios.post(
			`${host}/changeAvailabilityStatus?username=${localStorage.getItem(
				"username"
			)}&available=${available}`
		);
		if (json.data.success)
			setProfileData((prevState) => ({ ...prevState, isAvailable: available }));
		// console.log(ProfileData);
	};
	const changeUserType = async (type) => {
		const json = await axios.post(
			`${host}/changeType?username=${localStorage.getItem(
				"username"
			)}&type=${type}`
		);
		if (json.data.success)
			setProfileData((prevState) => ({ ...prevState, type: type }));
		
		// console.log(ProfileData);
	};

	return (
		<ProfileContext.Provider
			value={{ ProfileData, setProfileData, getProfileData, setAvailability, changeUserType }}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default ProfileState;
