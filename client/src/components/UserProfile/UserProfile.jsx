import React, {useState} from 'react';
import UserInfo from './UserInfo.jsx';
import styled from 'styled-components';
import Lifestyle from './Lifestyle.jsx';
import ManageAccount from './ManageAccount.jsx';


const UserProfile = () => {
  const [manage, setManage] = useState(false);
  const [healthTabColor, sethealthTabColor] = useState('#FFEF9C');
  const [manageTabColor, setManageTabColor] = useState('#FFF');

  const currentView = (event) => {
    const name = event.target.name;
    if (name === 'manage') {
      setManage(true);
      sethealthTabColor('#FFF');
      setManageTabColor('#FFEF9C');
    } else {
      setManage(false);
      sethealthTabColor('#FFEF9C');
      setManageTabColor('#FFF');
    }
  }

  return (
    <>
      <UserInfo />
      <ButtonContainer>
        <Tabs onClick={currentView} style={{backgroundColor: healthTabColor}} name="lifestyle">Health and Lifestyle</Tabs>
        <Tabs onClick={currentView} style={{backgroundColor: manageTabColor}}name="manage">Manage Account</Tabs>
      </ButtonContainer>
      {manage ? <ManageAccount /> : <Lifestyle />}
    </>
  );
};

export default UserProfile;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1.5%;
  position: relative;
  justify-content: center;
`;

const Tabs = styled.button`
  width: 500px;
  height: 100px;
  font-size: 20px;
  font-weight: 300;
  background-color: #FFF;
  border: 3px solid #FFF;
  cursor: pointer;
`;