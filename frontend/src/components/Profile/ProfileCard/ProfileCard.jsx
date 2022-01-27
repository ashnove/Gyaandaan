import React, { useState, useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./ProfileCard.module.css";
import NewTopicForm from "../NewTopicForm";
import MultiselectDropDown from "../MultiselectDropdown";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import { Dropdown } from "rsuite";
import ProfileContext from "../../../context/ProfileContext";
import AppContext from "../../../context/AppContext";

const ProfileCard = (props) => {
	const profileContext = useContext(ProfileContext);
	const appContext = useContext(AppContext);
	const { receivingUser } = appContext;
	const { ProfileData, setAvailability } = profileContext;
	const { username, firstname, email, lastname, isAvailable, sessions, type } = ProfileData;
	let temp;


	const [usertype, setUsertype] = useState(type==1 ? "Student" : "Volunteer" );

	if(type != 1){
		
	}
	
	
	let toBedisplayed;
	let imageUrl;
	if (usertype === "Volunteer") {
		imageUrl =
			"https://inceptum-stor.icons8.com/O73LU2odqyKc/ph_user-circle-fill%202.jpg";
		toBedisplayed = (
			<div>
				Add the topics of your expertise here:
				<MultiselectDropDown />
			</div>
		);
	} else {
		imageUrl = "https://inceptum-stor.icons8.com/O73LU2odqyKc/ph_user-circle-fill%202.jpg";
		toBedisplayed = <div></div>;
	}

	const chhotoDropdownstyle = {
		position: "relative",
		marginBottom: "20px",
		margin: "auto",
		zIndex: "10",
	};

	function handleChange() {
		// console.log(`My status has changed to${usertype} - ${status}`);
		// now go nuts with this info from here
	}

	const selectUsertypeDropdown = (
		<Dropdown
			title={type}
			style={chhotoDropdownstyle}
			onChange={handleChange}
		>
			<Dropdown.Item
				onSelect={() => {
					setUsertype(1);
				}}
			>
				I am a student
			</Dropdown.Item>
			<Dropdown.Item
				onSelect={() => {
					setUsertype(2);
				}}
			>
				I am a Volunteer
			</Dropdown.Item>
		</Dropdown>
	);
	const selectStatusDropdown = (
		<Dropdown
			title={isAvailable ? "Online" : "Offline"}
			style={chhotoDropdownstyle}
			onChange={handleChange}
		>
			<Dropdown.Item
				onSelect={() => {
					setAvailability(true);
				}}
			>
				Online
			</Dropdown.Item>
			<Dropdown.Item
				onSelect={() => {
					setAvailability(false);
				}}
			>
				Offline
			</Dropdown.Item>
		</Dropdown>
	);

	return (
		<div className={classes.Profile}>
			<Card className={classes.ProfileCard + " mx-auto"}>
				<Card.Img
					className={classes.ProfileCardBackgroundImage}
					variant="top"
					src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
				/>
				<Card.Img className={classes.ProfileCardImage} alt="User Image" src={imageUrl} />
				<Card.Body className={"text-center " + classes.ProfileCardBody}>
					<Card.Text className={classes.TextBold + " mb-0"} style={{ color: "#f5f6fa" }}>
						{firstname + " " + lastname}
					</Card.Text>
					<Card.Text className={classes.TextMuted} style={{ color: "#dcdde1" }}>
						{username}
					</Card.Text>
				</Card.Body>
				<Card.Footer className={classes.CardFooter}>
					<Row xs="2" className="text-center mb-1">
						<Col>
							<Card.Text className={classes.TextBold + " " + classes.FooterP}>

								{type == 1 ? "Student" : "Volunteer"}
								
							</Card.Text>
							<Card.Text className={classes.TextMuted}>Usertype</Card.Text>
						</Col>
						<Col>
							<Card.Text className={classes.TextBold + " " + classes.FooterP}>{sessions}</Card.Text>
							<Card.Text className={classes.TextMuted}>Sessions</Card.Text>
						</Col>
					</Row>
					<br></br>

					{/* <div className="container">
						<div className="row">
							<div className="col">{selectUsertypeDropdown}</div>
							<div className="col">{selectStatusDropdown}</div>
						</div>
					</div> */}
					<br />
					{toBedisplayed}
				</Card.Footer>
			</Card>
		</div>
	);
};

export default ProfileCard;
