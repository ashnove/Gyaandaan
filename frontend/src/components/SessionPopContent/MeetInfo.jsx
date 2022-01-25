import React from "react";
import { useContext } from "react";
import { Panel, PanelGroup } from "rsuite";
import AppContext from "../../context/AppContext";

const MeetInfo = (props) => {
	const context = useContext(AppContext);
	const { meetLink } = context;

	const displayingFor = props.displayType;

	const displayForStudent = (
		<Panel header="Meeting Information" bordered>
			<a href={meetLink}> Join ZOOM Meeting</a>
		</Panel>
	);

	const displayForVolunteer = (
		<Panel header="Meeting Information" bordered>
			<a href={meetLink}> Join ZOOM Meeting</a>
		</Panel>
	);

	return <div>{displayingFor == "student" ? displayForStudent : displayForVolunteer}</div>;
};

export default MeetInfo;
