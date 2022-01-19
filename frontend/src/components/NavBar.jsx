import React from "react";
import { Nav, Navbar, Container, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
	return (
		<Row>
			<Navbar fluid collapseOnSelect expand="lg" style={{ backgroundColor: "#FEF7F5" }}>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Gyandaan</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/home">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
						</Nav>
						<Nav>
							<LinkContainer to="/profile">
								<Nav.Link>Profile</Nav.Link>
							</LinkContainer>
							<NavDropdown title="Status" id="collasible-nav-dropdown">
								<LinkContainer to="/changeStatus">
									<NavDropdown.Item>Online</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/changeStatus">
									<NavDropdown.Item>Offline</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/logout">
								<Nav.Link>Logout</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Row>
	);
};

export default NavBar;
