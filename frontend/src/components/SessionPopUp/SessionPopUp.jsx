import { useState } from "react";
import { Button, ButtonToolbar, Modal } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import MeetInfo from "../SessionPopContent/MeetInfo";
import StudentInfo from "../SessionPopContent/StudentInfo";
import VolunInfo from "../SessionPopContent/VolunInfo";
import Session from "../../pages/Session/Session";

const SessionPopUp = (props) => {
	return (
		<div className="modal-container">
			{/* <ButtonToolbar>
				<Button onClick={handleOpen}> Open</Button>
			</ButtonToolbar> */}

			<Modal backdrop="static" open={props.open} onClose={props.handleClose}>
				<Modal.Header>
					<Modal.Title>Session</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Session volunteer={props.volunteer} sendMessage={props.sendMessage} />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.handleClose} appearance="primary">
						Ok
					</Button>
					<Button onClick={props.handleClose} appearance="subtle">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SessionPopUp;
