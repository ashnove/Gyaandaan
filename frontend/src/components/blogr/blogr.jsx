import React, { useState, useEffect, useContext } from "react";
import { Button, Divider } from "rsuite";
import SingleDropDown from "../Dropdown/SingleDropDown";
import TrendingTable from "../Tables/TrendingTable";
import SessionPopUp from "../SessionPopUp/SessionPopUp";
import AppContext from "../../context/AppContext";


const loggedInUser = {
  id: "1",
  username: "ashutosh",
  name: "Ashutosh",
  type: "student"
};

const recievingUser = {

  id: "3",
  username: "aashish",
  name: "Aashish",
  type: "volunteer"
};

var stompClient = null;
function Blogr(){

  const context = useContext(AppContext);
  const { forStudentMsg,setStudentMsg } = context;

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
      sendMessage('REQUEST');
    }
    const handleClose = () => setOpen(false);

    const [currentUser, setCurrentUser] = useState(loggedInUser);
    const [activeContact, setActiveContact] = useState(recievingUser);
    
    const isVolunteer = loggedInUser.type == "volunteer" ? true : false;
    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
      const Stomp = require("stompjs");
      var SockJS = require("sockjs-client");
      SockJS = new SockJS("http://localhost:8080/ws");
      stompClient = Stomp.over(SockJS);
      stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
      console.log("connected");
      console.log(currentUser);
      // convert to "/queue/requests"
      stompClient.subscribe(
        "/user/" + currentUser.id + "/queue/requests",
        onMessageReceived
      );
    };

    const onError = (err) => {
      console.log(err);
    };

    const onMessageReceived = (msg) => {
      // Volunteer ke liye pop-up kholna hai
      const contentBody = JSON.parse(msg.body);
      const content = contentBody.content;
      if(content == 'REQUEST') setOpen(true);
      if(content == 'ACCEPTED') setStudentMsg('Accepted');
      if(content == 'REJECTED') setStudentMsg('Rejected');
      const notification = JSON.parse(msg.body);
    };

  const sendMessage = (msg) => {
    if (msg.trim() !== "") {
      const message = {
        senderId: currentUser.id,
        recipientId: recievingUser.id,
        senderName: currentUser.name,
        recipientName: activeContact.name,
        content: msg,
        timestamp: new Date(),
      };
      // convert to "gydn/request"
      stompClient.send("gydn/request", {}, JSON.stringify(message));
      console.log(msg);
    }
  };

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
          <SessionPopUp open={open} handleOpen={handleOpen} handleClose={handleClose} sendMessage={sendMessage} />
        </div>
        <div style={{ marginTop: "15vh"}}>
          <Divider className = {"text-white"}>Trending Topics</Divider>
          <TrendingTable/>
        </div>
      </React.Fragment>
    );
}

export default Blogr;