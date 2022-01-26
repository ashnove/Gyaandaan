import React from "react";
import DropDownData from "../../data/DropdownData";
import { TagPicker } from "rsuite";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MultiselectDropDown() {
	return (
		<div style={{ textAlign: "center" }}>
			<Form>
				<TagPicker
					data={DropDownData}
					groupBy="category"
					onSelect={(subject) => {
						console.log(subject);
					}}
					style={{ width: 300 }}
				/>
				<NewTopicForm />
				<Button
					ant="primary"
					pe="submit"
					formMethod="post"
					formAction="./saveTopic"
					style={buttonstyle}
				>
					Submit
				</Button>
			</Form>
		</div>
	);
}

const buttonstyle = {
	margin: "10px",
};

const formStyle = {
	margin: "auto",
	width: "300px",
};

const NewTopicForm = () => {
	return (
		<div>
			<br></br>
			<Form.Group className="mb-2" style={formStyle}>
				<Form.Label>Not present in above list? Add Below.</Form.Label>
				<Form.Control placeholder="Add extra topic names here" name="newTopic" />
			</Form.Group>
			<Form.Group className="mb-2" controlId="formBasicEmail" style={{ display: "none" }}>
				<Form.Control placeholder="Add extra topic names here" />
			</Form.Group>
			 
		</div>
	);
};
