import { useState } from "react";
import { Button, ButtonToolbar, Modal } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import UserCard from "../Profile/UserCard";

const SessionPopUp = ({ open, handleOpen, handleClose }) => {
	return (
		<div className="modal-container">
			{/* <ButtonToolbar>
				<Button onClick={handleOpen}> Open</Button>
			</ButtonToolbar> */}

			<Modal open={open} onClose={handleClose}>
				<Modal.Header>
					<Modal.Title>Session</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <PlaceholderParagraph /> */}

					<UserCard />
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
