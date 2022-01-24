import React from 'react';
import { Panel, PanelGroup } from 'rsuite';

const MeetInfo = (props) => {

  const displayingFor = props.displayType;

  const displayForStudent = 
  <Panel header="Meeting Information" bordered> 
    <a href="#"> Your meet link</a> 
    This will only be shown to student
  </Panel>;
  
  const displayForVolunteer = 
  <Panel header="Meeting Information" bordered> 
    <a href="#"> Your meet link</a> 
    This will only be shown to volunteer
  </Panel>;

  return (
    <div>
      { displayingFor == 'student' 
      ? displayForStudent
      : displayForVolunteer}
    </div>
  );
  
};

export default MeetInfo;


