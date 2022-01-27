import React, { useContext } from "react";
import { useEffect } from "react";
import { Container, Header, Content, Footer, Sidebar, Panel } from "rsuite";

import ProfileCard from "../components/Profile/ProfileCard/ProfileCard";
import UserEdit from "../components/Profile/UserEdit";
import ProfileContext from "../context/ProfileContext";

const temp = {
	width: "auto",
	margin: "auto",
	backgroundColor: "#c8d6e5",
};

const Profile = () => {
	const profileContext = useContext(ProfileContext);
	const { ProfileData, getProfileData } = profileContext;
	
	useEffect(() => {
		getProfileData();
	}, []);

	return (
		<Container>
			<Footer className="text-white">
				<Panel style={{ textAlign: "center" }}>
					You have completed {ProfileData.sessions} Sessions.
				</Panel>
			</Footer>

			<Panel style={temp}>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<ProfileCard />
						</div>
						<div className="col-sm">
							<UserEdit />
						</div>
					</div>
				</div>
			</Panel>
		</Container>
	);
};

export default Profile;
