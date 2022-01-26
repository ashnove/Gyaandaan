import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const buttonstyle = {
	margin: "10px",
};

const formStyle = {
	margin: "auto",
	width: "300px",
};

const NewTopicForm = () => {
	const [newTopic, setNewTopic] = useState("");
	function handleChange(event) {
		console.log(event.target);
	}
	function handleSubmit(event) {
		console.log("Submit ho gya");
		event.preventDefault();
	}

	return (
		<div>
			<br></br>
			<Form>
				<Form.Group className="mb-2" style={formStyle}>
					<Form.Label>Not present in above list? Add Below.</Form.Label>
					<Form.Control
						placeholder="Add extra topic names here"
						name="newTopic"
						onChange={handleChange}
					/>
				</Form.Group>

				{/* type="submit" formMethod='post' formAction='./saveTopic' onSubmit={handleSubmit} */}

				<Button variant="primary" style={buttonstyle}>
					Submit
				</Button>
			</Form>
			 
		</div>
	);
};

export default NewTopicForm;
