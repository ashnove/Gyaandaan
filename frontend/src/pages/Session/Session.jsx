import React from 'react';
import VolunInfo from "../../components/SessionPopContent/VolunInfo"
import MeetInfo from "../../components/SessionPopContent/MeetInfo"
import StudentInfo from "../../components/SessionPopContent/StudentInfo"

const sessionStyle={
    flexDirection: "column"
};

const Session = () => {

  const displayType = "volunteer";
  return (
    <div style={sessionStyle}>
      
      <StudentInfo
          name = "Ashutosh"
          displayType = {displayType}
      />
      <VolunInfo 
          name = "Onkar"
          displayType = {displayType}
      />
      <MeetInfo 
          displayType = {displayType}
      />

    </div>
  );
  
};

export default Session;



