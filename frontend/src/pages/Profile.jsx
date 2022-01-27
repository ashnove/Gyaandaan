import React, { useContext, useCallback, useState } from "react";
import { useEffect } from "react";
import { Container, Header, Content, Footer, Sidebar, Panel, Placeholder, Timeline, Toggle } from "rsuite";

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
	const { ProfileData, getProfileData , changeUserType} = profileContext;
	const { username, firstname, email, lastname, isAvailable, sessions, type } = ProfileData;

	const [userType, setUserType] = useState(type);
	
	useEffect(() => {
		getProfileData();
	}, []);

	function AsyncToggle(props) {
		const [checked, setChecked] = useState(type==2 ? true : false);
		const [loading, setLoading] = useState(false);
		const toggle = useCallback(() => {
		    setLoading(true);
					
			setChecked(checked => !checked);
			if(checked == true){
				changeUserType(1);
			}
			else {
				changeUserType(2);
			}
			
			setLoading(false);
		}, []);
	  
		return <Toggle loading={loading} checked={checked} onChange={toggle} {...props} />;
	}
	return (
		<Panel bordered  style={{ margin: '70px', marginTop: '2vh', backgroundColor: '#ecf0f1'}}>
			<div>
				<p style={{color: '#2c3e50', textAlign: 'center', fontSize:'20px'}}>
					You have Comleted {sessions} sessions. Ready for another? &nbsp; &nbsp; 
					<AsyncToggle  checkedChildren="Mentor Mode Activated" unCheckedChildren="Mentor Mode Deactivated"/>
				</p>

				<hr />
				<h3 style={{color: '#2c3e50'}}>Profile Details:</h3>
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
				<hr />
				<h3 style={{color: '#2c3e50', }}>Session Histroy:</h3>
				<p style={{color: '#2c3e50', width: '60%', margin: '0 auto'}} >
					<Timeline endless>
						<Timeline.Item > <div style={{display: 'flex'}}><p style={{color: '#2c3e50'}}>[12/12/2022] --- </p> <p style={{margin: '0em'}}>  [16:27:41] Session with USERNAME over TOPIC NAME</p></div> </Timeline.Item>
						<Timeline.Item>[10/12/2022] [16:27:41] Session with USERNAME over TOPIC NAME </Timeline.Item>
						<Timeline.Item>[06/11/2022] [16:27:41] Session with USERNAME over TOPIC NAME </Timeline.Item>
						<Timeline.Item>[26/10/2022] [16:27:41] Session with USERNAME over TOPIC NAME </Timeline.Item>
						<Timeline.Item>[13/09/2022] [16:27:41] Session with USERNAME over TOPIC NAME</Timeline.Item>
					</Timeline>
				</p>
			</div>	

		</Panel>
		
		// <Container>
		// 	<Footer className="text-white">
		// 		<Panel style={{ textAlign: "center" }}>
		// 			You have completed {ProfileData.sessions} Sessions.
		// 		</Panel>
		// 	</Footer>

		// 	<Panel style={temp}>
		// 		<div className="container">
		// 			<div className="row">
		// 				<div className="col-sm">
		// 					<ProfileCard />
		// 				</div>
		// 				<div className="col-sm">
		// 					<UserEdit />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</Panel>
		// </Container>
	);
};

export default Profile;
