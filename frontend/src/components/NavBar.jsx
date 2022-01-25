import { Navbar, Nav, Dropdown } from "rsuite";
import { Link, useNavigate } from "react-router-dom";
import userData from "../data/userData";
import { useLocation } from "react-router-dom";

const NavBar = () => {
	const history = useNavigate();

	let status, color;

	if (userData.isAvailable) {
		status = "Online";
		color = "green";
	} else {
		status = "Offline";
		color = "red";
	}

	const Logout = () => {
		localStorage.clear();
		console.log("logout");
		history("/login");
	};

	const isAuthenticated = localStorage.getItem("isAuthenticated");

	const location = useLocation();

	return (
		<Navbar appearance="inverse" style={{ backgroundColor: "#2c3e50" }}>
			<Navbar.Brand style={{ padding: "16px" }}>
				<Link
					to="/"
					style={{ fontWeight: "700", fontSize: "1rem", textDecoration: "none", color: "white" }}
				>
					Gyandaan
				</Link>
			</Navbar.Brand>
			<Nav style={{ display: isAuthenticated ? "block" : "none" }}>
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
			<Nav pullRight style={{ display: isAuthenticated ? "block" : "none" }}>
				<Nav.Item onClick={Logout}>Logout</Nav.Item>
			</Nav>
			<Nav pullRight style={{ display: isAuthenticated ? "none" : "block" }}>
				<Nav.Item>
					<>
						{location.pathname === "/login" ? (
							<Link to="/register" style={{ textDecoration: "none", color: "white" }}>
								Signup
							</Link>
						) : (
							<Link to="/login" style={{ textDecoration: "none", color: "white" }}>
								Login
							</Link>
						)}
					</>
				</Nav.Item>
			</Nav>
		</Navbar>
	);
};
export default NavBar;
