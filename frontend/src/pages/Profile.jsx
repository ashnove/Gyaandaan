import React from 'react';
import { Container, Header, Content, Footer, Sidebar, Panel } from 'rsuite';

import ProfileCard from '../components/Profile/ProfileCard/ProfileCard';
import UserEdit from "../components/Profile/UserEdit"

const temp={
  display: "flex"
}

const Profile = () => {
  return (

    <Container>
        <Footer className="text-white">
          <Panel style={{textAlign: "center"}}>
              You have completed 50+ Sessions
          </Panel>
        </Footer>
          <Content style={{display: "flex"}} >
            <ProfileCard forWhat="Profile" displayType="student" />
            <UserEdit  />
          </Content>
          <Footer>Footer</Footer>
    </Container>
      
    );
}

export default Profile;
