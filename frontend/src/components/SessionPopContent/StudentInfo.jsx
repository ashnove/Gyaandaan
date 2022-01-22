import React, {useState, useContext} from 'react';
import { Panel, PanelGroup, Badge } from 'rsuite';
import studentService from "../../data/studentService"
import AppContext from '../../context/AppContext';


const StudentInfo = (props) => {
  const [studentName, setStudentName] = useState(props.name); 

  // const context = useContext(AppContext);
  // const { students } = context;
  const studentData = studentService;

  const displayingFor = props.displayType;

  // const studentData = students;
  console.log(studentData);

  return (
    <div>
        <Panel header="Student Details" bordered>
        <p>{studentData.studentFirstname + ' ' + studentData.studentLastname}</p> 
          <div style={{float: "right"}}>
            <Badge color="green">Online</Badge>
          </div>
        </Panel>
    </div>
  );
  
};

export default StudentInfo;
