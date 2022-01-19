import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const buttonStyles={
  marginTop:"10px",
  width:"auto",
  height:"50px"
}

export default function SubmitButton(props) {

    function HandleClick() {

      if(props.expertise){

        // console.log(props.expertise);

        // expertise hai mtlb, ye button volunteer ne dbaya hai.

        const temp_username = "code_or";
  
        const jsonData = {
          volunteerUsername : temp_username,
          topics : []
        }
  
        props.expertise.topics.forEach(element => {
          jsonData.topics.push({topicName:element});
        });
  
        // Send data to the backend via POST
        fetch("./saveVolunteerPref", {  // Enter your IP address here
        
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        
        });
      }
      else if(props.topic.length>0){

        // expertise nhi hai mtlb, ye button student ne press kiya, mentor chahie

        const temp_username = "code_or";
        console.log(props.topic.length);
  
        const jsonData = {
          studentUsername : temp_username,
          topicName : props.topic[0]
        }

        // Send data to the backend via POST
        fetch("./startSession", {  // Enter your IP address here
        
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        
        });

      }
      

    }

  return (
    <Button variant="contained" color="success" style={buttonStyles} onClick={HandleClick} >
        {props.buttonName}
    </Button>

  );
}
