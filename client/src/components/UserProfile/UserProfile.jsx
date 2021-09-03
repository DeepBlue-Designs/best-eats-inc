import React, {useState} from 'react';
import UserInfo from './UserInfo.jsx';
import styled from 'styled-components';
import Lifestyle from './Lifestyle.jsx';
import ManageAccount from './ManageAccount.jsx';


const UserProfile = () => {
  const [manage, setManage] = useState(false);

  const currentView = (event) => {
    const name = event.target.name;
    if (name === 'manage') {
      setManage(true);
    } else {
      setManage(false);
    }
  }

  return (
    <ProfileContainer>
      <UserInfo />
      <ButtonContainer>
        <button onClick={currentView} name="lifestyle">Health and Lifestyle</button>
        <button onClick={currentView} name="manage">Manage Account</button>
      </ButtonContainer>
      {manage ? <ManageAccount /> : <Lifestyle />}
    </ProfileContainer>
  );
};

export default UserProfile;

const ButtonContainer = styled.div`
  display: flex;
  margin: 2%;
  position: relative;
  justify-content: space-evenly;
  `

const ProfileContainer = styled.div`
  background-color: #BAFFAE;
  `