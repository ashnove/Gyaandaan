import React from "react";
import { useContext } from "react";
import { Panel, PanelGroup } from "rsuite";
import AppContext from "../../context/AppContext";

const MeetInfo = (props) => {
	const context = useContext(AppContext);
	const { meetLink } = context;

	const displayingFor = props.displayType;

	const displayForStudent = (
		meetLink === ""   
		?
		( 	
			<Panel header="Meeting Information" bordered>
				<a> Your zoom meet will be generated once the Mentor Accepts your Request</a>
			</Panel>
		)
		: 
		(meetLink === "NULL" ?
			<Panel header="Meeting Information" bordered>
				<span>No meeting link created..</span>
			</Panel>
		:
			<Panel header="Meeting Information" bordered>
				<a href={meetLink} target="_blank">You meetlink is generated. Click here to join the session...</a>
			</Panel>

		)
	);

	const displayForVolunteer = (
		meetLink === ""   
		?
		( 	
			<Panel header="Meeting Information" bordered>
				<a> Your zoom meet will be generated once the you Accept the Request</a>
			</Panel>
		)
		: 
		(meetLink === "NULL" ?
			<Panel header="Meeting Information" bordered>
				<span>No meeting link created..</span>
			</Panel>
		:
			<Panel header="Meeting Information" bordered>
				<a href={meetLink} target="_blank">You meetlink is generated. Click here to join the session...</a>
			</Panel>

		)
	);

	return <div>{displayingFor == "student" ? displayForStudent : displayForVolunteer}</div>;
};

export default MeetInfo;
