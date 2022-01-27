import React, { useState, useContext } from "react";
import {
	Panel,
	PanelGroup,
	Badge,
	Button,
	Container,
	Header,
	Content,
	Footer,
	Sidebar,
} from "rsuite";
import AppContext from "../../context/AppContext";
import ProfileContext from "../../context/ProfileContext";
import { Loader } from "rsuite";
import { useEffect } from "react";

const VolunInfo = (props) => {
	// props.name should contain name of current volunteer

	const [volunteerName, setvolunteerName] = useState(props.name);

	const appContext = useContext(AppContext);
	const profileContext = useContext(ProfileContext);
	const { ProfileData } = profileContext;
	const { forStudentMsg, getMeeting, setMeetLink, meetLink, receivingUser, setReceivingUser, studentDetails } =
		appContext;
	const receivingUserData = receivingUser;
	const ACCEPTED = "ACCEPTED";
	const REJECTED = "REJECTED";

	const displayingFor = props.volunteer.displayType;

	const isVolun = displayingFor == "student" ? false : true;
	const panelHeader = displayingFor == "student" ? "Assigned Mentor" : "";
	const [message, setMessage] = useState("Not Set");
	const [disable,setDisable] = useState(false);
	
	
	function SessionMeetGeneration(msgType) {
		setDisable(true);
		if (msgType) {
			getMeeting();
			setMessage(ACCEPTED);
		}
		else {
			setMeetLink("NULL");
			setMessage(REJECTED);
		};
		const newReceivingUser = {
			username: studentDetails.username,
			name: studentDetails.name,
			type: "student",
			displayType: "volunteer",
		};
		setReceivingUser((prevUser) => ({ ...prevUser, ...newReceivingUser }));
	}

	useEffect(() => {
		// const meetURL = meetLink;
		if (receivingUser.username === "") return;
		if (receivingUser.type == "student") {
			if(message == "ACCEPTED") props.sendMessage(message + ' ' + meetLink);
			else props.sendMessage(message);
		}
	}, [receivingUser]);

	let toBedisplayed;

	if (isVolun) {
		toBedisplayed = (
			<Container>
				<Container>
					<Content> Name: &nbsp; {(ProfileData.firstname + " " + ProfileData.lastname).toUpperCase()} ({ProfileData.username})</Content>
					<Sidebar>
						<div style={{ float: "right", display: "flex", columnGap: "2px" }}>
							<Button
								color="green"
								appearance="primary"
								onClick={() => 
									SessionMeetGeneration(true)
								}
								disabled={disable}
							>
								Accept
							</Button>
							<Button
								color="red"
								appearance="primary"
								onClick={() => 
									SessionMeetGeneration(false)
								}
								disabled={disable}
							>
								Reject
							</Button>
						</div>
					</Sidebar>
				</Container>
				<Footer></Footer>
			</Container>
		);
	} else {
		toBedisplayed = (
			<div>
				<div style={{ display: "flex" }}>
					<div> Name: &nbsp; {receivingUserData.name.toUpperCase()}  ({receivingUser.username}) </div>
					<div style={{ float: 'right', position: 'absolute', right: 17 }}>
						{forStudentMsg === "" ? (
							<div style={{ float: "right" }}>
								<Badge color="yellow">Waiting for response</Badge>
							</div>
						) : forStudentMsg === "ACCEPTED" ? (
							<div style={{ float: "right" }}>
								<Badge color="green">{forStudentMsg}</Badge>
							</div>
						) : (
							<div style={{ float: "right" }}>
								<Badge color="red">{forStudentMsg}</Badge>
							</div>
						)}
					</div>
					
					<br />
				</div>
			</div>
		);
	}

	return (
		<div>
			<Panel header="Assigned Mentor" bordered>
				{toBedisplayed}
			</Panel>
		</div>
	);
};

export default VolunInfo;
