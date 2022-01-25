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

	function handleSubmit() {
		// userData me sahise data aarha hai, in the above format.
		// yahase axios use krke req bhejna padega
	}

	const onChangeProfileData = (e) => {
		setProfileData(...ProfileData, { [e.target.name]: e.target.value });
	};

	return (
		<Form fluid onChange={onChangeProfileData}>
			<Form.Group controlId="name">
				<Form.ControlLabel>First Name</Form.ControlLabel>
				<Form.Control name="fname" type="text" value={ProfileData.firstname} />
			</Form.Group>

			<Form.Group controlId="name">
				<Form.ControlLabel>Last Name</Form.ControlLabel>
				<Form.Control name="lname" type="text" value={ProfileData.lastname} />
			</Form.Group>

			<Form.Group controlId="email-1">
				<Form.ControlLabel>Email</Form.ControlLabel>
				<Form.Control name="email" type="email" value={ProfileData.email} />
			</Form.Group>

			<Form.Group>
				<ButtonToolbar>
					<Button appearance="primary" type="submit" onClick={handleSubmit}>
						Submit
					</Button>
					<Button appearance="default">Cancel</Button>
				</ButtonToolbar>
			</Form.Group>
		</Form>
	);
}
