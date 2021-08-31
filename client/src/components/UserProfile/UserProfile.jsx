import React, {useState} from 'react';
import UserInfo from './UserInfo.jsx';
import styled from 'styled-components';
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
    <>
      User Profile Page
      <UserInfo />
      <ButtonContainer>
        <button onClick={currentView} name="lifestyle">Health and Lifestyle</button>
        <button onClick={currentView} name="manage">Manage Account</button>
      </ButtonContainer>
      {manage ? <ManageAccount /> : null}
    </>
  );
};

export default UserProfile;

const ButtonContainer = styled.div`
  margin: 2%;
  position: relative;
  justify-content: center;
  border: 1px solid pink;`