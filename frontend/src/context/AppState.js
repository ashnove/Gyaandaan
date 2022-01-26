import { useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

import topicsService from "../data/topicsService";
import volunteerService from "../data/volunteerService";
import studentService from "../data/studentService";
import studentPrefService from "../data/studentPrefService";
import volunteerPrefService from "../data/volunteerPrefService";
import sessionService from "../data/sessionService";

const AppState = (props) => {
	const host = "http://localhost:8080";

	//STATES
	const [topics, setTopics] = useState([]);
	const [volunteers, setVolunteers] = useState({});
	const [students, setStudents] = useState([]);
	const [forStudentMsg, setForStudentMsg] = useState("");
	const [meetLink, setMeetLink] = useState("");

	//POST REQUESTS
	const addTopic = async (props) => {
		await axios.post(`${host}/addTopic`, props);
	};
	const addVolunteer = async () => {
		await axios.post(`${host}/addVolunteer`, volunteerService);
	};
	const addStudent = async () => {
		await axios.post(`${host}/addStudent`, studentService);
	};
	const saveStudentPref = async (prefList) => {
		await axios.post(`${host}/saveStudentPref`, prefList);
	};
	const startSession = async (props) => {
		console.log(props);
		const json = await axios.post(`${host}/startSession`, props);
		return json;
	};

	//GET REQUESTS
	const getTopics = async () => {
		const json = await axios.get(`${host}/topics`);
		console.log(json.data);
		setTopics(Array.from(json.data));
	};
	const getVolunteers = async () => {
		const json = await axios.get(`${host}/volunteers`);
		setVolunteers(Array.from(json.data));
	};
	const getStudents = async () => {
		const json = await axios.get(`${host}/students`);
		setStudents(Array.from(json.data));
	};
	const getMeeting = async () => {
		const json = await axios.get(`${host}/meeting`);
		setMeetLink(json.data.joinUrl);
	};

	//States
	const setStudentMsg = (msg) => {
		setForStudentMsg(msg);
	};

	return (
		<AppContext.Provider
			value={{
				topics,
				volunteers,
				students,
				addTopic,
				addVolunteer,
				addStudent,
				saveStudentPref,
				startSession,
				getTopics,
				getVolunteers,
				getStudents,
				getMeeting,
				forStudentMsg,
				setStudentMsg,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
