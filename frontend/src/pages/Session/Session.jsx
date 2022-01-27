import React, {useContext} from 'react';
import VolunInfo from "../../components/SessionPopContent/VolunInfo";
import MeetInfo from "../../components/SessionPopContent/MeetInfo";
import StudentInfo from "../../components/SessionPopContent/StudentInfo";
import AppContext from "../../context/AppContext";

const sessionStyle = {
	flexDirection: "column",
};

const Session = (props) => {
	const context = useContext(AppContext);
	const { meetLink , receivingUser} = context;
	const displayType = receivingUser.displayType;
	return (
		<div style={sessionStyle}>
			<StudentInfo name={props.name} displayType={displayType} volunteer={props.volunteer} sendMessage={props.sendMessage} />
			<VolunInfo volunteer={props.volunteer} sendMessage={props.sendMessage} />
			<MeetInfo displayType={displayType} />
		</div>
	);
};

export default Session;
