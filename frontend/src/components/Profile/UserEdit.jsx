
import React from "react"
import ProfileCard from "../Profile/ProfileCard/ProfileCard";
import MultiselectDropDown from "./MultiselectDropdown";


import Form from 'rsuite/Form';
import Button from 'rsuite/Button';
import ButtonToolbar from 'rsuite/ButtonToolbar';


import {Card, Container, Row, Col} from "react-bootstrap";
import classes from './ProfileCard/ProfileCard.module.css'



const EditFormCard = (props) => {

    const clsname = (props.forWhat == "Profile" ? classes.Profile : classes.Editform );

    return (
            <div className={clsname}>
                <Card className={classes.ProfileCard + " mx-auto"} >
                    <Card.Body className={classes.CardBodyEdit} > <Editform /> </Card.Body>

                </Card>
            </div>
          
    );
};

export default EditFormCard;



function Editform (){
  return(
  <Form fluid>
    <Form.Group controlId="name">
      <Form.ControlLabel>First Name</Form.ControlLabel>
      <Form.Control name="text" type="text" />
      
    </Form.Group>
    
    <Form.Group controlId="name">
      <Form.ControlLabel>Last Name</Form.ControlLabel>
      <Form.Control name="text" type="text" />
    </Form.Group>
    
    <Form.Group controlId="email-1">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText>Required</Form.HelpText>
    </Form.Group>
    
    <Form.Group controlId="org">
      <Form.ControlLabel>Organization</Form.ControlLabel>
      <Form.Control name="text" type="text" />
    </Form.Group>

    <Form.Group controlId="edu">
      <Form.ControlLabel>Highest Educational Qualification</Form.ControlLabel>
      <Form.Control name="text" type="text" />
    </Form.Group>

    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
);
}



