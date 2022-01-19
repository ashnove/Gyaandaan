import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [user, setUser] = React.useState("Ashutosh");

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const [availability, setAvailability] = React.useState("Offline");

	const handleStatusChange = (event) => {
		setAvailability(event.target.value);
	};

	const options = [
		'Online', 'Offline'
	];
	const lastSetStatus = options[1]; // 
	return (
		<AppBar style={{display: "flex", textAlign: "center", backgroundColor: "#2c3e50"}} >
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Gyandaan
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
						<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem key="home" onClick={handleCloseNavMenu}>
								<Link to="/home" style={{ textDecoration: "none" }}>
									Home
								</Link>
							</MenuItem>
							<MenuItem key="profile" onClick={handleCloseNavMenu} >
								<Link to="/profile" style={{ textDecoration: "none",alignItems: "center", display: "flex" }}>
									<AccountCircleIcon />
									<p>{user}</p>
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link to="/home" style={{ textDecoration: "none" }}>
							<Button key="home" sx={{ my: 2, color: "white", display: "block" }} underline="none">
								Home
							</Button>
						</Link>
						<Link to="/profile" style={{ textDecoration: "none", display: "flex", position: "absolute", right: "80px"}}>
							<Button key="profile" sx={{ my: 2, color: "white", display: "flex" }}>
								<AccountCircleIcon style={{padding: "2px"}}/>
								<p>{user}</p>
							</Button>
						</Link>
					</Box>
					
					<Link to="/logout" style={{ textDecoration: "none" }}>
						<Button key="logout" sx={{ my: 2, color: "white", display: "block" }} underline="none">
							<LogoutIcon />
						</Button>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
