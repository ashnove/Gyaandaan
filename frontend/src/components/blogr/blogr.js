import React, { Component } from "react";
import classes from "./blogr.module.css";
import { Navbar, NavDropdown, Nav, NavLink, Container } from "react-bootstrap";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";

class Blogr extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.BackgroundImage}>
					<Container className={classes.Container} style={{ justifyContent: "center" }}>
						<div className={classes.Center}>
							<div style={{ flexDirection: "column" }}>
								<h1 className={"display-4 text-white text-center " + classes.BigText}>
									Get help anytime!
								</h1>
								<p className={"text-center text-white " + classes.SmallText}>
									Grow your audience and build your online brand
								</p>
								<div className={"d-inline " + classes.ButtonGroup}>
									<Button className={classes.Button1}>Start for Free</Button>
									<Button className={classes.Button2}>Learn More</Button>
								</div>
								<div style={{ width: "fit-content", testAlign: "center" }}>
									<SingleDropDown />
									<Button
										color="blue"
										appearance="primary"
										style={{ width: "6rem", marginLeft: "0.5rem" }}
									>
										Submit
									</Button>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default Blogr;
