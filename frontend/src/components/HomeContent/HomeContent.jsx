import React, { useState, useEffect, useContext, useCallback } from "react";
import { Button, Divider, Toggle } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";
import TrendingTable from "../Tables/TrendingTable";
import SessionPopUp from "../SessionPopUp/SessionPopUp";
import AppContext from "../../context/AppContext";
import ProfileContext from "../../context/ProfileContext";
import AsyncToggle from "../Toggle/AsyncToggle";

const loggedInUser = {
	id: "1",
	username: localStorage.getItem("username"),
	name: "Ashutosh",
	type: "student",
	displayType: "student",
};

var stompClient = null;
function HomeContent() {
	const appContext = useContext(AppContext);
	const profileContext = useContext(ProfileContext);
	const {
		forStudentMsg,
		setStudentMsg,
		startSession,
		setMeetLink,
		setStudentDetails,
		receivingUser,
		setReceivingUser,
		initializeReceivingUser,
	} = appContext;
	const { ProfileData, getProfileData, changeUserType } = profileContext;
	const {name, type } = ProfileData;

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		if (receivingUser.type === "volunteer") sendMessage("REQUEST");
	};
	const handleClose = () => {
		setOpen(false);
		initializeReceivingUser();
	};

	const currentUser = {
		username: localStorage.getItem("username"),
		name: ProfileData.firstname,
	};
	const [subject, setSubject] = useState("Select a Subject");

	const handleSelect = (data) => {
		setSubject(data);
	};

	useEffect(() => {
		if (receivingUser.username === "") return;
		handleOpen();
	}, [receivingUser]);

	const handleSubmit = async () => {
		setLoading(true);
		const json = await startSession({
			studentUsername: localStorage.getItem("username"),
			topicName: subject,
		});
		// if (json.success) {
		setLoading(false);
		setStudentDetails({ name: name });
		const newReceivingUser = {
			username: json.volunteerUsername,
			name: json.volunteerName,
			type: "volunteer",
			displayType: "student",
		};
		setReceivingUser((prevUser) => ({ ...prevUser, ...newReceivingUser }));
	};

	const isVolunteer = loggedInUser.type == 0 ? true : false;
	useEffect(() => {
		connect();
		getProfileData();
	}, []);

	//SOCKET STARTS
	const connect = () => {
		const Stomp = require("stompjs");
		var SockJS = require("sockjs-client");
		SockJS = new SockJS("http://localhost:8080/ws");
		stompClient = Stomp.over(SockJS);
		stompClient.connect({}, onConnected, onError);
	};

	const onConnected = () => {
		console.log("connected");
		console.log(currentUser);
		// convert to "/queue/requests"
		stompClient.subscribe("/user/" + currentUser.username + "/queue/requests", onMessageReceived);
	};

	const onError = (err) => {
		console.log(err);
	};

	const onMessageReceived = (msg) => {
		// Volunteer ke liye pop-up kholna hai
		const contentBody = JSON.parse(msg.body);
		const content = contentBody.content;
		// console.log(contentBody);
		const meetURLSocketResponse = contentBody.meetLink;
		if (content == "REQUEST") {
			setStudentDetails({ name: contentBody.senderName, username: contentBody.senderId });
			setOpen(true);
		}
		if (content == "ACCEPTED") {
			setStudentMsg("Accepted");
			setMeetLink(meetURLSocketResponse);
		}
		if (content == "REJECTED") {
			setStudentMsg("Rejected");
			setMeetLink("NULL");
			// setTimeout(() => setOpen(false), 3000);
		}
		const notification = JSON.parse(msg.body);
	};

	const sendMessage = (msg) => {
		console.log("here" + msg);
		if (msg.trim() !== "") {
			console.log(receivingUser);
			const message = {
				senderId: currentUser.username,
				recipientId: receivingUser.username,
				senderName: currentUser.name,
				recipientName: receivingUser.name,
				content: msg,
				timestamp: new Date(),
			};
			// convert to "gydn/request"
			stompClient.send("/gydn/request", {}, JSON.stringify(message));
			console.log(msg);
		}
	};

	//SOCKET ENDS

	const [loading, setLoading] = useState(false);

	function handleLoad() {
		console.log("load ho gya");
		setLoading(true);
	}

	return (
		<React.Fragment>
			<div style={{ padding: '100px'}}>
				<div style={{textAlign: 'center', marginBottom: '8vh'}}>
					<p className="text-white" style={{ fontSize:'20px'}}>
					Ready to recieve a Session Requests {name}? ;)  &nbsp; &nbsp; 
					<AsyncToggle  checkedChildren="Mentor Mode Activated" unCheckedChildren="Mentor Mode Deactivated" />
					</p>
					<br />
					<SingleDropDown handleSelect={handleSelect} />
					<Button
						appearance="primary"
						style={{ width: "12rem", margin: "0.5rem", backgroundColor: "#c0392b" }}
						onClick={handleSubmit}
						loading={loading}
					>
						Start a session
					</Button>
					<SessionPopUp
						open={open}
						handleOpen={handleOpen}
						handleClose={handleClose}
						sendMessage={sendMessage}
						onLoad={handleLoad}
						volunteer={receivingUser}
						name={currentUser.name}
					/>
				</div>
				<hr/>	
				{/* <Divider className={"text-white"}>Trending Topics</Divider> */}
				<TrendingTable />
			</div>
		</React.Fragment>
	);
}

export default HomeContent;
