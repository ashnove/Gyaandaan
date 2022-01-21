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
	const [volunteers, setVolunteers] = useState(null);
	const [students, setStudents] = useState(null);

	//POST REQUESTS
	const addTopic = async () => {
		await axios.post(`${host}/addTopic`, topicsService);
	};
	const addVolunteer = async () => {
		await axios.post(`${host}/addVolunteer`, volunteerService);
	};
	const addStudent = async () => {
		await axios.post(`${host}/addStudent`, studentService);
	};
	const saveStudentPref = async () => {
		await axios.post(`${host}/saveStudentPref`, studentPrefService);
	};
	const saveVolunteerPref = async () => {
		await axios.post(`${host}/saveVolunteerPref`, volunteerPrefService);
	};
	const startSession = async () => {
		await axios.post(`${host}/startSession`, sessionService);
	};

	//GET REQUESTS
	const getTopics = async () => {
		const json = await axios.get(`${host}/topics`);
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
				saveVolunteerPref,
				startSession,
				getTopics,
				getVolunteers,
				getStudents,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
