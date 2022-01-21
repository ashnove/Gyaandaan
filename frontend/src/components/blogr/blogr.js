import React, {Component} from 'react';
import classes from './blogr.module.css'
import {Navbar, NavDropdown, Nav, NavLink, Button, Container} from "react-bootstrap";

import {SingleSelectDropdown} from "../Dropdown"

class Blogr extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.BackgroundImage} >
                    {/* <Container className={classes.Container} style={{justifyContent: "center"}}> */}
                    <div className={classes.Center}>
                        <div >
                            <h1 className={"display-4 text-white text-center " + classes.BigText}>Get help anytime!</h1>
                            <p className={"text-center text-white " + classes.SmallText}>Grow your audience and build your online brand</p>
                            {/* <div className={"d-inline " + classes.ButtonGroup}>
                                <Button className={classes.Button1}>Start for Free</Button>
                                <Button className={classes.Button2}>Learn More</Button>
                            </div> */}
                            <SingleSelectDropdown style={{justifyContent: "center"}} />
                        </div>
                    </div>
                    {/* </Container> */}
                </div>

            </React.Fragment>
        );
    }
}


export default Blogr;
