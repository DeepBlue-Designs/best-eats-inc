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
      axios.put(`user/${userData._id}/healthMetrics`,
      { "healthMetrics": {
          "height": healthStat.height,
          "weight": healthStat.weight
        }
      })
      .then((res) => console.log('successful user update', setUserData(res.data)))
      .catch((err) => console.log('user update failed', err))
    }


  }

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (event.target.name === 'weight') {
      value = `${event.target.value}lbs`;
    }

    if (name === 'userName') {
      console.log(value)
      setUsername(value)
    } else if (name === 'email') {
      setEmail(value)
    } else if (name === 'address') {
      setAddress(value)
    } else if (name === 'weight') {
      setHealthStat({weight: value})
    } else if (name === 'height') {
      setHealthStat({heigh: value})
    }

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
              Health Metrics: <br />
              {userData.healthMetrics ? userData.healthMetrics.height : null}
              {userData.healthMetrics ? userData.healthMetrics.weight : null}
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
