import { Navbar, Nav, Dropdown } from "rsuite";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar appearance="inverse" style={{backgroundColor: "#2c3e50"}}>
			<Navbar.Brand style={{ padding: "16px" }}>
				<Link
					to="/"
					style={{ fontWeight: "700", fontSize: "1rem", textDecoration: "none", color: "white" }}
				>
					Gyandaan
				</Link>
			</Navbar.Brand>
			<Nav>
				<Nav.Item>
					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
						Home
					</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
						Profile
					</Link>
				</Nav.Item>
			</Nav>
			<Nav pullRight>
				<Dropdown title="Status">
					<Dropdown.Item>Online</Dropdown.Item>
					<Dropdown.Item>Offline</Dropdown.Item>
				</Dropdown>
				<Nav.Item>
					<Link to="/logout" style={{ textDecoration: "none", color: "white" }}>
						Logout
					</Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
};
export default NavBar;
