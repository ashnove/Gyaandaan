import React, { useState, useEffect, useContext } from "react";
import { Button, Divider } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";
import TrendingTable from "../Tables/TrendingTable";
import SessionPopUp from "../SessionPopUp/SessionPopUp";
import AppContext from "../../context/AppContext";
import ProfileContext from "../../context/ProfileContext";

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
	const { ProfileData, getProfileData } = profileContext;

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
		setStudentDetails({ name: "ONKAR" });
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
		// const meetURLSocketResponse = contentBody.meetURL;
		if (content == "REQUEST") {
			setStudentDetails({ name: contentBody.senderName, username: contentBody.senderId });
			setOpen(true);
		}
		if (content == "ACCEPTED") {
			setStudentMsg("Accepted");
			// setMeetLink(meetURLSocketResponse);
		}
		if (content == "REJECTED") {
			setStudentMsg("Rejected");
			setTimeout(() => setOpen(false), 3000);
		}
		const notification = JSON.parse(msg.body);
	};

	const sendMessage = (msg) => {
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
			<div style={{ marginTop: "15vh", textAlign: "center" }}>
				<SingleDropDown handleSelect={handleSelect} />
				<Button
					appearance="primary"
					style={{ width: "10rem", margin: "0.5rem", backgroundColor: "#c0392b" }}
					onClick={handleSubmit}
					loading={loading}
				>
					Get a Mentor
				</Button>
				<SessionPopUp
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}
					sendMessage={sendMessage}
					onLoad={handleLoad}
					volunteer={receivingUser}
				/>
			</div>
			<div style={{ marginTop: "15vh" }}>
				<Divider className={"text-white"}>Trending Topics</Divider>
				<TrendingTable />
			</div>
		</React.Fragment>
	);
}

export default HomeContent;
