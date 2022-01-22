import React from 'react';
import ProfileCard from '../components/Profile/ProfileCard/ProfileCard';
import UserEdit from "../components/Profile/UserEdit"

const temp={
  display: "flex"
}
const Profile = () => {
  return (
    <div style={temp}>
      <ProfileCard forWhat="Profile" displayType="student" />
      <UserEdit />
    </div>
    );
}

export default Profile;
