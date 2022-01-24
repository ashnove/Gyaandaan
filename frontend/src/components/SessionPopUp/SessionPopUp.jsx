import { useState } from "react";
import { Button, ButtonToolbar, Modal } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import MeetInfo from "../SessionPopContent/MeetInfo";
import StudentInfo from "../SessionPopContent/StudentInfo";
import VolunInfo from "../SessionPopContent/VolunInfo";
import Session from "../../pages/Session/Session";


const SessionPopUp = ({ open, handleOpen, handleClose }) => {

	return (

		<div className="modal-container" >
			
			{/* <ButtonToolbar>
				<Button onClick={handleOpen}> Open</Button>
			</ButtonToolbar> */}

			<Modal backdrop="static" open={open} onClose={handleClose}>
				<Modal.Header>
					<Modal.Title>Session</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Session />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose} appearance="primary">
						Ok
					</Button>
					<Button onClick={handleClose} appearance="subtle">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>

	);
};

export default SessionPopUp;
