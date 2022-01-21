import React, { useState } from "react";
import { Button, Divider } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";
import TrendingTable from "../Tables/TrendingTable";
import SessionPopUp from "../SessionPopUp/SessionPopUp";

function Blogr(){
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
      <React.Fragment>
        <div style={{ marginTop: "15vh", textAlign: "center" }}>
          <SingleDropDown />
          <Button
            appearance="primary"
            style={{ width: "6rem", margin: "0.5rem", backgroundColor: "#c0392b" }}
            onClick={handleOpen}
          >
            Get Mentor
          </Button>
          <SessionPopUp open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
        <div style={{ marginTop: "15vh"}}>
          <Divider className = {"text-white"}>Trending Topics</Divider>
          <TrendingTable/>
        </div>
      </React.Fragment>
    );
}

export default Blogr;