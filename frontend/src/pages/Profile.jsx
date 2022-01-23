import React from 'react';
import { Container, Header, Content, Footer, Sidebar, Panel } from 'rsuite';

import ProfileCard from '../components/Profile/ProfileCard/ProfileCard';
import UserEdit from "../components/Profile/UserEdit"

import userData from "../data/userData"

const temp={
  width:"auto",
  margin:"auto",
  backgroundColor:"red",

}


const Profile = () => {
  return (

    <Container >
        <Footer className="text-white">
          <Panel style={{textAlign: "center"}}>
              You have completed {userData.sessions} Sessions. 
          </Panel>
        </Footer>
          
          <Panel style={temp} >
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <ProfileCard forWhat="Profile" currentUser={userData} />
              </div>
              <div class="col-sm">
                <UserEdit  currentUser={userData} />
              </div>
            </div>
          </div>

          </Panel>

    </Container>
      
    );
}

export default Profile;
