import React, {useState,useContext} from 'react';
import { Panel, PanelGroup, Badge, Button, Container, Header, Content, Footer, Sidebar } from 'rsuite';
import AppContext from "../../context/AppContext"
import volunteerService from '../../data/volunteerService';

const VolunInfo = (props) => {
  
  // props.name should contain name of current volunteer

  const [volunteerName, setvolunteerName] = useState(props.name);
  
  // const context = useContext(AppContext);
  // const { volunteers } = context;
  const data=volunteerService;

  const displayingFor = props.displayType;

  const isVolun= displayingFor=="student" ? false : true ;
  const panelHeader = displayingFor=="student" ? "Assigned Mentor" : ""

  let toBedisplayed;

{/* <Container>
      <Header>Header</Header>
      <Container>
        <Content>Content</Content>
        <Sidebar>Sidebar</Sidebar>
      </Container>
      <Footer>Footer</Footer>
    </Container> */}
  
  if(isVolun){
      toBedisplayed=
      <Container>
          <Container>
            <Content> {data.volunteerFirstname + ' ' + data.volunteerLastname}</Content>
            <Sidebar>
                <div style={{float: "right", display: "flex", columnGap: "2px"}}>
                  <Button color="green" appearance="primary">Accept</Button>
                  <Button color="red" appearance="primary">Reject</Button>
                </div>
            </Sidebar>
          </Container>
          <Footer>
               
          </Footer>
      </Container> ;
  }
  else{
    toBedisplayed=<div>
        <div style={{display: "flex"}}>
              <div> {data.volunteerFirstname + ' ' + data.volunteerLastname} </div>
              <div style={{float: "right"}}>
                <Badge color="red">Waiting for response</Badge>
              </div>

              <br />
              This will only be shown to student
            </div>
            <p> {data.volunteerUsername} </p>
    </div>;
  }

  return (
    <div>
        <Panel header="Assigned Mentor" bordered>
          {toBedisplayed}
        </Panel>
    </div>
  );
  
};

export default VolunInfo;
