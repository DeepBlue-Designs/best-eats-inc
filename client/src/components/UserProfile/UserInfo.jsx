import React, {useState, useContext} from 'react';
import Context from '../Context.jsx'
import axios from 'axios';
import Modal from 'react-modal';
import styled from 'styled-components';
import Avatar, { genConfig } from 'react-nice-avatar';
import { FaEdit } from 'react-icons/fa';

const config = genConfig("AvatarConfig?");
Modal.setAppElement("#app");

const UserInfo = () => {
  const { userData, setUserData } = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [currEmail, setEmail] = useState(null);
  const [currAddress, setAddress] = useState(null);
  const [healthStat, setHealthStat] = useState(null);

  //TODO: update user info routes
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);

    if (username) {
      console.log(username)
      axios.put(`user/${userData._id}/username/edit`, {"userName": username})
        .then((res) => console.log('successful user update', setUserData(res.data)))
        .catch((err) => console.log('user update failed', err))
    }
    if (currEmail) {
      axios.put(`user/${userData._id}/email/edit`, {"email": currEmail})
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }
    if (currAddress) {
      axios.put(`user/${userData._id}/address/edit`, {"address": currAddress})
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }
    if (healthStat) {
      console.log('axios', healthStat)
      axios.put(`user/${userData._id}/healthMetrics/edit`,
      { "healthMetrics": {
        "height": healthStat.height ? healthStat.height : userData.healthMetrics.height,
        "weight": healthStat.weight ? healthStat.weight : userData.healthMetrics.weight
        }
      }
      )
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }


  }

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === 'userName') {
      setUsername(value)
    } else if (name === 'email') {
      setEmail(value)
    } else if (name === 'address') {
      setAddress(value)
    } else if (name === 'weight') {
      setHealthStat({...healthStat, weight: value})
    } else if (name === 'height') {
      setHealthStat({...healthStat, height: value})
    }

  }

  return (
    <UserContainer>
      <MyProfile>My Profile</MyProfile>
      <UserAv>
        <Avatar style={{ width: "9rem", height: "9rem" }} {...config} />
      </UserAv>
      <InfoView>
        <InfoContainer>
          <Info>
            UserName:
            <br />
            Email:
            <br />
            Address:
            <br />
            Height:
            <br />
            Weight:
          </Info>
          <Info>
            {userData.userName}
            <br />
            {userData.email}
            <br />
            {userData.address}
            <br />
            {userData.healthMetrics ? userData.healthMetrics.height : 0}
            <br />
            {userData.healthMetrics ? userData.healthMetrics.weight : 0}lbs
          </Info>
        </InfoContainer>
          <div>
            <button onClick={() => setIsOpen(true)}><FaEdit /></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="userName" placeholder="User Name" onChange={handleChange}  />
                  <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                  <input type="text" name="address" placeholder="Shipping address" onChange={handleChange} />
                  <label>
                    Health Metrics:
                      <input type="number" name="weight" placeholder="Weight" onChange={handleChange} />
                      <input type="text" name="height" placeholder="5'10" onChange={handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
          </div>
      </InfoView>
    </UserContainer>
  );
};

export default UserInfo;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 380px;
  border: 2px solid green;
`;

const MyProfile = styled.div`
  align-self: flex-start;
`;

const UserAv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* position: relative; */
  border-radius: 20%;
  width: 25%;
  margin: 2%;
`;
const InfoView = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  flex-direction: row;
  height: 190px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2%;
  /* border: 1px solid black; */
`;

const Info = styled.p`
  margin-top: 4%;
  margin-left: 30px;
  /* border: 1px solid yellow; */
  font-family: Tahoma;
  font-weight: 400;
  font-size: 16px;
  width: 9rem;
  line-height: 1.5;
`;
