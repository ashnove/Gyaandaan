import React, { useState, useContext } from "react";
import { Panel, PanelGroup, Badge } from "rsuite";
import studentService from "../../data/studentService";
import AppContext from "../../context/AppContext";
import ProfileContext from "../../context/ProfileContext";

const StudentInfo = (props) => {
	const [studentName, setStudentName] = useState(props.name);

	const appContext = useContext(AppContext);
	const profileContext = useContext(ProfileContext);
	const { studentDetails } = appContext;
	const { ProfileData } = profileContext;
	const studentData = studentDetails;

	const displayingFor = props.volunteer.displayType;

	return (
		<div>
			<Panel header="Student Details" bordered>
				<p>Name: &nbsp; {props.name.toUpperCase()}</p>
				<div style={{ float: "right", position: 'absolute', right: 10 }}>
					<Badge color="green">Online</Badge>
				</div>
			</Panel>
		</div>
	);
};

export default StudentInfo;
