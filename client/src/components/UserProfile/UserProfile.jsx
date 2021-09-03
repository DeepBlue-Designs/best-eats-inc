import React, {useState} from 'react';
import UserInfo from './UserInfo.jsx';
import styled from 'styled-components';
import Lifestyle from './Lifestyle.jsx';
import ManageAccount from './ManageAccount.jsx';


const UserProfile = () => {
  const [manage, setManage] = useState(false);
  const [openedColor, setOpenedColor] = useState('#FFEF9C');

  const currentView = (event) => {
    const name = event.target.name;
    if (name === 'manage') {
      setManage(true);
      setOpenedColor('#FFF');
    } else {
      setManage(false);
      setOpenedColor('#FFEF9C');
    }
  }

  return (
    <>
      User Profile Page
      <UserInfo />
      <ButtonContainer>
        <Tabs onClick={currentView} name="lifestyle">Health and Lifestyle</Tabs>
        <Tabs onClick={currentView} name="manage">Manage Account</Tabs>
      </ButtonContainer>
      {manage ? <ManageAccount /> : <Lifestyle />}
    </>
  );
};

export default UserProfile;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3.5%;
  position: relative;
  justify-content: center;
`;

const Tabs = styled.button`
  width: 500px;
  height: 100px;
  background-color: #FFEF9C;
  border: 3px solid #FFF;
  cursor: pointer;
`;