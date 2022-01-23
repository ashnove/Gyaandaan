import React, {useState} from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import classes from './ProfileCard.module.css'
import NewTopicForm from '../NewTopicForm';
import MultiselectDropDown from '../MultiselectDropdown';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { Dropdown } from 'rsuite';


const ProfileCard = (props) => {

    const {
        username,
        firstname,
        email,
        lastname,
        contact,
        isAvailable,
        sessions,
        type,
    } = props.currentUser;

    let temp;
    if(isAvailable){
        temp = "Online";
    }
    else{
        temp = "Offline";
    }

    const [usertype, setUsertype] = useState(type);
    const [status, setStatus] = useState(temp);

    

    let toBedisplayed;
    let imageUrl;
    if(usertype === "volunteer"){
        imageUrl = "https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798"
        toBedisplayed = <div>
            Add the topics of your expertise here:
            <MultiselectDropDown />
            <NewTopicForm />
        </div>
    }
    else{
        imageUrl = "https://avatars.githubusercontent.com/u/8225666"
        toBedisplayed = <div>

        </div>
    }

    const chhotoDropdownstyle={
        position:"relative",
        marginBottom:"20px",
        margin:"auto",
        zIndex:"10",
    };

    function handleChange(){
        console.log(`My status has changed to${usertype} - ${status}`);

        // now go nuts with this info from here

    }

    const selectUsertypeDropdown=
    <Dropdown title={usertype} style={chhotoDropdownstyle} onChange={handleChange}>
        <Dropdown.Item onSelect={() => {setUsertype("student");}}>I am a student</Dropdown.Item>
        <Dropdown.Item onSelect={() => {setUsertype("volunteer");}}>I am a Volunteer</Dropdown.Item>
    </Dropdown>
    ;

    const selectStatusDropdown=
    <Dropdown title={status} style={chhotoDropdownstyle} onChange={handleChange}>
        <Dropdown.Item onSelect={() => {setStatus("Online");}}>Online</Dropdown.Item>
        <Dropdown.Item onSelect={() => {setStatus("Offline");}}>Offline</Dropdown.Item>
    </Dropdown>
    ;

    const clsname = (props.forWhat == "Profile" ? classes.Profile : classes.Editform );

    return (
            <div className={clsname}>
                <Card className={classes.ProfileCard + " mx-auto"} >
                    <Card.Img className={classes.ProfileCardBackgroundImage} variant="top" src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"/>
                    <Card.Img className={classes.ProfileCardImage} alt="User Image" src={imageUrl}/>
                    <Card.Body className={"text-center " + classes.ProfileCardBody} >
                        <Card.Text className={classes.TextBold + " mb-0"} style={{color: "#f5f6fa"}}>
                            {firstname + " " + lastname}
                        </Card.Text>
                        <Card.Text className={classes.TextMuted} style={{color: "#dcdde1"}}>
                            London
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className={classes.CardFooter}>
                        <Row xs="2" className="text-center mb-1">
                            <Col>
                                <Card.Text className={classes.TextBold + " " + classes.FooterP}>{usertype}</Card.Text>
                                <Card.Text className={classes.TextMuted}>Usertype</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className={classes.TextBold + " " + classes.FooterP}>{sessions}</Card.Text>
                                <Card.Text className={classes.TextMuted}>Sessions</Card.Text>
                            </Col>
                        </Row>
                        <br></br>

                        <div class="container">
                            <div class="row">
                            <div class="col-sm">
                            {selectUsertypeDropdown}
                            </div>
                            <div class="col-sm">
                            {selectStatusDropdown}
                            </div>
                            </div>
                        </div>
                        
                            

                        <br />
                        
                        {toBedisplayed}


                    </Card.Footer>

                </Card>
            </div>
          
    );
};

export default ProfileCard;





