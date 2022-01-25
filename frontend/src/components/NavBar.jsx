import { Navbar, Nav, Dropdown } from "rsuite";
import { Link } from "react-router-dom";
import userData from "../data/userData"

const NavBar = () => {

	let status, color;

	if(userData.isAvailable)
	{	status="Online";
		color="green";
	}
	else{
		status="Offline";
		color="red";
	}

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
					<Link to="/home" style={{ textDecoration: "none", color: "white" }}>
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
