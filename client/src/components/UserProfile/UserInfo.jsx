import React, {useState, useEffect, useContext} from 'react';
import Context from '../Context.jsx'
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import Avatar, { genConfig } from 'react-nice-avatar';
import { FaEdit } from 'react-icons/fa';

const config = genConfig("AvatarConfig?");
Modal.setAppElement("#app");

const UserInfo = () => {
  // const [user, setUser] = useState(userData);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { userData, setUserData } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);

    axios.put(`user/${userData.id}/update`, userData)
      .then((res) => console.log('successful user update'))
      .catch((err) => console.log('user update failed', err))
  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <UserContainer>
      <InfoView>
        <UserAv>
          <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
        </UserAv>
        <InfoContainer>
          <div>
            <Info>
              Username: {userData.userName} <br /><br />
              Email: {userData.email} <br /><br />
              Shipping Address: {userData.address} <br /><br />
              Health Metrics: {userData.healthMetrics ? userData.healthMetrics : null}
            </Info>
          </div>
          <div>
            <button onClick={() => setIsOpen(true)}><FaEdit /></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="userName" placeholder="User Name" onChange={handleChange}  />
                  <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                  <input type="text" name="address" placeholder="Shipping address" onChange={handleChange} />
                  <input type="text" name="healthMetrics" placeholder="Health Metrics" onChange={handleChange} value={userData.healthMetrics ? userData.healthMetrics : ''}/>
                  <input type="submit" value="Submit" />
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
          </div>
        </InfoContainer>
      </InfoView>
    </UserContainer>
  );
};

export default UserInfo;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 2px solid green;
`;

const UserAv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 20%;
  width: 25%;
  margin: 2%;
`;
const InfoView = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: row;
  height: 250px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2%;
  border: 1px solid black;
`;

const Info = styled.p`
  margin-top: 4%;
  border: 1px solid yellow;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 16px;
`;
