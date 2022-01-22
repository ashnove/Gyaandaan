
import React, {useState} from "react"
import Form from 'rsuite/Form';
import Button from 'rsuite/Button';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {Card, Container, Row, Col} from "react-bootstrap";
import classes from './ProfileCard/ProfileCard.module.css'


const EditFormCard = (props) => {

    const clsname =classes.Editform;
    return (
            <div className={clsname} style={{float: "left"}}>
                <Card className={classes.ProfileCard + " mx-auto"}  >
                    <Card.Body className={classes.CardBodyEdit} > <Editform /> </Card.Body>

                </Card>
            </div>
          
    );
};

export default EditFormCard;

function Editform (){

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    org: "",
    edu: ""
  });

  function handleSubmit() {

    // userData me sahise data aarha hai, in the above format.
    // yahase axios use krke req bhejna padega

  }

  function clearstate(){
    setUserData({
      fname: "",
      lname: "",
      email: "",
      org: "",
      edu: ""
    });
  }


  return (
    <Form fluid onChange={setUserData} >
      <Form.Group controlId="name">
        <Form.ControlLabel>First Name</Form.ControlLabel>
        <Form.Control name="fname" type="text"  value={userData.fname} />
      </Form.Group>

      <Form.Group controlId="name" >
        <Form.ControlLabel>Last Name</Form.ControlLabel>
        <Form.Control name="lname" type="text" value={userData.lname} />
      </Form.Group>

      <Form.Group controlId="email-1">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email" type="email" value={userData.email} />
      </Form.Group>

      <Form.Group controlId="org">
        <Form.ControlLabel>Organization</Form.ControlLabel>
        <Form.Control name="org" type="text" value={userData.org}/>
      </Form.Group>

      <Form.Group controlId="edu">
        <Form.ControlLabel>Highest Educational Qualification</Form.ControlLabel>
        <Form.Control name="edu" type="text" value={userData.edu} />
      </Form.Group>

      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" type="submit" onClick={handleSubmit} >
            Submit
          </Button>
          <Button appearance="default" onClick={clearstate} >Cancel</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
}
