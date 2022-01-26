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
	const { forStudentMsg, getMeeting, meetLink, receivingUser, setReceivingUser, studentDetails } =
		appContext;
	const receivingUserData = receivingUser;
	const ACCEPTED = "ACCEPTED";
	const REJECTED = "REJECTED";

	const displayingFor = props.volunteer.displayType;

	const isVolun = displayingFor == "student" ? false : true;
	const panelHeader = displayingFor == "student" ? "Assigned Mentor" : "";
	let message = "";
	function SessionMeetGeneration(msgType) {
		if (msgType) getMeeting();
		const newReceivingUser = {
			username: studentDetails.username,
			name: studentDetails.name,
			type: "student",
			displayType: "volunteer",
		};
		setReceivingUser((prevUser) => ({ ...prevUser, ...newReceivingUser }));
	}

	useEffect(() => {
		const meetURL = meetLink;
		if (receivingUser.username === "") return;
		if (receivingUser.type === "student") props.sendMessage(ACCEPTED + " " + meetURL);
	}, [receivingUser]);

	let toBedisplayed;

	if (isVolun) {
		toBedisplayed = (
			<Container>
				<Container>
					<Content> {ProfileData.firstname + " " + ProfileData.lastname}</Content>
					<Sidebar>
						<div style={{ float: "right", display: "flex", columnGap: "2px" }}>
							<Button
								color="green"
								appearance="primary"
								onClick={() => {
									message = ACCEPTED;
									SessionMeetGeneration(true);
								}}
							>
								Accept
							</Button>
							<Button
								color="red"
								appearance="primary"
								onClick={() => {
									message = REJECTED;
									SessionMeetGeneration(false);
								}}
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
					<div> {receivingUserData.name} </div>
					{forStudentMsg === "" ? (
						<div style={{ float: "right" }}>
							<Badge color="red">Waiting for response</Badge>
						</div>
					) : forStudentMsg === "ACCEPTED" ? (
						<div style={{ float: "right" }}>
							<Badge color="red">{forStudentMsg}</Badge>
						</div>
					) : (
						<div style={{ float: "right" }}>
							<Badge color="red">{forStudentMsg}</Badge>
						</div>
					)}
					<br />
				</div>
				<p> {receivingUserData.username} </p>
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
