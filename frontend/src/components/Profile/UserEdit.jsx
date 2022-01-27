import React, { useState, useContext } from "react";
import Form from "rsuite/Form";
import Button from "rsuite/Button";
import ButtonToolbar from "rsuite/ButtonToolbar";
import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./ProfileCard/ProfileCard.module.css";
import ProfileContext from "../../context/ProfileContext";

const EditFormCard = (props) => {
	const clsname = classes.Editform;
	return (
		<div className={clsname}>
			<Card className={classes.ProfileCard + " mx-auto"}>
				<Card.Body
					className={classes.CardBodyEdit}
					style={{ width: "auto", backgroundColor: "#ecf0f1" }}
				>
					<h4>Edit User Information</h4>
					<br />
					<Editform currentUser={props.currentUser} />
				</Card.Body>
			</Card>
		</div>
	);
};

export default EditFormCard;

function Editform(props) {
	const profileContext = useContext(ProfileContext);
	const { ProfileData, setProfileData } = profileContext;

	// console.log(ProfileData);

	// { username: "", firstname: "", email: "", lastname: "", isAvailable: false, sessions: 0, type: 1 }

	function handleSubmit() {
		// userData me sahise data aarha hai, in the above format.
		// yahase axios use krke req bhejna padega
	}

	const onChangeProfileData = (e) => {
		setProfileData( {...ProfileData, [e.target.name]: e.target.value });
	};

	return (
		<Form fluid >
			<Form.Group controlId="firstname" onChange={onChangeProfileData}>
				<Form.ControlLabel>First Name</Form.ControlLabel>
				<Form.Control name="firstname" type="text" value={ProfileData.firstname}  />
			</Form.Group>

			<Form.Group controlId="lastname" onChange={onChangeProfileData}>
				<Form.ControlLabel>Last Name</Form.ControlLabel>
				<Form.Control name="lastname" type="text" value={ProfileData.lastname} />
			</Form.Group>

			<Form.Group controlId="email" onChange={onChangeProfileData}>
				<Form.ControlLabel>Email</Form.ControlLabel>
				<Form.Control name="email" type="email" value={ProfileData.email} />
			</Form.Group>

			<Form.Group>
				<ButtonToolbar>
					<Button appearance="primary" type="submit" onClick={handleSubmit}>
						Submit
					</Button>
				</ButtonToolbar>
			</Form.Group>
		</Form>
	);
}
