import React, { useState, useEffect, useContext } from "react";
import { Button, Divider } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";
import TrendingTable from "../Tables/TrendingTable";
import SessionPopUp from "../SessionPopUp/SessionPopUp";
import AppContext from "../../context/AppContext";

const loggedInUser = {
	id: "1",
	username: localStorage.getItem("username"),
	name: "Ashutosh",
	type: "student",
	displayType: "student",
};

var stompClient = null;
function HomeContent() {
	const context = useContext(AppContext);
	const {
		forStudentMsg,
		setStudentMsg,
		startSession,
		setMeetLink,
		setStudentDetails,
		receivingUser,
		setReceivingUser,
	} = context;

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		sendMessage("REQUEST");
	};
	const handleClose = () => setOpen(false);

	const [currentUser, setCurrentUser] = useState(loggedInUser);
	// const [receivingUser, setReceivingUser] = useState({});
	const [subject, setSubject] = useState("Select a Subject");

	const handleSelect = (data) => {
		setSubject(data);
	};

	const handleSubmit = async () => {
		setLoading(true);
		const json = await startSession({
			studentUsername: localStorage.getItem("username"),
			topicName: subject,
		});
		// if (json.success) {
		setLoading(false);
		setStudentDetails({ name: "ONKAR" });
		setReceivingUser({
			username: json.volunteerUsername,
			name: json.volunteerName,
			type: "volunteer",
			displayType: "volunteer",
		});

		handleOpen();
		// } else {
		// 	//Volunteer not found
		// }
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
		const meetURLSocketResponse = contentBody.meetURL;
		if (content == "REQUEST") {
			setStudentDetails({ name: "ONKAR" });
			setOpen(true);
		}
		if (content == "ACCEPTED") {
			setStudentMsg("Accepted");
			setMeetLink(meetURLSocketResponse);
		}
		if (content == "REJECTED") {
			setStudentMsg("Rejected");
			setTimeout(() => setOpen(false), 3000);
		}
		const notification = JSON.parse(msg.body);
	};

	const sendMessage = (msg) => {
		if (msg.trim() !== "") {
			const message = {
				senderId: currentUser.username,
				recipientId: receivingUser.username,
				senderName: currentUser.name,
				recipientName: receivingUser.name,
				content: msg,
				timestamp: new Date(),
			};
			// convert to "gydn/request"
			stompClient.send("gydn/request", {}, JSON.stringify(message));
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
