import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import classes from './ProfileCard.module.css'
import {MultipleSelectChip} from "../Dropdown"
import NewTopicForm from '../NewTopicForm';


const ProfileCard = () => {
    return (
        <div  className={classes.Background }>
            <div className='profilediv'>
            <Container className="py-5" >
                <Card className={classes.ProfileCard + " mx-auto"} >
                    <Card.Img className={classes.ProfileCardBackgroundImage} alt="Background Image" variant="top" src="" />
                    <Card.Img className={classes.ProfileCardImage} alt="User Image" src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798"/>
                    <Card.Body className={"text-center " + classes.ProfileCardBody}>
                        <Card.Text className={classes.TextBold + " mb-0"}>
                            Victor Crest <span className={classes.TextMuted + " pl-1"}>26</span>
                        </Card.Text>
                        <Card.Text className={classes.TextMuted}>
                            London
                        </Card.Text>

                        <Card.Text className={classes.TextMuted}>
                            Expertise:
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className={classes.CardFooter}>
                        <Row xs="2" className="text-center mb-1">
                            <Col>
                                <Card.Text className={classes.TextBold + " " + classes.FooterP}>Volunteer</Card.Text>
                                <Card.Text className={classes.TextMuted}>UserType</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className={classes.TextBold + " " + classes.FooterP}>50+</Card.Text>
                                <Card.Text className={classes.TextMuted}>Sessions</Card.Text>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <MultipleSelectChip />
                <NewTopicForm />

            </Container>
            </div>

            
        </div>
    );
};

export default ProfileCard;
