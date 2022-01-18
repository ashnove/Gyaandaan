import React, {useState} from 'react';
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

import { Link } from "react-router-dom";


function NavBar(props){

    const [user, setUser] = useState("Ashutosh");

    return (
        <header style={{ display: "flex", alignItems: "center" }}>
            <SportsMartialArtsIcon/>
            <h1 >Gyandaan</h1>
            <Link to="/home" style={{ textDecoration: "none", marginLeft: "10px", marginTop: "5px"}}>
                <Button key="home" sx={{color: "back", display: "block" }}>
                    Home
                </Button>
			</Link>
            <div style={{ textDecoration: "none", display: "flex", position: "absolute", right: "10px"}}>
                <Link to="/profile" >
                    <Button key="profile" sx={{color: "back", display: "block" }} style={{alignItems: "center", display: "flex"}}>
                        <AccountCircleIcon />
                        <p>{user}</p>
                    </Button>
                </Link>
                <Link to="/logout">
                    <Button key="logout" sx={{color: "back", display: "block" }}>
                        <LogoutIcon />
                    </Button>
                </Link>
            </div>
            
        </header>
    );
}
export default NavBar;