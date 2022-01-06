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
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

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

	const [status, setStatus] = React.useState(' ');

	const handleStatusChange = (event) => {
		setStatus(event.target.value);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						GYAANDAAN
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
							<MenuItem key="profile" onClick={handleCloseNavMenu}>
								<Link to="/profile" style={{ textDecoration: "none" }}>
									Profile
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
						<Link to="/profile" style={{ textDecoration: "none" }}>
							<Button key="profile" sx={{ my: 2, color: "white", display: "block" }}>
								Profile
							</Button>
						</Link>
					</Box>
					<FormControl sx={{ minWidth: 120 }}>
						<InputLabel id="online-status-label">Status</InputLabel>
						<Select
							labelId="online-status-label"
							id="online-status"
							value={status}
							label="Status"
							onChange={handleStatusChange}
						>
							{status == "Offline" ? (
								<MenuItem value={"Online"}>Online</MenuItem>
							) : (
								<MenuItem value={"Offline"}>Offline</MenuItem>
							)}
						</Select>
					</FormControl>
					<Link to="/logout" style={{ textDecoration: "none" }}>
						<Button key="logout" sx={{ my: 2, color: "white", display: "block" }} underline="none">
							Logout
						</Button>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
